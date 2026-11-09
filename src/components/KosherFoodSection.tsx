import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { AlertTriangle, ExternalLink, MapPin, ShoppingBasket, Luggage, Utensils } from "lucide-react";

const STORAGE_PACKING = "thailand_2026_kosher_packing_v1";

interface PackItem {
  id: string;
  name: string;
  qty: string;
  where: "מזוודה 25 ק\"ג" | "תיק גב";
}

const PACKING_LIST: PackItem[] = [
  { id: "tuna", name: "טונה בשקיות ואקום (פאוץ')", qty: "8–10 שקיות", where: "מזוודה 25 ק\"ג" },
  { id: "tahini", name: "טחינה גולמית בבקבוק לחיץ", qty: "1 בקבוק", where: "מזוודה 25 ק\"ג" },
  { id: "honey", name: "דבש / סילאן בבקבוק לחיץ", qty: "1 בקבוק", where: "מזוודה 25 ק\"ג" },
  { id: "tortillas", name: "טורטיות", qty: "2–3 חבילות", where: "מזוודה 25 ק\"ג" },
  { id: "brioche", name: "לחם בריוש ארוז (חיי מדף ארוכים)", qty: "1 אריזה", where: "תיק גב" },
  { id: "nv", name: "חטיפי Nature Valley", qty: "1 חבילה גדולה", where: "תיק גב" },
  { id: "hotmeals", name: "מנות חמות / קוסקוס מהיר (גיבוי ללופ הצפוני)", qty: "2–3 מנות", where: "מזוודה 25 ק\"ג" },
  { id: "knife", name: "סכין קטנה עם נדן + שקיות זיפלוק + כפיות חד\"פ", qty: "סט אחד", where: "מזוודה 25 ק\"ג" },
];

interface FoodStop {
  region: string;
  dates: string;
  status: "chabad" | "local" | "self";
  source: string;
  plan: string;
  mapQuery?: string;
}

const FOOD_PLAN: FoodStop[] = [
  {
    region: "קוקונט איילנד",
    dates: "23–27.11 (4 לילות)",
    status: "self",
    source: "Villa Market + חב\"ד פוקט (Take-Away)",
    plan: "ביום הנחיתה עוצרים ב-Villa Market Boat Lagoon בדרך למזח. ב-24.11 ערב בחב\"ד פאטונג וקונים מנות ארוזות למקרר בסוויטה.",
    mapQuery: "Villa+Market+Boat+Lagoon+Phuket",
  },
  {
    region: "פאטונג (שבת 1)",
    dates: "27–29.11 (2 לילות)",
    status: "chabad",
    source: "מסעדת בית חב\"ד פוקט",
    plan: "כל הארוחות כולל סעודות שבת. ב-29.11 בבוקר קונים במאפייה לחמניות ומנות לקראבי.",
    mapQuery: "Chabad+House+Phuket+Patong",
  },
  {
    region: "או נאנג, קראבי",
    dates: "29.11–03.12 (4 לילות)",
    status: "local",
    source: "\"בית הלל קראבי\" / \"הבית הכשר – שניצל חלה\"",
    plan: "מקומות עצמאיים (לא תחת חב\"ד תאילנד). לשלוח וואטסאפ לפני ההגעה לוודא שפתוחים ושרמת הכשרות מתאימה לכם. השלמות ב-Mother Marche / 7-Eleven.",
    mapQuery: "Kosher+Ao+Nang+Krabi",
  },
  {
    region: "צ'יאנג מאי (שבת 2)",
    dates: "03–06.12 (3 לילות)",
    status: "chabad",
    source: "מסעדת בית חב\"ד צ'יאנג מאי",
    plan: "ערב ההגעה, שישי, סעודות שבת ונר א' של חנוכה במוצ\"ש.",
    mapQuery: "Chabad+House+Chiang+Mai",
  },
  {
    region: "פאי",
    dates: "06–07.12 (לילה 1)",
    status: "chabad",
    source: "מסעדה בשרית – בית חב\"ד פאי",
    plan: "ארוחת ערב ב-06.12. ב-07.12 בבוקר קונים לחם + 3–4 מנות ארוזות להמשך הלופ (לתאם יום קודם).",
    mapQuery: "Chabad+House+Pai",
  },
  {
    region: "מאה הונג סון + מאה סריאנג",
    dates: "07–10.12 (3 לילות)",
    status: "self",
    source: "מנות מחב\"ד פאי + אוכל מהארץ",
    plan: "אין מסעדות כשרות. בוקר: פירות, ירקות וביצים קשות מהמלון + טורטיות/בריוש, טונה וטחינה. ערב: מנות מפאי ומנות חמות מהארץ.",
  },
  {
    region: "צ'יאנג מאי (חזרה)",
    dates: "10–11.12 (לילה 1)",
    status: "chabad",
    source: "מסעדת בית חב\"ד צ'יאנג מאי",
    plan: "ארוחת ערב חמה אחרי החזרת הרכב.",
    mapQuery: "Chabad+House+Chiang+Mai",
  },
  {
    region: "בנגקוק (שבת 3)",
    dates: "11–14.12 (3 לילות)",
    status: "chabad",
    source: "בית חב\"ד בנגקוק – קאו סאן (6 דק' הליכה)",
    plan: "בשרי, חלבי, מאפייה ומינימרקט. סעודות שבת חנוכה ואוכל לטיסה הביתה.",
    mapQuery: "Chabad+House+Bangkok+Khao+San",
  },
];

const statusMeta = {
  chabad: { label: "חב\"ד", className: "bg-emerald-100 text-emerald-900 border-emerald-300" },
  local: { label: "כשר מקומי – לוודא", className: "bg-amber-100 text-amber-900 border-amber-300" },
  self: { label: "התארגנות עצמית", className: "bg-sky-100 text-sky-900 border-sky-300" },
};

export const KosherFoodSection: React.FC = () => {
  const [packed, setPacked] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PACKING) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_PACKING, JSON.stringify(packed));
  }, [packed]);

  const packedCount = PACKING_LIST.filter((p) => packed[p.id]).length;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Breakfast rule */}
      <Card className="bg-[#0B4F4A] text-[#FAF7F2] border-[#083B37]">
        <CardContent className="p-3.5 sm:p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Utensils className="h-5 w-5 text-[#A7F3D0] shrink-0" />
            <h3 className="font-display text-base sm:text-lg font-bold">ארוחות בוקר במלונות (מטבח לא כשר)</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#E6F4F1] leading-relaxed">
            מהמזנון: פירות וירקות שלמים, ביצים קשות בקליפה, קפה. משלימים עם טורטיות/בריוש, טונה, טחינה ודבש/סילאן שהבאתם מהארץ. בימי שייט וסיורים לוקחים כריכים ו-Nature Valley במקום הארוחה של הסיור.
          </p>
        </CardContent>
      </Card>

      {/* Packing list */}
      <Card>
        <CardHeader className="p-3.5 sm:p-5 pb-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Luggage className="h-5 w-5 text-[#0B4F4A]" />
              מה מביאים מהארץ
            </CardTitle>
            <Badge variant={packedCount === PACKING_LIST.length ? "success" : "secondary"}>
              נארזו {packedCount} מתוך {PACKING_LIST.length}
            </Badge>
          </div>
          <p className="text-xs text-[#4A5D5A]">סה"כ כ-1.5–2 ק"ג, שמתפנים לשופינג עד סוף הטיול. הסימון נשמר במכשיר.</p>
        </CardHeader>
        <CardContent className="p-3.5 sm:p-5 pt-0 divide-y divide-[#EFE9DC]">
          {PACKING_LIST.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 py-2.5 cursor-pointer min-h-[44px]"
            >
              <Checkbox
                checked={!!packed[item.id]}
                onCheckedChange={() => setPacked((p) => ({ ...p, [item.id]: !p[item.id] }))}
                aria-label={item.name}
              />
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold ${packed[item.id] ? "line-through text-[#6B7E7A]" : "text-[#142321]"}`}>
                  {item.name}
                </div>
                <div className="text-[11px] text-[#4A5D5A]">{item.qty}</div>
              </div>
              <span
                className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-semibold ${
                  item.where === "תיק גב"
                    ? "bg-sky-50 border-sky-200 text-sky-900"
                    : "bg-[#F5F0E6] border-[#E2D9C8] text-[#4A5D5A]"
                }`}
              >
                {item.where}
              </span>
            </label>
          ))}
          <div className="pt-3 flex items-start gap-2 text-xs text-[#991B1B]">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>סכין ובקבוקי טחינה/דבש (מעל 100 מ"ל) רק במזוודה שנשלחת לבטן המטוס.</span>
          </div>
        </CardContent>
      </Card>

      {/* Phuket supermarket */}
      <Card className="border-[#99F6E4] bg-[#F0FDFA]/70">
        <CardHeader className="p-3.5 sm:p-5 pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-[#0F766E]">
            <ShoppingBasket className="h-5 w-5" />
            קונים בפוקט (23.11, בדרך למזח)
          </CardTitle>
          <p className="text-xs text-[#4A5D5A]">
            Villa Market Boat Lagoon, כ-3 דק' נסיעה מ-Laem Hin Pier. לבקש מנהג המונית לעצור ל-15 דקות. מחפשים חותמת OU / KLBD על כל אריזה.
          </p>
        </CardHeader>
        <CardContent className="p-3.5 sm:p-5 pt-0 space-y-3">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-[#142321]">
            <li>• חמאת בוטנים Skippy</li>
            <li>• שקדים / קשיו Tong Garden</li>
            <li>• דגני בוקר Kellogg's</li>
            <li>• פרינגלס, אוראו, לוטוס</li>
            <li>• פירות טרופיים שלמים</li>
            <li>• שישיית מים + מי קוקוס</li>
          </ul>
          <Button variant="outline" size="sm" className="min-h-[40px]" asChild>
            <a href="https://maps.google.com/?q=Villa+Market+Boat+Lagoon+Phuket" target="_blank" rel="noreferrer">
              <MapPin className="h-3.5 w-3.5" />
              Villa Market Boat Lagoon במפה
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Per destination */}
      <Card>
        <CardHeader className="p-3.5 sm:p-5 pb-2">
          <CardTitle className="text-base sm:text-lg">איפה אוכלים בכל יעד</CardTitle>
        </CardHeader>
        <CardContent className="p-3.5 sm:p-5 pt-0 space-y-2.5">
          {FOOD_PLAN.map((stop) => {
            const meta = statusMeta[stop.status];
            return (
              <div key={stop.region + stop.dates} className="rounded-xl border border-[#E6DFD3] bg-[#FAF7F2]/60 p-3 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-display text-sm sm:text-base font-bold text-[#142321]">{stop.region}</div>
                    <div className="text-[11px] text-[#4A5D5A] tabular-nums">{stop.dates}</div>
                  </div>
                  <span className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-bold ${meta.className}`}>
                    {meta.label}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#0B4F4A]">{stop.source}</div>
                <p className="text-xs text-[#142321] leading-relaxed">{stop.plan}</p>
                {stop.mapQuery && (
                  <a
                    href={`https://maps.google.com/?q=${stop.mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B4F4A] underline underline-offset-4 min-h-[32px]"
                  >
                    מפה
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
