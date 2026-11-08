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
    <div className="space-y-4 sm:space-y-6">
      {/* Baggage Strategy Banner for 1x25kg + 2 Trolleys + 2 Backpacks */}
      <Card className="bg-[#0B4F4A] text-[#FAF7F2] border-[#083B37]">
        <CardContent className="p-3.5 sm:p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-start sm:items-center gap-2">
              <Briefcase className="h-5 w-5 text-[#A7F3D0] shrink-0 mt-0.5 sm:mt-0" />
              <h3 className="font-display text-base sm:text-lg font-bold leading-snug">
                מדריך כבודה מדויק לזוג: מזוודה אחת של 25 ק"ג + 2 טרולים (7 ק"ג) + 2 תיקי גב
              </h3>
            </div>
            <Badge className="bg-[#A7F3D0] text-[#064E3B] border-none text-[11px]">
              נבדק מול מדיניות החברות ל-2026
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
            <div className="rounded-xl bg-[#064E3B] p-3 sm:p-3.5 border-2 border-[#34D399] space-y-1">
              <div className="font-bold text-[#6EE7B7] text-xs sm:text-sm flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#34D399]" />
                <span>1. Thai VietJet VZ 314 (23.11 ב-06:50 • הוזמן! PNR: W9ZPEK)</span>
              </div>
              <p className="text-[#ECFDF5] leading-relaxed">
                <strong>כורטס ושולם (3,225.38 באט / ~₪298 לזוג)!</strong> כולל <strong>מזוודת 25 ק"ג לבטן המטוס (Bag 25kgs VZ)</strong> + שדרוג כבודת יד <strong>VZExtraDOM</strong> (2 טרולים + 2 תיקי גב). ממשיכים ישירות מהשדה אחרי נחיתת Etihad (מלון Golden Jade בוטל).
              </p>
            </div>

            <div className="rounded-xl bg-[#083B37] p-3 sm:p-3.5 border border-[#0F6E66] space-y-1">
              <div className="font-bold text-[#A7F3D0] text-xs sm:text-sm">
                2. Thai AirAsia (טיסה 2 פתוחה: 03.12 מקראבי לצ'יאנג מאי • ~870 ₪)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                החברה היחידה שטסה ישיר (FD 3077 ב-15:25)! קבינה 7 ק"ג משולב לאדם בחינם + מוסיפים באתר החברה <strong>מזוודה אחת של 25 ק"ג לנוסע 1 בלבד (~845 באט / ~78 ₪ בקופה)</strong>.
              </p>
            </div>

            <div className="rounded-xl bg-[#083B37] p-3 sm:p-3.5 border border-[#0F6E66] space-y-1">
              <div className="font-bold text-[#A7F3D0] text-xs sm:text-sm">
                3. Thai Lion Air / AirAsia (טיסה 3 פתוחה: שישי 11.12 לבנגקוק)
              </div>
              <p className="text-[#E6F4F1] leading-relaxed">
                ביום שישי בבוקר: <strong>Thai Lion Air SL 503 ב-08:00 ל-DMK (אומדן ~299 ₪ לזוג כולל הוספת 25 ק"ג ב-800 באט)</strong> או <strong>Thai AirAsia FD 4101 ב-08:55 ל-BKK (אומדן ~385 ₪ לזוג כולל 25 ק"ג)</strong>. שתיהן נוחתות 7–8 שעות לפני שבת!
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#0F6E66] flex flex-wrap items-center justify-between gap-2 text-xs text-[#D1FAE5]">
            <span>
              <strong>סטטוס טיסות פנים:</strong> טיסה 1 הוזמנה ב-<strong>₪298 (3,225.38 באט • PNR: W9ZPEK)</strong> | <strong>נותרו 2 טיסות להזמנה</strong> באומדן של כ־<strong>₪1,078–₪1,255 לזוג</strong> (סה"כ כל 3 הטיסות: ~₪1,376–₪1,553).
            </span>
            <span className="flex flex-wrap gap-2 text-[11px]">
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
      <div className="space-y-4 sm:space-y-6">
        {DOMESTIC_FLIGHTS_LEGS.map((leg, idx) => {
          const isBooked = leg.status === "booked" && leg.bookedConfirmation;
          return (
            <motion.div
              key={leg.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
            >
              <Card
                className={`border-2 overflow-hidden ${
                  isBooked ? "border-emerald-600/70" : "border-[#D8CFC0]"
                }`}
              >
                <CardHeader
                  className={`border-b p-3.5 sm:p-5 pb-3.5 sm:pb-4 ${
                    isBooked
                      ? "bg-[#ECFDF5] border-emerald-200"
                      : "bg-[#F5F0E6] border-[#E2D9C8]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {isBooked ? (
                          <Badge variant="success">
                            הוזמן וכורטס ✅ • PNR: {leg.bookedConfirmation?.reservationCode}
                          </Badge>
                        ) : (
                          <Badge variant="warning">טרם הוזמן : יש לסגור</Badge>
                        )}
                        <span className="text-xs font-bold text-[#0B4F4A]">
                          {leg.dateDisplay}
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl leading-snug">{leg.title}</CardTitle>
                    </div>
                    <div className="w-full sm:w-auto text-xs text-[#4A5D5A] bg-white px-3 py-2 rounded-lg border border-[#E2D9C8]">
                      <div>
                        <strong>לפני הטיסה:</strong> {leg.hotelBefore}
                      </div>
                      <div>
                        <strong>מלון אחרי:</strong> {leg.hotelAfter}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#142321] bg-white/80 p-2.5 rounded-lg border border-[#E2D9C8] mt-2 leading-relaxed">
                    <AlertCircle className="h-3.5 w-3.5 inline ml-1 text-[#0B4F4A]" />
                    <strong>התאמה למסלול ולמלונות:</strong> {leg.hotelConstraintNote}
                  </p>
                </CardHeader>

                <CardContent className="p-3.5 sm:p-5 space-y-4">
                  {/* Booked Confirmation Banner if leg is booked */}
                  {isBooked && leg.bookedConfirmation && (
                    <div className="rounded-xl border-2 border-emerald-600 bg-[#ECFDF5]/70 p-3.5 sm:p-4 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200 pb-2.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
                          <div>
                            <div className="font-display text-sm sm:text-base font-bold text-emerald-950">
                              אישור הזמנה רשמי: {leg.bookedConfirmation.airline} • טיסה {leg.bookedConfirmation.flightNumber} ({leg.bookedConfirmation.aircraft})
                            </div>
                            <div className="text-xs text-emerald-800">
                              תאריך הזמנה: {leg.bookedConfirmation.bookingDate} • נוסעים: {leg.bookedConfirmation.contactName}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-lg bg-emerald-800 text-white px-3 py-1 text-xs sm:text-sm font-bold tracking-wider">
                            PNR: {leg.bookedConfirmation.reservationCode}
                          </span>
                          <span className="rounded-lg bg-white border border-emerald-300 text-emerald-950 px-2.5 py-1 text-xs sm:text-sm font-bold tabular-nums">
                            שולם: {leg.bookedConfirmation.totalPaidOriginal} (כ־₪{leg.bookedConfirmation.totalPaidIls})
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-emerald-950">
                        <div className="rounded-lg bg-white p-2.5 border border-emerald-200">
                          <span className="text-[11px] text-emerald-700 block font-semibold">שעות ומסלול</span>
                          <strong className="text-sm tabular-nums">
                            {leg.bookedConfirmation.departureTime} ← {leg.bookedConfirmation.arrivalTime} ({leg.bookedConfirmation.duration})
                          </strong>
                          <div className="text-[11px] text-[#4A5D5A]">
                            {leg.bookedConfirmation.departureAirport} ← {leg.bookedConfirmation.arrivalAirport}
                          </div>
                        </div>
                        <div className="rounded-lg bg-white p-2.5 border border-emerald-200 sm:col-span-2">
                          <span className="text-[11px] text-emerald-700 block font-semibold">כבודה כלולה בהזמנה (Checked + Cabin)</span>
                          <strong className="text-sm">{leg.bookedConfirmation.baggageSummary}</strong>
                          <div className="text-[11px] text-[#4A5D5A]">כולל מזוודת 25 ק"ג לבטן המטוס (Bag 25kgs VZ) + שדרוג כבודת יד VZExtraDOM לטרולים ותיקי גב</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="text-[11px] text-emerald-900 font-medium">
                          אמצעי תשלום: {leg.bookedConfirmation.paymentMethod}
                        </span>
                        <Button variant="default" size="sm" className="min-h-[38px] text-xs font-bold" asChild>
                          <a href={leg.bookedConfirmation.manageBookingUrl} target="_blank" rel="noreferrer">
                            <span>ניהול הזמנה ב-Thai VietJet (קוד: {leg.bookedConfirmation.reservationCode})</span>
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}

                  {!isBooked && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {leg.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`rounded-xl border p-3.5 sm:p-4 flex flex-col justify-between space-y-3 transition-all ${
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

                            <div className="flex items-center justify-between gap-2 border-y border-[#E6DFD3] py-2.5">
                              <div className="min-w-0">
                                <div className="font-display text-base sm:text-lg font-bold text-[#142321] truncate">
                                  {opt.airline}
                                </div>
                                <div className="text-xs font-semibold text-[#4A5D5A]">
                                  טיסה: {opt.flightNumber} • {opt.duration}
                                </div>
                              </div>
                              <div className="text-left shrink-0">
                                <div className="font-display text-base sm:text-lg font-bold text-[#0B4F4A] tabular-nums">
                                  {opt.departureTime} ← {opt.arrivalTime}
                                </div>
                                <div className="text-[11px] text-[#4A5D5A]">
                                  {opt.departureAirport} ← {opt.arrivalAirport}
                                </div>
                              </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="rounded-lg bg-white p-2.5 sm:p-3 border border-[#E6DFD3] space-y-1">
                              <div className="flex items-baseline justify-between gap-2">
                                <span className="text-xs text-[#4A5D5A]">
                                  {opt.baggageIncludedInQuote
                                    ? "מחיר לזוג (כולל כבודה):"
                                    : "אומדן לזוג (כולל הוספת 25 ק\"ג בקופה):"}
                                </span>
                                <span className="font-display text-lg sm:text-xl font-bold text-[#0B4F4A] tabular-nums shrink-0">
                                  כ־₪{opt.totalEstimatedWith25kgIls}
                                </span>
                              </div>
                              <div className="text-[11px] text-[#4A5D5A] tabular-nums leading-snug">
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
                              <div className="text-[#4A5D5A] leading-relaxed">
                                <strong>התאמה ללו"ז:</strong> {opt.timingFitAnalysis}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 pt-2">
                            <div
                              className={`rounded-lg px-2.5 py-2 text-[11px] font-semibold border leading-snug ${
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
                              className="w-full min-h-[42px] text-xs font-bold"
                              asChild
                            >
                              <a
                                href={opt.officialAirlineUrl || opt.bookingUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="truncate">
                                  {opt.bookingLabel || `הזמנה באתר הרשמי (${opt.airline})`}
                                </span>
                                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                              </a>
                            </Button>
                            <div className="grid grid-cols-3 gap-1.5">
                              <Button variant="secondary" size="sm" className="w-full text-[10px] sm:text-[11px] px-1.5 min-h-[38px]" asChild>
                                <a
                                  href={opt.googleFlightsUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="truncate">Google Flights</span>
                                  <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" className="w-full text-[10px] sm:text-[11px] px-1.5 min-h-[38px]" asChild>
                                <a
                                  href={opt.bookingUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="truncate">
                                    {opt.bookingUrl.includes("airasia.com") ? "AirAsia ישיר" : "Trip.com"}
                                  </span>
                                  <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                                </a>
                              </Button>
                              {opt.skyscannerUrl && (
                                <Button variant="outline" size="sm" className="w-full text-[10px] sm:text-[11px] px-1.5 min-h-[38px]" asChild>
                                  <a
                                    href={opt.skyscannerUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <span className="truncate">Skyscanner</span>
                                    <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
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
