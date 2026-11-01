// תאילנד 2026 - תכנון טיול: המדריך מאור הוכהויזר ורעייתו
// 22 בנובמבר 2026 עד 14 בדצמבר 2026 (23 ימים)

const TRIP_DATA = {
  meta: {
    title: "תאילנד 2026",
    subtitle: "תכנון טיול: המדריך מאור הוכהויזר ורעייתו • 22.11–14.12.2026",
    daysCount: 23,
    nightsCount: 21,
    shabbatCount: 3,
    flightInfo: {
      outbound: "הלוך (ראשון 22.11): EY 610 מת\"א (06:20) לאבו דאבי (11:15, A321) • EY 400 מאבו דאבי (14:20) לבנגקוק BKK (נחיתה 23:40, Boeing 787-9)",
      inbound: "חזור (שני 14.12): EY 401 מבנגקוק BKK (02:55 לפנות בוקר) לאבו דאבי (06:45, Boeing 787-9) • EY 593 מאבו דאבי (08:45) לת\"א (נחיתה 10:20, A321)"
    },
    regions: [
      { id: "north", name: "צ'יאנג מאי והצפון", color: "#0d9488", label: "צ'יאנג מאי + פסטיבל הפנסים Yi Peng" },
      { id: "phuket_phiphi", name: "קופיפי ופוקט", color: "#0284c7", label: "קופיפי ומלונות יוקרה בפוקט" },
      { id: "krabi", name: "קראבי וריילי", color: "#d97706", label: "אאו נאנג, ריילי ביץ' והאיים" },
      { id: "bangkok", name: "בנגקוק", color: "#7c3aed", label: "עיר הבירה, אטרקציות ושופינג" }
    ]
  },

  shabbats: [
    {
      number: 1,
      date: "28.11.2026",
      hebrewDate: "י\"ח כסלו תשפ\"ז",
      location: "צ'יאנג מאי",
      chabadName: "בית חב\"ד צ'יאנג מאי (189/15 Changklan Rd)",
      chabadUrl: "https://chabadthailand.co.il/houses/chiang-mai/",
      mapUrl: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw",
      arrivalPlan: "שוהים בצ'יאנג מאי ברצף מיום שני 23.11 (כולל פסטיבל הפנסים ב-24–25.11!), כך שמגיעים לשבת רגועים לחלוטין באותו מלון.",
      hotelRequirements: "מלון עם מפתח מכני במרחק הליכה מבית חב\"ד צ'יאנג מאי (רחוב Changklan 189/15). המרחקים אומתו מול מדריך המלונות הרשמי של בית חב\"ד תאילנד:",
      recommendedHotels: [
        { name: "Shangri-La Chiang Mai (5★) – 2 דק' הליכה", mapUrl: "https://maps.google.com/?q=Shangri-La+Chiang+Mai&hl=iw", infoUrl: "https://www.shangri-la.com/chiangmai/shangrila/", note: "מרחק מבית חב\"ד: כ-2 דקות הליכה בלבד (180 מטר)! ריזורט יוקרה 5 כוכבים הכי קרוב לחב\"ד." },
        { name: "The Empress Premier Chiang Mai (5★) – 3 דק' הליכה", mapUrl: "https://maps.google.com/?q=The+Empress+Premier+Chiang+Mai&hl=iw", infoUrl: "https://empresshotels.com/", note: "מרחק מבית חב\"ד: כ-3 דקות הליכה (250 מטר). מלון 5 כוכבים חדיש וצמוד לבית חב\"ד." },
        { name: "dusitD2 Chiang Mai – 10 דק' הליכה", mapUrl: "https://maps.google.com/?q=dusitD2+Chiang+Mai&hl=iw", infoUrl: "https://www.dusit.com/dusitd2-chiangmai/", note: "מרחק מבית חב\"ד: כ-10 דקות הליכה (750 מטר) לאורך רחוב שוק הלילה." },
        { name: "Meliá Chiang Mai (5★) – 15 דק' הליכה", mapUrl: "https://maps.google.com/?q=Melia+Chiang+Mai&hl=iw", infoUrl: "https://www.melia.com/en/hotels/thailand/chiang-mai/melia-chiang-mai", note: "מרחק מבית חב\"ד: כ-15 דקות הליכה (1.1 ק\"מ). מלון 5 כוכבים יוקרתי ומפנק מאוד." }
      ],
      highlights: "סעודות שבת חגיגיות בבית חב\"ד צ'יאנג מאי ומנוחה מלאה אחרי שבוע של טבע ופסטיבל הפנסים."
    },
    {
      number: 2,
      date: "05.12.2026",
      hebrewDate: "כ\"ה כסלו תשפ\"ז (שבת חנוכה)",
      location: "פוקט",
      chabadName: "בית חב\"ד פוקט – חוף פטונג (9/6 Rat-U-Thit 200 Pee Rd)",
      chabadUrl: "https://chabadthailand.co.il/houses/phuket/",
      mapUrl: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw",
      arrivalPlan: "חזרה מקופיפי לפוקט כבר ביום רביעי בערב (02.12), יום חמישי בטיול האיים ושישי רגוע במלון היוקרה בפוקט.",
      hotelRequirements: "מלון יוקרה באזור חוף פטונג (Patong) במרחק הליכה קצר מבית חב\"ד פוקט (ברחוב Rat-U-Thit 200 Pee) עם מפתח מכני לשבת:",
      recommendedHotels: [
        { name: "Mövenpick Myth Hotel Patong Phuket (5★) – 2 דק' הליכה", mapUrl: "https://maps.google.com/?q=Movenpick+Myth+Hotel+Patong+Phuket&hl=iw", infoUrl: "https://www.movenpickmythphuketpatong.com/", note: "מרחק מבית חב\"ד: כ-2 דקות הליכה בלבד (150 מטר – ממש צמוד לבית חב\"ד)! מלון 5 כוכבים יוקרתי ומרהיב." },
        { name: "Hotel Indigo Phuket Patong (5★) – 7 דק' הליכה", mapUrl: "https://maps.google.com/?q=Hotel+Indigo+Phuket+Patong&hl=iw", infoUrl: "https://phuketpatong.hotelindigo.com/", note: "מרחק מבית חב\"ד: כ-6–8 דקות הליכה (600 מטר על אותו רחוב ישר). מלון 5 כוכבים בוטיק-יוקרה." },
        { name: "Phuket Graceland Resort & Spa – 8 דק' הליכה", mapUrl: "https://maps.google.com/?q=Phuket+Graceland+Resort+and+Spa&hl=iw", infoUrl: "https://www.phuketgraceland.com/", note: "מרחק מבית חב\"ד: כ-8–9 דקות הליכה (650 מטר). ריזורט ענק על החוף המורגל מאוד בציבור שומר שבת." },
        { name: "Diamond Cliff Resort & Spa (5★) – 12 דק' הליכה", mapUrl: "https://maps.google.com/?q=Diamond+Cliff+Resort+and+Spa+Phuket&hl=iw", infoUrl: "https://www.diamondcliff.com/", note: "מרחק מבית חב\"ד: כ-10–13 דקות הליכה (850 מטר, חלק אחרון בעלייה קלה). ריזורט 5 כוכבים עם נוף פנורמי לים." }
      ],
      highlights: "שבת יוקרתית בפוקט + הדלקת נר ראשון של חנוכה במוצאי שבת בבית חב\"ד פוקט!"
    },
    {
      number: 3,
      date: "12.12.2026",
      hebrewDate: "ב' טבת תשפ\"ז (שבת חנוכה)",
      location: "בנגקוק",
      chabadName: "מרכז חב\"ד בנגקוק (18 Phra Athit Rd, ליד הקאווסאן)",
      chabadUrl: "https://chabadthailand.co.il/houses/bangkok/",
      mapUrl: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw",
      arrivalPlan: "טיסה מקראבי לבנגקוק כבר ביום רביעי בערב (09.12), כך שיש את כל חמישי ושישי בבנגקוק בנחת לפני כניסת שבת.",
      hotelRequirements: "שימו לב: משכן בית חב\"ד בנגקוק החדש ממוקם ברחוב Phra Athit 18 (סמוך לנהר ולקאווסאן). המרחקים אומתו מול רשימת בית חב\"ד בנגקוק:",
      recommendedHotels: [
        { name: "Riva Surya Bangkok (4.5★) – דקה הליכה (מול בית חב\"ד!)", mapUrl: "https://maps.google.com/?q=Riva+Surya+Bangkok&hl=iw", infoUrl: "https://www.rivasuryabangkok.com/", note: "מרחק מבית חב\"ד: פחות מדקה הליכה (ממש מעבר לכביש מול בית חב\"ד ב-Phra Athit)! מלון בוטיק יוקרתי על הנהר." },
        { name: "Chillax Heritage Hotel (4★) – 2 דק' הליכה", mapUrl: "https://maps.google.com/?q=Chillax+Heritage+Hotel+Bangkok&hl=iw", infoUrl: "https://www.chillaxheritage.com/", note: "מרחק מבית חב\"ד: כ-2 דקות הליכה (צמוד לרחוב בית חב\"ד). מלון פופולרי ומותאם מאוד לשומרי שבת." },
        { name: "The StandardX, Bangkok Phra Arthit – 2 דק' הליכה", mapUrl: "https://maps.google.com/?q=The+StandardX+Bangkok+Phra+Arthit&hl=iw", infoUrl: "https://www.standardhotels.com/bangkok/properties/bangkok", note: "מרחק מבית חב\"ד: כ-2 דקות הליכה (120 מטר על רחוב Phra Athit). מלון בוטיק מעוצב וחדש על הנהר." },
        { name: "Nouvo City Hotel (4★) – 10 דק' הליכה", mapUrl: "https://maps.google.com/?q=Nouvo+City+Hotel+Bangkok&hl=iw", infoUrl: "https://www.nouvocityhotel.com/", note: "מרחק מבית חב\"ד: כ-10 דקות הליכה (750 מטר). מלון מרווח עם חדרים גדולים ומפתחות שבת." }
      ],
      highlights: "שבת חנוכה מרכזית ושמחה בבנגקוק עם מאות מטיילים."
    }
  ],

  days: [
    {
      dayNum: 1,
      date: "22.11.2026",
      month: 11,
      dayOfMonth: 22,
      dayOfWeek: "ראשון",
      region: "north",
      location: "המראה מישראל ונחיתה בלילה בבנגקוק (EY 610 + EY 400)",
      overnight: "מלון צמוד לשדה סוברנבומי (BKK)",
      travelTime: "טיסה 3:55 שעות + קונקשן 3:05 שעות + טיסה 6:20 שעות",
      activities: [
        { text: "06:20 בבוקר: המראה מנתב\"ג (TLV) בטיסה EY 610 במטוס Airbus A321.", link: null, infoUrl: "https://www.etihad.com/en/fly-etihad/our-fleet" },
        { text: "11:15: נחיתה באבו דאבי (AUH). קונקשן של 3 שעות ו-5 דקות בטרמינל A החדש.", link: "https://maps.google.com/?q=Zayed+International+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Zayed_International_Airport" },
        { text: "14:20: המראה מאבו דאבי בטיסה EY 400 במטוס Boeing 787-9 Dreamliner.", link: null, infoUrl: "https://www.etihad.com/en/fly-etihad/our-fleet" },
        { text: "23:40 בלילה: נחיתה בנמל התעופה סוברנבומי (BKK) בבנגקוק!", link: "https://maps.google.com/?q=Suvarnabhumi+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Suvarnabhumi_Airport" },
        { text: "00:30: יציאה מביקורת דרכונים ומנוחה של 6 שעות במלון צמוד לשדה לקראת טיסת הבוקר לצ'יאנג מאי.", link: "https://maps.google.com/?q=Suvarnabhumi+Airport+Hotel+Bangkok&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Suvarnabhumi_Airport" }
      ],
      notes: "וויתור על פאי מאפשר לכם להתמקם במלון אחד בצ'יאנג מאי ל-6 לילות רצופים ולהיות בצ'יאנג מאי בדיוק ביומיים של פסטיבל הפנסים (24–25.11)!",
      isShabbat: false
    },
    {
      dayNum: 2,
      date: "23.11.2026",
      month: 11,
      dayOfMonth: 23,
      dayOfWeek: "שני",
      region: "north",
      location: "טיסה לצ'יאנג מאי, התמקמות ומנוחה, ואורות טרום-פסטיבל הפנסים",
      overnight: "צ'יאנג מאי (לילה 1 מתוך 6)",
      travelTime: "שעה ורבע טיסת פנים מ-BKK לצ'יאנג מאי",
      activities: [
        { text: "בוקר: טיסת פנים ישירה מנמל סוברנבומי (BKK) לצ'יאנג מאי (CNX).", link: "https://maps.google.com/?q=Chiang+Mai+International+Airport&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A6%27%D7%99%D7%90%D7%A0%D7%92_%D7%9E%D7%90%D7%99" },
        { text: "הגעה למלון בצ'יאנג מאי (למשל Shangri-La או Empress Premier הצמודים לבית חב\"ד), צ'ק-אין ל-6 לילות רצופים.", link: null, infoUrl: null },
        { text: "צהריים: מנוחה בבריכת המלון, מסאז' תאילנדי ראשון וארוחה חמה בבית חב\"ד צ'יאנג מאי.", link: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/chiang-mai/" },
        { text: "ערב: שיטוט בשוק הלילה (Night Bazaar) ובעיר העתיקה שמקושטת כולה באלפי פנסים צבעוניים לקראת פסטיבל Yi Peng שמתחיל מחר!", link: "https://maps.google.com/?q=Chiang+Mai+Night+Bazaar&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Chiang_Mai_Night_Bazaar" }
      ],
      notes: "חשוב: בגלל פסטיבל הפנסים שמתקיים ב-24–25.11, מומלץ מאוד להזמין את הטיסה והמלון לצ'יאנג מאי מוקדם ככל האפשר!",
      isShabbat: false
    },
    {
      dayNum: 3,
      date: "24.11.2026",
      month: 11,
      dayOfMonth: 24,
      dayOfWeek: "שלישי",
      region: "north",
      location: "צ'יאנג מאי: שמורת דוי אינתנון • ובערב: פסטיבל הפנסים Yi Peng & Loy Krathong! 🏮",
      overnight: "צ'יאנג מאי (לילה 2 מתוך 6)",
      travelTime: "טיול יום לדוי אינתנון + ערב פסטיבל הפנסים",
      activities: [
        { text: "בוקר וצהריים: יום טבע בשמורת דוי אינתנון (Doi Inthanon) – הפסגה הגבוהה בתאילנד, מפל ווצ'יראתאן, הפגודות המלכותיות התאומות ושביל יער העננים.", link: "https://maps.google.com/?q=Doi+Inthanon+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%93%D7%95%D7%99_%D7%90%D7%99%D7%A0%D7%AA%D7%A0%D7%95%D7%9F" },
        { text: "🏮 ערב פסטיבל הפנסים (Yi Peng & Loy Krathong – לילה 1, ירח מלא 24.11.2026!): חגיגות ברחבי צ'יאנג מאי!", link: "https://maps.google.com/?q=Tha+Phae+Gate+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Yi_Peng" },
        { text: "שיטוט ערב מרהיב בשער טה פאה (Tha Phae Gate), אנדרטת שלושת המלכים וגשר Nawarat על נהר הפינג – השטת סלסלות פרחים מוארות (Krathongs) על המים ותהלוכות מוארות.", link: "https://maps.google.com/?q=Nawarat+Bridge+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Loi_Krathong" }
      ],
      notes: "איזה תזמון מושלם! בשנת 2026 פסטיבל הפנסים (Yi Peng & Loy Krathong) חל בדיוק בימים שלישי ורביעי 24–25 בנובמבר כשאתם בצ'יאנג מאי!",
      isShabbat: false
    },
    {
      dayNum: 4,
      date: "25.11.2026",
      month: 11,
      dayOfMonth: 25,
      dayOfWeek: "רביעי",
      region: "north",
      location: "צ'יאנג מאי: חוות פילים שיקומית • ובערב: הפרחת אלפי פנסים לשמיים (Yi Peng)! 🏮",
      overnight: "צ'יאנג מאי (לילה 3 מתוך 6)",
      travelTime: "בוקר חוות פילים + ערב אירוע הפרחת הפנסים המרכזי",
      activities: [
        { text: "בוקר: חוויה מרגשת בחוות פילים אקולוגית (Ethical Elephant Sanctuary) – האכלה ורחצה עם הפילים בנהר.", link: "https://maps.google.com/?q=Elephant+Jungle+Sanctuary+Chiang+Mai&hl=iw", infoUrl: "https://elephantjunglesanctuary.com/chiang-mai/" },
        { text: "צהריים: מנוחה במלון או ביקור במתחם הבוטיק One Nimman.", link: "https://maps.google.com/?q=One+Nimman+Chiang+Mai&hl=iw", infoUrl: "https://www.onenimman.com/" },
        { text: "🏮 אחר הצהריים וערב (25.11.2026 – ליל השיא של Yi Peng): השתתפות באירוע הפרחת אלפי הפנסים המעופפים לשמיים (Mass Sky Lantern Release במתחם CAD Lanna או מוקדי ההפרחה המורשים מחוץ לעיר), או צפייה במופעי הפסטיבל על נהר הפינג.", link: "https://maps.google.com/?q=CAD+Cultural+Center+Lanna+Chiang+Mai&hl=iw", infoUrl: "https://chiangmaiyipengfestival.com/" }
      ],
      notes: "חשוב לדעת: הפרחת פנסים מעופפים (Khom Loi) אסורה בתוך מרכז העיר (בגלל שדה התעופה) ומותרת רק במתחמי הענק המורשים מחוץ לעיר (ב-24.11 או 25.11) – חובה להזמין כרטיסים חודשים מראש!",
      isShabbat: false
    },
    {
      dayNum: 5,
      date: "26.11.2026",
      month: 11,
      dayOfMonth: 26,
      dayOfWeek: "חמישי",
      region: "north",
      location: "צ'יאנג מאי: המפלים הדביקים, פסגות מון ג'אם ודוי סוטפ",
      overnight: "צ'יאנג מאי (לילה 4 מתוך 6)",
      travelTime: "נסיעה כ-45–50 דקות לאזור Mae Rim והמפלים",
      activities: [
        { text: "בוקר: נסיעה ל'מפלים הדביקים' (Bua Thong Sticky Waterfalls בשמורת Si Lanna) – סלעי גיר מחוספסים שמאפשרים לטפס יחפים ממש בתוך זרם המים!", link: "https://maps.google.com/?q=Bua+Thong+Waterfalls+Chiang+Mai&hl=iw", infoUrl: "https://www.thainationalparks.com/si-lanna-national-park" },
        { text: "צהריים: עלייה לרכס ההרים מון ג'אם (Mon Jam) לתצפית הרים ושדות פרחים, ורכבת הרים אלפינית בג'ונגל ב-Pongyang Jungle Coaster.", link: "https://maps.google.com/?q=Pongyang+Jungle+Coaster+Zipline&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Mae_Rim_district" },
        { text: "אחר הצהריים: עלייה לתצפית הפנורמית של הר דוי סוטפ (Doi Suthep Viewpoint) המשקיפה על כל צ'יאנג מאי.", link: "https://maps.google.com/?q=Wat+Phra+That+Doi+Suthep&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%95%D7%90%D7%98_%D7%A4%D7%A8%D7%94_%D7%98%D7%90%D7%98_%D7%93%D7%95%D7%99_%D7%A1%D7%95%D7%98%D7%A4" },
        { text: "ערב: ארוחת ערב בבית חב\"ד צ'יאנג מאי ומסאז' מפנק.", link: null, infoUrl: null }
      ],
      notes: "אחרי ליל פסטיבל הפנסים אמש, יום חמישי משלב את המפלים הדביקים עם התצפיות של מון ג'אם ודוי סוטפ.",
      isShabbat: false
    },
    {
      dayNum: 6,
      date: "27.11.2026",
      month: 11,
      dayOfMonth: 27,
      dayOfWeek: "שישי",
      region: "north",
      location: "צ'יאנג מאי: העיר העתיקה והכנות רגועות לשבת",
      overnight: "צ'יאנג מאי (לילה 5 מתוך 6)",
      travelTime: "התניידות עירונית קצרה",
      activities: [
        { text: "בוקר רגוע: טיול בסמטאות העיר העתיקה (Old City) של צ'יאנג מאי ובשוק המקומי Warorot Market.", link: "https://maps.google.com/?q=Warorot+Market+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Warorot_Market" },
        { text: "צהריים: אוכל מוכן לשבת וקניות קלות בבית חב\"ד צ'יאנג מאי.", link: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/chiang-mai/" },
        { text: "אחר הצהריים: מנוחה בבריכת המלון והתארגנות לשבת (הדלקת נרות סביב 17:32).", link: null, infoUrl: null },
        { text: "קבלת שבת וסעודת ליל שבת חגיגית בבית חב\"ד צ'יאנג מאי (2–3 דקות הליכה ממלון Shangri-La / Empress Premier).", link: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/chiang-mai/" }
      ],
      notes: "שישי רגוע ונינוח בלי שום נסיעות בין-עירוניות.",
      isShabbat: false
    },
    {
      dayNum: 7,
      date: "28.11.2026",
      month: 11,
      dayOfMonth: 28,
      dayOfWeek: "שבת",
      region: "north",
      location: "שבת 1: מנוחת שבת בצ'יאנג מאי",
      overnight: "צ'יאנג מאי (לילה 6 מתוך 6)",
      travelTime: "הליכה רגלית בלבד",
      activities: [
        { text: "תפילת שחרית וסעודת שבת בבית חב\"ד צ'יאנג מאי.", link: "https://maps.google.com/?q=Chabad+House+Chiang+Mai&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/chiang-mai/" },
        { text: "מנוחת שבת שלווה במלון וטיול רגלי קצר בסביבה.", link: null, infoUrl: null },
        { text: "סעודה שלישית והבדלה בבית חב\"ד.", link: null, infoUrl: null },
        { text: "מוצאי שבת: שוק ליל שבת המפורסם (Saturday Night Walking Street) ברחוב Wua Lai!", link: "https://maps.google.com/?q=Wua+Lai+Walking+Street+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Chiang_Mai_Night_Bazaar" }
      ],
      notes: "שוק ליל שבת ברחוב Wua Lai נפתח במוצ\"ש ומציע אווירה מעולה ומזכרות בעבודת יד.",
      isShabbat: true
    },
    {
      dayNum: 8,
      date: "29.11.2026",
      month: 11,
      dayOfMonth: 29,
      dayOfWeek: "ראשון",
      region: "phuket_phiphi",
      location: "מצ'יאנג מאי לפוקט ומעבר לקופיפי (או שוק יום ראשון בצ'יאנג מאי)",
      overnight: "קופיפי (או ליל מעבר בפוקט אם נשארים לשוק ערב)",
      travelTime: "טיסה ישירה צ'יאנג מאי – פוקט (שעתיים) + מעבורת לקופיפי (1.5–2 שעות)",
      activities: [
        { text: "אופציה א' (הגעה לקופיפי כבר בראשון): טיסת בוקר ישירה מצ'יאנג מאי לפוקט (HKT), נסיעה לרציף Rassada ומעבורת של הצהריים ישירות לקופיפי.", link: "https://maps.google.com/?q=Rassada+Pier+Phuket&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%A4%D7%99_%D7%A4%D7%99" },
        { text: "אופציה ב' (כדי להספיק את שוק יום ראשון בצ'יאנג מאי): בילוי בשוק יום ראשון הענק בעיר העתיקה (Sunday Walking Street בשער Tha Phae שנפתח ב-17:00), טיסת לילה לפוקט, ומעבורת בשני בבוקר (08:30) לקופיפי.", link: "https://maps.google.com/?q=Tha+Phae+Walking+Street+Chiang+Mai&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Tha_Phae_Gate" },
        { text: "ערב בקופיפי: התמקמות בריזורט, סיבוב בסמטאות הכפר (Tonsai Village) ואווירת אי טרופית.", link: "https://maps.google.com/?q=Tonsai+Pier+Koh+Phi+Phi&hl=iw", infoUrl: "https://www.thainationalparks.com/hat-noppharat-thara-mu-ko-phi-phi-national-park" }
      ],
      notes: "טיפ חשוב: שוק מוצ\"ש (Wua Lai) ושוק יום ראשון בצ'יאנג מאי דומים מאוד! אם תלכו לשוק במוצ\"ש (28.11), תוכלו לטוס בראשון בבוקר ולהרוויח 3 לילות מלאים בקופיפי!",
      isShabbat: false
    },
    {
      dayNum: 9,
      date: "30.11.2026",
      month: 11,
      dayOfMonth: 30,
      dayOfWeek: "שני",
      region: "phuket_phiphi",
      location: "קופיפי: שייט למאיה ביי, לגונת פילה ותצפית קופיפי",
      overnight: "קופיפי",
      travelTime: "שייט בסירת לונגטייל / ספידבוט פרטית סביב איי פיפי",
      activities: [
        { text: "בוקר מוקדם: יציאה בסירה פרטית לאי פיפי לה (Phi Phi Leh) לפני הגעת ההמונים.", link: "https://maps.google.com/?q=Ko+Phi+Phi+Lee&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ko_Phi_Phi_Lee" },
        { text: "ביקור במפרץ מאיה ביי המפורסם (Maya Bay) עם החול הלבן וצוקי הענק.", link: "https://maps.google.com/?q=Maya+Bay+Koh+Phi+Phi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Maya_Bay" },
        { text: "שחייה ושנירקול במים הצלולים של לגונת פילה (Pileh Lagoon) ומערת הוויקינגים.", link: "https://maps.google.com/?q=Pileh+Lagoon&hl=iw", infoUrl: "https://www.thainationalparks.com/hat-noppharat-thara-mu-ko-phi-phi-national-park" },
        { text: "אחר הצהריים: עלייה לתצפית קופיפי המפורסמת (Phi Phi Viewpoint 1 & 2) לשקיעה פנורמית על שני המפרצים.", link: "https://maps.google.com/?q=Phi+Phi+Viewpoint&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ko_Phi_Phi_Don" },
        { text: "ערב: מופעי האש על החוף בקופיפי.", link: null, infoUrl: null }
      ],
      notes: "יציאה לשייט מוקדם בבוקר מתאפשרת רק למי שישן בקופיפי – חוויה מדהימה בלי עומס תיירים!",
      isShabbat: false
    },
    {
      dayNum: 10,
      date: "01.12.2026",
      month: 12,
      dayOfMonth: 1,
      dayOfWeek: "שלישי",
      region: "phuket_phiphi",
      location: "קופיפי: אי הבמבוק (Bamboo Island), חוף הקופים ונופש",
      overnight: "קופיפי",
      travelTime: "שייט קצר לחופים המבודדים",
      activities: [
        { text: "שייט לאי הבמבוק (Bamboo Island / Ko Mai Phai) – אי בתולי מוקף רצועת חול לבנה ושוניות אלמוגים עשירות לשנירקול.", link: "https://maps.google.com/?q=Bamboo+Island+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/hat-noppharat-thara-mu-ko-phi-phi-national-park" },
        { text: "עצירה בחוף הקופים (Monkey Beach) וב-Shark Point.", link: "https://maps.google.com/?q=Monkey+Beach+Phi+Phi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ko_Phi_Phi_Don" },
        { text: "אחר הצהריים: מנוחה בחוף Long Beach של קופיפי, קיאקים בים טורקיז ומסאז'ים על החוף.", link: "https://maps.google.com/?q=Long+Beach+Koh+Phi+Phi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%A4%D7%99_%D7%A4%D7%99" }
      ],
      notes: "יום של ים טורקיז, שנירקולים ורוגע מוחלט בקופיפי.",
      isShabbat: false
    },
    {
      dayNum: 11,
      date: "02.12.2026",
      month: 12,
      dayOfMonth: 2,
      dayOfWeek: "רביעי",
      region: "phuket_phiphi",
      location: "קופיפי עד אחר הצהריים ומעבורת אחרונה למלון יוקרה בפוקט",
      overnight: "פוקט – מלון יוקרה (לילה 1 מתוך 4)",
      travelTime: "מעבורת אחרונה מקופיפי לפוקט (שעה וחצי–שעתיים)",
      activities: [
        { text: "בוקר וצהריים: ניצול השעות האחרונות בקופיפי – חוף, בריכה, קפה ושיטוט בסמטאות.", link: null, infoUrl: null },
        { text: "אחר הצהריים (סביב 15:30–16:00): עלייה על המעבורת המאוחרת ביותר מרציף Tonsai בקופיפי חזרה לפוקט (Rassada Pier).", link: "https://maps.google.com/?q=Rassada+Pier+Phuket&hl=iw", infoUrl: "https://www.phuketferry.com/" },
        { text: "ערב: הגעה וצ'ק-אין במלון היוקרה בפוקט (למשל Mövenpick Myth הצמוד לבית חב\"ד או Hotel Indigo במרחק 7 דק' הליכה).", link: "https://maps.google.com/?q=Patong+Beach+Phuket&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A7%D7%98" },
        { text: "ארוחת ערב חמה בבית חב\"ד פוקט (ברחוב Rat-U-Thit 200 Pee בפטונג).", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ],
      notes: "שימו לב: המעבורות הסדירות האחרונות מקופיפי לפוקט יוצאות סביב 15:30–16:00 (כדאי להזמין כרטיס מראש).",
      isShabbat: false
    },
    {
      dayNum: 12,
      date: "03.12.2026",
      month: 12,
      dayOfMonth: 3,
      dayOfWeek: "חמישי",
      region: "phuket_phiphi",
      location: "פוקט: שייט איים מרהיב (מפרץ פאנג נגה / 42 האיים / איי סימילאן)",
      overnight: "פוקט – מלון יוקרה (לילה 2 מתוך 4)",
      travelTime: "טיול שייט יומי מלא מפוקט",
      activities: [
        { text: "יציאה לטיול שייט האיים המפורסם מפוקט – שייט בין עשרות איי גיר ומצוקים פראיים במפרץ פאנג נגה (Phang Nga Bay), קיאקים בתוך מערות ולגונות נסתרות (Hong Island) והאי ג'יימס בונד.", link: "https://maps.google.com/?q=Phang+Nga+Bay+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%9E%D7%A4%D7%A8%D7%A5_%D7%A4%D7%90%D7%A0%D7%92_%D7%A0%D7%92%D7%94" },
        { text: "חלופה מדהימה לעונת דצמבר: שייט לאיי סימילאן (Similan Islands) – שמורת האיים עם המים הכי שקופים וטורקיז בתאילנד (פתוחה רק בחורף!).", link: "https://maps.google.com/?q=Similan+Islands+National+Park&hl=iw", infoUrl: "https://www.thainationalparks.com/mu-ko-similan-national-park" },
        { text: "אחר הצהריים וערב: חזרה למלון היוקרה בפוקט, בריכה מפנקת וערב בעיר העתיקה של פוקט (Phuket Old Town).", link: "https://maps.google.com/?q=Old+Phuket+Town&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Old_Phuket_Town" }
      ],
      notes: "הערה חשובה: שמורת '42 האיים' המקורית (אנג תונג) נמצאת בצד של קו סמוי; בפוקט המקבילה העצומה והמרשימה ביותר היא מפרץ פאנג נגה (40+ איי גיר ומערות קיאקים) או שמורת איי סימילאן.",
      isShabbat: false
    },
    {
      dayNum: 13,
      date: "04.12.2026",
      month: 12,
      dayOfMonth: 4,
      dayOfWeek: "שישי",
      region: "phuket_phiphi",
      location: "פוקט: פינוק במלון היוקרה, חופים והכנות לשבת חנוכה",
      overnight: "פוקט – מלון יוקרה (לילה 3 מתוך 4)",
      travelTime: "נסיעות קצרות בפוקט",
      activities: [
        { text: "בוקר של פינוק מלא במתקני מלון היוקרה בפוקט, חוף פטונג / חוף קארון ותצפית שלושת החופים (Karon Viewpoint).", link: "https://maps.google.com/?q=Karon+Viewpoint+Phuket&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A7%D7%98" },
        { text: "צהריים: התארגנות לשבת וקניית אוכל / חלות בבית חב\"ד פוקט.", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" },
        { text: "כניסת שבת (סביב 17:48): קבלת שבת וסעודת ליל שבת חגיגית בבית חב\"ד פוקט.", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ],
      notes: "יום שישי רגוע ומפנק במיוחד בריזורט היוקרתי בפוקט.",
      isShabbat: false
    },
    {
      dayNum: 14,
      date: "05.12.2026",
      month: 12,
      dayOfMonth: 5,
      dayOfWeek: "שבת",
      region: "phuket_phiphi",
      location: "שבת 2: פוקט + מוצ\"ש הדלקת נר ראשון של חנוכה!",
      overnight: "פוקט – מלון יוקרה (לילה 4 מתוך 4)",
      travelTime: "הליכה רגלית בלבד",
      activities: [
        { text: "תפילת שחרית וסעודת שבת בבית חב\"ד פוקט.", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" },
        { text: "מנוחת שבת מפנקת במלון וטיול רגלי לאורך טיילת חוף פטונג.", link: "https://maps.google.com/?q=Patong+Beach+Phuket&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A7%D7%98" },
        { text: "סעודה שלישית והבדלה.", link: null, infoUrl: null },
        { text: "מוצאי שבת חגיגי: הדלקת נר ראשון של חנוכה בבית חב\"ד פוקט עם סופגניות ושמחה גדולה!", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ],
      notes: "שילוב מושלם של מלון יוקרה במרחק דקות הליכה מחב\"ד, חוף ים והדלקת נר ראשון של חנוכה.",
      isShabbat: true
    },
    {
      dayNum: 15,
      date: "06.12.2026",
      month: 12,
      dayOfMonth: 6,
      dayOfWeek: "ראשון",
      region: "krabi",
      location: "מעבר מפוקט לקראבי והתמקמות באאו נאנג / ריילי",
      overnight: "קראבי (לילה 1 מתוך 3)",
      travelTime: "שעה וחצי בספידבוט מפוקט לקראבי או 2.5 שעות ברכב פרטי",
      activities: [
        { text: "בוקר: צ'ק-אאוט מהמלון בפוקט ומעבר נוח לקראבי (באמצעות ספידבוט ישירה על הים או רכב פרטי ממוזג מדלת לדלת).", link: "https://maps.google.com/?q=Ao+Nang+Beach+Krabi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%A8%D7%90%D7%91%D7%99" },
        { text: "צהריים: הגעה לקראבי (אזור Ao Nang או חצי האי Railay), צ'ק-אין ל-3 לילות.", link: null, infoUrl: null },
        { text: "אחר הצהריים וערב: טיול לאורך טיילת חוף אאו נאנג, שקיעה מול מצוקי הגיר ושוק הלילה Landmark.", link: "https://maps.google.com/?q=Ao+Nang+Landmark+Night+Market&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ao_Nang" }
      ],
      notes: "המעבר מפוקט לקראבי קצר, נח וישיר מאוד.",
      isShabbat: false
    },
    {
      dayNum: 16,
      date: "07.12.2026",
      month: 12,
      dayOfMonth: 7,
      dayOfWeek: "שני",
      region: "krabi",
      location: "קראבי: חצי האי ריילי ביץ' וחוף פרא נאנג",
      overnight: "קראבי (לילה 2 מתוך 3)",
      travelTime: "10 דקות שייט בסירת לונגטייל מאאו נאנג לריילי",
      activities: [
        { text: "שייט קצר בסירת לונגטייל מסורתית אל חצי האי המבודד ריילי ביץ' (Railay Beach), המוקף מצוקי ענק ונגיש רק מהים.", link: "https://maps.google.com/?q=Railay+Beach+Krabi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A8%D7%99%D7%99%D7%9C%D7%99" },
        { text: "בילוי בחוף פרא נאנג (Phra Nang Cave Beach) – מהחופים היפים בעולם, עם מים שקופים וצוקי גיר דרמטיים.", link: "https://maps.google.com/?q=Phra+Nang+Cave+Beach&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Railay_Beach" },
        { text: "שכירת קיאק שקוף / סאפ סביב המצוקים וצפייה במטפסי צוקים.", link: null, infoUrl: null },
        { text: "שקיעה מהפנטת בחוף Railay West וחזרה בערב לאאו נאנג.", link: null, infoUrl: null }
      ],
      notes: "יום חלומי בחופים הכי מצולמים של מחוז קראבי.",
      isShabbat: false
    },
    {
      dayNum: 17,
      date: "08.12.2026",
      month: 12,
      dayOfMonth: 8,
      dayOfWeek: "שלישי",
      region: "krabi",
      location: "קראבי: שייט 4 האיים או שמורת האי הונג (Koh Hong)",
      overnight: "קראבי (לילה 3 מתוך 3)",
      travelTime: "שייט יומי קצר מחוף אאו נאנג",
      activities: [
        { text: "יציאה לשייט 4 האיים של קראבי: אי התרנגולת (Chicken Island), אי פודה (Poda Island) ושביל החול הלבן של Tup Island החוצה את הים בשפל.", link: "https://maps.google.com/?q=Tup+Island+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/hat-noppharat-thara-mu-ko-phi-phi-national-park" },
        { text: "או שייט לאי הונג (Koh Hong בשמורת Than Bok Khorani) – לגונה פנימית סגורה מוקפת מצוקים ותצפית 360 מעלות מהממת על כל איי קראבי.", link: "https://maps.google.com/?q=Ko+Hong+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/than-bok-khorani-national-park" },
        { text: "ערב: שוק הלילה באאו נאנג ומסאז' מפנק.", link: "https://maps.google.com/?q=Ao+Nang+Night+Market&hl=iw", infoUrl: null }
      ],
      notes: "תצפית 360 המעלות באי הונג (Koh Hong) היא אחת הנקודות היפות ביותר בדרום תאילנד!",
      isShabbat: false
    },
    {
      dayNum: 18,
      date: "09.12.2026",
      month: 12,
      dayOfMonth: 9,
      dayOfWeek: "רביעי",
      region: "krabi",
      location: "קראבי: בריכת הברקת ומעיינות חמים • ובערב טיסה לבנגקוק!",
      overnight: "בנגקוק (לילה 1 מתוך 4)",
      travelTime: "טיול בוקר בקראבי + טיסת ערב (שעה ורבע) מקראבי לבנגקוק",
      activities: [
        { text: "בוקר וצהריים: נסיעה לשמורת בריכת הברקת (Emerald Pool ב-Khlong Thom) – בריכת מים טבעית בצבע טורקיז-אזמרגד בלב הג'ונגל, והמעיינות החמים הטבעיים.", link: "https://maps.google.com/?q=Emerald+Pool+Krabi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Khlong_Thom_district" },
        { text: "אחר הצהריים: איסוף המזוודות ונסיעה לנמל התעופה של קראבי (KBV).", link: "https://maps.google.com/?q=Krabi+International+Airport&hl=iw", infoUrl: null },
        { text: "רביעי בערב: טיסת פנים ישירה מקראבי לבנגקוק!", link: null, infoUrl: null },
        { text: "נחיתה בבנגקוק וצ'ק-אין במלון (למשל Riva Surya שממש מול בית חב\"ד ב-Phra Athit, ל-4 לילות עד הטיסה לישראל).", link: "https://maps.google.com/?q=Riva+Surya+Bangkok&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%91%D7%A0%D7%92%D7%A7%D7%95%D7%A7" }
      ],
      notes: "המעבר לבנגקוק ברביעי בערב נותן לכם את כל חמישי, שישי וראשון בבנגקוק!",
      isShabbat: false
    },
    {
      dayNum: 19,
      date: "10.12.2026",
      month: 12,
      dayOfMonth: 10,
      dayOfWeek: "חמישי",
      region: "bangkok",
      location: "בנגקוק: שייט בנהר, אטרקציות וקניון הפאר Iconsiam",
      overnight: "בנגקוק (לילה 2 מתוך 4)",
      travelTime: "סירות נהר / רכבת עילית BTS / טוק-טוק",
      activities: [
        { text: "בוקר: שייט בסירה על נהר צ'או פראיה (מרציף Phra Arthit הצמוד לבית חב\"ד!) ובתעלות הציוריות של בנגקוק, ושוק הפרחים (Pak Khlong Talat).", link: "https://maps.google.com/?q=Pak+Khlong+Talat+Bangkok&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A6%27%D7%90%D7%95_%D7%A4%D7%A8%D7%90%D7%99%D7%94" },
        { text: "צהריים ואחר הצהריים: ביקור בקניון הענק והמפואר על הנהר – ICONSIAM (כולל השוק הצף הממוזג בקומת הכניסה ותצפית המרפסת על הנהר).", link: "https://maps.google.com/?q=ICONSIAM+Bangkok&hl=iw", infoUrl: "https://www.iconsiam.com/en" },
        { text: "ערב: עלייה לתצפית גורד השחקים Mahanakhon SkyWalk (רצפת הזכוכית בגובה 314 מטר) וארוחת ערב כשרה בבנגקוק.", link: "https://maps.google.com/?q=King+Power+Mahanakhon&hl=iw", infoUrl: "https://kingpowermahanakhon.co.th/skywalk/" }
      ],
      notes: "בזכות הטיסה ברביעי בערב, הרווחתם יום חמישי שלם של חוויות ואטרקציות בבנגקוק!",
      isShabbat: false
    },
    {
      dayNum: 20,
      date: "11.12.2026",
      month: 12,
      dayOfMonth: 11,
      dayOfWeek: "שישי",
      region: "bangkok",
      location: "בנגקוק: קניון פלטינום, קאווסאן והכנות לשבת חנוכה",
      overnight: "בנגקוק (לילה 3 מתוך 4)",
      travelTime: "מוניות / טוק-טוק / הליכה רגלית",
      activities: [
        { text: "בוקר: סיבוב קניות ראשון בקניון האופנה הסיטונאי פלטינום (Platinum Fashion Mall) ואזור פראטונם.", link: "https://maps.google.com/?q=The+Platinum+Fashion+Mall&hl=iw", infoUrl: "https://www.platinumfashionmall.com/" },
        { text: "צהריים: אוכל כשר חם בבית חב\"ד בנגקוק, מסאז' מפנק וחזרה למלון למנוחה.", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" },
        { text: "התארגנות לשבת ובדיקת מפתח מכני בחדר.", link: null, infoUrl: null },
        { text: "כניסת שבת (סביב 17:34): הדלקת נרות חנוכה ושבת, קבלת שבת וסעודת ליל שבת חגיגית בבית חב\"ד בנגקוק.", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" }
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
      location: "שבת 3: בנגקוק + שבת חנוכה",
      overnight: "בנגקוק (לילה 4 מתוך 4)",
      travelTime: "הליכה רגלית בלבד",
      activities: [
        { text: "תפילת שחרית בבית חב\"ד המרכזי בבנגקוק (רחוב Phra Athit 18).", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" },
        { text: "קידוש וסעודת שבת חנוכה שמחה במיוחד.", link: null, infoUrl: null },
        { text: "מנוחת שבת במלון.", link: null, infoUrl: null },
        { text: "תפילת מנחה, סעודה שלישית, ערבית והבדלה.", link: null, infoUrl: null },
        { text: "מוצאי שבת: הדלקת נרות חנוכה ושיטוט ערב באזור רחוב הקאווסאן ורמבוטרי.", link: "https://maps.google.com/?q=Khaosan+Road&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Khao_San_Road" }
      ],
      notes: "שבת שלישית ואחרונה בטיול באווירה מיוחדת.",
      isShabbat: true
    },
    {
      dayNum: 22,
      date: "13.12.2026",
      month: 12,
      dayOfMonth: 13,
      dayOfWeek: "ראשון",
      region: "bangkok",
      location: "בנגקוק: שוק סוף השבוע, קניוני סיאם ו-MBK • ויציאה בלילה לשדה",
      overnight: "יציאה ב-23:15 לשדה BKK לטיסת הלילה",
      travelTime: "רכבת BTS / מוניות + נסיעה ב-23:15 לנמל סוברנבומי",
      activities: [
        { text: "בוקר: ביקור בשוק סוף השבוע הענק צ'אטוצ'אק (Chatuchak Weekend Market – פתוח בימי ראשון!).", link: "https://maps.google.com/?q=Chatuchak+Weekend+Market&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Chatuchak_Weekend_Market" },
        { text: "צהריים ואחר הצהריים: השלמת קניות מרוכזת בקניון MBK, סיאם פראגון (Siam Paragon) ו-CentralWorld.", link: "https://maps.google.com/?q=MBK+Center&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/MBK" },
        { text: "ערב: ארוחת ערב מסכמת במסעדת בית חב\"ד בנגקוק.", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" },
        { text: "21:30–23:00: מקלחת והתארגנות במלון (עם Late Check-out או שמירת החדר עד היציאה).", link: null, infoUrl: null },
        { text: "23:15 בלילה: נסיעה במונית לנמל התעופה סוברנבומי (BKK) לקראת המראת הלילה ב-02:55.", link: "https://maps.google.com/?q=Suvarnabhumi+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Suvarnabhumi_Airport" }
      ],
      notes: "יוצאים לשדה במוצאי ראשון ב-23:15 כדי להספיק להחזרי מס (VAT Refund) ודיוטי פרי בנחת.",
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
        { text: "06:45 בבוקר: נחיתה באבו דאבי (AUH) וקונקשן קצר ונוח של שעתיים בלבד.", link: "https://maps.google.com/?q=Zayed+International+Airport&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Zayed_International_Airport" },
        { text: "08:45 בבוקר: המראה מאבו דאבי בטיסה EY 593 לתל אביב במטוס Airbus A321.", link: null, infoUrl: "https://www.etihad.com/en/fly-etihad/our-fleet" },
        { text: "10:20 בבוקר: נחיתה בנתב\"ג (TLV) – ברוכים השבים לישראל!", link: null, infoUrl: null }
      ],
      notes: "נחיתה נוחה בבוקר יום שני בישראל.",
      isShabbat: false
    }
  ],

  advanceBookings: [
    {
      id: "yi_peng_lantern_festival",
      title: "🏮 כרטיסים לפסטיבל הפנסים Yi Peng בצ'יאנג מאי (24–25.11)",
      category: "transport",
      urgency: "critical",
      urgencyLabel: "דחיפות קריטית (אזל מהר!)",
      deadlineDate: "2026-08-15",
      deadlineDisplay: "עד 15 באוגוסט 2026",
      description: "הפרחת אלפי הפנסים המעופפים לשמיים (Mass Sky Lantern Release ב-CAD Lanna או מוקדי ההפרחה המורשים) מתקיימת בדיוק ב-24.11 וב-25.11.2026 כשאתם בצ'יאנג מאי!",
      criticalNote: "אירועי הפרחת הפנסים המרכזיים מחוץ לעיר מחייבים כרטיס מראש (כולל הסעה וארוחה) והכרטיסים אוזלים חודשים מראש! החגיגות בעיר העתיקה ועל נהר הפינג (Loy Krathong) פתוחות בחינם.",
      linkUrl: "https://chiangmaiyipengfestival.com/",
      status: "pending"
    },
    {
      id: "bkk_cnx_flight",
      title: "טיסת פנים: בנגקוק (BKK) לצ'יאנג מאי (23.11)",
      category: "flights",
      urgency: "critical",
      urgencyLabel: "דחיפות קריטית",
      deadlineDate: "2026-09-01",
      deadlineDisplay: "עד 1 בספטמבר 2026",
      description: "טיסת בוקר מנמל Suvarnabhumi (BKK) ישירות לצ'יאנג מאי ביום שני 23.11 (יום לפני פסטיבל הפנסים!).",
      criticalNote: "בגלל פסטיבל הפנסים ב-24–25.11 הטיסות לצ'יאנג מאי מבוקשות מאוד – להזמין מוקדם ולוודא המראה מ-BKK!",
      linkUrl: "https://www.google.com/travel/flights",
      status: "pending"
    },
    {
      id: "cnx_hotel_6nights",
      title: "מלון בצ'יאנג מאי ל-6 לילות כולל פסטיבל הפנסים ושבת (23–29.11)",
      category: "hotels",
      urgency: "critical",
      urgencyLabel: "דחיפות קריטית",
      deadlineDate: "2026-09-05",
      deadlineDisplay: "עד 5 בספטמבר 2026",
      description: "מלון צמוד לבית חב\"ד צ'יאנג מאי ל-6 לילות רצופים: Shangri-La (כ-2 דק' הליכה מחב\"ד), The Empress Premier (כ-3 דק' הליכה), dusitD2 (כ-10 דק') או Meliá (כ-15 דק').",
      criticalNote: "שבוע פסטיבל הפנסים (24–25.11) הוא השבוע הכי מבוקש בשנה בצ'יאנג מאי! מומלץ לסגור מלון מוקדם.",
      linkUrl: "https://www.shangri-la.com/chiangmai/shangrila/",
      status: "pending"
    },
    {
      id: "cnx_hkt_flight",
      title: "טיסת פנים ישירה: צ'יאנג מאי (CNX) לפוקט (HKT) ב-29.11",
      category: "flights",
      urgency: "critical",
      urgencyLabel: "דחיפות קריטית",
      deadlineDate: "2026-09-28",
      deadlineDisplay: "עד 28 בספטמבר 2026",
      description: "טיסה ישירה מצ'יאנג מאי לפוקט ביום ראשון 29.11 (טיסת בוקר של AirAsia / Bangkok Airways אם עוברים באותו יום לקופיפי, או טיסת ערב אם נשארים לשוק יום ראשון).",
      criticalNote: "טיסות ישירות מצ'יאנג מאי לפוקט מבוקשות מאוד ומתמלאות מהר!",
      linkUrl: "https://www.google.com/travel/flights",
      status: "pending"
    },
    {
      id: "phiphi_hotel",
      title: "ריזורט בקופיפי (29.11–02.12)",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה",
      deadlineDate: "2026-10-05",
      deadlineDisplay: "עד 5 באוקטובר 2026",
      description: "הזמנת ריזורט בקופיפי ל-3 לילות (29.11 עד 02.12). מומלץ לבחור אזור נגיש עם חוף טורקיז שקט או קרוב ל-Tonsai.",
      criticalNote: "קופיפי קטנה והמלונות הטובים נתפסים מוקדם לנובמבר-דצמבר.",
      linkUrl: "https://maps.google.com/?q=Koh+Phi+Phi+Hotels&hl=iw",
      status: "pending"
    },
    {
      id: "phuket_luxury_hotel",
      title: "מלון יוקרה בפוקט לשבת חנוכה (02–06.12)",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה",
      deadlineDate: "2026-10-10",
      deadlineDisplay: "עד 10 באוקטובר 2026",
      description: "מלון יוקרה 5 כוכבים באזור פטונג במרחק הליכה מבית חב\"ד פוקט ל-4 לילות: Mövenpick Myth (כ-2 דק' הליכה מחב\"ד!), Hotel Indigo (כ-7 דק' הליכה) או Phuket Graceland (כ-8 דק' הליכה).",
      criticalNote: "לוודא מפתח מכני לשבת מול המלון.",
      linkUrl: "https://www.movenpickmythphuketpatong.com/",
      status: "pending"
    },
    {
      id: "krabi_hotel",
      title: "מלון / ריזורט בקראבי (06–09.12)",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה",
      deadlineDate: "2026-10-15",
      deadlineDisplay: "עד 15 באוקטובר 2026",
      description: "ריזורט מפנק באאו נאנג (Ao Nang) או בחצי האי ריילי ביץ' ל-3 לילות (ראשון 06.12 עד רביעי 09.12).",
      criticalNote: "אין שבת בקראבי ולכן אין מגבלת מפתח מכני או מרחק הליכה!",
      linkUrl: "https://maps.google.com/?q=Ao+Nang+Krabi+Resorts&hl=iw",
      status: "pending"
    },
    {
      id: "krabi_bkk_flight",
      title: "טיסת פנים: קראבי (KBV) לבנגקוק ברביעי בערב (09.12)",
      category: "flights",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה",
      deadlineDate: "2026-10-18",
      deadlineDisplay: "עד 18 באוקטובר 2026",
      description: "טיסת ערב מקראבי (KBV) לבנגקוק ביום רביעי 09.12 (סביב 19:00–20:30), לאחר סיום יום הטיול בקראבי.",
      criticalNote: "מאפשר לקום בבנגקוק כבר בחמישי בבוקר ולהרוויח 3 ימי חול בבנגקוק!",
      linkUrl: "https://www.google.com/travel/flights",
      status: "pending"
    },
    {
      id: "bkk_shabbat_hotel",
      title: "מלון בבנגקוק ל-4 לילות ושבת חנוכה (09–14.12)",
      category: "hotels",
      urgency: "high",
      urgencyLabel: "דחיפות גבוהה",
      deadlineDate: "2026-10-22",
      deadlineDisplay: "עד 22 באוקטובר 2026",
      description: "מלון צמוד לבית חב\"ד בנגקוק (רחוב Phra Athit 18) מרביעי 09.12 עד מוצאי ראשון 13.12: Riva Surya (ממש מול בית חב\"ד – דקה הליכה!), Chillax Heritage (כ-2 דק' הליכה) או Nouvo City (כ-10 דק' הליכה).",
      criticalNote: "לוודא מפתח מכני לשבת ו-Late Check-out למוצאי ראשון 13.12 עד 23:00.",
      linkUrl: "https://www.rivasuryabangkok.com/",
      status: "pending"
    },
    {
      id: "phiphi_ferries",
      title: "מעבורות פוקט ↔ קופיפי (29.11 הלוך, 02.12 חזור מאוחר)",
      category: "ferries",
      urgency: "medium",
      urgencyLabel: "דחיפות בינונית",
      deadlineDate: "2026-11-01",
      deadlineDisplay: "עד 1 בנובמבר 2026",
      description: "מעבורת מרציף Rassada בפוקט לקופיפי (29.11 או 30.11 בבוקר), ומעבורת אחרונה מקופיפי חזרה לפוקט ברביעי 02.12 (סביב 15:30–16:00).",
      criticalNote: "ניתן להזמין דרך Phuket Ferry או 12Go Asia.",
      linkUrl: "https://www.phuketferry.com/",
      status: "pending"
    },
    {
      id: "cnx_elephants_booking",
      title: "הזמנת חוות פילים שיקומית בצ'יאנג מאי (25.11)",
      category: "transport",
      urgency: "medium",
      urgencyLabel: "דחיפות בינונית",
      deadlineDate: "2026-11-05",
      deadlineDisplay: "עד 5 בנובמבר 2026",
      description: "שריון מקום מראש לסיור בוקר בחוות פילים אתית בצ'יאנג מאי (כגון Elephant Jungle Sanctuary).",
      criticalNote: "החוות המובילות מוגבלות במספר מבקרים יומי.",
      linkUrl: "https://elephantjunglesanctuary.com/chiang-mai/",
      status: "pending"
    },
    {
      id: "cnx_shabbat_meals",
      title: "הרשמה לסעודות שבת 1 בחב\"ד צ'יאנג מאי (28.11)",
      category: "chabad",
      urgency: "medium",
      urgencyLabel: "דחיפות בינונית",
      deadlineDate: "2026-11-15",
      deadlineDisplay: "עד 15 בנובמבר 2026",
      description: "הרשמה מקוונת באתר חב\"ד תאילנד לסעודות ליל שבת ויום שבת בצ'יאנג מאי.",
      criticalNote: "",
      linkUrl: "https://chabadthailand.co.il/shabbat/",
      status: "pending"
    },
    {
      id: "phuket_shabbat_meals",
      title: "הרשמה לסעודות שבת 2 בחב\"ד פוקט (05.12)",
      category: "chabad",
      urgency: "medium",
      urgencyLabel: "דחיפות בינונית",
      deadlineDate: "2026-11-20",
      deadlineDisplay: "עד 20 בנובמבר 2026",
      description: "הרשמה לסעודות שבת + הדלקת נר ראשון של חנוכה בבית חב\"ד פוקט (חוף פטונג).",
      criticalNote: "",
      linkUrl: "https://chabadthailand.co.il/shabbat/",
      status: "pending"
    },
    {
      id: "bkk_shabbat_meals",
      title: "הרשמה לסעודות שבת 3 בחב\"ד בנגקוק (12.12)",
      category: "chabad",
      urgency: "medium",
      urgencyLabel: "דחיפות בינונית",
      deadlineDate: "2026-11-25",
      deadlineDisplay: "עד 25 בנובמבר 2026",
      description: "הרשמה באתר חב\"ד תאילנד לסעודות שבת חנוכה המרכזיות בבנגקוק.",
      criticalNote: "",
      linkUrl: "https://chabadthailand.co.il/shabbat/",
      status: "pending"
    }
  ],

  recommendations: [
    {
      region: "north",
      place: "צ'יאנג מאי (23–29.11)",
      items: [
        { type: "attraction", title: "🏮 פסטיבל הפנסים Yi Peng & Loy Krathong (24–25.11.2026)", desc: "אירוע השיא של צפון תאילנד מתקיים בדיוק כשאתם בצ'יאנג מאי! אלפי פנסים מוארים מרחפים לשמיים במתחמי ההפרחה (CAD Lanna) וסלסלות פרחים מוארות על נהר הפינג.", link: "https://maps.google.com/?q=Tha+Phae+Gate+Chiang+Mai&hl=iw", infoUrl: "https://chiangmaiyipengfestival.com/" },
        { type: "nature", title: "שמורת דוי אינתנון (Doi Inthanon)", desc: "הפסגה הגבוהה בתאילנד: מפל ווצ'יראתאן העצום, הפגודות המלכותיות התאומות ושבילי יער העננים.", link: "https://maps.google.com/?q=Doi+Inthanon+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%93%D7%95%D7%99_%D7%90%D7%99%D7%A0%D7%AA%D7%A0%D7%95%D7%9F" },
        { type: "attraction", title: "חוות פילים אקולוגית (Elephant Sanctuary)", desc: "חוויה מרגשת של האכלה ורחצה עם פילים בנהר בסביבה טבעית וללא רכיבה.", link: "https://maps.google.com/?q=Elephant+Jungle+Sanctuary+Chiang+Mai&hl=iw", infoUrl: "https://elephantjunglesanctuary.com/chiang-mai/" },
        { type: "nature", title: "המפלים הדביקים (Bua Thong Sticky Waterfalls)", desc: "מפלי סלע גיר ייחודיים בשמורת Si Lanna שמאפשרים לטפס יחפים במעלה המים הזורמים ללא החלקה.", link: "https://maps.google.com/?q=Bua+Thong+Waterfalls+Chiang+Mai&hl=iw", infoUrl: "https://www.thainationalparks.com/si-lanna-national-park" },
        { type: "attraction", title: "פסגות מון ג'אם ודוי סוטפ", desc: "תצפית הרים מרהיבה מעל העננים, רכבת הרים אלפינית בג'ונגל ומקדש דוי סוטפ.", link: "https://maps.google.com/?q=Pongyang+Jungle+Coaster+Zipline&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%95%D7%90%D7%98_%D7%A4%D7%A8%D7%94_%D7%98%D7%90%D7%98_%D7%93%D7%95%D7%99_%D7%A1%D7%95%D7%98%D7%A4" }
      ]
    },
    {
      region: "phuket_phiphi",
      place: "קופיפי ופוקט (29.11–06.12)",
      items: [
        { type: "nature", title: "מפרץ מאיה ביי ולגונת פילה (קופיפי)", desc: "שייט בוקר מוקדם מבית המלון בקופיפי אל הלגונה הטורקיז והחוף המפורסם לפני הגעת סירות היום.", link: "https://maps.google.com/?q=Maya+Bay+Koh+Phi+Phi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Maya_Bay" },
        { type: "view", title: "תצפית קופיפי (Phi Phi Viewpoint)", desc: "תצפית הפנורמה המפורסמת המשקיפה על שתי רצועות החוף של האי.", link: "https://maps.google.com/?q=Phi+Phi+Viewpoint&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Ko_Phi_Phi_Don" },
        { type: "tour", title: "שייט האיים מפוקט (מפרץ פאנג נגה / איי סימילאן)", desc: "שייט יוקרתי בין עשרות מצוקי הגיר של מפרץ פאנג נגה וקיאקים במערות, או שייט לשמורת איי סימילאן הטורקיזית.", link: "https://maps.google.com/?q=Phang+Nga+Bay+National+Park&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%9E%D7%A4%D7%A8%D7%A5_%D7%A4%D7%90%D7%A0%D7%92_%D7%A0%D7%92%D7%94" },
        { type: "food", title: "בית חב\"ד פוקט (חוף פטונג)", desc: "מסעדה כשרה בשרית וחלבית, מכולת ישראלית וסעודות שבת חמות במרחק 2–8 דקות הליכה ממלונות היוקרה בפטונג.", link: "https://maps.google.com/?q=Chabad+House+Phuket+Patong&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/phuket/" }
      ]
    },
    {
      region: "krabi",
      place: "קראבי וריילי ביץ' (06–09.12)",
      items: [
        { type: "nature", title: "חצי האי ריילי ביץ' וחוף פרא נאנג", desc: "חצי אי מבודד מוקף מצוקי גיר דרמטיים הנגיש רק בסירה מאאו נאנג.", link: "https://maps.google.com/?q=Railay+Beach+Krabi&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/%D7%A8%D7%99%D7%99%D7%9C%D7%99" },
        { type: "tour", title: "האי הונג (Koh Hong) ותצפית 360°", desc: "לגונה פנימית יפהפייה בשמורת Than Bok Khorani ותצפית פנורמית מרהיבה מראש הצוק על עשרות איים.", link: "https://maps.google.com/?q=Ko+Hong+Krabi&hl=iw", infoUrl: "https://www.thainationalparks.com/than-bok-khorani-national-park" },
        { type: "nature", title: "בריכת הברקת (Emerald Pool)", desc: "בריכת מי מעיינות צלולים בצבע טורקיז-אזמרגד בלב יער הגשם של קראבי.", link: "https://maps.google.com/?q=Emerald+Pool+Krabi&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Khlong_Thom_district" }
      ]
    },
    {
      region: "bangkok",
      place: "בנגקוק (09–14.12)",
      items: [
        { type: "attraction", title: "קניון הפאר ICONSIAM והשוק הצף הממוזג", desc: "אחד הקניונים המרשימים בעולם על גדות נהר צ'או פראיה, עם שוק אוכל תאילנדי מסורתי ממוזג ומזרקות מים.", link: "https://maps.google.com/?q=ICONSIAM+Bangkok&hl=iw", infoUrl: "https://www.iconsiam.com/en" },
        { type: "shopping", title: "קניון MBK, סיאם פראגון ופלטינום", desc: "משולש השופינג המנצח של בנגקוק לכל הקניות והמתנות לפני החזרה לארץ.", link: "https://maps.google.com/?q=MBK+Center&hl=iw", infoUrl: "https://he.wikipedia.org/wiki/MBK" },
        { type: "shopping", title: "שוק סוף השבוע צ'אטוצ'אק (Chatuchak)", desc: "השוק הפתוח הגדול בתאילנד (פתוח ביום ראשון 13.12!) עם אלפי דוכנים של הכל מהכל.", link: "https://maps.google.com/?q=Chatuchak+Weekend+Market&hl=iw", infoUrl: "https://en.wikipedia.org/wiki/Chatuchak_Weekend_Market" },
        { type: "food", title: "בית חב\"ד בנגקוק (Phra Athit 18)", desc: "הבניין החדש והמפואר של חב\"ד בנגקוק (ממש מול מלון Riva Surya) עם מסעדה בשרית, חלבית וסעודות שבת חנוכה.", link: "https://maps.google.com/?q=Chabad+House+Bangkok+Khaosan&hl=iw", infoUrl: "https://chabadthailand.co.il/houses/bangkok/" }
      ]
    }
  ],

  mapPlaces: [
    {
      id: "chiang_mai",
      name: "צ'יאנג מאי + פסטיבל הפנסים Yi Peng",
      region: "north",
      dates: "23–29.11 (6 לילות)",
      lat: 18.7883,
      lng: 98.9853,
      gmapQuery: "Chiang+Mai+Thailand",
      infoUrl: "https://chiangmaiyipengfestival.com/",
      desc: "בסיס הכוכב בצפון: פסטיבל הפנסים Yi Peng & Loy Krathong (24–25.11), חוות פילים, המפלים הדביקים ושבת 1 בבית חב\"ד."
    },
    {
      id: "doi_inthanon",
      name: "שמורת דוי אינתנון (Doi Inthanon)",
      region: "north",
      dates: "24.11",
      lat: 18.5875,
      lng: 98.4867,
      gmapQuery: "Doi+Inthanon+National+Park",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%93%D7%95%D7%99_%D7%90%D7%99%D7%A0%D7%AA%D7%A0%D7%95%D7%9F",
      desc: "הפסגה הגבוהה בתאילנד: מפלי ענק, הפגודות המלכותיות ויער עננים."
    },
    {
      id: "mon_jam",
      name: "מון ג'אם והמפלים הדביקים (Mae Rim)",
      region: "north",
      dates: "26.11",
      lat: 18.9361,
      lng: 98.8225,
      gmapQuery: "Mon+Jam+Chiang+Mai",
      infoUrl: "https://www.thainationalparks.com/si-lanna-national-park",
      desc: "תצפיות הרים ירוקות, רכבת הרים בג'ונגל (Pongyang) וטיפוס במפלים הדביקים."
    },
    {
      id: "phi_phi",
      name: "קופיפי ומאיה ביי (Koh Phi Phi)",
      region: "phuket_phiphi",
      dates: "29.11–02.12 (3 לילות)",
      lat: 7.7407,
      lng: 98.7784,
      gmapQuery: "Ko+Phi+Phi+Don+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%A7%D7%95_%D7%A4%D7%99_%D7%A4%D7%99",
      desc: "מפרץ מאיה ביי, לגונת פילה, אי הבמבוק, תצפית קופיפי ולינה באי הטרופי."
    },
    {
      id: "phuket",
      name: "פוקט – מלונות יוקרה וחב\"ד (Phuket)",
      region: "phuket_phiphi",
      dates: "02–06.12 (4 לילות)",
      lat: 7.8965,
      lng: 98.2965,
      gmapQuery: "Patong+Beach+Phuket+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A7%D7%98",
      desc: "מלונות יוקרה בפוקט (2–8 דק' מחב\"ד), שייט האיים (מפרץ פאנג נגה / 42 האיים / סימילאן), ושבת חנוכה בבית חב\"ד פוקט."
    },
    {
      id: "krabi",
      name: "קראבי וריילי ביץ' (Krabi & Railay)",
      region: "krabi",
      dates: "06–09.12 (3 לילות)",
      lat: 8.0117,
      lng: 98.8390,
      gmapQuery: "Railay+Beach+Krabi+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%A8%D7%99%D7%99%D7%9C%D7%99",
      desc: "חצי האי ריילי ביץ', חוף פרא נאנג, שייט 4 האיים / האי הונג, ובריכת הברקת."
    },
    {
      id: "bangkok",
      name: "בנגקוק (Bangkok)",
      region: "bangkok",
      dates: "09–14.12 (4 לילות)",
      lat: 13.7563,
      lng: 100.5018,
      gmapQuery: "Bangkok+Thailand",
      infoUrl: "https://he.wikipedia.org/wiki/%D7%91%D7%A0%D7%92%D7%A7%D7%95%D7%A7",
      desc: "הגעה ברביעי בערב: חמישי אטרקציות ו-ICONSIAM, שבת 3 בחב\"ד בנגקוק, ויום שופינג בראשון עד טיסת הלילה."
    }
  ]
};
