import type { CampsiteConfig } from "../types";

/**
 * Auszeit-XL Campingplatz Mauterndorf — 4★-Campingplatz im Salzburger Lungau.
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest) abgeleitet. Du-Anrede.
 */
const IMG = "/campsites/auszeit-xl";

const auszeitXl: CampsiteConfig = {
  name: "Auszeit-XL Campingplatz Mauterndorf",
  shortName: "Auszeit-XL",
  slug: "auszeit-xl",
  ort: "Mauterndorf",
  region: "Salzburger Lungau",
  brandKind: "4★ Campingplatz",
  regionLong: "Salzburger Lungau · Salzburger Land · Österreich",

  theme: "alpin",
  heroVariant: "center",

  claim: "Camping an der Bergbahn — 365 Tage im Jahr",
  claimEmphasis: "an der Bergbahn",
  intro:
    "Direkt an der Talstation Grosseck-Speiereck campst du hier das ganze Jahr — Stellplatz, Premium-Mobilheim und Wellness mitten in den Salzburger Bergen, mit Brücke und Aufzug bis zur Seilbahn.",

  logo: { src: `${IMG}/logo-1af54a7d28.png`, alt: "Logo Camping Mauterndorf · Auszeit-XL" },

  statement: {
    text: "Frühstücksei am Morgen, Skischuhe am Lift am Nachmittag — zwischen Stellplatz und Seilbahn liegt nur eine kurze Brücke.",
    emphasis: "nur eine kurze Brücke",
  },

  pillars: [
    {
      title: "Direkt an der Bergbahn",
      text: "Brücke und Aufzug verbinden den Platz barrierefrei mit der Talstation Grosseck-Speiereck — Ski und Wanderschuhe musst du nie weit tragen.",
      image: { src: `${IMG}/gallery-1d8575863c.webp`, alt: "Campingplatz Mauterndorf direkt am Skilift im Winter" },
    },
    {
      title: "Mitten in den Bergen",
      text: "Eingebettet zwischen bewaldeten Hängen liegt der Platz auf Tuchfühlung mit dem Lungauer Bergpanorama — im Sommer wie im Winter.",
      image: { src: `${IMG}/hero-08ac8fa4ff.webp`, alt: "Luftaufnahme des Auszeit-XL Ferienresorts in Mauterndorf" },
    },
    {
      title: "Wellness am Platz",
      text: "Sauna, Dampfbad, Infrarotkabine und Tepidarium gehören zum Campingplatz dazu — Erholung nach dem Berg inklusive.",
      image: { src: `${IMG}/amenity-939dde1d01.webp`, alt: "Wellnessbereich mit Sauna am Campingplatz Mauterndorf" },
    },
  ],

  usps: [
    "365 Tage geöffnet",
    "Direkt an der Bergbahn",
    "Wellnessbereich",
    "Outdoor-Pool im Sommer",
    "Hunde willkommen",
    "E-Ladestationen",
  ],

  trust: {
    heading: "Mehrfach ausgezeichnet, das ganze Jahr offen",
    headingEmphasis: "das ganze Jahr offen",
    intro:
      "Vom ADAC als 4★-Tipp und vom ECC als Spitzenplatz ausgezeichnet: großzügige Stellplätze direkt am Erlebnisberg, dazu Mobilheime, Pension und Gastronomie der Familie Schitter.",
  },

  awards: [
    {
      label: "ADAC-Tipp · 4 Sterne · 2021, 2023 & 2025",
      image: { src: `${IMG}/award-b13a20737e.png`, alt: "ADAC-Tipp 2025 — 4 Sterne Auszeichnung" },
    },
    {
      label: "ECC Spitzenplatz 2021 — einer der besten Plätze Europas",
      image: { src: `${IMG}/award-6395c2a3b3.png`, alt: "ECC Spitzenplatz-Auszeichnung 2021" },
    },
    { label: "Booking.com Traveller Review Award 2023 & 2024" },
  ],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-ec6019a87d.webp`, alt: "Campingplatz Mauterndorf im grünen Bergtal im Sommer" },
  },

  breather: {
    image: { src: `${IMG}/gallery-e775f88932.webp`, alt: "Verschneites Skizentrum Mauterndorf mit Campingplatz von oben" },
    line: "365 Tage im Jahr — auch wenn der Schnee bis zur Talstation reicht.",
  },

  camping: {
    heading: "Dein Platz am Erlebnisberg",
    intro:
      "Großzügige Stellplätze, moderne Sanitäranlagen und ein Wellnessbereich, der zum Campingplatz gehört — alles, was Sommer- und Wintercamping braucht.",
    features: [
      {
        title: "Moderne Sanitäranlagen",
        text: "Helle Waschräume mit Einzelwaschplätzen, Familienbad und Babyraum — gepflegt und das ganze Jahr betriebsbereit.",
        image: { src: `${IMG}/amenity-4fa2096e0c.webp`, alt: "Moderne Sanitäranlagen am Campingplatz Mauterndorf" },
      },
      {
        title: "Outdoor-Pool im Sommer",
        text: "In der warmen Jahreszeit lädt der beheizte Außenpool mit Bergblick zum Abkühlen — gleich neben den Stellplätzen.",
        image: { src: `${IMG}/gallery-c964972c1a.webp`, alt: "Outdoor-Swimmingpool am Campingplatz Mauterndorf" },
      },
      {
        title: "Wintercamping an der Talstation",
        text: "Wohnmobil und Wohnwagen stehen im Winter direkt am Schnee — Strom, warmes Wasser und der Lift gleich nebenan.",
        image: { src: `${IMG}/gallery-464457db85.webp`, alt: "Wintercamping an der Talstation der Grosseckbahn" },
      },
      {
        title: "Skiraum & Schuhtrockenraum",
        text: "Ski, Stöcke und Schuhe trocknen über Nacht im beheizten Skikeller — morgens geht es trocken auf die Piste.",
        image: { src: `${IMG}/gallery-942882841e.webp`, alt: "Beheizter Skikeller am Campingplatz Mauterndorf" },
      },
      {
        title: "Waschküche & Spülraum",
        text: "Waschmaschinen, Trockner und eine geräumige Spülküche nehmen dir im Urlaub die lästige Hausarbeit ab.",
        image: { src: `${IMG}/gallery-df7a79f28a.webp`, alt: "Waschküche mit Waschmaschinen am Campingplatz Mauterndorf" },
      },
      {
        title: "Shop & Imbiss am Platz",
        text: "Brötchen, Camping-Bedarf und ein Imbiss mit Café — für den täglichen Einkauf musst du den Platz nicht verlassen.",
        image: { src: `${IMG}/gallery-0763c4d2ab.webp`, alt: "Shop und Imbissstube am Campingplatz Mauterndorf" },
      },
    ],
  },

  mobilheime: {
    heading: "Premium-Mobilheime am Platz",
    intro:
      "Kein eigener Camper? Wohn im Premium-Mobilheim mit überdachter Terrasse, eigenem Bad und voll ausgestatteter Küche — mitten am Campingplatz neben der Talstation.",
    items: [
      {
        name: "Premium-Mobilheim",
        kind: "Mobilheim · bis 5 Personen",
        text: "Moderne Holzbauweise mit überdachter Terrasse — direkt am Platz und nur wenige Schritte von der Bergbahn entfernt.",
        image: { src: `${IMG}/gallery-9fc0a0f0d7.webp`, alt: "Premium-Mobilheim am Campingplatz Mauterndorf" },
        priceFrom: 145,
        features: ["Überdachte Terrasse", "Eigenes Bad", "Komplette Küche"],
      },
      {
        name: "Wohnen & Essen",
        kind: "Offener Wohnraum",
        text: "Heller, offener Wohn- und Essbereich mit gemütlichem Sofa und Küchenzeile — genug Platz, damit die ganze Familie zusammensitzt.",
        image: { src: `${IMG}/gallery-c1fe6fb94c.webp`, alt: "Wohn- und Essbereich im Premium-Mobilheim" },
      },
      {
        name: "Ruhig schlafen",
        kind: "Schlafzimmer",
        text: "Gemütliche Schlafzimmer mit reichlich Stauraum und Fenster ins Grüne — für erholsame Nächte nach einem langen Bergtag.",
        image: { src: `${IMG}/gallery-5b6882466b.webp`, alt: "Schlafzimmer im Premium-Mobilheim" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Berg & Tal rund um Mauterndorf",
    intro:
      "Vom Skigebiet Grosseck-Speiereck bis zur Burg Mauterndorf — das ganze Jahr liegt das Erlebnisrevier des Lungau direkt vor dem Platz.",
    items: [
      {
        title: "Skifahren Grosseck-Speiereck",
        text: "Über den Lift an der Talstation direkt ins Skigebiet — Pisten zwischen rund 1.100 und 2.400 Metern.",
        image: { src: `${IMG}/gallery-0ab77f9540.webp`, alt: "Skifahrer im Skigebiet Grosseck-Speiereck" },
      },
      {
        title: "Winterwandern",
        text: "Geräumte Höhenwege mit Panorama — Winterwandern abseits der Pisten durch den verschneiten Lungau.",
        image: { src: `${IMG}/activity-a77e31bfa9.webp`, alt: "Winterwandern mit Bergpanorama im Lungau" },
      },
      {
        title: "Pferdeschlittenfahrt",
        text: "Eingepackt in warme Decken durchs Schneetal — eine Pferdeschlittenfahrt für die ganze Familie.",
        image: { src: `${IMG}/gallery-8a57e49212.webp`, alt: "Pferdeschlittenfahrt im winterlichen Lungau" },
      },
      {
        title: "Sommer-Outdoorpark",
        text: "Hochseilgarten und Aktivpark am Wasser — Sommeraction für Kletterfreunde und aktive Familien.",
        image: { src: `${IMG}/gallery-e7e11c4c9e.webp`, alt: "Outdoorpark mit Hochseilgarten im Lungau" },
      },
      {
        title: "Burg Mauterndorf",
        text: "Die mittelalterliche Burg über dem Markt — ein Ausflugsziel nur wenige Minuten vom Campingplatz.",
        image: { src: `${IMG}/gallery-902a77f151.webp`, alt: "Burg Mauterndorf im Sommer" },
      },
      {
        title: "Rodeln im Lungau",
        text: "Rodelbahnen und Winterspaß in der Region — vom Katschberg bis ins Mauterndorfer Tal.",
        image: { src: `${IMG}/gallery-3221be8d2e.webp`, alt: "Rodeln in der Region Lungau" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg in den Lungau",
    modes: [
      {
        title: "Mit dem Auto",
        text: "A10 Tauernautobahn bis Abfahrt 104 St. Michael im Lungau, dann auf der B99 nach Mauterndorf, Markt 416 — durchgehend beschildert.",
      },
      {
        title: "Über den Tauern",
        text: "Alternativ über Radstadt und Obertauern auf der B99 — diese Bergpassroute bei winterlichen Verhältnissen im Blick behalten.",
      },
      {
        title: "Bahn & Flug",
        text: "Anreise per Bahn über den Lungau; der Flughafen Salzburg liegt rund eineinhalb Autostunden entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Lungau, Sommer wie Winter",
    headingEmphasis: "Sommer wie Winter",
    intro: "Vom grünen Talboden bis zur verschneiten Piste — ein paar Eindrücke vom Platz und seiner Bergwelt.",
    tag: "365 Tage im Jahr",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-198e22d2a4.webp`, alt: "Skigebiet Grosseck-Speiereck aus der Luft" },
      { src: `${IMG}/gallery-b3418abac8.webp`, alt: "Marktort Mauterndorf im Sommer" },
      { src: `${IMG}/gallery-71a5df0c23.webp`, alt: "Verschneite Skipisten am Grosseck-Speiereck" },
      { src: `${IMG}/gallery-57b79cd3d7.webp`, alt: "Campingplatz Mauterndorf im Sommer vor den Bergen" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Berg",
    headingEmphasis: "deinen Platz am Berg",
    intro:
      "Wähle Zeitraum und Unterkunft — Familie Schitter meldet sich persönlich mit deiner Verfügbarkeit und einem Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz ab € 29 inkl. 2 Personen (Campingaktion) — zzgl. Ortstaxe, Infrastruktur & Strom. Mobilheim ab € 145/Nacht (Nebensaison). Preise mit dem Platz bestätigen.",
    highlight: {
      title: "Direkt an der Bergbahn",
      text: "Mit Brücke und Aufzug stehst du in Minuten an der Talstation Grosseck-Speiereck.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz inkl. 2 Personen", perNight: 29, perExtraGuest: 15 },
      { id: "mobilheim", label: "Premium-Mobilheim", perNight: 145 },
    ],
  },

  kontakt: {
    tel: "+43 6472 72023",
    telHref: "tel:+43647272023",
    mail: "office@auszeit-xl.at",
    facebook: "https://www.facebook.com/auszeitxl.urlaub.mauterndorf/",
    adresse: "Markt 416 · 5570 Mauterndorf · Salzburger Lungau",
    coords: { lat: 47.1427797, lng: 13.6655605 },
  },

  languages: ["DE", "NL", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Wellness", href: "#camping" },
      ],
    },
    { label: "Mobilheime", href: "#mobilheime" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default auszeitXl;
