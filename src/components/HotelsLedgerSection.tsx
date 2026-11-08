import React, { useState } from "react";
import { motion } from "framer-motion";
import { HOTEL_BOOKINGS, FOREX_SOURCES, REGIONS } from "../data/tripData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  ExternalLink,
  MapPin,
  ShieldAlert,
  UserCheck,
  Utensils,
} from "lucide-react";

export const HotelsLedgerSection: React.FC = () => {
  const [filterMode, setFilterMode] = useState<"all" | "regular" | "shabbat_conflict">("all");

  const regularHotels = HOTEL_BOOKINGS.filter((h) => !h.isBackupForLoop);
  const backupHotel = HOTEL_BOOKINGS.find((h) => h.isBackupForLoop);

  const totalRegularIls = regularHotels.reduce((sum, h) => sum + h.ilsPrice, 0);
  const totalRegularNights = regularHotels.reduce((sum, h) => sum + h.nights, 0);

  const displayedRegular = regularHotels.filter((h) => {
    if (filterMode === "shabbat_conflict") return h.isShabbatDeadlineConflict || h.openActionWarning;
    return true;
  });

  const getRegionMeta = (regionId: string) =>
    REGIONS.find((r) => r.id === regionId) || REGIONS[0];

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge variant="success">שולם מראש</Badge>;
      case "scheduled":
        return <Badge variant="warning">חיוב עתידי מתוכנן ב-Agoda</Badge>;
      case "partial_cash":
        return <Badge variant="warning">הזמנה + 400 באט במזומן בהגעה</Badge>;
      default:
        return <Badge variant="secondary">תשלום במלון</Badge>;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Financial Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        <Card className="bg-[#0B4F4A] text-[#FAF7F2] border-[#083B37]">
          <CardContent className="p-4 sm:p-5 space-y-1">
            <div className="text-xs text-[#A7F3D0] font-semibold">
              סה"כ עלות 9 מלונות המסלול הרגיל (לזוג)
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold tabular-nums">
              כ־₪{totalRegularIls.toLocaleString()}
            </div>
            <div className="text-xs text-[#D1FAE5]">
              עבור {totalRegularNights} לילות במלונות (23.11–14.12; בליל 22.11 ממשיכים ישירות מהשדה לטיסת 06:50 לפוקט, מלון Golden Jade בוטל) • ממוצע ~₪{Math.round(totalRegularIls / totalRegularNights)} ללילה
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#FECACA] bg-[#FEF2F2]">
          <CardContent className="p-4 sm:p-5 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#991B1B]">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>התראת מועד ביטול בשבת (שעון ישראל)</span>
            </div>
            <div className="font-display text-sm font-bold text-[#7F1D1D]">
              גיבוי The Empress בצ'יאנג מאי (05.12 ב-18:59)
            </div>
            <p className="text-xs text-[#991B1B] leading-relaxed">
              מועד הביטול החינמי של הזמנת הגיבוי ללופ הצפוני (The Empress Hotel, 6–11 בדצמבר) חל בשבת 05.12 ב-18:59 — אם יוצאים ללופ, יש לבטל לפני כניסת שבת ביום שישי 04.12.
            </p>
          </CardContent>
        </Card>

        <Card className="border-[#99F6E4] bg-[#F0FDFA]/70">
          <CardContent className="p-4 sm:p-5 space-y-2">
            <div className="text-xs font-bold text-[#0F766E] flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>קראבי (29.11–03.12): Centara Anda Dhevi Resort & Spa</span>
            </div>
            <p className="text-xs text-[#142321] leading-relaxed">
              • <strong>דרך ההזמנה:</strong> אתר המלון הרשמי (תעריף חבר <strong>CentaraThe1</strong> ע"י הדר ביידאני • דלוקס קינג + ארוחת בוקר • <strong>₪2,250.32</strong> בחיוב ב-THB, מאסטרקארד •••• 1114).<br />
              • <strong>אישורים וביטול:</strong> מס' מסלול <code className="font-bold">27886B9933923</code> | אישור חדר <code className="font-bold">34980SH130013</code> (תעריף גמיש לעריכה/ביטול באתר הרשמי).
            </p>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {FOREX_SOURCES.map((fx) => (
                <a
                  key={fx.url}
                  href={fx.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0B4F4A] underline underline-offset-4 hover:text-[#083B37]"
                >
                  {fx.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filterMode === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterMode("all")}
            className="flex-1 sm:flex-initial text-xs"
          >
            כל המלונות (9 במסלול + 1 גיבוי)
          </Button>
          <Button
            variant={filterMode === "shabbat_conflict" ? "destructive" : "outline"}
            size="sm"
            onClick={() => setFilterMode("shabbat_conflict")}
            className="flex-1 sm:flex-initial text-xs"
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            דורשים בדיקה / מועד ביטול בשבת (2)
          </Button>
        </div>
        <span className="text-[11px] sm:text-xs text-[#4A5D5A] font-medium">
          כל המחירים הם לזוג ולכל תקופת השהות במלון • שעות הביטול לפי שעון ישראל
        </span>
      </div>

      {/* Regular Route Hotels List */}
      <div className="space-y-3.5 sm:space-y-4">
        {displayedRegular.map((hotel, index) => {
          const reg = getRegionMeta(hotel.region);
          return (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
            >
              <Card
                className={`overflow-hidden transition-all ${
                  hotel.isShabbatDeadlineConflict
                    ? "border-2 border-[#EF4444] shadow-md"
                    : "hover:border-[#B8AD9B]"
                }`}
              >
                <div
                  className="px-3.5 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b"
                  style={{
                    backgroundColor: reg.bgSoft,
                    borderColor: reg.borderSoft,
                  }}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white tabular-nums shrink-0"
                      style={{ backgroundColor: reg.color }}
                    >
                      {hotel.order}
                    </span>
                    <span
                      className="font-display font-bold text-xs sm:text-sm"
                      style={{ color: reg.textColor }}
                    >
                      {hotel.area}
                    </span>
                    <Badge variant="outline" className="bg-white/90 tabular-nums text-[11px]">
                      {hotel.nights} {hotel.nights === 1 ? "לילה" : "לילות"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {getPaymentBadge(hotel.paymentStatus)}
                    <Badge variant="secondary" className="text-[11px]">
                      הוזמן ע"י: {hotel.bookedBy} • {hotel.platform}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-3.5 sm:p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 items-start">
                    {/* Left/Main column: Hotel Name, Room & Dates */}
                    <div className="lg:col-span-5 space-y-2">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#142321]">
                        {hotel.hotelName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#142321] font-medium">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-[#0B4F4A]" />
                          כניסה: <strong>{hotel.checkIn}</strong>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          יציאה: <strong>{hotel.checkOut}</strong>
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-[#4A5D5A] space-y-1 pt-0.5">
                        <div className="flex items-start gap-1.5">
                          <UserCheck className="h-4 w-4 text-[#0B4F4A] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            <strong>חדר ופרטי הזמנה:</strong> {hotel.roomDetails}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Utensils className="h-4 w-4 text-[#0B4F4A] shrink-0" />
                          <span>
                            <strong>ארוחות:</strong> {hotel.mealPlan}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle column: Pricing & Payment */}
                    <div className="lg:col-span-4 rounded-xl bg-[#FAF7F2] border border-[#E6DFD3] p-3 sm:p-3.5 space-y-1.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs font-bold text-[#4A5D5A]">
                          מחיר לזוג לכל השהות:
                        </span>
                        <span className="font-display text-lg sm:text-xl font-bold text-[#0B4F4A] tabular-nums">
                          {hotel.ilsPriceDisplay}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-[#142321] tabular-nums">
                        מטבע מקור: {hotel.originalPriceDisplay}
                      </div>
                      <div className="text-xs text-[#4A5D5A] leading-relaxed pt-1 border-t border-[#E6DFD3]">
                        <CreditCard className="h-3.5 w-3.5 inline ml-1 text-[#0B4F4A]" />
                        {hotel.paymentNote}
                      </div>
                    </div>

                    {/* Right column: Cancellation & Actions */}
                    <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
                      <div
                        className={`rounded-xl p-3 border text-xs space-y-1 ${
                          hotel.isShabbatDeadlineConflict
                            ? "bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]"
                            : hotel.isNonRefundable
                            ? "bg-[#F3EFE6] border-[#D8CFC0] text-[#4A5D5A]"
                            : "bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]"
                        }`}
                      >
                        <div className="font-bold flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 shrink-0" />
                          <span>תנאי ביטול וניהול הזמנה:</span>
                        </div>
                        <div className="font-semibold leading-relaxed">
                          {hotel.freeCancellationUntil}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="w-full min-h-[40px]" asChild>
                          <a href={hotel.mapUrl} target="_blank" rel="noreferrer">
                            <MapPin className="h-3.5 w-3.5" />
                            מפה
                          </a>
                        </Button>
                        <Button variant="secondary" size="sm" className="w-full min-h-[40px]" asChild>
                          <a
                            href={hotel.bookingSearchUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {hotel.id === "hotel-4-krabi-centara" ? "אתר Centara" : "דף המלון"}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Shabbat / Open Action Alert Banner if present */}
                  {(hotel.shabbatConflictExplanation || hotel.openActionWarning) && (
                    <div
                      className={`mt-3.5 rounded-xl border p-3 text-xs space-y-1 ${
                        hotel.isShabbatDeadlineConflict
                          ? "border-[#EF4444] bg-[#FEF2F2] text-[#991B1B]"
                          : "border-[#0D9488] bg-[#F0FDFA] text-[#0F766E]"
                      }`}
                    >
                      {hotel.openActionWarning && (
                        <div className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                          <AlertTriangle
                            className={`h-4 w-4 shrink-0 ${
                              hotel.isShabbatDeadlineConflict
                                ? "text-[#DC2626]"
                                : "text-[#0D9488]"
                            }`}
                          />
                          <span>{hotel.openActionWarning}</span>
                        </div>
                      )}
                      {hotel.shabbatConflictExplanation && (
                        <p className="leading-relaxed">{hotel.shabbatConflictExplanation}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Separate Loop Backup Section (The Empress Hotel) */}
      {backupHotel && (
        <div className="pt-4">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="warning" className="text-xs px-3 py-1">
              גיבוי נפרד ללופ : לא חלק ממסלול הלינות הרגיל
            </Badge>
            <span className="text-xs text-[#4A5D5A]">
              מוחזק כגיבוי למקרה שתחליטו להישאר בצ'יאנג מאי במקום לצאת ללופ של פאי ומאה הונג סון
            </span>
          </div>

          <Card className="border-2 border-dashed border-[#D97706] bg-[#FFFBEB]/70">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-xl text-[#92400E]">
                    {backupHotel.hotelName} : {backupHotel.area}
                  </CardTitle>
                  <CardDescription className="text-[#78350F] font-medium">
                    כניסה: {backupHotel.checkIn} • יציאה: {backupHotel.checkOut} ({backupHotel.nights} לילות) • דרך {backupHotel.platform}
                  </CardDescription>
                </div>
                <div className="text-left">
                  <div className="font-display text-2xl font-bold text-[#92400E] tabular-nums">
                    {backupHotel.ilsPriceDisplay}
                  </div>
                  <div className="text-xs text-[#78350F] tabular-nums">
                    {backupHotel.originalPriceDisplay} • {backupHotel.mealPlan}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <div className="rounded-xl border border-[#EF4444] bg-[#FEF2F2] p-3.5 text-xs text-[#991B1B] space-y-1">
                <div className="font-bold text-sm flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-[#DC2626]" />
                  <span>{backupHotel.openActionWarning}</span>
                </div>
                <p className="leading-relaxed">
                  <strong>ביטול חינם עד:</strong> {backupHotel.freeCancellationUntil}.<br />
                  {backupHotel.shabbatConflictExplanation}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={backupHotel.mapUrl} target="_blank" rel="noreferrer">
                    <MapPin className="h-3.5 w-3.5" />
                    מיקום בצ'יאנג מאי
                  </a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href={backupHotel.bookingSearchUrl} target="_blank" rel="noreferrer">
                    דף המלון ב-Booking
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
