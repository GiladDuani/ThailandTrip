import React, { useState } from "react";
import { motion } from "framer-motion";
import { OPEN_DECISIONS, SHABBAT_ANCHORS } from "../data/tripData";
import type { OpenDecisionItem } from "../types/trip";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import {
  AlertTriangle,
  Calendar,
  ExternalLink,
  Flame,
  MapPin,
  Plus,
  Trash2,
} from "lucide-react";

interface OpenDecisionsAndShabbatProps {
  checkedMap: Record<string, boolean>;
  onToggleChecked: (id: string) => void;
  customTasks: OpenDecisionItem[];
  onAddCustomTask: (task: OpenDecisionItem) => void;
  onDeleteCustomTask: (id: string) => void;
}

export const OpenDecisionsSection: React.FC<OpenDecisionsAndShabbatProps> = ({
  checkedMap,
  onToggleChecked,
  customTasks,
  onAddCustomTask,
  onDeleteCustomTask,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [desc, setDesc] = useState("");
  const [urgency, setUrgency] = useState<"critical" | "high" | "medium">("high");

  const allItems = [...OPEN_DECISIONS, ...customTasks];
  const completedCount = allItems.filter((item) => checkedMap[item.id]).length;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newItem: OpenDecisionItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category: "shabbat_prep",
      urgency,
      deadlineDisplay: deadline || "ללא תאריך יעד",
      deadlineIso: deadline || "2026-12-01",
      description: desc.trim() || "משימה מותאמת אישית",
      actionNote: "",
    };
    onAddCustomTask(newItem);
    setTitle("");
    setDeadline("");
    setDesc("");
    setModalOpen(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#142321]">
            מה נשאר לסגור ודדליינים קריטיים ({completedCount} מתוך {allItems.length} הושלמו)
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5D5A]">
            סמנו משימות שהושלמו : הסימון נשמר אוטומטית במכשיר שלכם
          </p>
        </div>

        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogTrigger asChild>
            <Button variant="default" className="w-full sm:w-auto">
              <Plus className="h-4 w-4" />
              הוספת משימה חדשה
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>הוספת משימה או תזכורת</DialogTitle>
              <DialogDescription>
                המשימה תתווסף לרשימת הדברים הפתוחים ותישמר במכשיר.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#142321]">
                  כותרת המשימה
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="למשל: לבדוק תאריך ביטול חינם במייל של סנטרה קראבי..."
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#142321]">
                  תאריך יעד / דדליין
                </label>
                <Input
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="למשל: לפני שבת 04.12"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#142321]">
                  רמת דחיפות
                </label>
                <div className="flex gap-2">
                  {(["critical", "high", "medium"] as const).map((u) => (
                    <Button
                      key={u}
                      type="button"
                      size="sm"
                      variant={urgency === u ? "default" : "outline"}
                      onClick={() => setUrgency(u)}
                    >
                      {u === "critical" ? "קריטי" : u === "high" ? "גבוה" : "רגיל"}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#142321]">
                  פרטים והערות
                </label>
                <Input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="הערות נוספות..."
                />
              </div>
              <Button type="submit" className="w-full">
                שמור משימה
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-3">
        {allItems.map((item, idx) => {
          const isDone = !!checkedMap[item.id];
          const isCustom = item.id.startsWith("custom-");

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.03 }}
            >
              <Card
                className={`transition-all ${
                  isDone
                    ? "opacity-60 bg-[#F3EFE6]"
                    : item.isShabbatWarning
                    ? "border-2 border-[#EF4444]"
                    : ""
                }`}
              >
                <CardContent className="p-4 sm:p-5 flex items-start gap-3.5">
                  <div className="pt-0.5">
                    <Checkbox
                      checked={isDone}
                      onCheckedChange={() => onToggleChecked(item.id)}
                      aria-label={item.title}
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3
                        className={`font-display font-bold text-base sm:text-lg ${
                          isDone ? "line-through text-[#6B7E7A]" : "text-[#142321]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant={
                            item.urgency === "critical"
                              ? "destructive"
                              : item.urgency === "high"
                              ? "warning"
                              : "secondary"
                          }
                        >
                          <Calendar className="h-3 w-3 ml-1" />
                          {item.deadlineDisplay}
                        </Badge>
                        {isCustom && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDeleteCustomTask(item.id)}
                            className="text-[#991B1B] h-8 px-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-[#4A5D5A] leading-relaxed">
                      {item.description}
                    </p>

                    {item.actionNote && (
                      <div
                        className={`rounded-lg p-3 text-xs font-medium ${
                          item.isShabbatWarning
                            ? "bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA]"
                            : "bg-[#FAF7F2] text-[#142321] border border-[#E6DFD3]"
                        }`}
                      >
                        {item.isShabbatWarning && (
                          <AlertTriangle className="h-4 w-4 inline ml-1.5 text-[#DC2626]" />
                        )}
                        {item.actionNote}
                      </div>
                    )}

                    {item.linkUrl && (
                      <div className="pt-1">
                        <Button variant="outline" size="sm" asChild>
                          <a href={item.linkUrl} target="_blank" rel="noreferrer">
                            {item.linkLabel || "קישור ישיר"}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const ShabbatAnchorsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {SHABBAT_ANCHORS.map((shb, idx) => (
          <motion.div
            key={shb.number}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
          >
            <Card className="h-full flex flex-col justify-between border-2 border-[#F59E0B]/50 bg-[#FFFBEB]/40">
              <div>
                <CardHeader className="bg-[#FEF3C7]/70 border-b border-[#FDE68A] pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="shabbat">
                      <Flame className="h-3.5 w-3.5 ml-1" />
                      {shb.parasha}
                    </Badge>
                    <span className="text-xs font-bold text-[#92400E]">
                      {shb.dateDisplay}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-[#78350F] pt-1">
                    {shb.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-white p-3 border border-[#FDE68A] text-center">
                    <div>
                      <div className="text-[11px] text-[#78350F] font-semibold">
                        הדלקת נרות (שישי)
                      </div>
                      <div className="font-display text-lg font-bold text-[#92400E] tabular-nums">
                        {shb.candleLighting}
                      </div>
                    </div>
                    <div className="border-r border-[#FDE68A]">
                      <div className="text-[11px] text-[#78350F] font-semibold">
                        צאת השבת
                      </div>
                      <div className="font-display text-sm font-bold text-[#92400E]">
                        {shb.havdalah}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3.5 border border-[#E6DFD3] space-y-1.5 text-xs">
                    <div className="font-bold text-sm text-[#0B4F4A]">
                      מלון מוזמן לשבת: {shb.bookedHotelName}
                    </div>
                    <div className="font-semibold text-[#142321]">
                      מרחק מחב"ד: {shb.bookedHotelDistance}
                    </div>
                    <div className="text-[#4A5D5A] leading-relaxed">
                      {shb.bookedHotelDetails}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="font-bold text-[#142321]">
                      מוקד שבת: {shb.chabadName}
                    </div>
                    <div className="text-[#4A5D5A]">{shb.chabadAddress}</div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#142321]">
                    {shb.notes.map((n, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-[#B45309] font-bold">•</span>
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <div className="p-5 pt-0 flex flex-wrap gap-2">
                <Button variant="gold" size="sm" className="flex-1" asChild>
                  <a href={shb.chabadUrl} target="_blank" rel="noreferrer">
                    הרשמה לחב"ד
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={shb.chabadMapUrl} target="_blank" rel="noreferrer">
                    <MapPin className="h-3.5 w-3.5" />
                    מפת חב"ד
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={shb.hotelMapUrl} target="_blank" rel="noreferrer">
                    <MapPin className="h-3.5 w-3.5" />
                    מפת מלון
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
