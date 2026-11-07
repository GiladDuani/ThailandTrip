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
    <div className="space-y-6">
      {/* Financial Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#0B4F4A] text-[#FAF7F2] border-[#083B37]">
          <CardContent className="p-5 space-y-1">
            <div className="text-xs text-[#A7F3D0] font-semibold">
              סה"כ עלות 10 מלונות המסלול הרגיל (לזוג)
            </div>
            <div className="font-display text-3xl font-bold tabular-nums">
              כ־₪{totalRegularIls.toLocaleString()}
            </div>
            <div className="text-xs text-[#D1FAE5]">
              עבור {totalRegularNights} לילות (22 בנובמבר עד 14 בדצמבר 2026) • ממוצע ~₪{Math.round(totalRegularIls / totalRegularNights)} ללילה לזוג
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#FECACA] bg-[#FEF2F2]">
          <CardContent className="p-5 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#991B1B]">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>התראת מועד ביטול בשבת (שעון ישראל)</span>
            </div>
            <div className="font-display text-sm font-bold text-[#7F1D1D]">
              גיבוי The Empress בצ'יאנג מאי (05.12 ב-18:59)
            </div>
            <p className="text-xs text-[#991B1B] leading-relaxed">
              ✅ <strong>ריילי וילג' ו-Noppharat בוטלו ב-0 עמלה!</strong> נשאר רק מועד הביטול של מלון הגיבוי ללופ (Empress) שחל בשבת 05.12 — יש לבטלו לפני כניסת שבת ב-04.12.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="text-xs font-bold text-[#4A5D5A]">
              עדכון מלונות אחרון (05.11.2026)
            </div>
            <p className="text-xs text-[#142321] leading-relaxed">
              • בקראבי (29.11–03.12) נסגר <strong>Centara Anda Dhevi Resort & Spa</strong> (דלוקס קינג + ארוחת בוקר ב-₪2,250.32 – חיסכון של כ-795 ₪!), ובוטלו ריילי ו-Noppharat ללא דמי ביטול.<br />
              • בפוקט: <strong>ברסלו קוקונט איילנד</strong> במקום לה מרידיאן.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
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
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filterMode === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterMode("all")}
          >
            כל המלונות (10 במסלול + 1 גיבוי)
          </Button>
          <Button
            variant={filterMode === "shabbat_conflict" ? "destructive" : "outline"}
            size="sm"
            onClick={() => setFilterMode("shabbat_conflict")}
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            דורשים טיפול / מועד ביטול בשבת (2)
          </Button>
        </div>
        <span className="text-xs text-[#4A5D5A] font-medium">
          כל המחירים הם לזוג ולכל תקופת השהות במלון • שעות הביטול לפי שעון ישראל
        </span>
      </div>

      {/* Regular Route Hotels List */}
      <div className="space-y-4">
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
                  className="px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b"
                  style={{
                    backgroundColor: reg.bgSoft,
                    borderColor: reg.borderSoft,
                  }}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white tabular-nums"
                      style={{ backgroundColor: reg.color }}
                    >
                      {hotel.order}
                    </span>
                    <span
                      className="font-display font-bold text-sm"
                      style={{ color: reg.textColor }}
                    >
                      {hotel.area}
                    </span>
                    <Badge variant="outline" className="bg-white/90 tabular-nums">
                      {hotel.nights} {hotel.nights === 1 ? "לילה" : "לילות"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {getPaymentBadge(hotel.paymentStatus)}
                    <Badge variant="secondary">
                      הוזמן ע"י: {hotel.bookedBy} • {hotel.platform}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    {/* Left/Main column: Hotel Name, Room & Dates */}
                    <div className="lg:col-span-5 space-y-2">
                      <h3 className="font-display text-xl font-bold text-[#142321]">
                        {hotel.hotelName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#142321] font-medium">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-[#0B4F4A]" />
                          כניסה: <strong>{hotel.checkIn}</strong>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          יציאה: <strong>{hotel.checkOut}</strong>
                        </span>
                      </div>
                      <div className="text-sm text-[#4A5D5A] space-y-1 pt-1">
                        <div className="flex items-start gap-1.5">
                          <UserCheck className="h-4 w-4 text-[#0B4F4A] shrink-0 mt-0.5" />
                          <span>
                            <strong>חדר ומיטה:</strong> {hotel.roomDetails}
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
                    <div className="lg:col-span-4 rounded-xl bg-[#FAF7F2] border border-[#E6DFD3] p-3.5 space-y-1.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs font-bold text-[#4A5D5A]">
                          מחיר לזוג לכל השהות:
                        </span>
                        <span className="font-display text-xl font-bold text-[#0B4F4A] tabular-nums">
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
                    <div className="lg:col-span-3 space-y-3">
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
                          <span>תנאי ביטול (שעון ישראל):</span>
                        </div>
                        <div className="font-semibold">
                          {hotel.freeCancellationUntil}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={hotel.mapUrl} target="_blank" rel="noreferrer">
                            <MapPin className="h-3.5 w-3.5" />
                            מפה
                          </a>
                        </Button>
                        <Button variant="secondary" size="sm" className="flex-1" asChild>
                          <a
                            href={hotel.bookingSearchUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            דף המלון
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Shabbat / Open Action Alert Banner if present */}
                  {(hotel.shabbatConflictExplanation || hotel.openActionWarning) && (
                    <div className="mt-4 rounded-xl border border-[#EF4444] bg-[#FEF2F2] p-3.5 text-xs text-[#991B1B] space-y-1">
                      {hotel.openActionWarning && (
                        <div className="font-bold text-sm flex items-center gap-1.5">
                          <AlertTriangle className="h-4 w-4 shrink-0 text-[#DC2626]" />
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
