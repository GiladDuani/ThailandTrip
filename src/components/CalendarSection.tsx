import React from "react";
import { motion } from "framer-motion";
import { TRIP_DAYS, REGIONS } from "../data/tripData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Flame, Plane, BedDouble } from "lucide-react";

interface CalendarSectionProps {
  onSelectDay: (dayNum: number) => void;
}

const WEEKDAYS = ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"];

export const CalendarSection: React.FC<CalendarSectionProps> = ({ onSelectDay }) => {
  const getDayByIso = (iso: string) => TRIP_DAYS.find((d) => d.dateIso === iso);
  const getRegionMeta = (regionId: string) =>
    REGIONS.find((r) => r.id === regionId) || REGIONS[0];

  // November 2026: Nov 1 is Sunday (index 0), 30 days
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  // December 2026: Dec 1 is Tuesday (index 2 -> 2 empty cells for Sun, Mon), 31 days
  const decLeadingEmpty = [0, 1];
  const decDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const renderCell = (year: number, month: number, dayNumInMonth: number) => {
    const mm = String(month).padStart(2, "0");
    const dd = String(dayNumInMonth).padStart(2, "0");
    const iso = `${year}-${mm}-${dd}`;
    const tripDay = getDayByIso(iso);

    if (!tripDay) {
      return (
        <div
          key={iso}
          className="min-h-[64px] sm:min-h-[84px] rounded-lg border border-[#EFE9DC] bg-[#FAF7F2]/60 p-1.5 text-xs text-[#8D9D9A] flex flex-col justify-between"
        >
          <span className="tabular-nums font-medium">{dayNumInMonth}</span>
        </div>
      );
    }

    const reg = getRegionMeta(tripDay.region);
    const hasFlight = [1, 2, 12, 20, 23].includes(tripDay.dayNum);

    return (
      <motion.button
        key={iso}
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelectDay(tripDay.dayNum)}
        style={{
          backgroundColor: tripDay.isShabbat ? "#FFFBEB" : reg.bgSoft,
          borderColor: tripDay.isShabbat ? "#F59E0B" : reg.borderSoft,
        }}
        className="min-h-[58px] sm:min-h-[92px] rounded-lg sm:rounded-xl border-2 p-1 sm:p-2 text-right flex flex-col justify-between transition-shadow hover:shadow-md cursor-pointer relative group"
      >
        <div className="flex items-center justify-between w-full gap-0.5">
          <span
            className="font-display font-bold text-[11px] sm:text-sm tabular-nums leading-none"
            style={{ color: tripDay.isShabbat ? "#92400E" : reg.textColor }}
          >
            {dayNumInMonth}
          </span>
          <div className="flex items-center gap-0.5">
            {tripDay.isShabbat && (
              <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#B45309] shrink-0" />
            )}
            {hasFlight && (
              <Plane className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0B4F4A] shrink-0" />
            )}
          </div>
        </div>

        <div className="space-y-0.5 w-full">
          <div
            className="text-[9px] sm:text-xs font-bold leading-tight truncate"
            style={{ color: tripDay.isShabbat ? "#92400E" : reg.textColor }}
          >
            <span className="sm:hidden">יום {tripDay.dayNum}</span>
            <span className="hidden sm:inline">
              יום {tripDay.dayNum}: {reg.name.split(" ")[0]}
            </span>
          </div>
          <div className="text-[10px] text-[#4A5D5A] leading-tight line-clamp-1 hidden sm:flex items-center gap-1">
            <BedDouble className="h-2.5 w-2.5 shrink-0" />
            <span className="truncate">{tripDay.hotelName.split("(")[0]}</span>
          </div>
        </div>
      </motion.button>
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Legend */}
      <Card>
        <CardContent className="p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {REGIONS.map((reg) => (
              <Badge
                key={reg.id}
                style={{
                  backgroundColor: reg.bgSoft,
                  color: reg.textColor,
                  borderColor: reg.borderSoft,
                }}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs"
              >
                <span
                  className="inline-block h-2 w-2 rounded-full ml-1.5"
                  style={{ backgroundColor: reg.color }}
                />
                {reg.name} ({reg.dates})
              </Badge>
            ))}
            <Badge variant="shabbat" className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs">
              <Flame className="h-3 w-3 ml-1" />
              3 שבתות (פוקט • צ'יאנג מאי • בנגקוק)
            </Badge>
          </div>
          <span className="text-[11px] sm:text-xs text-[#4A5D5A] font-medium">
            לחצו על כל תאריך בלוח כדי לקפוץ לפירוט היום בלו"ז
          </span>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* November 2026 */}
        <Card>
          <CardHeader className="p-3.5 sm:p-5 pb-2.5 sm:pb-3 border-b border-[#EFE9DC]">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-lg sm:text-xl">נובמבר 2026</CardTitle>
              <CardDescription className="text-xs font-semibold text-[#0B4F4A]">
                ימים 1–9 למסע (22–30 בנובמבר)
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-2.5 sm:p-5">
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-1.5 sm:mb-2">
              {WEEKDAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-[11px] sm:text-xs font-bold text-[#4A5D5A] py-1"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {novDays.map((d) => renderCell(2026, 11, d))}
            </div>
          </CardContent>
        </Card>

        {/* December 2026 */}
        <Card>
          <CardHeader className="p-3.5 sm:p-5 pb-2.5 sm:pb-3 border-b border-[#EFE9DC]">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-lg sm:text-xl">דצמבר 2026</CardTitle>
              <CardDescription className="text-xs font-semibold text-[#0B4F4A]">
                ימים 10–23 למסע (1–14 בדצמבר)
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-2.5 sm:p-5">
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-1.5 sm:mb-2">
              {WEEKDAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-[11px] sm:text-xs font-bold text-[#4A5D5A] py-1"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {decLeadingEmpty.map((e) => (
                <div key={`empty-${e}`} className="min-h-[54px] sm:min-h-[84px]" />
              ))}
              {decDays.map((d) => renderCell(2026, 12, d))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Compact Day-by-Day Quick Jump List (Shows hotel & region clearly on phones) */}
      <Card className="sm:hidden border-[#D8CFC0]">
        <CardHeader className="p-3.5 pb-2 border-b border-[#EFE9DC]">
          <CardTitle className="text-base text-[#142321]">
            רשימת 23 ימי המסע והמלונות (לחיצה לקפיצה ליום)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2.5 divide-y divide-[#EFE9DC]">
          {TRIP_DAYS.map((d) => {
            const reg = getRegionMeta(d.region);
            return (
              <button
                key={d.dayNum}
                type="button"
                onClick={() => onSelectDay(d.dayNum)}
                className="w-full py-2 px-2 flex items-center justify-between gap-2 text-right hover:bg-[#F5F0E6] rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="px-2 py-0.5 rounded text-[11px] font-bold text-white shrink-0 tabular-nums"
                    style={{
                      backgroundColor: d.isShabbat ? "#B45309" : reg.color,
                    }}
                  >
                    יום {d.dayNum}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#142321] truncate">
                      {d.dayOfWeek}, {d.date.slice(0, 5)} • {d.title}
                    </div>
                    <div className="text-[11px] text-[#4A5D5A] truncate">
                      מלון: {d.hotelName}
                    </div>
                  </div>
                </div>
                {d.isShabbat && (
                  <Flame className="h-4 w-4 text-[#B45309] shrink-0" />
                )}
              </button>
            );
          })}
        </CardContent>
      </Card>

      {/* Cancellation & Charge Dates Timeline on Calendar */}
      <Card className="border-[#F59E0B] bg-[#FFFBEB]/60">
        <CardHeader className="p-3.5 sm:p-5 pb-2">
          <CardTitle className="text-sm sm:text-base text-[#92400E] flex items-center gap-2">
            תאריכי מפתח לביטול וחיוב מלונות בלוח השנה (שעון ישראל עד 18:59)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3.5 sm:p-5 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
            <div className="rounded-lg border border-[#E6DFD3] bg-white p-3">
              <div className="font-bold text-[#142321]">15 בנובמבר (18:59): ברסלו קוקונט איילנד</div>
              <div className="text-[#4A5D5A]">סיום ביטול חינם לסוויטת הג'קוזי בברסלו (שולם: ₪2,178.67).</div>
            </div>
            <div className="rounded-lg border border-emerald-300 bg-[#ECFDF5] p-3 text-emerald-950">
              <div className="font-bold">23 בנובמבר (06:50): טיסת VZ 314 לפוקט</div>
              <div>הוזמן וכורטס! PNR: W9ZPEK (3,225.38 באט / ~₪298 כולל 25 ק"ג + VZExtraDOM). מלון Golden Jade בוטל.</div>
            </div>
            <div className="rounded-lg border border-[#99F6E4] bg-[#F0FDFA] p-3 text-[#0F766E]">
              <div className="font-bold">29.11–03.12: Centara Anda Dhevi קראבי</div>
              <div>הוזמן באתר הרשמי (CentaraThe1 ע"י הדר • מס' מסלול 27886B9933923 | אישור 34980SH130013 • ₪2,250.32 ב-THB). תעריף גמיש – לבדוק תאריך ביטול חינם במייל.</div>
            </div>
            <div className="rounded-lg border border-[#E6DFD3] bg-white p-3">
              <div className="font-bold text-[#142321]">26–27 בנובמבר: The Locals צ'יאנג מאי</div>
              <div className="text-[#4A5D5A]">חיוב ב-26.11 (177.15$) | ביטול חינם עד 27.11 ב-18:59.</div>
            </div>
            <div className="rounded-lg border border-[#E6DFD3] bg-white p-3">
              <div className="font-bold text-[#142321]">29 בנובמבר – 2 בדצמבר: מלונות הלופ</div>
              <div className="text-[#4A5D5A]">Sang Tong (29.11) • Riverhouse (01.12) • Reverie Siam + Gategaa (02.12).</div>
            </div>
            <div className="rounded-lg border border-[#FECACA] bg-[#FEF2F2] p-3 text-[#991B1B]">
              <div className="font-bold">4–5 בדצמבר (שישי–שבת!): גיבוי Empress</div>
              <div>ביטול חינם לגיבוי מסתיים בשבת 05.12 ב-18:59 : לבטל לפני כניסת שבת ביום שישי 04.12!</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
