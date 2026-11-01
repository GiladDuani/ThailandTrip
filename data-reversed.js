// תאילנד 2026 - מסלול הפוך (דרום תחילה ← צ'יאנג מאי אחרי פסטיבל הפנסים ← בנגקוק)
// מותאם לתקציב חכם (200–400 ₪ ללילה במלונות מצוינים) + עלויות מלאות של כל אטרקציה, טיסה ונסיעה

const TRIP_DATA = {
  meta: {
    title: "תאילנד 2026 • מסלול חכם וחסכוני",
    subtitle: "דרום ← צפון ← בנגקוק (עוקף פסטיבל הפנסים!) • 22.11–14.12.2026 • תקציב מלונות 200–400 ₪ ללילה",
    daysCount: 23,
    nightsCount: 21,
    shabbatCount: 3,
    flightInfo: {
      outbound: "הלוך (ראשון 22.11): EY 610 מת\"א (06:20) לאבו דאבי (11:15, A321) • EY 400 מאבו דאבי (14:20) לבנגקוק BKK (נחיתה 23:40, Boeing 787-9)",
      inbound: "חזור (שני 14.12): EY 401 מבנגקוק BKK (02:55 לפנות בוקר) לאבו דאבי (06:45, Boeing 787-9) • EY 593 מאבו דאבי (08:45) לת\"א (נחיתה 10:20, A321)"
    },
    regions: [
      { id: "phuket_phiphi", name: "קופיפי ופוקט (שבת 1)", color: "#0284c7", label: "קופיפי (3 לילות) + פוקט לשבת חב\"ד בלבד (3 לילות)" },
      { id: "krabi", name: "קראבי וריילי ביץ'", color: "#d97706", label: "אאו נאנג, ריילי והאיים (4 לילות)" },
      { id: "north", name: "צ'יאנג מאי והצפון (שבת 2)", color: "#0d9488", label: "צ'יאנג מאי במלון אחד ל-6 לילות (אחרי הפסטיבל!)" },
      { id: "bangkok", name: "בנגקוק (שבת 3)", color: "#7c3aed", label: "עיר הבירה, אטרקציות ושופינג (4 לילות)" }
    ]
  },

  shabbats: [
    {
      number: 1,
      date: "28.11.2026",
      hebrewDate: "י\"ח כסלו תשפ\"ז",
      location: "פוקט (מגיעים בחמישי מקופיפי רק לשבת!)",
      chabadName: "בית חב\"ד פוקט – חוף פטונג (9/6 Rat-U-Thit 200 Pee Rd)",
      chabadUrl: "https://chabadthailand.co.il/houses/phuket/",
      mapUrl: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw",
      arrivalPlan: "מבלים 3 לילות בקופיפי (23–26.11), וביום חמישי בצהריים (26.11) לוקחים מעבורת לפוקט ל-3 לילות בלבד (חמישי עד ראשון 26–29.11) נטו בשביל חווית בית חב\"ד פוקט ושייט יום אחד.",
      hotelRequirements: "מלונות מומלצים ופנויים (26–29.11) במרחק 5–10 דק' הליכה מבית חב\"ד פוקט בתקציב 225–380 ₪ ללילה:",
      recommendedHotels: [
        { name: "SLEEP WITH ME HOTEL design hotel @ patong (4★) – 225 ₪ ללילה!", mapUrl: "https://maps.google.com/?q=Sleep+With+Me+Hotel+Patong&hl=iw", infoUrl: "https://www.booking.com/hotel/th/sleep-with-me-patong-beach.he.html?checkin=2026-11-26&checkout=2026-11-29&group_adults=2&no_rooms=1&selected_currency=ILS", note: "674 ₪ לכל ה-3 לילות לזוג! (225 ₪ ללילה). מרחק מבית חב\"ד: כ-6 דקות הליכה על אותו רחוב ישר (Rat-U-Thit). ציון 8.2, בריכת גג מעוצבת." },
        { name: "The Gig Hotel Patong (4★) – 292 ₪ ללילה!", mapUrl: "https://maps.google.com/?q=The+Gig+Hotel+Patong&hl=iw", infoUrl: "https://www.booking.com/hotel/th/the-gig.he.html?checkin=2026-11-26&checkout=2026-11-29&group_adults=2&no_rooms=1&selected_currency=ILS", note: "878 ₪ לכל ה-3 לילות לזוג! (292 ₪ ללילה). מרחק מבית חב\"ד: כ-8 דקות הליכה. ציון 8.5, בריכת אינפיניטי מהממת על הגג." },
        { name: "Nipa Resort, Patong Beach (4★) – 377 ₪ ללילה", mapUrl: "https://maps.google.com/?q=Nipa+Resort+Patong&hl=iw", infoUrl: "https://www.booking.com/hotel/th/nipa-resort.he.html?checkin=2026-11-26&checkout=2026-11-29&group_adults=2&no_rooms=1&selected_currency=ILS", note: "1,132 ₪ לכל ה-3 לילות לזוג (377 ₪ ללילה). מרחק מבית חב\"ד: כ-7 דקות הליכה. ציון 8.5, ריזורט תאילנדי ירוק ורגוע." },
        { name: "TRIBE Phuket Patong by Accor (4★ חדיש) – 410 ₪ ללילה", mapUrl: "https://maps.google.com/?q=TRIBE+Phuket+Patong&hl=iw", infoUrl: "https://www.booking.com/hotel/th/tribe-phuket-patong.he.html?checkin=2026-11-26&checkout=2026-11-29&group_adults=2&no_rooms=1&selected_currency=ILS", note: "1,231 ₪ לכל ה-3 לילות לזוג (410 ₪ ללילה). מרחק מבית חב\"ד: כ-10 דקות הליכה. ציון 8.7, מלון מעוצב וחדש מרשת Accor." }
      ],
      highlights: "שבת ראשונה חמה בבית חב\"ד פוקט בלי לבזבז ימים מיותרים בפוקט ובמחיר מלון של 225–380 ₪ ללילה!"
    },
    {
      number: 2,
      date: "05.12.2026",
      hebrewDate: "כ\"ה כסלו תשפ\"ז (שבת חנוכה + נר ראשון במוצ\"ש!)",
      location: "צ'יאנג מאי (6 לילות רצופים במלון אחד: 03–09.12)",
      chabadName: "בית חב\"ד צ'יאנג מאי (189/15 Changklan Rd)",
      chabadUrl: "https://chabadthailand.co.il/houses/chiang-mai/",
      mapUrl: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw",
      arrivalPlan: "טסים בטיסה ישירה מקראבי לצ'יאנג מאי ביום חמישי 03.12 ומתמקמים במלון אחד ל-6 לילות רצופים (03–09.12) בלי שום עומס של פסטיבל הפנסים!",
      hotelRequirements: "מלונות פנויים לכל 6 הלילות ברצף (03–09.12) ליד בית חב\"ד צ'יאנג מאי בתקציב 184–340 ₪ ללילה:",
      recommendedHotels: [
        { name: "Dusit Princess Chiang Mai (4★ יוקרתי) – 340 ₪ ללילה!", mapUrl: "https://maps.google.com/?q=Dusit+Princess+Chiang+Mai&hl=iw", infoUrl: "https://www.booking.com/hotel/th/royal-princess-chiang-mai.he.html?checkin=2026-12-03&checkout=2026-12-09&group_adults=2&no_rooms=1&selected_currency=ILS", note: "2,045 ₪ לכל ה-6 לילות לזוג! (340 ₪ ללילה). מרחק מבית חב\"ד: 10 דק' הליכה על רחוב שוק הלילה. ציון 8.8 נהדר, רשת Dusit היוקרתית – הבחירה המושלמת בתקציב 300–400 ₪!" },
        { name: "The Empress Hotel Chiang Mai (4★) – 251 ₪ ללילה!", mapUrl: "https://maps.google.com/?q=The+Empress+Hotel+Chiang+Mai&hl=iw", infoUrl: "https://www.booking.com/hotel/th/the-empress-chiangmai.he.html?checkin=2026-12-03&checkout=2026-12-09&group_adults=2&no_rooms=1&selected_currency=ILS", note: "1,506 ₪ לכל ה-6 לילות לזוג! (251 ₪ ללילה). מרחק מבית חב\"ד: 3 דקות הליכה בלבד! ציון 8.8 נהדר, מפתח מכני ובריכה גדולה." },
        { name: "Duangtawan Hotel Chiang Mai (4★) – 184 ₪ ללילה!", mapUrl: "https://maps.google.com/?q=Duangtawan+Hotel+Chiang+Mai&hl=iw", infoUrl: "https://www.booking.com/hotel/th/duangtawan-chinagmai.he.html?checkin=2026-12-03&checkout=2026-12-09&group_adults=2&no_rooms=1&selected_currency=ILS", note: "1,106 ₪ לכל ה-6 לילות לזוג! (184 ₪ ללילה). מרחק מבית חב\"ד: 10 דק' הליכה. מלון גבוה עם בריכה ונוף לעיר." },
        { name: "The Empress Premier Chiang Mai (5★ פאר) – 595 ₪ ללילה", mapUrl: "https://maps.google.com/?q=The+Empress+Premier+Chiang+Mai&hl=iw", infoUrl: "https://www.booking.com/hotel/th/the-empress-premier-chiang-mai.he.html?checkin=2026-12-03&checkout=2026-12-09&group_adults=2&no_rooms=1&selected_currency=ILS", note: "3,570 ₪ לכל ה-6 לילות לזוג (595 ₪ ללילה). מרחק מבית חב\"ד: 3 דק' הליכה. אופציית שדרוג 5 כוכבים (ציון 9.1)." }
      ],
      highlights: "שבת חנוכה בצ'יאנג מאי + הדלקת נר ראשון של חנוכה במוצ\"ש בבית חב\"ד צ'יאנג מאי + שוק מוצ\"ש וראשון!"
    },
    {
      number: 3,
      date: "12.12.2026",
      hebrewDate: "ב' טבת תשפ\"ז (שבת חנוכה)",
      location: "בנגקוק (4 לילות: 09–14.12)",
      chabadName: "מרכז חב\"ד בנגקוק (18 Phra Athit Rd, ליד הקאווסאן)",
      chabadUrl: "https://chabadthailand.co.il/houses/bangkok/",
      mapUrl: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw",
      arrivalPlan: "טסים מצ'יאנג מאי לבנגקוק ביום רביעי בערב (09.12), נהנים מחמישי ושישי שלמים בבנגקוק לפני כניסת שבת.",
      hotelRequirements: "מלונות פנויים (09–14.12) במרחק 3–8 דק' הליכה מבית חב\"ד בנגקוק בתקציב 140–310 ₪ ללילה:",
      recommendedHotels: [
        { name: "Villa De Khaosan by Chillax (4★) – 142 ₪ ללילה!", mapUrl: "https://maps.google.com/?q=Villa+De+Khaosan+by+Chillax&hl=iw", infoUrl: "https://www.booking.com/hotel/th/villa-de-khaosan-bangkok.he.html?checkin=2026-12-09&checkout=2026-12-14&group_adults=2&no_rooms=1&selected_currency=ILS", note: "708 ₪ לכל ה-5 לילות לזוג! (142 ₪ ללילה בלבד!). מרחק מבית חב\"ד: כ-6–8 דק' הליכה (מופיע ברשימת המומלצים הרשמית של חב\"ד בנגקוק). ציון 8.6 נהדר!" },
        { name: "Tinidee Trendy Bangkok Khaosan (4★) – 198 ₪ ללילה!", mapUrl: "https://maps.google.com/?q=Tinidee+Trendy+Bangkok+Khaosan&hl=iw", infoUrl: "https://www.booking.com/hotel/th/tinidee-trendy-bangkok-khaosan.he.html?checkin=2026-12-09&checkout=2026-12-14&group_adults=2&no_rooms=1&selected_currency=ILS", note: "991 ₪ לכל ה-5 לילות לזוג! (198 ₪ ללילה). מרחק מבית חב\"ד: כ-5 דק' הליכה. ציון 8.8 נהדר (מעל 6,200 ביקורות!), בריכה חיצונית ומותאם מאוד לישראלים." },
        { name: "The Gravitique Hotel Khaosan (4★ בוטיק) – 253 ₪ ללילה", mapUrl: "https://maps.google.com/?q=The+Gravitique+Hotel+Khaosan&hl=iw", infoUrl: "https://www.booking.com/hotel/th/the-gravitique-hotel-khaosan.he.html?checkin=2026-12-09&checkout=2026-12-14&group_adults=2&no_rooms=1&selected_currency=ILS", note: "1,267 ₪ לכל ה-5 לילות לזוג (253 ₪ ללילה). מרחק מבית חב\"ד: כ-6 דק' הליכה. ציון 8.9 נהדר, מלון חדש ורומנטי." },
        { name: "Casa Vimaya Riverside (4★ על הנהר) – 311 ₪ ללילה", mapUrl: "https://maps.google.com/?q=Casa+Vimaya+Riverside+Bangkok&hl=iw", infoUrl: "https://www.booking.com/hotel/th/casa-vimaya.he.html?checkin=2026-12-09&checkout=2026-12-14&group_adults=2&no_rooms=1&selected_currency=ILS", note: "1,556 ₪ לכל ה-5 לילות לזוג (311 ₪ ללילה). מרחק מבית חב\"ד: כ-3 דק' הליכה על רחוב Phra Sumen/הנהר. ציון 8.9 נהדר עם בריכת גג מול הנהר." }
      ],
      highlights: "שבת חנוכה מרכזית בבנגקוק במלונות מעולים של 142–311 ₪ ללילה!"
    }
  ],

  days: [
    {
      dayNum: 1,
      date: "22.11.2026",
      month: 11,
      dayOfMonth: 22,
      dayOfWeek: "ראשון",
      region: "phuket_phiphi",
      location: "המראה מישראל ונחיתה בלילה בבנגקוק (EY 610 + EY 400)",
      overnight: "מלון צמוד לשדה סוברנבומי (BKK) – כ-120–180 ₪ לזוג",
      travelTime: "טיסה 3:55 שעות + קונקשן 3:05 שעות + טיסה 6:20 שעות",
      activities: [
        { text: "06:20 בבוקר: המראה מנתב\"ג (TLV) בטיסה EY 610 במטוס Airbus A321 (כלול בכרטיס הבינלאומי).", link: null, infoUrl: "https://www.etihad.com/en/fly-etihad/our-fleet" },
        { text: "11:15: נחיתה באבו דאבי (AUH). קונקשן של 3 שעות ו-5 דקות בטרמינל A.", link: "https://maps.google.com/?q=Zayed+International+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Zayed_International_Airport" },
        { text: "14:20: המראה מאבו דאבי בטיסה EY 400 במטוס Boeing 787-9 Dreamliner.", link: null, infoUrl: "https://www.etihad.com/en/fly-etihad/our-fleet" },
        { text: "23:40 בלילה: נחיתה בנמל התעופה סוברנבומי (BKK) בבנגקוק!", link: "https://maps.google.com/?q=Suvarnabhumi+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Suvarnabhumi_Airport" },
        { text: "00:30: מנוחת לילה במלון דקות מהשדה (💰 עלות מלון ליד השדה כולל הסעה: כ-120–180 ₪ לזוג) לקראת טיסת הבוקר לדרום.", link: "https://maps.google.com/?q=Suvarnabhumi+Airport+Hotel+Bangkok&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Suvarnabhumi_Airport" }
      ],
      notes: "היפוך המסלול: יורדים ישר לאיים בדרום ועוקפים לחלוטין את מחירי העתק של פסטיבל הפנסים בצ'יאנג מאי!",
      isShabbat: false
    },
    {
      dayNum: 2,
      date: "23.11.2026",
      month: 11,
      dayOfMonth: 23,
      dayOfWeek: "שני",
      region: "phuket_phiphi",
      location: "טיסת בוקר לפוקט ומעבורת ישירה לקופיפי (3 לילות בקופיפי)",
      overnight: "קופיפי (לילה 1 מתוך 3) • מלונות ב-298–390 ₪ ללילה",
      travelTime: "טיסה שעה ו-25 דק' מ-BKK לפוקט + מעבורת שעה וחצי לקופיפי",
      activities: [
        { text: "בוקר (סביב 09:00): טיסת פנים ישירה מנמל BKK לפוקט HKT (💰 עלות טיסה כולל מזוודה: כ-180–240 ₪ לאדם / 360–480 ₪ לזוג).", link: "https://maps.google.com/?q=Phuket+International+Airport&hl=iw", infoUrl: "https://www.google.com/travel/flights" },
        { text: "נסיעה משדה התעופה של פוקט לרציף Rassada Pier ומעבורת צהריים לקופיפי (💰 עלות מונית + מעבורת: כ-95 ₪ לאדם / 190 ₪ לזוג).", link: "https://maps.google.com/?q=Rassada+Pier+Phuket&hl=iw", infoUrl: "https://www.phuketferry.com/" },
        { text: "צהריים: הגעה לרציף Tonsai בקופיפי (💰 מס כניסה לאי: 20 באט = 2 ₪ לאדם) וצ'ק-אין בריזורט ל-3 לילות (למשל Phi Phi Relax Beach Resort ב-298 ₪ ללילה או PP Erawan Palms ב-352 ₪ ללילה).", link: "https://maps.google.com/?q=Tonsai+Pier+Koh+Phi+Phi&hl=iw", infoUrl: "https://www.booking.com/hotel/th/phi-phi-relax-beach-resort.he.html?checkin=2026-11-23&checkout=2026-11-26&group_adults=2&no_rooms=1&selected_currency=ILS" },
        { text: "ערב: חוף הים, שיטוט בסמטאות קופיפי ומופעי האש בחוף (חינם).", link: "https://maps.google.com/?q=Ko+Phi+Phi+Don&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%A4%D7%99_%D7%A4%D7%99" }
      ],
      notes: "מלונות מומלצים ופנויים בקופיפי (23–26.11): Phi Phi Relax Beach Resort (ציון 8.8 – 894 ₪ ל-3 לילות = 298 ₪ ללילה!) או Panmanee Hotel (ציון 8.9 – 406 ₪ ללילה).",
      isShabbat: false
    },
    {
      dayNum: 3,
      date: "24.11.2026",
      month: 11,
      dayOfMonth: 24,
      dayOfWeek: "שלישי",
      region: "phuket_phiphi",
      location: "קופיפי: שייט בוקר למאיה ביי, לגונת פילה ותצפית השקיעה",
      overnight: "קופיפי (לילה 2 מתוך 3)",
      travelTime: "שייט של 4 שעות בסירת לונגטייל פרטית סביב איי פיפי",
      activities: [
        { text: "בוקר מוקדם (07:30): שייט בסירת לונגטייל פרטית רק לשניכם לאי פיפי לה (💰 עלות סירה פרטית ל-4 שעות: כ-2,500 באט = 265 ₪ לזוג!).", link: "https://maps.google.com/?q=Ko+Phi+Phi+Lee&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ko_Phi_Phi_Lee" },
        { text: "ירידה למפרץ מאיה ביי המפורסם (Maya Bay) עם החול הלבן וצוקי הענק (💰 דמי כניסה לשמורה הלאומית: 400 באט = 42 ₪ לאדם / 85 ₪ לזוג).", link: "https://maps.google.com/?q=Maya+Bay+Koh+Phi+Phi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Maya_Bay" },
        { text: "שחייה ושנירקול במים הצלולים של לגונת פילה (Pileh Lagoon), מערת הוויקינגים וחוף הקופים (כלול בשייט).", link: "https://maps.google.com/?q=Pileh+Lagoon&hl=iw", infoUrl: "https://www.thainationalparks.com/hat-noppharat-thara-mu-ko-phi-phi-national-park" },
        { text: "אחר הצהריים: עלייה לתצפית קופיפי (Phi Phi Viewpoint 1 & 2) לשקיעה פנורמית על שני המפרצים (💰 כניסה לתצפית: 50 באט = 5.5 ₪ לאדם).", link: "https://maps.google.com/?q=Phi+Phi+Viewpoint&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ko_Phi_Phi_Don" }
      ],
      notes: "סה\"כ עלות כל האטרקציות היום לזוג (סירה פרטית + שמורת טבע + תצפית): כ-360 ₪ לזוג.",
      isShabbat: false
    },
    {
      dayNum: 4,
      date: "25.11.2026",
      month: 11,
      dayOfMonth: 25,
      dayOfWeek: "רביעי",
      region: "phuket_phiphi",
      location: "קופיפי: אי הבמבוק (Bamboo Island), חוף Long Beach ונופש טרופי",
      overnight: "קופיפי (לילה 3 מתוך 3)",
      travelTime: "שייט קצר לחופים",
      activities: [
        { text: "בוקר: שייט לאי הבמבוק (Bamboo Island) ושנירקול בשוניות האלמוגים (💰 סירת לונגטייל: כ-200 ₪ לזוג).", link: "https://maps.google.com/?q=Bamboo+Island+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/hat-noppharat-thara-mu-ko-phi-phi-national-park" },
        { text: "אחר הצהריים: מנוחה בחוף Long Beach של קופיפי (חינם), קיאקים ומסאז' תאילנדי מול הים (💰 מסאז' שעה: כ-350 באט = 37 ₪ לאדם).", link: "https://maps.google.com/?q=Long+Beach+Koh+Phi+Phi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%A4%D7%99_%D7%A4%D7%99" }
      ],
      notes: "יום רגוע של חופים וטורקיז בקופיפי.",
      isShabbat: false
    },
    {
      dayNum: 5,
      date: "26.11.2026",
      month: 11,
      dayOfMonth: 26,
      dayOfWeek: "חמישי",
      region: "phuket_phiphi",
      location: "בוקר בקופיפי • ומעבורת צהריים לפוקט (3 לילות בפוקט לשבת חב\"ד)",
      overnight: "פוקט – ליד בית חב\"ד (לילה 1 מתוך 3) • 225–377 ₪ ללילה",
      travelTime: "מעבורת שעה וחצי–שעתיים מקופיפי לפוקט",
      activities: [
        { text: "בוקר רגוע בקופיפי על החוף או בבריכת המלון.", link: null, infoUrl: null },
        { text: "צהריים (סביב 13:30 או 15:30): מעבורת מקופיפי לרציף Rassada בפוקט + הסעה למלון בפטונג (💰 עלות מעבורת + ואן: כ-75 ₪ לאדם / 150 ₪ לזוג).", link: "https://maps.google.com/?q=Rassada+Pier+Phuket&hl=iw", infoUrl: "https://www.phuketferry.com/" },
        { text: "התמקמות במלון ליד בית חב\"ד פוקט ל-3 לילות בלבד (למשל SLEEP WITH ME HOTEL ב-225 ₪ ללילה או The Gig Hotel ב-292 ₪ ללילה).", link: "https://maps.google.com/?q=Sleep+With+Me+Hotel+Patong&hl=iw", infoUrl: "https://www.booking.com/hotel/th/sleep-with-me-patong-beach.he.html?checkin=2026-11-26&checkout=2026-11-29&group_adults=2&no_rooms=1&selected_currency=ILS" },
        { text: "ערב: ארוחת ערב כשרה במסעדת בית חב\"ד פוקט (💰 ארוחה מלאה: כ-50–80 ₪ לאדם) וסיבוב ערב בעיר העתיקה של פוקט (Phuket Old Town – חינם, מונית כ-50 ₪).", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ],
      notes: "כך אתם בפוקט נטו לסוף השבוע של בית חב\"ד (חמישי ערב עד ראשון בוקר) ולא מבזבזים בה ימים מיותרים!",
      isShabbat: false
    },
    {
      dayNum: 6,
      date: "27.11.2026",
      month: 11,
      dayOfMonth: 27,
      dayOfWeek: "שישי",
      region: "phuket_phiphi",
      location: "פוקט: שייט מפרץ פאנג נגה (או יום חופים רגוע) והכנות לשבת",
      overnight: "פוקט – ליד בית חב\"ד (לילה 2 מתוך 3)",
      travelTime: "שייט בוקר-צהריים או התניידות קצרה בפוקט",
      activities: [
        { text: "אופציה א': שייט למפרץ פאנג נגה (Phang Nga Bay), האי ג'יימס בונד וקיאקים במערות הגיר של האי הונג (💰 עלות טיול מאורגן כולל איסוף, קיאקים ושמורה: כ-230 ₪ לאדם / 460 ₪ לזוג).", link: "https://maps.google.com/?q=Phang+Nga+Bay+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%9E%D7%A4%D7%A8%D7%A5_%D7%A4%D7%90%D7%A0%D7%92_%D7%A0%D7%92%D7%94" },
        { text: "אופציה ב' (ללא עלות אטרקציה): בוקר רגוע בבריכת הגג של המלון, חוף פטונג / קארון ותצפית Karon Viewpoint (חינם).", link: "https://maps.google.com/?q=Karon+Viewpoint+Phuket&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A7%D7%98" },
        { text: "אחר הצהריים: התארגנות לשבת והדלקת נרות (סביב 17:47).", link: null, infoUrl: null },
        { text: "קבלת שבת וסעודת ליל שבת חגיגית בבית חב\"ד פוקט (💰 הרשמה לסעודות שבת בחב\"ד: כ-110–130 ₪ לאדם לסעודה).", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ],
      notes: "אם בוחרים בשייט מפרץ פאנג נגה ביום שישי, יש לבחור בסיור החוזר למלון עד 15:30–16:00.",
      isShabbat: false
    },
    {
      dayNum: 7,
      date: "28.11.2026",
      month: 11,
      dayOfMonth: 28,
      dayOfWeek: "שבת",
      region: "phuket_phiphi",
      location: "שבת 1: שבת בבית חב\"ד פוקט",
      overnight: "פוקט – ליד בית חב\"ד (לילה 3 מתוך 3)",
      travelTime: "הליכה רגלית בלבד (6–8 דקות מהמלון לחב\"ד)",
      activities: [
        { text: "תפילת שחרית (10:00) וסעודת שבת בבית חב\"ד פוקט.", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" },
        { text: "מנוחת שבת במלון וטיול רגלי לאורך טיילת חוף פטונג (חינם).", link: "https://maps.google.com/?q=Patong+Beach+Phuket&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A7%D7%98" },
        { text: "סעודה שלישית והבדלה בבית חב\"ד.", link: null, infoUrl: null },
        { text: "מוצאי שבת: הפיצרייה החלבית / הבשרית של בית חב\"ד פוקט פתוחה מ-19:30.", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ],
      notes: "שבת מהנה בבית חב\"ד פוקט במרחק דקות הליכה מהמלון.",
      isShabbat: true
    },
    {
      dayNum: 8,
      date: "29.11.2026",
      month: 11,
      dayOfMonth: 29,
      dayOfWeek: "ראשון",
      region: "krabi",
      location: "מעבר בוקר מפוקט לקראבי (4 לילות בקראבי – אאו נאנג)",
      overnight: "קראבי – אאו נאנג (לילה 1 מתוך 4) • 210–346 ₪ ללילה!",
      travelTime: "שעה וחצי בספידבוט או 2.5 שעות ברכב פרטי מפוקט לקראבי",
      activities: [
        { text: "בוקר: צ'ק-אאוט מפוקט ומעבר לקראבי – בספידבוט על הים או במיניוואן/מונית פרטית (💰 עלות ואן/מעבורת: כ-60–90 ₪ לאדם, או מונית פרטית מדלת לדלת כ-280 ₪ לזוג).", link: "https://maps.google.com/?q=Ao+Nang+Beach+Krabi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%A8%D7%90%D7%91%D7%99" },
        { text: "צהריים: צ'ק-אין במלון 4 כוכבים באאו נאנג ל-4 לילות (למשל Infinity Aonang Krabi ב-298 ₪ ללילה או Happy Hotel Aonang ב-346 ₪ ללילה או Miramalin Resort ב-210 ₪ ללילה!).", link: "https://maps.google.com/?q=Infinity+Aonang+Krabi&hl=iw", infoUrl: "https://www.booking.com/hotel/th/infinity-aonang-krabi.he.html?checkin=2026-11-29&checkout=2026-12-03&group_adults=2&no_rooms=1&selected_currency=ILS" },
        { text: "אחר הצהריים וערב: טיילת חוף אאו נאנג (חינם), שקיעה מול מצוקי הגיר ושוק הלילה Ao Nang Landmark Night Market (כניסה חינם).", link: "https://maps.google.com/?q=Ao+Nang+Landmark+Night+Market&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ao_Nang" }
      ],
      notes: "בקראבי התמורה למחיר מדהימה: מלון 4 כוכבים מצוין כמו Infinity Aonang (ציון 8.7) עולה 1,192 ₪ לכל ה-4 לילות יחד (298 ₪ ללילה לזוג!).",
      isShabbat: false
    },
    {
      dayNum: 9,
      date: "30.11.2026",
      month: 11,
      dayOfMonth: 30,
      dayOfWeek: "שני",
      region: "krabi",
      location: "קראבי: חצי האי ריילי ביץ' (Railay Beach) וחוף פרא נאנג",
      overnight: "קראבי – אאו נאנג (לילה 2 מתוך 4)",
      travelTime: "10 דקות שייט בסירת לונגטייל מאאו נאנג לריילי",
      activities: [
        { text: "בוקר: שייט בסירת לונגטייל מחוף אאו נאנג לחצי האי המבודד ריילי ביץ' (💰 עלות סירה הלוך-חזור: 200 באט לאדם = 21 ₪ לאדם / 42 ₪ לזוג!).", link: "https://maps.google.com/?q=Railay+Beach+Krabi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A8%D7%99%D7%99%D7%9C%D7%99" },
        { text: "בילוי בחוף פרא נאנג (Phra Nang Cave Beach – חינם) – מים שקופים וצוקי גיר דרמטיים.", link: "https://maps.google.com/?q=Phra+Nang+Cave+Beach&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Railay_Beach" },
        { text: "שכירת קיאק שקוף / סאפ סביב המצוקים (💰 עלות קיאק לשעה: כ-300 באט = 32 ₪ לזוג).", link: null, infoUrl: null },
        { text: "שקיעה בחוף Railay West וחזרה בסירה לאאו נאנג.", link: null, infoUrl: null }
      ],
      notes: "אחד הימים הכי יפים בתאילנד והעלות שלו כולה כ-75 ₪ לזוג!",
      isShabbat: false
    },
    {
      dayNum: 10,
      date: "01.12.2026",
      month: 12,
      dayOfMonth: 1,
      dayOfWeek: "שלישי",
      region: "krabi",
      location: "קראבי: שייט שמורת האי הונג (Koh Hong) ותצפית 360°",
      overnight: "קראבי – אאו נאנג (לילה 3 מתוך 4)",
      travelTime: "שייט של 20–30 דקות מאאו נאנג",
      activities: [
        { text: "יציאה לשייט לאי הונג (Koh Hong), הלגונה הפנימית הנסתרת, האי Lading ואי Pakbia (💰 עלות שייט קבוצתי: כ-130 ₪ לאדם, או סירת לונגטייל פרטית רק לשניכם: כ-3,000 באט = 315 ₪ לזוג + דמי שמורה 300 באט = 32 ₪ לאדם).", link: "https://maps.google.com/?q=Ko+Hong+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/than-bok-khorani-national-park" },
        { text: "עלייה לתצפית הפנורמית 360 מעלות בראש האי הונג (כלול בדמי השמורה).", link: "https://maps.google.com/?q=Koh+Hong+Viewpoint+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/than-bok-khorani-national-park" },
        { text: "ערב: מסאז' מפנק ושוק האוכל באאו נאנג.", link: null, infoUrl: null }
      ],
      notes: "הלגונה של האי הונג ותצפית 360 המעלות הן חווית חובה בקראבי.",
      isShabbat: false
    },
    {
      dayNum: 11,
      date: "02.12.2026",
      month: 12,
      dayOfMonth: 2,
      dayOfWeek: "רביעי",
      region: "krabi",
      location: "קראבי: שייט 4 האיים (או בריכת הברקת והמעיינות החמים)",
      overnight: "קראבי – אאו נאנג (לילה 4 מתוך 4)",
      travelTime: "שייט קצר מחוף אאו נאנג או נסיעה ל-Khlong Thom",
      activities: [
        { text: "אופציה א' (ים): שייט 4 האיים של קראבי – אי התרנגולת (Chicken Island), אי פודה (Poda Island) ושרטון החול הלבן של Tup Island החוצה את הים בשפל (💰 עלות שייט: כ-90 ₪ לאדם + דמי שמורה 200 באט = 21 ₪ לאדם).", link: "https://maps.google.com/?q=Tup+Island+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/hat-noppharat-thara-mu-ko-phi-phi-national-park" },
        { text: "אופציה ב' (ג'ונגל): שמורת בריכת הברקת (Emerald Pool) והמעיינות החמים הטבעיים (💰 כניסה לבריכת הברקת: 400 באט = 42 ₪ לאדם, מעיינות חמים: 200 באט = 21 ₪ לאדם, הסעה/סיור: כ-120 ₪ לאדם).", link: "https://maps.google.com/?q=Emerald+Pool+Krabi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Khlong_Thom_district" }
      ],
      notes: "אחרי 10 ימים של איים וחופים בדרום, מחר טסים ישירות לצפון הקריר והירוק!",
      isShabbat: false
    },
    {
      dayNum: 12,
      date: "03.12.2026",
      month: 12,
      dayOfMonth: 3,
      dayOfWeek: "חמישי",
      region: "north",
      location: "טיסה ישירה מקראבי לצ'יאנג מאי! (6 לילות במלון אחד ליד בית חב\"ד)",
      overnight: "צ'יאנג מאי (לילה 1 מתוך 6) • Dusit Princess ב-340 ₪ ללילה או The Empress ב-251 ₪ ללילה!",
      travelTime: "שעתיים טיסה ישירה מקראבי (KBV) לצ'יאנג מאי (CNX)",
      activities: [
        { text: "נסיעה לשדה התעופה של קראבי (30 דק', כ-60 ₪ במונית) וטיסה ישירה של Thai AirAsia לצ'יאנג מאי (💰 עלות טיסה ישירה KBV→CNX: כ-230–310 ₪ לאדם / 460–620 ₪ לזוג).", link: "https://maps.google.com/?q=Krabi+International+Airport&hl=iw", infoUrl: "https://www.google.com/travel/flights" },
        { text: "הגעה לצ'יאנג מאי וצ'ק-אין במלון אחד ל-6 לילות רצופים ליד בית חב\"ד (למשל Dusit Princess ב-340 ₪ ללילה או The Empress ב-251 ₪ ללילה – 10 דק' נסיעה מהשדה במונית של 20 ₪!).", link: "https://maps.google.com/?q=Dusit+Princess+Chiang+Mai&hl=iw", infoUrl: "https://www.booking.com/hotel/th/royal-princess-chiang-mai.he.html?checkin=2026-12-03&checkout=2026-12-09&group_adults=2&no_rooms=1&selected_currency=ILS" },
        { text: "ארוחה חמה בבית חב\"ד צ'יאנג מאי ושיטוט ערב בשוק הלילה המפורסם (Chiang Mai Night Bazaar – כניסה חינם) ממש מחוץ למלון.", link: "https://maps.google.com/?q=Chiang+Mai+Night+Bazaar&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Chiang_Mai_Night_Bazaar" }
      ],
      notes: "תראו את ההבדל: בגלל שהגעתם ב-03.12 (אחרי הפסטיבל), כל המלונות ליד בית חב\"ד פנויים ל-6 לילות רצופים ב-184 עד 340 ₪ ללילה בלי להחליף מלון!",
      isShabbat: false
    },
    {
      dayNum: 13,
      date: "04.12.2026",
      month: 12,
      dayOfMonth: 4,
      dayOfWeek: "שישי",
      region: "north",
      location: "צ'יאנג מאי: המפלים הדביקים, העיר העתיקה והכנות לשבת חנוכה",
      overnight: "צ'יאנג מאי (לילה 2 מתוך 6)",
      travelTime: "50 דקות נסיעה למפלים הדביקים",
      activities: [
        { text: "בוקר: נסיעה ל'מפלים הדביקים' (Bua Thong Sticky Waterfalls) – טיפוס יחפים בתוך המים הזורמים (💰 כניסה לשמורה: חינם! מונית/נהג פרטי הלוך-חזור עם המתנה: כ-120 ₪ לזוג).", link: "https://maps.google.com/?q=Bua+Thong+Waterfalls+Chiang+Mai&hl=iw", infoUrl: "https://www.thainationalparks.com/si-lanna-national-park" },
        { text: "צהריים: חזרה לעיר, שוק הפרחים והפירות Warorot Market (חינם) ואוכל לשבת בבית חב\"ד צ'יאנג מאי.", link: "https://maps.google.com/?q=Warorot+Market+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Warorot_Market" },
        { text: "כניסת שבת (סביב 17:32): קבלת שבת וסעודת ליל שבת חגיגית בבית חב\"ד צ'יאנג מאי (💰 סעודת שבת בחב\"ד: כ-110–130 ₪ לאדם).", link: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/chiang-mai/" }
      ],
      notes: "המפלים הדביקים הם אחת האטרקציות הכי כיפיות בצפון והכניסה אליהם חינם לגמרי!",
      isShabbat: false
    },
    {
      dayNum: 14,
      date: "05.12.2026",
      month: 12,
      dayOfMonth: 5,
      dayOfWeek: "שבת",
      region: "north",
      location: "שבת 2: צ'יאנג מאי + מוצ\"ש נר ראשון של חנוכה ושוק ליל שבת!",
      overnight: "צ'יאנג מאי (לילה 3 מתוך 6)",
      travelTime: "הליכה רגלית בלבד",
      activities: [
        { text: "תפילת שחרית וסעודת שבת בבית חב\"ד צ'יאנג מאי.", link: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/chiang-mai/" },
        { text: "מנוחת שבת במלון וטיול רגלי.", link: null, infoUrl: null },
        { text: "סעודה שלישית והבדלה.", link: null, infoUrl: null },
        { text: "מוצאי שבת: הדלקת נר ראשון של חנוכה בבית חב\"ד צ'יאנג מאי (חינם, עם סופגניות ושמחה גדולה!) ויציאה לשוק ליל שבת המפורסם ברחוב Wua Lai (כניסה חינם).", link: "https://maps.google.com/?q=Wua+Lai+Walking+Street+Chiang+Mai&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/chiang-mai/" }
      ],
      notes: "בזכות ההיפוך אתם זוכים בצ'יאנג מאי גם להדלקת נר ראשון של חנוכה במוצ\"ש וגם לשני שווקי סוף השבוע (שוק מוצ\"ש ושוק יום ראשון)!",
      isShabbat: true
    },
    {
      dayNum: 15,
      date: "06.12.2026",
      month: 12,
      dayOfMonth: 6,
      dayOfWeek: "ראשון",
      region: "north",
      location: "צ'יאנג מאי: שמורת דוי אינתנון • ובערב: שוק יום ראשון הענק!",
      overnight: "צ'יאנג מאי (לילה 4 מתוך 6)",
      travelTime: "נסיעה כ-1.5 שעות לדוי אינתנון",
      activities: [
        { text: "יום טבע בשמורת דוי אינתנון (Doi Inthanon) – הפסגה הגבוהה בתאילנד, מפל ווצ'יראתאן העצום, הפגודות המלכותיות התאומות ושביל יער העננים (💰 עלות סיור מאורגן מלא כולל כניסות וארוחה, או רכב עם נהג פרטי + כניסות לשמורה 300 באט ולפגודות 100 באט: כ-160–210 ₪ לאדם / 320–420 ₪ לזוג).", link: "https://maps.google.com/?q=Doi+Inthanon+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%93%D7%95%D7%99_%D7%90%D7%99%D7%A0%D7%AA%D7%A0%D7%95%D7%9F" },
        { text: "ערב (החל מ-17:00): שוק יום ראשון המפורסם בעיר העתיקה (Sunday Walking Street משער Tha Phae) – עכשיו יש לכם את כל הערב ליהנות ממנו בלי לחץ של טיסה! (כניסה חינם).", link: "https://maps.google.com/?q=Tha+Phae+Gate+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Tha_Phae_Gate" }
      ],
      notes: "יתרון ענק נוסף של היפוך המסלול: אתם לא צריכים לטוס ביום ראשון בערב אלא נשארים בצ'יאנג מאי ונהנים משוק יום ראשון בנחת!",
      isShabbat: false
    },
    {
      dayNum: 16,
      date: "07.12.2026",
      month: 12,
      dayOfMonth: 7,
      dayOfWeek: "שני",
      region: "north",
      location: "צ'יאנג מאי: חוות פילים שיקומית ומתחם One Nimman",
      overnight: "צ'יאנג מאי (לילה 5 מתוך 6)",
      travelTime: "נסיעה של כ-50 דקות לחוות הפילים",
      activities: [
        { text: "בוקר: חוויה מרגשת בחוות פילים אקולוגית (Elephant Jungle Sanctuary) – האכלה ורחצה עם הפילים בנהר (💰 עלות סיור חצי יום כולל איסוף מהמלון: כ-2,400 באט = 250 ₪ לאדם / 500 ₪ לזוג).", link: "https://maps.google.com/?q=Elephant+Jungle+Sanctuary+Chiang+Mai&hl=iw", infoUrl: "https://elephantjunglesanctuary.com/chiang-mai/" },
        { text: "אחר הצהריים וערב: בילוי במתחם המעוצב One Nimman, בתי קפה ומסאז' מפנק (כניסה חינם).", link: "https://maps.google.com/?q=One+Nimman+Chiang+Mai&hl=iw", infoUrl: "https://www.onenimman.com/" }
      ],
      notes: "הביאו בגדי ים ובגדים להחלפה לרחצה עם הפילים.",
      isShabbat: false
    },
    {
      dayNum: 17,
      date: "08.12.2026",
      month: 12,
      dayOfMonth: 8,
      dayOfWeek: "שלישי",
      region: "north",
      location: "צ'יאנג מאי: פסגות מון ג'אם, רכבת הרים בג'ונגל (Pongyang) ודוי סוטפ",
      overnight: "צ'יאנג מאי (לילה 6 מתוך 6)",
      travelTime: "נסיעה כ-45 דקות לאזור Mae Rim",
      activities: [
        { text: "בוקר: עלייה לרכס ההרים מון ג'אם (Mon Jam) וגני הפרחים מעל העננים (💰 כניסה לגני הפרחים: כ-50–100 באט = 5–10 ₪ לאדם, מונית/נהג פרטי לכל היום: כ-180 ₪ לזוג).", link: "https://maps.google.com/?q=Mon+Jam+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Mae_Rim_district" },
        { text: "צהריים: פארק האקסטרים Pongyang Jungle Coaster & Zipline (💰 כרטיס לרכבת ההרים האלפינית בג'ונגל: 300 באט = 32 ₪ לאדם, או חבילת אומגות + קוסטר כ-90–220 ₪ לאדם).", link: "https://maps.google.com/?q=Pongyang+Jungle+Coaster+Zipline&hl=iw", infoUrl: "https://www.thainationalparks.com/doi-suthep-pui-national-park" },
        { text: "אחר הצהריים: תצפית הפנורמה של הר דוי סוטפ (Wat Phra That Doi Suthep) על כל צ'יאנג מאי (💰 כניסה + רכבל: 50 באט = 5.5 ₪ לאדם).", link: "https://maps.google.com/?q=Wat+Phra+That+Doi+Suthep&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%95%D7%90%D7%98_%D7%A4%D7%A8%D7%94_%D7%98%D7%90%D7%98_%D7%93%D7%95%D7%99_%D7%A1%D7%95%D7%98%D7%A4" }
      ],
      notes: "יום אחרון מלא בצ'יאנג מאי עם נופים הרים מרהיבים ועלויות כניסה נמוכות מאוד.",
      isShabbat: false
    },
    {
      dayNum: 18,
      date: "09.12.2026",
      month: 12,
      dayOfMonth: 9,
      dayOfWeek: "רביעי",
      region: "bangkok",
      location: "בוקר בצ'יאנג מאי • ובערב טיסה לבנגקוק! (4 לילות בבנגקוק)",
      overnight: "בנגקוק – ליד בית חב\"ד (לילה 1 מתוך 4) • 142–253 ₪ ללילה!",
      travelTime: "שעה ורבע טיסה ישירה מצ'יאנג מאי לבנגקוק",
      activities: [
        { text: "בוקר וצהריים רגועים בצ'יאנג מאי: בריכה במלון, השלמת מזכרות בשוק המקומי ומסאז' תאילנדי.", link: null, infoUrl: null },
        { text: "אחר הצהריים/ערב: טיסת פנים ישירה מצ'יאנג מאי (CNX) לבנגקוק (💰 עלות טיסה כולל מזוודה: כ-150–210 ₪ לאדם / 300–420 ₪ לזוג).", link: "https://maps.google.com/?q=Chiang+Mai+International+Airport&hl=iw", infoUrl: "https://www.google.com/travel/flights" },
        { text: "נחיתה בבנגקוק וצ'ק-אין במלון ליד בית חב\"ד (למשל Villa De Khaosan by Chillax ב-142 ₪ ללילה או Tinidee Trendy ב-198 ₪ ללילה).", link: "https://maps.google.com/?q=Villa+De+Khaosan+by+Chillax&hl=iw", infoUrl: "https://www.booking.com/hotel/th/villa-de-khaosan-bangkok.he.html?checkin=2026-12-09&checkout=2026-12-14&group_adults=2&no_rooms=1&selected_currency=ILS" }
      ],
      notes: "מגיעים לבנגקוק ברביעי בערב בדיוק כמו שרציתם בשלד המקורי!",
      isShabbat: false
    },
    {
      dayNum: 19,
      date: "10.12.2026",
      month: 12,
      dayOfMonth: 10,
      dayOfWeek: "חמישי",
      region: "bangkok",
      location: "בנגקוק: שייט בנהר, קניון הפאר ICONSIAM ותצפית Mahanakhon",
      overnight: "בנגקוק (לילה 2 מתוך 4)",
      travelTime: "סירת נהר מרציף Phra Arthit הצמוד לבית חב\"ד",
      activities: [
        { text: "בוקר: עלייה על סירת הדגל הכתומה/כחולה מרציף Phra Arthit (צמוד לבית חב\"ד!) לשייט לאורך נהר צ'או פראיה ושוק הפרחים (💰 עלות שייט סירה ציבורית: 16–30 באט = 2–3 ₪ לאדם!).", link: "https://maps.google.com/?q=Pak+Khlong+Talat+Bangkok&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A6%27%D7%90%D7%95_%D7%A4%D7%A8%D7%90%D7%99%D7%94" },
        { text: "צהריים ואחר הצהריים: קניון הענק על הנהר ICONSIAM – השוק הצף הממוזג בקומת הקרקע ומופע המזרקות המרהיב בערב (כניסה חינם!).", link: "https://maps.google.com/?q=ICONSIAM+Bangkok&hl=iw", infoUrl: "https://www.iconsiam.com/en" },
        { text: "ערב: תצפית גורד השחקים Mahanakhon SkyWalk – רצפת הזכוכית בגובה 314 מטר (💰 עלות כרטיס כניסה: כ-880–1,080 באט = 93–115 ₪ לאדם).", link: "https://maps.google.com/?q=King+Power+Mahanakhon&hl=iw", infoUrl: "https://kingpowermahanakhon.co.th/skywalk/" }
      ],
      notes: "שייט בסירת הנהר מרציף Phra Arthit לקניון ICONSIAM עולה כ-3 שקלים לאדם ולוקח אתכם דרך כל קו הרקיע של בנגקוק!",
      isShabbat: false
    },
    {
      dayNum: 20,
      date: "11.12.2026",
      month: 12,
      dayOfMonth: 11,
      dayOfWeek: "שישי",
      region: "bangkok",
      location: "בנגקוק: קניון פלטינום, פראטונם והכנות לשבת חנוכה",
      overnight: "בנגקוק (לילה 3 מתוך 4)",
      travelTime: "מונית / טוק-טוק",
      activities: [
        { text: "בוקר: שופינג בקניון האופנה הסיטונאי פלטינום (Platinum Fashion Mall) ואזור פראטונם (כניסה חינם).", link: "https://maps.google.com/?q=The+Platinum+Fashion+Mall&hl=iw", infoUrl: "https://www.platinumfashionmall.com/" },
        { text: "צהריים: ארוחה כשרה בבית חב\"ד בנגקוק ומנוחה בבריכת המלון.", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" },
        { text: "כניסת שבת (סביב 17:34): הדלקת נרות חנוכה ושבת, קבלת שבת וסעודת ליל שבת בבית חב\"ד בנגקוק (💰 סעודת שבת בחב\"ד: כ-110–130 ₪ לאדם).", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" }
      ],
      notes: "שישי רגוע ונטול לחץ בלב בנגקוק.",
      isShabbat: false
    },
    {
      dayNum: 21,
      date: "12.12.2026",
      month: 12,
      dayOfMonth: 12,
      dayOfWeek: "שבת",
      region: "bangkok",
      location: "שבת 3: שבת חנוכה בבית חב\"ד בנגקוק",
      overnight: "בנגקוק (לילה 4 מתוך 4)",
      travelTime: "הליכה רגלית בלבד (5–7 דקות מהמלון)",
      activities: [
        { text: "תפילת שחרית (10:00) וסעודת שבת חנוכה בבית חב\"ד בנגקוק (18 Phra Athit Rd).", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" },
        { text: "מנוחת שבת במלון.", link: null, infoUrl: null },
        { text: "סעודה שלישית והבדלה.", link: null, infoUrl: null },
        { text: "מוצאי שבת: שיטוט ערב ברחוב הקאווסאן ורמבוטרי (כניסה חינם).", link: "https://maps.google.com/?q=Khaosan+Road&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Khao_San_Road" }
      ],
      notes: "שבת אחרונה בטיול באווירת חנוכה שמחה.",
      isShabbat: true
    },
    {
      dayNum: 22,
      date: "13.12.2026",
      month: 12,
      dayOfMonth: 13,
      dayOfWeek: "ראשון",
      region: "bangkok",
      location: "בנגקוק: שוק סוף השבוע צ'אטוצ'אק, קניוני סיאם ו-MBK • ויציאה בלילה לשדה",
      overnight: "יציאה ב-23:15 לשדה BKK לטיסת הלילה",
      travelTime: "רכבת BTS + מונית ב-23:15 לנמל סוברנבומי (כ-40–50 ₪)",
      activities: [
        { text: "בוקר: שוק סוף השבוע הענק צ'אטוצ'אק (Chatuchak Weekend Market – כניסה חינם!).", link: "https://maps.google.com/?q=Chatuchak+Weekend+Market&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Chatuchak_Weekend_Market" },
        { text: "צהריים ואחר הצהריים: השלמת קניות ומזכרות בקניון MBK, סיאם פראגון (Siam Paragon) ו-CentralWorld.", link: "https://maps.google.com/?q=MBK+Center&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/MBK" },
        { text: "ערב: ארוחת ערב מסכמת במסעדת בית חב\"ד בנגקוק, מקלחת במלון (בזכות הזמנת 5 לילות ב-708–991 ₪ החדר שמור לכם עד הלילה!).", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" },
        { text: "23:15 בלילה: מונית לנמל התעופה סוברנבומי (BKK) לקראת טיסת הלילה ב-02:55 (💰 מונית לשדה כולל אגרה: כ-400 באט = 42 ₪ לזוג).", link: "https://maps.google.com/?q=Suvarnabhumi+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Suvarnabhumi_Airport" }
      ],
      notes: "בגלל שהמלונות בבנגקוק כל כך זולים (142–198 ₪ ללילה), הזמנת 5 לילות (09–14.12) שומרת לכם את החדר עד 23:15 בלילה של ראשון!",
      isShabbat: false
    },
    {
      dayNum: 23,
      date: "14.12.2026",
      month: 12,
      dayOfMonth: 14,
      dayOfWeek: "שני",
      region: "bangkok",
      location: "טיסות חזור לישראל: בנגקוק • אבו דאבי • נתב\"ג (EY 401 + EY 593)",
      overnight: "נחיתה בישראל ב-10:20 בבוקר!",
      travelTime: "טיסה 6:50 שעות + קונקשן שעתיים + טיסה 3:35 שעות",
      activities: [
        { text: "02:55 לפנות בוקר: המראה מבנגקוק (BKK) בטיסה EY 401 לאבו דאבי במטוס Boeing 787-9 Dreamliner.", link: "https://maps.google.com/?q=Suvarnabhumi+Airport&hl=iw", infoUrl: "https://www.etihad.com/en/fly-etihad/our-fleet" },
        { text: "06:45 בבוקר: נחיתה באבו דאבי (AUH) וקונקשן קצר של שעתיים.", link: "https://maps.google.com/?q=Zayed+International+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Zayed_International_Airport" },
        { text: "08:45 בבוקר: המראה מאבו דאבי בטיסה EY 593 לתל אביב במטוס Airbus A321.", link: null, infoUrl: "https://www.etihad.com/en/fly-etihad/our-fleet" },
        { text: "10:20 בבוקר: נחיתה בנתב\"ג (TLV) – ברוכים השבים לישראל!", link: null, infoUrl: null }
      ],
      notes: "נחיתה נוחה בבוקר יום שני בישראל.",
      isShabbat: false
    }
  ],

  advanceBookings: [
    {
      id: "bkk_hkt_flight",
      title: "✈️ טיסת פנים 1: בנגקוק (BKK) לפוקט (HKT) ב-23.11",
      category: "flights",
      urgency: "critical",
      urgencyLabel: "דחיפות קריטית • ~180–240 ₪ לאדם",
      deadlineDate: "2026-09-15",
      deadlineDisplay: "עד 15 בספטמבר 2026",
      description: "טיסת בוקר (סביב 08:30–09:30) מנמל Suvarnabhumi (BKK) לפוקט ביום שני 23.11, כדי להספיק למעבורת הצהריים לקופיפי.",
      criticalNote: "עלות משוערת כולל מזוודה 20 ק\"ג: כ-180–240 ₪ לאדם (360–480 ₪ לזוג). לוודא המראה מ-BKK!",
      linkUrl: "https://www.google.com/travel/flights",
      status: "pending"
    },
    {
      id: "phiphi_hotel_3nights",
      title: "🏝️ ריזורט בקופיפי ל-3 לילות (23–26.11) • 298–352 ₪ ללילה",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה • 894–1,058 ₪ ל-3 לילות",
      deadlineDate: "2026-09-25",
      deadlineDisplay: "עד 25 בספטמבר 2026",
      description: "הזמנת ריזורט בקופיפי ל-3 לילות (שני 23.11 עד חמישי 26.11): Phi Phi Relax Beach Resort (894 ₪ ל-3 לילות = 298 ₪ ללילה, ציון 8.8!) או PP Erawan Palms Resort (1,058 ₪ ל-3 לילות = 352 ₪ ללילה).",
      criticalNote: "שניהם פנויים עכשיו ב-Booking לתאריכים 23–26.11 בתקציב של עד 350 ₪ ללילה!",
      linkUrl: "https://www.booking.com/hotel/th/phi-phi-relax-beach-resort.he.html?checkin=2026-11-23&checkout=2026-11-26&group_adults=2&no_rooms=1&selected_currency=ILS",
      status: "pending"
    },
    {
      id: "phuket_hotel_shabbat1",
      title: "🕯️ מלון בפוקט ליד בית חב\"ד ל-3 לילות (26–29.11) • 225–377 ₪ ללילה",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה • 674–1,132 ₪ ל-3 לילות",
      deadlineDate: "2026-10-01",
      deadlineDisplay: "עד 1 באוקטובר 2026",
      description: "מלון 4 כוכבים במרחק 6–8 דק' הליכה מבית חב\"ד פוקט ל-3 לילות בלבד (חמישי עד ראשון): SLEEP WITH ME HOTEL (674 ₪ ל-3 לילות = 225 ₪ ללילה!), The Gig Hotel (878 ₪ ל-3 לילות = 292 ₪ ללילה) או Nipa Resort (1,132 ₪ ל-3 לילות = 377 ₪ ללילה).",
      criticalNote: "חיסכון עצום לעומת דצמבר! לבקש מפתח מכני לשבת בקבלה.",
      linkUrl: "https://www.booking.com/hotel/th/sleep-with-me-patong-beach.he.html?checkin=2026-11-26&checkout=2026-11-29&group_adults=2&no_rooms=1&selected_currency=ILS",
      status: "pending"
    },
    {
      id: "krabi_hotel_4nights",
      title: "🏖️ מלון 4★ בקראבי (אאו נאנג) ל-4 לילות (29.11–03.12) • 210–346 ₪ ללילה",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה • 838–1,385 ₪ ל-4 לילות",
      deadlineDate: "2026-10-05",
      deadlineDisplay: "עד 5 באוקטובר 2026",
      description: "מלון 4 כוכבים מפנק באאו נאנג ל-4 לילות (ראשון 29.11 עד חמישי 03.12): Infinity Aonang Krabi (1,192 ₪ ל-4 לילות = 298 ₪ ללילה, ציון 8.7!), Happy Hotel Aonang (1,385 ₪ ל-4 לילות = 346 ₪ ללילה, ציון 9.0!) או Miramalin Resort (838 ₪ ל-4 לילות = 210 ₪ ללילה!).",
      criticalNote: "פנויים עכשיו ב-Booking עם ביטול חינם!",
      linkUrl: "https://www.booking.com/hotel/th/infinity-aonang-krabi.he.html?checkin=2026-11-29&checkout=2026-12-03&group_adults=2&no_rooms=1&selected_currency=ILS",
      status: "pending"
    },
    {
      id: "kbv_cnx_flight",
      title: "✈️ טיסת פנים 2 (ישירה!): קראבי (KBV) לצ'יאנג מאי (CNX) ב-03.12",
      category: "flights",
      urgency: "critical",
      urgencyLabel: "דחיפות קריטית • ~230–310 ₪ לאדם",
      deadlineDate: "2026-09-28",
      deadlineDisplay: "עד 28 בספטמבר 2026",
      description: "טיסה ישירה של Thai AirAsia מקראבי (KBV) לצ'יאנג מאי (CNX) ביום חמישי 03.12 (אורך טיסה: שעתיים).",
      criticalNote: "חוסכת קונקשן בבנגקוק ומביאה אתכם לצ'יאנג מאי בדיוק אחרי שפסטיבל הפנסים נגמר!",
      linkUrl: "https://www.google.com/travel/flights",
      status: "pending"
    },
    {
      id: "cnx_hotel_6nights_dec",
      title: "🏨 מלון בצ'יאנג מאי ל-6 לילות כולל שבת (03–09.12) • 184–340 ₪ ללילה!",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה • 1,106–2,045 ₪ ל-6 לילות!",
      deadlineDate: "2026-10-10",
      deadlineDisplay: "עד 10 באוקטובר 2026",
      description: "מלון אחד לכל ה-6 לילות בצ'יאנג מאי ליד בית חב\"ד (בלי פיצולים!): Dusit Princess (2,045 ₪ ל-6 לילות = 340 ₪ ללילה, ציון 8.8!), The Empress Hotel (1,506 ₪ ל-6 לילות = 251 ₪ ללילה, 3 דק' מחב\"ד!) או Duangtawan Hotel (1,106 ₪ ל-6 לילות = 184 ₪ ללילה!).",
      criticalNote: "חיסכון של כ-5,000 ₪ לעומת שבוע פסטיבל הפנסים בנובמבר!",
      linkUrl: "https://www.booking.com/hotel/th/royal-princess-chiang-mai.he.html?checkin=2026-12-03&checkout=2026-12-09&group_adults=2&no_rooms=1&selected_currency=ILS",
      status: "pending"
    },
    {
      id: "cnx_bkk_flight",
      title: "✈️ טיסת פנים 3: צ'יאנג מאי (CNX) לבנגקוק ברביעי בערב (09.12)",
      category: "flights",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה • ~150–210 ₪ לאדם",
      deadlineDate: "2026-10-15",
      deadlineDisplay: "עד 15 באוקטובר 2026",
      description: "טיסת ערב ישירה מצ'יאנג מאי לבנגקוק ביום רביעי 09.12.",
      criticalNote: "עלות משוערת כולל מזוודה: כ-150–210 ₪ לאדם (300–420 ₪ לזוג).",
      linkUrl: "https://www.google.com/travel/flights",
      status: "pending"
    },
    {
      id: "bkk_hotel_5nights",
      title: "🏙️ מלון בבנגקוק ליד חב\"ד (09–14.12) • 142–253 ₪ ללילה!",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה • 708–1,267 ₪ ל-5 לילות",
      deadlineDate: "2026-10-20",
      deadlineDisplay: "עד 20 באוקטובר 2026",
      description: "מלון ליד בית חב\"ד בנגקוק מרביעי 09.12 עד מוצאי ראשון 13.12 ב-23:15: Villa De Khaosan by Chillax (708 ₪ ל-5 לילות = 142 ₪ ללילה, ציון 8.6!), Tinidee Trendy Khaosan (991 ₪ ל-5 לילות = 198 ₪ ללילה, ציון 8.8!) או The Gravitique Hotel (1,267 ₪ ל-5 לילות = 253 ₪ ללילה, ציון 8.9!).",
      criticalNote: "הזמנת 5 לילות עד 14.12 שומרת לכם את החדר עד היציאה לשדה ב-23:15 בלילה!",
      linkUrl: "https://www.booking.com/hotel/th/villa-de-khaosan-bangkok.he.html?checkin=2026-12-09&checkout=2026-12-14&group_adults=2&no_rooms=1&selected_currency=ILS",
      status: "pending"
    },
    {
      id: "ferries_south",
      title: "⛴️ מעבורות והסעות בדרום: פוקט ↔ קופיפי ↔ קראבי",
      category: "ferries",
      urgency: "medium",
      urgencyLabel: "דחיפות בינונית • ~230 ₪ לאדם לכל המעברים",
      deadlineDate: "2026-11-01",
      deadlineDisplay: "עד 1 בנובמבר 2026",
      description: "1) מעבורת מפוקט לקופיפי (23.11, ~95 ₪ לאדם כולל מונית מהשדה). 2) מעבורת מקופיפי לפוקט (26.11, ~75 ₪ לאדם). 3) ספידבוט/רכב מפוקט לקראבי (29.11, ~60–90 ₪ לאדם).",
      criticalNote: "סה\"כ כל המעברים הימיים והיבשתיים בדרום: כ-230 ₪ לאדם (460 ₪ לזוג).",
      linkUrl: "https://www.phuketferry.com/",
      status: "pending"
    },
    {
      id: "shabbat_meals_all",
      title: "🍷 הרשמה לסעודות 3 השבתות בבתי חב\"ד (פוקט, צ'יאנג מאי, בנגקוק)",
      category: "chabad",
      urgency: "medium",
      urgencyLabel: "דחיפות בינונית",
      deadlineDate: "2026-11-15",
      deadlineDisplay: "עד 15 בנובמבר 2026",
      description: "שבת 1 (28.11): חב\"ד פוקט • שבת 2 (05.12 – שבת חנוכה): חב\"ד צ'יאנג מאי • שבת 3 (12.12 – שבת חנוכה): חב\"ד בנגקוק.",
      criticalNote: "",
      linkUrl: "https://chabadthailand.co.il/shabbat/",
      status: "pending"
    }
  ],

  recommendations: [
    {
      region: "phuket_phiphi",
      place: "קופיפי ופוקט (23–29.11) + מחירי אטרקציות",
      items: [
        { type: "nature", title: "שייט סירה פרטית למאיה ביי ולגונת פילה (קופיפי)", desc: "💰 עלות: כ-265 ₪ לזוג לסירה פרטית ל-4 שעות + 42 ₪ לאדם דמי שמורת טבע. שייט בוקר מוקדם לחוף המפורסם וללגונה הטורקיזית.", link: "https://maps.google.com/?q=Maya+Bay+Koh+Phi+Phi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Maya_Bay" },
        { type: "view", title: "תצפית קופיפי (Phi Phi Viewpoint 1 & 2)", desc: "💰 עלות: 50 באט (5.5 ₪ לאדם). תצפית שקיעה פנורמית על שתי רצועות החוף של קופיפי.", link: "https://maps.google.com/?q=Phi+Phi+Viewpoint&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ko_Phi_Phi_Don" },
        { type: "tour", title: "שייט מפרץ פאנג נגה והאי ג'יימס בונד (מפוקט)", desc: "💰 עלות: כ-230 ₪ לאדם (כולל איסוף, ארוחה, קיאקים במערות ודמי שמורה). שייט בין עשרות מצוקי גיר אדירים.", link: "https://maps.google.com/?q=Phang+Nga+Bay+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%9E%D7%A4%D7%A8%D7%A5_%D7%A4%D7%90%D7%A0%D7%92_%D7%A0%D7%92%D7%94" },
        { type: "food", title: "בית חב\"ד פוקט (חוף פטונג)", desc: "💰 סעודת שבת: ~120 ₪ לאדם, מנה במסעדה: 45–75 ₪. מסעדה בשרית, חלבית ומכולת ישראלית במרחק 6–8 דק' הליכה מהמלונות המומלצים.", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ]
    },
    {
      region: "krabi",
      place: "קראבי וריילי ביץ' (29.11–03.12) + מחירי אטרקציות",
      items: [
        { type: "nature", title: "חצי האי ריילי ביץ' וחוף פרא נאנג", desc: "💰 עלות: 200 באט לאדם (21 ₪ לאדם הלוך-חזור בסירת לונגטייל מאאו נאנג). חופים עוצרי נשימה המוקפים מצוקי גיר (הכניסה לחופים חינם!).", link: "https://maps.google.com/?q=Railay+Beach+Krabi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A8%D7%99%D7%99%D7%9C%D7%99" },
        { type: "tour", title: "שייט לאי הונג (Koh Hong) ותצפית 360°", desc: "💰 עלות: שייט קבוצתי ~130 ₪ לאדם (או סירה פרטית ~315 ₪ לזוג) + דמי שמורה 32 ₪ לאדם. לגונה פנימית סגורה ותצפית פנורמית מראש הצוק.", link: "https://maps.google.com/?q=Ko+Hong+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/than-bok-khorani-national-park" },
        { type: "nature", title: "בריכת הברקת (Emerald Pool) והמעיינות החמים", desc: "💰 עלות כניסה: בריכת הברקת 42 ₪ לאדם + מעיינות חמים 21 ₪ לאדם (סיור כולל הסעה: ~120 ₪ לאדם). בריכת מעיינות טבעית בצבע אזמרגד.", link: "https://maps.google.com/?q=Emerald+Pool+Krabi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Khlong_Thom_district" }
      ]
    },
    {
      region: "north",
      place: "צ'יאנג מאי והצפון (03–09.12) + מחירי אטרקציות",
      items: [
        { type: "nature", title: "שמורת דוי אינתנון (Doi Inthanon)", desc: "💰 עלות: כניסה לשמורה 32 ₪ לאדם + פגודות 11 ₪ לאדם (סיור יום מלא כולל הסעות וארוחה: ~170 ₪ לאדם). ההר הגבוה בתאילנד, מפלים ויער עננים.", link: "https://maps.google.com/?q=Doi+Inthanon+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%93%D7%95%D7%99_%D7%90%D7%99%D7%A0%D7%AA%D7%A0%D7%95%D7%9F" },
        { type: "attraction", title: "חוות פילים אקולוגית (Elephant Jungle Sanctuary)", desc: "💰 עלות: 2,400 באט (~250 ₪ לאדם, כולל הסעה הלוך-חזור מהמלון וארוחה). האכלה ורחצה עם פילים בנהר ללא רכיבה.", link: "https://maps.google.com/?q=Elephant+Jungle+Sanctuary+Chiang+Mai&hl=iw", infoUrl: "https://elephantjunglesanctuary.com/chiang-mai/" },
        { type: "nature", title: "המפלים הדביקים (Bua Thong Sticky Waterfalls)", desc: "💰 עלות כניסה: חינם לגמרי! (מונית הלוך-חזור עם המתנה כ-120 ₪ לזוג). מפלי סלע גיר שמאפשרים לטפס יחפים בתוך המים הזורמים.", link: "https://maps.google.com/?q=Bua+Thong+Waterfalls+Chiang+Mai&hl=iw", infoUrl: "https://www.thainationalparks.com/si-lanna-national-park" },
        { type: "attraction", title: "פסגות מון ג'אם, רכבת הרים בג'ונגל ודוי סוטפ", desc: "💰 עלות: רכבת הרים Pongyang Coaster כ-32 ₪ לאדם, גני פרחים במון ג'אם 10 ₪ לאדם, מקדש ותצפית דוי סוטפ 5.5 ₪ לאדם.", link: "https://maps.google.com/?q=Pongyang+Jungle+Coaster+Zipline&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%95%D7%90%D7%98_%D7%A4%D7%A8%D7%94_%D7%98%D7%90%D7%98_%D7%93%D7%95%D7%99_%D7%A1%D7%95%D7%98%D7%A4" }
      ]
    },
    {
      region: "bangkok",
      place: "בנגקוק (09–14.12) + מחירי אטרקציות",
      items: [
        { type: "attraction", title: "שייט בנהר צ'או פראיה וקניון ICONSIAM", desc: "💰 עלות: כניסה ל-ICONSIAM ולשוק הצף הממוזג חינם! סירת הנהר מרציף Phra Arthit עולה 2–3 ₪ לאדם.", link: "https://maps.google.com/?q=ICONSIAM+Bangkok&hl=iw", infoUrl: "https://www.iconsiam.com/en" },
        { type: "view", title: "תצפית גורד השחקים Mahanakhon SkyWalk", desc: "💰 עלות: כ-95–115 ₪ לאדם. תצפית 360 מעלות ורצפת זכוכית שקופה בגובה 314 מטר מעל בנגקוק.", link: "https://maps.google.com/?q=King+Power+Mahanakhon&hl=iw", infoUrl: "https://kingpowermahanakhon.co.th/skywalk/" },
        { type: "shopping", title: "שוק צ'אטוצ'אק (ראשון), קניון MBK ופלטינום", desc: "💰 כניסה חינם! מרכזי הקניות והשווקים המשתלמים ביותר בתאילנד לכל המתנות והקניות לפני הטיסה.", link: "https://maps.google.com/?q=Chatuchak+Weekend+Market&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Chatuchak_Weekend_Market" }
      ]
    }
  ],

  mapPlaces: [
    {
      id: "phi_phi",
      name: "1. קופיפי ומאיה ביי (Koh Phi Phi)",
      region: "phuket_phiphi",
      dates: "23–26.11 (3 לילות • 298–352 ₪ ללילה)",
      lat: 7.7407,
      lng: 98.7784,
      gmapQuery: "Ko+Phi+Phi+Don+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%A4%D7%99_%D7%A4%D7%99",
      desc: "תחנה ראשונה: מפרץ מאיה ביי, לגונת פילה, אי הבמבוק ותצפית קופיפי."
    },
    {
      id: "phuket",
      name: "2. פוקט – לשבת בבית חב\"ד (Phuket)",
      region: "phuket_phiphi",
      dates: "26–29.11 (3 לילות • 225–377 ₪ ללילה)",
      lat: 7.8965,
      lng: 98.2965,
      gmapQuery: "Patong+Beach+Phuket+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A7%D7%98",
      desc: "תחנה שנייה: 3 לילות ממוקדים לשבת 1 בבית חב\"ד פוקט ושייט מפרץ פאנג נגה."
    },
    {
      id: "krabi",
      name: "3. קראבי וריילי ביץ' (Krabi & Railay)",
      region: "krabi",
      dates: "29.11–03.12 (4 לילות • 210–346 ₪ ללילה)",
      lat: 8.0117,
      lng: 98.8390,
      gmapQuery: "Railay+Beach+Krabi+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%A8%D7%99%D7%99%D7%9C%D7%99",
      desc: "תחנה שלישית: חצי האי ריילי ביץ', חוף פרא נאנג, האי הונג, 4 האיים ובריכת הברקת."
    },
    {
      id: "chiang_mai",
      name: "4. צ'יאנג מאי והצפון – שבת 2 (Chiang Mai)",
      region: "north",
      dates: "03–09.12 (6 לילות • 184–340 ₪ ללילה!)",
      lat: 18.7883,
      lng: 98.9853,
      gmapQuery: "Chiang+Mai+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%A6%27%D7%99%D7%90%D7%A0%D7%92_%D7%9E%D7%90%D7%99",
      desc: "תחנה רביעית (אחרי הפסטיבל!): 6 לילות במלון אחד ליד חב\"ד, דוי אינתנון, חוות פילים, המפלים הדביקים, מון ג'אם ושבת חנוכה."
    },
    {
      id: "bangkok",
      name: "5. בנגקוק – שבת 3 ושופינג (Bangkok)",
      region: "bangkok",
      dates: "09–14.12 (4 לילות • 142–253 ₪ ללילה!)",
      lat: 13.7563,
      lng: 100.5018,
      gmapQuery: "Bangkok+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%91%D7%A0%D7%92%D7%A7%D7%95%D7%A7",
      desc: "תחנה חמישית: ICONSIAM, תצפית Mahanakhon, שבת חנוכה בחב\"ד בנגקוק ושופינג בצ'אטוצ'אק ו-MBK."
    }
  ]
};
