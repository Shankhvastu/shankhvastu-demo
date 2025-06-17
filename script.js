const translations = {
  en: {
    siteTitle: "🔮 Shankh VaStu",
    astroName: "JWALA JI UPADHYAY",
    expertise: "Astrologer, Vastu, Numerologist, Sanjeevani Healer, Mind Programmer, Reiki Healer, Lamafera Healer",
    horoscopeHeading: "Today's Horoscope",
    horoscopeText: "Select your zodiac sign to see your horoscope."
  },
  hi: {
    siteTitle: "🔮 शंख वास्तु",
    astroName: "ज्वाला जी उपाध्याय",
    expertise: "ज्योतिष, वास्तु, न्यूमेरोलॉजिस्ट, संजीवनी हीलर, माइंड प्रोग्रामर, रेकी हीलर, लामाफेरा हीलर",
    horoscopeHeading: "आज का राशिफल",
    horoscopeText: "अपनी राशि चुनें और जानिए आज का भविष्यफल।"
  }
};

function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  document.getElementById("site-title").innerText = translations[lang].siteTitle;
  document.getElementById("astro-name").innerText = translations[lang].astroName;
  document.getElementById("expertise").innerText = translations[lang].expertise;
  document.getElementById("horoscope-heading").innerText = translations[lang].horoscopeHeading;
  document.getElementById("horoscope-text").innerText = translations[lang].horoscopeText;
}
