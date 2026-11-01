import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  REGIONS,
  TRIP_DAYS,
  HOTEL_BOOKINGS,
  OPEN_DECISIONS,
} from "./data/tripData";
import type { OpenDecisionItem } from "./types/trip";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { HotelsLedgerSection } from "./components/HotelsLedgerSection";
import { DomesticFlightsSection } from "./components/DomesticFlightsSection";
import { CalendarSection } from "./components/CalendarSection";
import { RouteMapSection } from "./components/RouteMapSection";
import {
  OpenDecisionsSection,
  ShabbatAnchorsSection,
} from "./components/OpenDecisionsAndShabbat";
import {
  AlertTriangle,
  BedDouble,
  Calendar as CalendarIcon,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Edit3,
  ExternalLink,
  Flame,
  Map as MapIcon,
  MapPin,
  Plane,
  Search,
  Save,
  Smartphone,
} from "lucide-react";

const STORAGE_CHECKED = "thailand_2026_ts_checked_v1";
const STORAGE_CUSTOM_TASKS = "thailand_2026_ts_tasks_v1";
const STORAGE_DAY_NOTES = "thailand_2026_ts_notes_v1";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const TAB_ITEMS = [
  { id: "itinerary", label: "לו״ז יומי", shortLabel: "לו״ז", icon: Clock },
  { id: "hotels", label: "מלונות וביטולים", shortLabel: "מלונות", icon: BedDouble },
  { id: "flights", label: "טיסות פנים", shortLabel: "טיסות", icon: Plane },
  { id: "calendar", label: "לוח שנה", shortLabel: "לוח שנה", icon: CalendarIcon },
  { id: "decisions", label: "מה נשאר לסגור", shortLabel: "לסגור", icon: CheckSquare },
  { id: "shabbat", label: "3 שבתות וחב״ד", shortLabel: "שבתות", icon: Flame },
  { id: "map", label: "מפת המסלול", shortLabel: "מפה", icon: MapIcon },
] as const;

export function App() {
  const [activeTab, setActiveTab] = useState<string>("itinerary");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [editingNoteDay, setEditingNoteDay] = useState<number | null>(null);
  const [noteDraft, setNoteDraft] = useState<string>("");

  // PWA Install State (captures early global event from index.html just in case)
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(() => {
      return (
        ((window as unknown as { __deferredPwaPrompt?: BeforeInstallPromptEvent })
          .__deferredPwaPrompt as BeforeInstallPromptEvent) || null
      );
    });
  const [pwaDialogOpen, setPwaDialogOpen] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);

  // Touch Swipe Navigation State (Zmanim fluid swipe logic)
  const touchStartRef = useRef<{
    x: number;
    y: number;
    time: number;
    isHorizontal?: boolean;
    ignore: boolean;
  } | null>(null);

  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_CHECKED) || "{}");
    } catch {
      return {};
    }
  });

  const [customTasks, setCustomTasks] = useState<OpenDecisionItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_CUSTOM_TASKS) || "[]");
    } catch {
      return [];
    }
  });

  const [dayNotes, setDayNotes] = useState<Record<number, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_DAY_NOTES) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_CHECKED, JSON.stringify(checkedMap));
  }, [checkedMap]);

  useEffect(() => {
    localStorage.setItem(STORAGE_CUSTOM_TASKS, JSON.stringify(customTasks));
  }, [customTasks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_DAY_NOTES, JSON.stringify(dayNotes));
  }, [dayNotes]);

  useEffect(() => {
    const checkStandalone =
      window.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(checkStandalone);

    const syncGlobalPrompt = () => {
      const globalPrompt = (
        window as unknown as { __deferredPwaPrompt?: BeforeInstallPromptEvent }
      ).__deferredPwaPrompt;
      if (globalPrompt) {
        setDeferredPrompt(globalPrompt);
      }
    };

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      (
        window as unknown as { __deferredPwaPrompt?: BeforeInstallPromptEvent }
      ).__deferredPwaPrompt = e as BeforeInstallPromptEvent;
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
      (
        window as unknown as { __deferredPwaPrompt?: BeforeInstallPromptEvent | null }
      ).__deferredPwaPrompt = null;
      setPwaDialogOpen(false);
    };

    syncGlobalPrompt();
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("pwa-prompt-ready", syncGlobalPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("pwa-prompt-ready", syncGlobalPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handlePwaButtonClick = async () => {
    const promptEvent =
      deferredPrompt ||
      (window as unknown as { __deferredPwaPrompt?: BeforeInstallPromptEvent })
        .__deferredPwaPrompt;

    if (promptEvent) {
      try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice.outcome === "accepted") {
          setIsStandalone(true);
        }
        setDeferredPrompt(null);
        (
          window as unknown as { __deferredPwaPrompt?: BeforeInstallPromptEvent | null }
        ).__deferredPwaPrompt = null;
        return;
      } catch {
        // Fallback if browser blocked prompt
      }
    }
    setPwaDialogOpen(true);
  };

  // Mobile Touch Swipe Handlers (RTL Tab Order - Zmanim velocity + distance detection)
  const currentTabIndex = TAB_ITEMS.findIndex((t) => t.id === activeTab);

  const goToTabByIndex = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= TAB_ITEMS.length) return;
    setActiveTab(TAB_ITEMS[nextIndex].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) {
      touchStartRef.current = null;
      return;
    }
    const target = e.target as HTMLElement | null;
    const shouldIgnore = Boolean(
      target?.closest(
        ".no-scrollbar, .leaflet-container, input, textarea, select, button, a, [role='dialog']"
      )
    );
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
      isHorizontal: undefined,
      ignore: shouldIgnore,
    };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current || touchStartRef.current.ignore) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;

    if (touchStartRef.current.isHorizontal === undefined) {
      if (Math.abs(diffX) > 7 || Math.abs(diffY) > 7) {
        touchStartRef.current.isHorizontal =
          Math.abs(diffX) > Math.abs(diffY) * 1.15;
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current || touchStartRef.current.ignore) {
      touchStartRef.current = null;
      return;
    }
    if (e.changedTouches.length !== 1) return;

    const diffX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const diffY = e.changedTouches[0].clientY - touchStartRef.current.y;
    const elapsedTime = Date.now() - touchStartRef.current.time;
    const velocity = Math.abs(diffX) / Math.max(elapsedTime, 1);
    const wasHorizontal =
      touchStartRef.current.isHorizontal ??
      Math.abs(diffX) > Math.abs(diffY) * 1.25;
    touchStartRef.current = null;

    const isSubstantialDrag = Math.abs(diffX) > 50;
    const isQuickFlick = Math.abs(diffX) > 25 && velocity > 0.3;

    if (wasHorizontal && (isSubstantialDrag || isQuickFlick)) {
      if (diffX > 0 && currentTabIndex < TAB_ITEMS.length - 1) {
        goToTabByIndex(currentTabIndex + 1);
      } else if (diffX < 0 && currentTabIndex > 0) {
        goToTabByIndex(currentTabIndex - 1);
      }
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleTaskChecked = (id: string) => {
    setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addCustomTask = (task: OpenDecisionItem) => {
    setCustomTasks((prev) => [task, ...prev]);
  };

  const deleteCustomTask = (id: string) => {
    setCustomTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const jumpToDay = (dayNum: number) => {
    setActiveTab("itinerary");
    setRegionFilter("all");
    setSearchQuery("");
    setTimeout(() => {
      const el = document.getElementById(`day-card-${dayNum}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 120);
  };

  const startEditNote = (dayNum: number) => {
    setEditingNoteDay(dayNum);
    setNoteDraft(dayNotes[dayNum] || "");
  };

  const saveDayNote = (dayNum: number) => {
    const trimmed = noteDraft.trim();
    setDayNotes((prev) => {
      const copy = { ...prev };
      if (trimmed) {
        copy[dayNum] = trimmed;
      } else {
        delete copy[dayNum];
      }
      return copy;
    });
    setEditingNoteDay(null);
  };

  const getRegionMeta = (regionId: string) =>
    REGIONS.find((r) => r.id === regionId) || REGIONS[0];

  const getHotelById = (hotelId: string) =>
    HOTEL_BOOKINGS.find((h) => h.id === hotelId);

  const filteredDays = TRIP_DAYS.filter((day) => {
    if (regionFilter === "shabbat" && !day.isShabbat) return false;
    if (
      regionFilter !== "all" &&
      regionFilter !== "shabbat" &&
      day.region !== regionFilter
    ) {
      return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const hay = `${day.dayNum} ${day.date} ${day.dayOfWeek} ${day.title} ${
        day.subtitle
      } ${day.hotelName} ${day.transitSummary} ${day.activities
        .map((a) => a.text)
        .join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  });

  const openDecisionsRemaining = [...OPEN_DECISIONS, ...customTasks].filter(
    (t) => !checkedMap[t.id]
  ).length;

  return (
    <div
      dir="rtl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen bg-[#FAF7F2] text-[#142321] pb-24 sm:pb-16"
    >
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 h-1 bg-[#B45309] origin-right z-50"
      />

      {/* Deep Canopy Emerald Command Header */}
      <header className="bg-[#0B4F4A] text-[#FAF7F2] border-b border-[#083B37] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-6 space-y-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#FAF7F2]">
                  תאילנד 2026 • גלעד והדר
                </h1>
                {!isStandalone && (
                  <Button
                    type="button"
                    size="sm"
                    variant="gold"
                    onClick={handlePwaButtonClick}
                    className="gap-1.5 shadow-sm"
                  >
                    <Download className="h-4 w-4" />
                    <span>התקן אפליקציה בלחיצה אחת</span>
                  </Button>
                )}
              </div>
              <p className="text-sm sm:text-base text-[#D1FAE5] max-w-2xl">
                22 בנובמבר עד 14 בדצמבר 2026 • בנגקוק ← קוקונט איילנד ← פאטונג (שבת 1) ← ריילי ביץ' ← צ'יאנג מאי (שבת 2) ← הלופ הצפוני (פאי, מאה הונג סון, מאה סריאנג) ← בנגקוק (שבת 3)
              </p>
            </div>

            {/* Key Ledger Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
              <div className="rounded-xl bg-[#083B37] border border-[#0F6E66] px-3.5 py-2 text-center">
                <div className="font-display text-lg sm:text-xl font-bold tabular-nums text-white">
                  23 ימים
                </div>
                <div className="text-[11px] text-[#A7F3D0]">10 מלונות במסלול</div>
              </div>
              <div className="rounded-xl bg-[#083B37] border border-[#0F6E66] px-3.5 py-2 text-center">
                <div className="font-display text-lg sm:text-xl font-bold tabular-nums text-[#FDE68A]">
                  כ־₪8,142
                </div>
                <div className="text-[11px] text-[#A7F3D0]">סה"כ מלונות לזוג</div>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("flights")}
                className="rounded-xl bg-[#083B37] hover:bg-[#062E2B] border border-[#F59E0B] px-3.5 py-2 text-center transition-colors cursor-pointer"
              >
                <div className="font-display text-lg sm:text-xl font-bold tabular-nums text-[#FCD34D]">
                  3 טיסות
                </div>
                <div className="text-[11px] text-[#FDE68A] underline underline-offset-2">
                  טרם נסגרו (~₪2,033)
                </div>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("decisions")}
                className="rounded-xl bg-[#7F1D1D] hover:bg-[#991B1B] border border-[#F87171] px-3.5 py-2 text-center transition-colors cursor-pointer"
              >
                <div className="font-display text-lg sm:text-xl font-bold tabular-nums text-white">
                  {openDecisionsRemaining} פתוחים
                </div>
                <div className="text-[11px] text-[#FECACA] underline underline-offset-2">
                  כולל 2 דדלייני שבת!
                </div>
              </button>
            </div>
          </div>

          {/* Urgent Action Bar */}
          <div className="rounded-xl bg-[#083B37]/95 border border-[#0F6E66] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start sm:items-center gap-2.5 text-[#FAF7F2]">
              <AlertTriangle className="h-5 w-5 text-[#FBBF24] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <span className="font-bold text-[#FDE68A]">
                  פתוח לטיפול מיידי:
                </span>{" "}
                1. סגירת <strong>3 טיסות הפנים</strong> • 2.{" "}
                <strong>אימות סוג המיטה בריילי</strong> לפני שבת 13.11 (ביטול מסתיים בשבת 14.11 ב-18:59!) • 3.{" "}
                <strong>ביטול גיבוי Empress</strong> לפני שבת 04.12 (ביטול מסתיים בשבת 05.12 ב-18:59!).
              </div>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <Button
                size="sm"
                variant="gold"
                onClick={() => setActiveTab("flights")}
              >
                השוואת טיסות פנים
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setActiveTab("hotels")}
              >
                טבלת המלונות והביטולים
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 space-y-5">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Desktop / Tablet Sticky Tabs Bar */}
          <div className="sticky top-2 z-30 bg-[#FAF7F2]/95 backdrop-blur-xs py-1.5 space-y-2">
            <TabsList className="w-full flex overflow-x-auto no-scrollbar justify-start sm:justify-between gap-1">
              <TabsTrigger value="itinerary" className="flex-1 gap-1.5">
                <Clock className="h-4 w-4" />
                <span>לו"ז יומי (23 ימים)</span>
              </TabsTrigger>
              <TabsTrigger value="hotels" className="flex-1 gap-1.5">
                <BedDouble className="h-4 w-4" />
                <span>מלונות וביטולים (10+1)</span>
              </TabsTrigger>
              <TabsTrigger value="flights" className="flex-1 gap-1.5">
                <Plane className="h-4 w-4" />
                <span>טיסות פנים וכבודה (3)</span>
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex-1 gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                <span>לוח שנה מלא</span>
              </TabsTrigger>
              <TabsTrigger value="decisions" className="flex-1 gap-1.5">
                <CheckSquare className="h-4 w-4" />
                <span>מה נשאר לסגור ({openDecisionsRemaining})</span>
              </TabsTrigger>
              <TabsTrigger value="shabbat" className="flex-1 gap-1.5">
                <Flame className="h-4 w-4" />
                <span>3 שבתות וחב"ד</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="flex-1 gap-1.5">
                <MapIcon className="h-4 w-4" />
                <span>מפת המסלול</span>
              </TabsTrigger>
            </TabsList>

            {/* Mobile Swipe Helper Bar */}
            <div className="sm:hidden flex items-center justify-between bg-[#F3EDE2] border border-[#E2D9C8] rounded-xl px-2.5 py-1.5 text-xs text-[#4A5D5A]">
              <button
                type="button"
                disabled={currentTabIndex <= 0}
                onClick={() => goToTabByIndex(currentTabIndex - 1)}
                className="flex items-center gap-1 font-bold text-[#0B4F4A] disabled:opacity-35 px-1.5 py-1 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
                <span>
                  {currentTabIndex > 0
                    ? TAB_ITEMS[currentTabIndex - 1].shortLabel
                    : "התחלה"}
                </span>
              </button>

              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] font-semibold text-[#142321]">
                  החליקו ימינה/שמאלה למעבר מסך
                </span>
                <div className="flex items-center gap-1">
                  {TAB_ITEMS.map((t, idx) => (
                    <span
                      key={t.id}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentTabIndex
                          ? "w-4 bg-[#0B4F4A]"
                          : "w-1.5 bg-[#C5B9A5]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                disabled={currentTabIndex >= TAB_ITEMS.length - 1}
                onClick={() => goToTabByIndex(currentTabIndex + 1)}
                className="flex items-center gap-1 font-bold text-[#0B4F4A] disabled:opacity-35 px-1.5 py-1 cursor-pointer"
              >
                <span>
                  {currentTabIndex < TAB_ITEMS.length - 1
                    ? TAB_ITEMS[currentTabIndex + 1].shortLabel
                    : "סוף"}
                </span>
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* TAB 1: DAILY ITINERARY */}
          <TabsContent value="itinerary" className="space-y-5">
            {/* Search & Region Filter Chips */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="relative">
                  <Search className="h-4 w-4 text-[#6B7E7A] absolute right-3.5 top-3.5" />
                  <Input
                    id="trip-search-input"
                    name="tripSearch"
                    aria-label="חיפוש מהיר במסלול"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="חיפוש מהיר לפי יום, תאריך, מלון (ברסלו, ריילי, פאי, מאה הונג סון...) או אטרקציה"
                    className="pr-10"
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  <Button
                    size="sm"
                    variant={regionFilter === "all" ? "default" : "outline"}
                    onClick={() => setRegionFilter("all")}
                  >
                    כל הימים (23)
                  </Button>
                  <Button
                    size="sm"
                    variant={regionFilter === "phuket" ? "default" : "outline"}
                    onClick={() => setRegionFilter("phuket")}
                  >
                    קוקונט איילנד ופוקט (23–29.11)
                  </Button>
                  <Button
                    size="sm"
                    variant={regionFilter === "krabi" ? "default" : "outline"}
                    onClick={() => setRegionFilter("krabi")}
                  >
                    ריילי וקראבי (29.11–03.12)
                  </Button>
                  <Button
                    size="sm"
                    variant={regionFilter === "chiang_mai" ? "default" : "outline"}
                    onClick={() => setRegionFilter("chiang_mai")}
                  >
                    צ'יאנג מאי (03–06.12 + 10.12)
                  </Button>
                  <Button
                    size="sm"
                    variant={regionFilter === "loop" ? "default" : "outline"}
                    onClick={() => setRegionFilter("loop")}
                  >
                    הלופ הצפוני: פאי • מאה הונג סון • מאה סריאנג (06–10.12)
                  </Button>
                  <Button
                    size="sm"
                    variant={regionFilter === "bangkok" ? "default" : "outline"}
                    onClick={() => setRegionFilter("bangkok")}
                  >
                    בנגקוק (22.11 + 11–14.12)
                  </Button>
                  <Button
                    size="sm"
                    variant={regionFilter === "shabbat" ? "gold" : "outline"}
                    onClick={() => setRegionFilter("shabbat")}
                  >
                    <Flame className="h-3.5 w-3.5" />
                    שבתות בלבד (3)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Days List with Scroll Reveal */}
            {filteredDays.length === 0 ? (
              <Card>
                <CardContent className="p-10 text-center space-y-2">
                  <div className="font-display font-bold text-lg text-[#142321]">
                    לא נמצאו ימים התואמים לחיפוש "{searchQuery}"
                  </div>
                  <p className="text-sm text-[#4A5D5A]">
                    נסו לאפס את מסנן האזור או לחפש מילה אחרת.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setRegionFilter("all");
                      setSearchQuery("");
                    }}
                  >
                    הצג את כל 23 ימי הטיול
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredDays.map((day, idx) => {
                    const reg = getRegionMeta(day.region);
                    const bookedHotel = getHotelById(day.hotelId);
                    const savedNote = dayNotes[day.dayNum] || "";

                    return (
                      <motion.div
                        key={day.dayNum}
                        id={`day-card-${day.dayNum}`}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.26, delay: Math.min(idx * 0.02, 0.15) }}
                      >
                        <Card
                          className={`overflow-hidden transition-all ${
                            day.isShabbat
                              ? "border-2 border-[#F59E0B] bg-[#FFFBEB]/40"
                              : "hover:border-[#B8AD9B]"
                          }`}
                        >
                          {/* Top Ribbon */}
                          <div
                            className="px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b"
                            style={{
                              backgroundColor: day.isShabbat ? "#FEF3C7" : reg.bgSoft,
                              borderColor: day.isShabbat ? "#FDE68A" : reg.borderSoft,
                            }}
                          >
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className="px-2.5 py-0.5 rounded-md text-xs font-bold text-white tabular-nums"
                                style={{
                                  backgroundColor: day.isShabbat
                                    ? "#B45309"
                                    : reg.color,
                                }}
                              >
                                יום {day.dayNum} • {reg.name}
                              </span>
                              {day.isShabbat && (
                                <Badge variant="shabbat">
                                  <Flame className="h-3 w-3 ml-1" />
                                  {day.shabbatName}
                                </Badge>
                              )}
                              {day.candleLighting && (
                                <Badge variant="outline" className="bg-white/90">
                                  הדלקת נרות: {day.candleLighting}
                                </Badge>
                              )}
                              {day.havdalah && (
                                <Badge variant="outline" className="bg-white/90">
                                  צאת שבת: {day.havdalah}
                                </Badge>
                              )}
                            </div>
                            <span className="font-display font-bold text-sm text-[#142321] tabular-nums">
                              {day.dayOfWeek}, {day.date}
                            </span>
                          </div>

                          <CardContent className="p-5 space-y-4">
                            <div>
                              <h3 className="font-display text-xl font-bold text-[#142321]">
                                {day.title}
                              </h3>
                              <p className="text-sm text-[#4A5D5A]">{day.subtitle}</p>
                            </div>

                            {/* Transit Strip */}
                            <div className="rounded-lg bg-[#F5F0E6] border border-[#E2D9C8] px-3.5 py-2 text-xs font-semibold text-[#1D3532] flex items-center gap-2">
                              <Clock className="h-4 w-4 text-[#0B4F4A] shrink-0" />
                              <span>מעברים ונסיעות ביום זה: {day.transitSummary}</span>
                            </div>

                            {/* Activities List */}
                            <ul className="space-y-2.5">
                              {day.activities.map((act, i) => (
                                <li
                                  key={i}
                                  className={`rounded-xl p-3 text-sm flex flex-col sm:flex-row sm:items-start justify-between gap-2 border ${
                                    act.highlight
                                      ? "bg-[#ECFDF5]/60 border-[#A7F3D0]"
                                      : "bg-[#FAF7F2]/60 border-[#EFE9DC]"
                                  }`}
                                >
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      {act.time && (
                                        <span className="inline-block rounded bg-[#0B4F4A] text-[#FAF7F2] px-2 py-0.5 text-xs font-bold tabular-nums">
                                          {act.time}
                                        </span>
                                      )}
                                      {act.costDisplay && (
                                        <Badge variant="secondary" className="tabular-nums">
                                          עלות: {act.costDisplay}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-[#142321] leading-relaxed">
                                      {act.text}
                                    </p>
                                  </div>

                                  {act.mapUrl && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="shrink-0 self-start"
                                      asChild
                                    >
                                      <a
                                        href={act.mapUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <MapPin className="h-3.5 w-3.5" />
                                        מפה
                                        <ExternalLink className="h-3 w-3" />
                                      </a>
                                    </Button>
                                  )}
                                </li>
                              ))}
                            </ul>

                            {/* Booked Hotel Footer Box */}
                            <div className="rounded-xl border border-[#E6DFD3] bg-[#FAF7F2] p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                              <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-sm font-bold text-[#0B4F4A]">
                                  <BedDouble className="h-4 w-4 shrink-0" />
                                  <span>לינה מוזמנת: {day.hotelName}</span>
                                </div>
                                {bookedHotel && (
                                  <div className="text-[#4A5D5A]">
                                    הוזמן ע"י <strong>{bookedHotel.bookedBy}</strong> דרך{" "}
                                    <strong>{bookedHotel.platform}</strong> • סה"כ לשהות:{" "}
                                    <strong>{bookedHotel.ilsPriceDisplay}</strong> ({bookedHotel.originalPriceDisplay}) •{" "}
                                    {bookedHotel.mealPlan}
                                  </div>
                                )}
                                {day.backupHotelNote && (
                                  <div className="text-[#92400E] font-semibold">
                                    • {day.backupHotelNote}
                                  </div>
                                )}
                              </div>

                              {bookedHotel && (
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" asChild>
                                    <a
                                      href={bookedHotel.mapUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <MapPin className="h-3.5 w-3.5" />
                                      מיקום המלון
                                    </a>
                                  </Button>
                                </div>
                              )}
                            </div>

                            {day.importantNote && (
                              <div className="rounded-xl border border-[#F59E0B] bg-[#FFFBEB] p-3 text-xs font-semibold text-[#92400E] flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 shrink-0 text-[#D97706]" />
                                <span>{day.importantNote}</span>
                              </div>
                            )}

                            {/* Personal Day Note Editor */}
                            <div className="pt-1 border-t border-[#EFE9DC]">
                              {editingNoteDay === day.dayNum ? (
                                <div className="space-y-2 pt-2">
                                  <Input
                                    id={`day-note-input-${day.dayNum}`}
                                    name={`dayNote_${day.dayNum}`}
                                    value={noteDraft}
                                    onChange={(e) => setNoteDraft(e.target.value)}
                                    placeholder="כתבו הערה אישית ליום זה (מספר הזמנה, נהג, שעת איסוף...)"
                                  />
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      onClick={() => saveDayNote(day.dayNum)}
                                    >
                                      <Save className="h-3.5 w-3.5" />
                                      שמור הערה
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => setEditingNoteDay(null)}
                                    >
                                      ביטול
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center justify-between gap-2">
                                  {savedNote ? (
                                    <div className="text-xs bg-[#FEF3C7]/60 border border-[#FDE68A] px-3 py-2 rounded-lg text-[#78350F] flex-1">
                                      <strong>הערה אישית:</strong> {savedNote}
                                    </div>
                                  ) : (
                                    <span className="text-xs text-[#6B7E7A]">
                                      ניתן להוסיף הערה אישית ליום זה
                                    </span>
                                  )}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => startEditNote(day.dayNum)}
                                  >
                                    <Edit3 className="h-3.5 w-3.5" />
                                    {savedNote ? "ערוך הערה" : "הוסף הערה"}
                                  </Button>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </TabsContent>

          {/* TAB 2: HOTELS LEDGER */}
          <TabsContent value="hotels">
            <HotelsLedgerSection />
          </TabsContent>

          {/* TAB 3: DOMESTIC FLIGHTS */}
          <TabsContent value="flights">
            <DomesticFlightsSection />
          </TabsContent>

          {/* TAB 4: CALENDAR */}
          <TabsContent value="calendar">
            <CalendarSection onSelectDay={jumpToDay} />
          </TabsContent>

          {/* TAB 5: OPEN DECISIONS */}
          <TabsContent value="decisions">
            <OpenDecisionsSection
              checkedMap={checkedMap}
              onToggleChecked={toggleTaskChecked}
              customTasks={customTasks}
              onAddCustomTask={addCustomTask}
              onDeleteCustomTask={deleteCustomTask}
            />
          </TabsContent>

          {/* TAB 6: SHABBAT ANCHORS */}
          <TabsContent value="shabbat">
            <ShabbatAnchorsSection />
          </TabsContent>

          {/* TAB 7: INTERACTIVE MAP */}
          <TabsContent value="map">
            <RouteMapSection />
          </TabsContent>
        </Tabs>
      </main>

      {/* Android 1-Click PWA Install Modal (Zmanim style, Android only) */}
      <Dialog open={pwaDialogOpen} onOpenChange={setPwaDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Smartphone className="h-5 w-5 text-[#0B4F4A]" />
              <span>התקנת האפליקציה לאנדרואיד</span>
            </DialogTitle>
            <DialogDescription>
              מסלול תאילנד 2026 של גלעד והדר מותקן ישירות למסך הבית באנדרואיד ועובד כאפליקציה מלאה גם ללא אינטרנט:
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-1 text-sm">
            <div className="p-3.5 bg-[#F5F0E6] border border-[#E2D9C8] rounded-2xl flex items-center gap-3">
              <img
                src="/icon.svg"
                alt="תאילנד 2026"
                className="w-12 h-12 rounded-2xl shadow-xs border border-[#E2D9C8] shrink-0"
              />
              <div>
                <span className="text-sm font-bold text-[#142321] block leading-tight">
                  תאילנד 2026 • גלעד והדר
                </span>
                <span className="text-xs text-[#4A5D5A] block mt-0.5 leading-tight">
                  לו״ז יומי, מלונות, טיסות פנים ושבתות (עובד אופליין)
                </span>
              </div>
            </div>

            {deferredPrompt ? (
              <Button
                type="button"
                variant="default"
                className="w-full py-3 gap-2 text-sm font-bold"
                onClick={async () => {
                  await deferredPrompt.prompt();
                  const choice = await deferredPrompt.userChoice;
                  if (choice.outcome === "accepted") {
                    setIsStandalone(true);
                    setDeferredPrompt(null);
                    setPwaDialogOpen(false);
                  }
                }}
              >
                <Download className="h-4 w-4" />
                <span>התקן עכשיו למסך הבית בלחיצה אחת</span>
              </Button>
            ) : isStandalone ? (
              <div className="p-3 bg-[#ECFDF5] border border-[#10B981] text-[#065F46] text-xs font-bold rounded-xl text-center">
                ✓ האפליקציה כבר מותקנת על מכשירך
              </div>
            ) : (
              <div className="rounded-xl bg-[#FAF7F2] border border-[#E2D9C8] p-3.5 space-y-1.5 text-xs text-[#142321]">
                <div className="font-bold text-[#0B4F4A]">
                  האפליקציה כבר מותקנת במכשיר או שהקישור נפתח מתוך וואטסאפ:
                </div>
                <p className="text-[#4A5D5A] leading-relaxed">
                  אם פתחתם את הקישור מתוך הדפדפן הפנימי של וואטסאפ, פתחו אותו בדפדפן <strong>Chrome</strong> באנדרואיד ולחצו על כפתור <strong>"התקן אפליקציה בלחיצה אחת"</strong>.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile Bottom Dock Navigation */}
      <nav
        aria-label="ניווט תחתון לנייד"
        className="sm:hidden fixed bottom-2.5 right-2.5 left-2.5 z-40 bg-[#142321]/95 text-[#FAF7F2] backdrop-blur-md rounded-2xl border border-[#2C423F] px-1.5 py-1.5 shadow-xl flex items-center justify-between gap-0.5"
      >
        {TAB_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[10px] font-bold transition-all min-h-[44px] cursor-pointer ${
                isActive
                  ? "bg-[#0B4F4A] text-[#A7F3D0]"
                  : "text-[#9EB3AF] hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 mb-0.5 shrink-0" />
              <span className="truncate max-w-full">{item.shortLabel}</span>
            </button>
          );
        })}
        {!isStandalone && (
          <button
            type="button"
            onClick={handlePwaButtonClick}
            title="הוסף למסך הבית"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-[10px] font-bold bg-[#B45309] text-[#FEF3C7] min-h-[44px] cursor-pointer shrink-0"
          >
            <Smartphone className="h-4 w-4 mb-0.5 shrink-0" />
            <span>אפליקציה</span>
          </button>
        )}
      </nav>
    </div>
  );
}

export default App;
