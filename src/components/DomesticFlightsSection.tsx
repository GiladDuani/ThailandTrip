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
                1. Bangkok Airways (טיסה 1 מ-BKK לפוקט)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                עובדת בשיטת המשקל (<strong>Weight Concept</strong>) ומאפשרת <strong>איחוד משקלים (Pooling)</strong> לזוג באותה הזמנה: 20 ק"ג × 2 = <strong>40 ק"ג משותפים!</strong> מזוודת ה-25 ק"ג שלכם נשלחת כמות שהיא בחינם לגמרי + 2 טרולים לקבינה + טרקלין.
              </p>
            </div>

            <div className="rounded-xl bg-[#083B37] p-3.5 border border-[#0F6E66] space-y-1">
              <div className="font-bold text-[#A7F3D0] text-sm">
                2. Thai AirAsia (טיסה 2 מקראבי לצ'יאנג מאי)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                2 טרולים (7 ק"ג כ"א) + תיקי גב כלולים בחינם! עבור מזוודת ה-25 ק"ג: <strong>קונים כבודה של 25 ק"ג לנוסע מס' 1 בלבד</strong> (בעלות של <strong>845 באט = ~78–87 ₪</strong> באתר החברה) ובוחרים "ללא מזוודה" לנוסע השני!
              </p>
            </div>

            <div className="rounded-xl bg-[#083B37] p-3.5 border border-[#0F6E66] space-y-1">
              <div className="font-bold text-[#A7F3D0] text-sm">
                3. Thai Airways (טיסה 3 מצ'יאנג מאי לבנגקוק)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                כולל 2 מזוודות לבטן המטוס בחינם, אך לפי נהלי 2026 פועלת ב-<strong>Piece Concept (עד 23 ק"ג ליחידה ללא איחוד)</strong>. לכן מעבירים 2 ק"ג מהמזוודה לטרולי (או מוסרים גם טרולי אחד לבטן המטוס בחינם) ומשלמים <strong>0 ₪ תוספת!</strong>
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#0F6E66] flex flex-wrap items-center justify-between gap-2 text-xs text-[#D1FAE5]">
            <span>
              <strong>סה"כ עלות 3 טיסות הפנים המומלצות של גלעד לזוג (כולל מזוודת ה-25 ק"ג):</strong> כ־<strong>₪2,033 לזוג</strong> ($649.45 סה"כ לשניכם יחד!).
            </span>
            <span>
              חבילת חיסכון (לואו-קוסט בכולן כולל מזוודת 25 ק"ג): כ־<strong>₪1,593 לזוג</strong>.
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
                            <Badge className="shrink-0">מומלץ גלעד</Badge>
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
                              מחיר סופי לזוג (כולל 25 ק"ג):
                            </span>
                            <span className="font-display text-xl font-bold text-[#0B4F4A] tabular-nums">
                              כ־₪{opt.totalEstimatedWith25kgIls}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#4A5D5A] tabular-nums">
                            הצעת בסיס: {opt.couplePriceOriginal} (כ־₪{opt.couplePriceIls})
                            {!opt.baggageIncludedInQuote && opt.baggageAddOnCostIls
                              ? ` + תוספת מזוודה אחת 25 ק"ג: ~₪${opt.baggageAddOnCostIls}`
                              : " • כבודה כלולה במחיר!"}
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
                        <Button
                          variant={opt.isRecommendedByGilad ? "default" : "outline"}
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <a href={opt.bookingUrl} target="_blank" rel="noreferrer">
                            {opt.bookingLabel || `הזמנת טיסה (${opt.airline})`}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="secondary" size="sm" className="flex-1 text-xs" asChild>
                            <a
                              href={opt.googleFlightsUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Google Flights (מסונן)
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </Button>
                          {opt.skyscannerUrl && (
                            <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                              <a
                                href={opt.skyscannerUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Skyscanner (2 נוסעים)
                                <ExternalLink className="h-3.5 w-3.5" />
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
