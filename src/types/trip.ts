export type RegionId =
  | "bangkok"
  | "phuket"
  | "krabi"
  | "chiang_mai"
  | "loop";

export interface RegionMeta {
  id: RegionId;
  name: string;
  dates: string;
  color: string;
  bgSoft: string;
  borderSoft: string;
  textColor: string;
}

export interface HotelBooking {
  id: string;
  order: number;
  area: string;
  hotelName: string;
  checkIn: string;
  checkInIso: string;
  checkOut: string;
  checkOutIso: string;
  nights: number;
  bookedBy: "גלעד" | "הדר" | "טרם צוין";
  platform: "Booking" | "Agoda" | "Agoda של הדר";
  roomDetails: string;
  mealPlan: string;
  originalPriceDisplay: string;
  ilsPrice: number;
  ilsPriceDisplay: string;
  paymentStatus: "paid" | "scheduled" | "pay_at_hotel" | "partial_cash";
  paymentNote: string;
  freeCancellationUntil: string;
  freeCancellationIso: string | null;
  isNonRefundable?: boolean;
  isShabbatDeadlineConflict?: boolean;
  shabbatConflictExplanation?: string;
  isBackupForLoop?: boolean;
  openActionWarning?: string;
  mapUrl: string;
  bookingSearchUrl: string;
  region: RegionId;
}

export interface FlightOptionQuote {
  id: string;
  optionLabel: string;
  isRecommendedByGilad?: boolean;
  airline: string;
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  couplePriceIls: number;
  couplePriceOriginal: string;
  baggage25kgRule: string;
  baggageIncludedInQuote: boolean;
  baggageAddOnCostIls?: number;
  totalEstimatedWith25kgIls: number;
  timingFitAnalysis: string;
  bookingUrl: string;
  bookingLabel?: string;
  officialAirlineUrl?: string;
  skyscannerUrl?: string;
  googleFlightsUrl: string;
}

export interface DomesticFlightLeg {
  id: string;
  legNumber: number;
  title: string;
  dateDisplay: string;
  dateIso: string;
  fromCity: string;
  toCity: string;
  hotelBefore: string;
  hotelAfter: string;
  hotelConstraintNote: string;
  status: "open_to_book";
  options: FlightOptionQuote[];
}

export interface DayActivity {
  time?: string;
  text: string;
  costDisplay?: string;
  mapUrl?: string;
  infoUrl?: string;
  highlight?: boolean;
}

export interface TripDay {
  dayNum: number;
  date: string;
  dateIso: string;
  dayOfWeek: string;
  title: string;
  subtitle: string;
  region: RegionId;
  isShabbat?: boolean;
  shabbatName?: string;
  candleLighting?: string;
  havdalah?: string;
  hotelName: string;
  hotelId: string;
  backupHotelNote?: string;
  transitSummary: string;
  activities: DayActivity[];
  importantNote?: string;
}

export interface OpenDecisionItem {
  id: string;
  title: string;
  category: "flight" | "hotel_verification" | "shabbat_cancellation" | "shabbat_prep";
  urgency: "critical" | "high" | "medium";
  deadlineDisplay: string;
  deadlineIso: string;
  isShabbatWarning?: boolean;
  description: string;
  actionNote: string;
  linkUrl?: string;
  linkLabel?: string;
}

export interface ShabbatAnchor {
  number: number;
  title: string;
  dateDisplay: string;
  parasha: string;
  location: string;
  candleLighting: string;
  havdalah: string;
  bookedHotelName: string;
  bookedHotelDistance: string;
  bookedHotelDetails: string;
  chabadName: string;
  chabadAddress: string;
  chabadUrl: string;
  chabadMapUrl: string;
  hotelMapUrl: string;
  notes: string[];
}

export interface MapWaypoint {
  id: string;
  stepNumber: number;
  name: string;
  dates: string;
  region: RegionId;
  hotelName: string;
  lat: number;
  lng: number;
  description: string;
  gmapQuery: string;
}
