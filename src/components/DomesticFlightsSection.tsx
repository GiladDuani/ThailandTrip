import React from "react";
import { motion } from "framer-motion";
import { DOMESTIC_FLIGHTS_LEGS, INTERNATIONAL_FLIGHTS } from "../data/tripData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  ExternalLink,
  Plane,
  Sparkles,
  AlertCircle,
} from "lucide-react";

export const DomesticFlightsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Baggage Strategy Banner for 1x25kg + 2 Trolleys + 2 Backpacks */}
      <Card className="bg-[#0B4F4A] text-[#FAF7F2] border-[#083B37]">
        <CardContent className="p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-[#A7F3D0]" />
              <h3 className="font-display text-lg font-bold">
                מדריך כבודה מדויק לזוג: מזוודה אחת של 25 ק"ג + 2 טרולים (7 ק"ג) + 2 תיקי גב
              </h3>
            </div>
            <Badge className="bg-[#A7F3D0] text-[#064E3B] border-none">
              נבדק מול מדיניות החברות ל-2026
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="rounded-xl bg-[#083B37] p-3.5 border border-[#0F6E66] space-y-1">
              <div className="font-bold text-[#A7F3D0] text-sm">
                1. Thai VietJet (טיסה 1: 23.11 מ-BKK לפוקט • אומדן ~454 ₪ לזוג)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                קבינה 7 ק"ג משולב לאדם (זהה ל-Etihad שאיתה נחתתם בלילה!) + רוכשים באתר החברה <strong>מזוודה אחת של 25 ק"ג לנוסע 1 בלבד (אומדן ~60 ₪ בקופה)</strong>. חלופה: Bangkok Airways PG 275 ב-10:25–12:00 (8,260 באט = ~764 ₪ לזוג, כולל 20 ק"ג לנוסע).
              </p>
            </div>

            <div className="rounded-xl bg-[#083B37] p-3.5 border border-[#0F6E66] space-y-1">
              <div className="font-bold text-[#A7F3D0] text-sm">
                2. Thai AirAsia (טיסה 2: 03.12 מקראבי לצ'יאנג מאי • אומדן ~870 ₪ לזוג)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                החברה היחידה שטסה ישיר (FD 3077 ב-15:25)! קבינה 7 ק"ג משולב לאדם בחינם + מוסיפים באתר החברה <strong>מזוודה אחת של 25 ק"ג לנוסע 1 בלבד (~845 באט / ~78 ₪ בקופה)</strong>.
              </p>
            </div>

            <div className="rounded-xl bg-[#083B37] p-3.5 border border-[#0F6E66] space-y-1">
              <div className="font-bold text-[#A7F3D0] text-sm">
                3. Thai Lion Air / AirAsia (טיסה 3: שישי 11.12 לבנגקוק)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                ביום שישי בבוקר: <strong>Thai Lion Air SL 503 ב-08:00 ל-DMK (אומדן ~299 ₪ לזוג כולל הוספת 25 ק"ג ב-800 באט)</strong> או <strong>Thai AirAsia FD 4101 ב-08:55 ל-BKK (אומדן ~385 ₪ לזוג כולל 25 ק"ג)</strong>. שתיהן נוחתות 7–8 שעות לפני שבת!
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#0F6E66] flex flex-wrap items-center justify-between gap-2 text-xs text-[#D1FAE5]">
            <span>
              <strong>אומדן כולל ל-3 טיסות הפנים לזוג (כולל הוספת מזוודת 25 ק"ג בקופה):</strong> כ־<strong>₪1,623–₪1,709 לזוג</strong> (מומלץ להזמין ישירות באתרי חברות התעופה).
            </span>
            <span className="flex flex-wrap gap-2">
              <a href="https://www.vietjetair.com/en/pages/baggage-service-1608106319546" target="_blank" rel="noreferrer" className="underline hover:text-white">תקנון VietJet</a> •
              <a href="https://support.airasia.com/s/article/What-is-checked-baggage-and-how-to-pre-book-en?language=en_GB" target="_blank" rel="noreferrer" className="underline hover:text-white">תקנון AirAsia</a> •
              <a href="https://www.lionairthai.com/en/ThaiLionAir-Experience/Baggage-Allowance" target="_blank" rel="noreferrer" className="underline hover:text-white">תקנון Lion Air</a> •
              <a href="https://www.thaiairways.com/en-th/content/baggage/checked-baggage/" target="_blank" rel="noreferrer" className="underline hover:text-white">תקנון Thai Airways</a> •
              <a href="https://www.bangkokair.com/baggage-allowance" target="_blank" rel="noreferrer" className="underline hover:text-white">תקנון Bangkok Airways</a>
            </span>
          </div>
        </CardContent>
      </Card>

      {/* The 3 Domestic Flight Legs */}
      <div className="space-y-6">
        {DOMESTIC_FLIGHTS_LEGS.map((leg, idx) => (
          <motion.div
            key={leg.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
          >
            <Card className="border-2 border-[#D8CFC0] overflow-hidden">
              <CardHeader className="bg-[#F5F0E6] border-b border-[#E2D9C8] pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="warning">טרם הוזמן : יש לסגור</Badge>
                      <span className="text-xs font-bold text-[#0B4F4A]">
                        {leg.dateDisplay}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{leg.title}</CardTitle>
                  </div>
                  <div className="text-xs text-[#4A5D5A] bg-white px-3 py-2 rounded-lg border border-[#E2D9C8]">
                    <div>
                      <strong>מלון לפני:</strong> {leg.hotelBefore}
                    </div>
                    <div>
                      <strong>מלון אחרי:</strong> {leg.hotelAfter}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#142321] bg-white/80 p-2.5 rounded-lg border border-[#E2D9C8] mt-2">
                  <AlertCircle className="h-3.5 w-3.5 inline ml-1 text-[#0B4F4A]" />
                  <strong>התאמה לזמני המלונות:</strong> {leg.hotelConstraintNote}
                </p>
              </CardHeader>

              <CardContent className="p-5 space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {leg.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`rounded-xl border p-4 flex flex-col justify-between space-y-3 transition-all ${
                        opt.isRecommendedByGilad
                          ? "border-2 border-[#0B4F4A] bg-[#ECFDF5]/40 shadow-sm"
                          : "border-[#E6DFD3] bg-[#FAF7F2]/60"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-bold text-[#0B4F4A] leading-snug">
                            {opt.optionLabel}
                          </span>
                          {opt.isRecommendedByGilad && (
                            <Badge className="shrink-0">מומלץ</Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between border-y border-[#E6DFD3] py-2.5">
                          <div>
                            <div className="font-display text-lg font-bold text-[#142321]">
                              {opt.airline}
                            </div>
                            <div className="text-xs font-semibold text-[#4A5D5A]">
                              טיסה: {opt.flightNumber} • {opt.duration}
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="font-display text-lg font-bold text-[#0B4F4A] tabular-nums">
                              {opt.departureTime} ← {opt.arrivalTime}
                            </div>
                            <div className="text-[11px] text-[#4A5D5A]">
                              {opt.departureAirport} ← {opt.arrivalAirport}
                            </div>
                          </div>
                        </div>

                        {/* Price Breakdown */}
                        <div className="rounded-lg bg-white p-3 border border-[#E6DFD3] space-y-1">
                          <div className="flex items-baseline justify-between">
                            <span className="text-xs text-[#4A5D5A]">
                              {opt.baggageIncludedInQuote
                                ? "מחיר לזוג (כולל כבודה):"
                                : "אומדן לזוג (כולל הוספת 25 ק\"ג בקופה):"}
                            </span>
                            <span className="font-display text-xl font-bold text-[#0B4F4A] tabular-nums">
                              כ־₪{opt.totalEstimatedWith25kgIls}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#4A5D5A] tabular-nums">
                            מחיר בסיס: {opt.couplePriceOriginal} (כ־₪{opt.couplePriceIls})
                            {!opt.baggageIncludedInQuote && opt.baggageAddOnCostIls
                              ? ` + אומדן תוספת מזוודת 25 ק"ג בקופה: ~₪${opt.baggageAddOnCostIls}`
                              : " • כבודה כלולה במחיר הכרטיס"}
                          </div>
                        </div>

                        <div className="text-xs text-[#142321] space-y-1.5">
                          <div className="whitespace-pre-line leading-relaxed">
                            <strong className="text-[#0B4F4A] block mb-0.5">חוק כבודה ומשקל (25 ק"ג + טרולים + תיקי גב):</strong>
                            {opt.baggage25kgRule}
                          </div>
                          <div className="text-[#4A5D5A]">
                            <strong>התאמה ללו"ז:</strong> {opt.timingFitAnalysis}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-2">
                        <div
                          className={`rounded-lg px-3 py-2 text-[11px] font-semibold border ${
                            !opt.baggageIncludedInQuote
                              ? "bg-amber-50 border-amber-300 text-amber-900"
                              : opt.airline.includes("Thai Airways")
                              ? "bg-blue-50 border-blue-200 text-blue-900"
                              : "bg-blue-50 border-blue-200 text-blue-900"
                          }`}
                        >
                          {!opt.baggageIncludedInQuote
                            ? `⚠️ חשוב ברכישה באתר החברה: להוסיף בקופה כבודה של 25 ק"ג לנוסע מס' 1 בלבד (אומדן ~₪${opt.baggageAddOnCostIls || 78}) ולבחור "ללא מזוודה" לנוסע 2!`
                            : opt.airline.includes("Thai Airways")
                            ? `ℹ️ כבודה כלולה (2×23 ק"ג), אך מוגבלת ל-23 ק"ג למזוודה בודדת — יש להעביר 2 ק"ג מהמזוודה לטרולי.`
                            : `ℹ️ כולל 20 ק"ג לנוסע — איחוד מכסות ל-25 ק"ג במזוודה אחת אינו מובטח רשמית באתר (ייתכן שיידרש להעביר 5 ק"ג לטרולי).`}
                        </div>
                        <Button
                          variant={opt.isRecommendedByGilad ? "default" : "outline"}
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <a
                            href={opt.officialAirlineUrl || opt.bookingUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {opt.bookingLabel || `הזמנה באתר הרשמי (${opt.airline})`}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                        <div className="flex gap-1.5">
                          <Button variant="secondary" size="sm" className="flex-1 text-[11px] px-2" asChild>
                            <a
                              href={opt.googleFlightsUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Google Flights
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 text-[11px] px-2" asChild>
                            <a
                              href={opt.bookingUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {opt.bookingUrl.includes("airasia.com") ? "AirAsia ישיר" : "Trip.com לתאריך"}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                          {opt.skyscannerUrl && (
                            <Button variant="outline" size="sm" className="flex-1 text-[11px] px-2" asChild>
                              <a
                                href={opt.skyscannerUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Skyscanner
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Confirmed International Flights Reference */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Plane className="h-5 w-5 text-[#0B4F4A]" />
              טיסות בינלאומיות סגורות ({INTERNATIONAL_FLIGHTS.airline})
            </CardTitle>
            <Badge variant="success">כורטס ואושר</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-5 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="rounded-xl border border-[#E6DFD3] bg-[#FAF7F2] p-3.5 space-y-1">
            <div className="font-bold text-sm text-[#142321]">
              הלוך: {INTERNATIONAL_FLIGHTS.outbound.date}
            </div>
            <div>• {INTERNATIONAL_FLIGHTS.outbound.leg1}</div>
            <div>• {INTERNATIONAL_FLIGHTS.outbound.leg2}</div>
            <div className="text-[#0B4F4A] font-semibold pt-1">
              {INTERNATIONAL_FLIGHTS.outbound.note}
            </div>
          </div>
          <div className="rounded-xl border border-[#E6DFD3] bg-[#FAF7F2] p-3.5 space-y-1">
            <div className="font-bold text-sm text-[#142321]">
              חזור: {INTERNATIONAL_FLIGHTS.inbound.date}
            </div>
            <div>• {INTERNATIONAL_FLIGHTS.inbound.leg1}</div>
            <div>• {INTERNATIONAL_FLIGHTS.inbound.leg2}</div>
            <div className="text-[#0B4F4A] font-semibold pt-1">
              {INTERNATIONAL_FLIGHTS.inbound.note}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
