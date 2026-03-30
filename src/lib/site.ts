export const siteConfig = {
  name: "SmileArt Dental",
  legalName: "SmileArt Dental Klinika Stomatologiczna",
  url: "https://smileartdental.pl",
  ogImage: "https://smileartdental.pl/og-image.svg",
  contact: {
    phoneHref: "+48123456789",
    phoneDisplay: "+48 12 345 67 89",
    email: "kontakt@smileartdental.pl",
    address: "ul. Józefa 14/2, 31-056 Kraków",
    whatsappUrl: "https://wa.me/48123456789",
    hoursShortWeek: "Pn-Pt 9-21",
    hoursShortSat: "Sb 9-16",
    hoursFull: "Pn-Pt 9:00-21:00 | Sb 9:00-16:00",
    social: {
      facebook: "https://www.facebook.com/smileartdental",
      instagram: "https://www.instagram.com/smileartdental",
    },
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
