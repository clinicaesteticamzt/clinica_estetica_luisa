export const CLINIC_LOCATION_QUERY =
  "Clínica Dra. Laura Simental, Av. Carlos Canseco #6046 Local 5A, Plaza El Encanto, Mazatlán, Sinaloa 82124, México";

export const CLINIC_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_LOCATION_QUERY)}`;

export const CLINIC_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(CLINIC_LOCATION_QUERY)}&hl=es&z=16&output=embed`;

export const CLINIC = {
  name: "Clínica Dra. Laura Simental",
  fullName: "Clínica de Medicina Estética Dra. Laura Simental",
  phone: "669 273 4135",
  phoneE164: "+526692734135",
  whatsapp: "526692734135",
  address: "Av. Carlos Canseco #6046 Local 5A, Plaza El Encanto",
  city: "Mazatlán",
  state: "Sinaloa",
  postalCode: "82124",
  country: "MX",
  facebook: "https://www.facebook.com/ClinicaLauraSimental/",
  instagram: "https://www.instagram.com/clinica.laurasimental/",
  tiktok: "https://www.tiktok.com/@dra.laurasimental",
  maps: CLINIC_MAPS_URL,
  googleReviews:
    "https://www.google.com/search?q=opiniones+de+laura+simental&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_1sHcyHAK4mMj2Pn3_hbTzUzU2HemhihWNmQB1Ooa-3PBtl9NB5rv6FDToAd5nJvcmk79SUK3Ofbmz_VuntYN2f4TIUv1Yv5Ir4BTP2C6QP2nwUrlQ%3D%3D&sa=X&ved=2ahUKEwiz-6LNt6yVAxXHIkQIHWIfPN8Qk8gLegQIGxAB",
  ultherapy:
    "https://ultherapy.com/mx/encuentratudoctor/profile/dra-laura-simental",
  ultherapyLogo: "/logotipos/Logo Utherapy.png",
  cofeprisNumber: "2425052002A00023",
  professionalLicense: "381276",
  cofeprisNotice: "Aviso de publicidad COFEPRIS 2425052002A00023",
  professionalLicenseNotice: "Cédula Profesional 381276",
  geo: { latitude: 23.2725, longitude: -106.4312 },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  priceFrom?: boolean;
  requiresValidation?: boolean;
  subItems?: string[];
};

export function formatPriceMXN(amount: number, options?: { from?: boolean }) {
  const formatted = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
  return options?.from ? `Desde ${formatted}` : formatted;
}

export type ServiceCategory = {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "faciales",
    tabLabel: "Faciales Médicos",
    title: "Faciales Médicos",
    subtitle: "Encuentra el facial perfecto para cada necesidad de tu piel",
    services: [
      {
        id: "diamond-glow",
        name: "Diamond Glow",
        description:
          "Limpieza e hidratación profunda mediante rejuvenecimiento dérmico simultáneo con infusión de sueros especializados.",
        price: 2200,
      },
      {
        id: "geneo",
        name: "Geneo",
        description:
          "Facial antiedad premium que combina oxigenación natural, exfoliación suave y absorción profunda de nutrientes activos.",
        price: 2800,
      },
      {
        id: "morpheus-8-facial",
        name: "Morpheus 8 (Facial)",
        description:
          "Radiofrecuencia fraccionada de vanguardia para tensado cutáneo, tratamiento de flacidez y renovación de las capas profundas de la piel.",
        price: 8500,
        priceFrom: true,
        requiresValidation: true,
      },
      {
        id: "nanopore",
        name: "Nanopore",
        description:
          "Sistema de micropunción eléctrica de alta precisión para inducir colágeno y tratar imperfecciones epidérmicas.",
        price: 1800,
      },
      {
        id: "mesojet",
        name: "Mesojet",
        description:
          "Mesoterapia avanzada y rejuvenecimiento cutáneo mediante tecnología de aplicación transdérmica sin agujas.",
        price: 1600,
      },
      {
        id: "skinbooster",
        name: "Skinbooster",
        description:
          "Microinyecciones de hidratación profunda para restaurar la elasticidad, luminosidad y firmeza natural de la piel.",
        price: 3200,
      },
      {
        id: "camara-diagnostico",
        name: "Cámara de Diagnóstico",
        description:
          "Análisis digital avanzado de la piel para evaluar niveles de hidratación, manchas, arrugas y poros de forma personalizada.",
        price: 900,
      },
      {
        id: "radiofrecuencia",
        name: "Radiofrecuencia",
        description:
          "Terapia térmica no invasiva para estimular la producción de colágeno y mejorar la firmeza del rostro.",
        price: 1500,
      },
      {
        id: "exoxomas",
        name: "Exoxomas",
        description:
          "Tratamiento de revitalización celular avanzada utilizando vesículas para acelerar la regeneración cutánea.",
        price: 3500,
      },
    ],
  },
  {
    id: "medicina-estetica",
    tabLabel: "Medicina Estética",
    title: "Medicina Estética",
    subtitle: "Cuidado estético a la altura de tus expectativas",
    services: [
      {
        id: "toxina-botulinica",
        name: "Toxina Botulínica (Botox / Xeomeen / Dysport)",
        description:
          "Aplicación médica especializada para suavizar y prevenir líneas de expresión dinámicas en el rostro.",
        price: 3800,
        priceFrom: true,
      },
      {
        id: "acido-hialuronico",
        name: "Ácido Hialurónico Avanzado",
        description: "Rellenos e hidratación de grado médico enfocados en:",
        price: 4500,
        priceFrom: true,
        subItems: [
          "Aumento y perfilado de labios",
          "Corrección clínica de ojeras",
          "Rinomodelación sin cirugía",
          "Perfilado y definición mandibular",
          "Aumento y proyección de pómulos o mentón",
        ],
      },
      {
        id: "estimuladores-colageno",
        name: "Estimuladores de Colágeno y Tensores",
        description:
          "Tratamientos de bioestimulación avanzada para recuperar el soporte estructural del rostro:",
        price: 7500,
        priceFrom: true,
        subItems: [
          "Radiesse / Ellansé / Sculptra / Hilos Tensores / Lifting Clínico",
        ],
      },
      {
        id: "profhilo",
        name: "Profhilo",
        description:
          "Bioremodelación e hidratación profunda inyectable para combatir la laxitud de la piel.",
        price: 5500,
      },
      {
        id: "tratamientos-especializados",
        name: "Tratamientos Especializados",
        description: "Protocolos médicos personalizados:",
        price: 5000,
        priceFrom: true,
        subItems: [
          "Control Avanzado de Manchas: Lumecca (IPL), Peelings Químicos y Cosmelan",
          "Clínica Capilar: Micropunción, Dercut, Exoxomas, Dutas y Células Madre",
        ],
      },
    ],
  },
  {
    id: "corporales",
    tabLabel: "Tratamientos Corporales",
    title: "Tratamientos Corporales",
    subtitle: "Transforma tu cuerpo con resultados visibles",
    services: [
      {
        id: "morpheus-8-corporal",
        name: "Morpheus 8 Corporal",
        description:
          "Radiofrecuencia fraccionada profunda diseñada específicamente para combatir la flacidez extrema, celulitis y grasa localizada en el cuerpo.",
        price: 12000,
        priceFrom: true,
        requiresValidation: true,
      },
      {
        id: "alma-prime-x",
        name: "Alma Prime X",
        description:
          "Plataforma médica premium de contorneo corporal que combina ultrasonido y radiofrecuencia para moldear y reducir celulitis de forma no invasiva.",
        price: 9500,
        priceFrom: true,
        requiresValidation: true,
      },
      {
        id: "geneo-corporal",
        name: "Geneo Corporal",
        description:
          "Tratamiento de exfoliación, oxigenación y nutrición profunda adaptado para renovar e igualar el tono de la piel en áreas corporales.",
        price: 3000,
      },
      {
        id: "depilacion-diodo",
        name: "Depilación de Diodo",
        description:
          "Tecnología láser avanzada para la eliminación permanente del vello de forma segura en todas las áreas del cuerpo.",
        price: 1200,
        priceFrom: true,
      },
      {
        id: "carboxiterapia",
        name: "Carboxiterapia",
        description:
          "Aplicación subcutánea de dióxido de carbono medicinal para mejorar la microcirculación y combatir grasa localizada y celulitis.",
        price: 1800,
      },
      {
        id: "enzimas-recombinantes",
        name: "Enzimas Recombinantes",
        description:
          "Microinyecciones enzimáticas altamente efectivas para la reducción de grasa localizada, fibrosis y flacidez.",
        price: 2800,
      },
      {
        id: "mesoterapia-corporal",
        name: "Mesoterapia Corporal",
        description:
          "Microdosis de sustancias terapéuticas aplicadas directamente en zonas específicas para moldear y reafirmar.",
        price: 2200,
      },
    ],
  },
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, categoryId: cat.id, categoryName: cat.title }))
);

export function findService(serviceId: string) {
  return ALL_SERVICES.find((s) => s.id === serviceId);
}

export const AVAILABLE_TIMES = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

export const HIGH_END_SERVICE_IDS = new Set(
  ALL_SERVICES.filter((s) => s.requiresValidation).map((s) => s.id)
);

export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  category:
    | "Limpiadores"
    | "Sueros"
    | "Protectores Solares"
    | "Anti-edad"
    | "Hidratación";
  image: string;
};

const IMG = {
  cleanser:
    "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
  serum:
    "https://images.unsplash.com/photo-1620916560421-33d2a0d0b4b6?w=400&h=400&fit=crop",
  cream:
    "https://images.unsplash.com/photo-1608248543801-ba977795e663?w=400&h=400&fit=crop",
  sunscreen:
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
  bottle:
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
  dropper:
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
  gel: "https://images.unsplash.com/photo-1556228578-dd6a9f1a0f0d?w=400&h=400&fit=crop",
  mask:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
};

export const PRODUCTS: Product[] = [
  {
    id: "avene-cleanance",
    brand: "Avène",
    name: "Cleanance Gel Limpiador",
    price: 695,
    category: "Limpiadores",
    image: IMG.cleanser,
  },
  {
    id: "avene-thermal",
    brand: "Avène",
    name: "Agua Termal Calmante",
    price: 395,
    category: "Hidratación",
    image: IMG.bottle,
  },
  {
    id: "filorga-ncef",
    brand: "Filorga Paris",
    name: "NCEF-Reverse Crema Suprema",
    price: 2950,
    category: "Anti-edad",
    image: IMG.cream,
  },
  {
    id: "filorga-optim-eyes",
    brand: "Filorga Paris",
    name: "Optim-Eyes Contorno de Ojos",
    price: 1580,
    category: "Anti-edad",
    image: IMG.dropper,
  },
  {
    id: "neostrata-foaming",
    brand: "Neostrata",
    name: "Gel Limpiador Espumoso",
    price: 890,
    category: "Limpiadores",
    image: IMG.gel,
  },
  {
    id: "neostrata-bionic",
    brand: "Neostrata",
    name: "Bionic Face Cream",
    price: 1720,
    category: "Anti-edad",
    image: IMG.cream,
  },
  {
    id: "uriage-bariederm",
    brand: "Uriage",
    name: "Bariéderm Cica-Crème Reparadora",
    price: 720,
    category: "Hidratación",
    image: IMG.cream,
  },
  {
    id: "uriage-bariesun",
    brand: "Uriage",
    name: "Bariésun SPF 50+ Fluido",
    price: 650,
    category: "Protectores Solares",
    image: IMG.sunscreen,
  },
  {
    id: "isis-neotone",
    brand: "Isispharma",
    name: "Neotone Serum Despigmentante",
    price: 1380,
    category: "Sueros",
    image: IMG.serum,
  },
  {
    id: "isis-urelia",
    brand: "Isispharma",
    name: "Urelia Gel Keratoregulador",
    price: 780,
    category: "Limpiadores",
    image: IMG.gel,
  },
  {
    id: "noreva-exfoliac",
    brand: "Noreva",
    name: "Exfoliac Gel Limpiador Purificante",
    price: 590,
    category: "Limpiadores",
    image: IMG.cleanser,
  },
  {
    id: "noreva-cicavit",
    brand: "Noreva",
    name: "Cicavit+ Crema Reparadora",
    price: 840,
    category: "Hidratación",
    image: IMG.cream,
  },
  {
    id: "cumlaude-hidragyn",
    brand: "Cumlaude Lab",
    name: "Hidragyn Gel-Crema Hidratante",
    price: 920,
    category: "Hidratación",
    image: IMG.cream,
  },
  {
    id: "cumlaude-sensiliane",
    brand: "Cumlaude Lab",
    name: "Sensiliane Crema Intensa",
    price: 760,
    category: "Hidratación",
    image: IMG.bottle,
  },
  {
    id: "toskani-ha",
    brand: "Toskani",
    name: "TKN HA 3.5% Suero Hidratante",
    price: 1650,
    category: "Sueros",
    image: IMG.dropper,
  },
  {
    id: "toskani-vitamin-c",
    brand: "Toskani",
    name: "Vitamin C Pro Serum Iluminador",
    price: 1720,
    category: "Sueros",
    image: IMG.serum,
  },
  {
    id: "hd-peel-cleanser",
    brand: "HD Cosmetic Efficiency",
    name: "HD Peel Cleanser",
    price: 1100,
    category: "Limpiadores",
    image: IMG.cleanser,
  },
  {
    id: "hd-revive",
    brand: "HD Cosmetic Efficiency",
    name: "HD Revive Serum Renovador",
    price: 1980,
    category: "Sueros",
    image: IMG.serum,
  },
  {
    id: "elementre-detox",
    brand: "Elementre",
    name: "Detox Cleansing Gel",
    price: 740,
    category: "Limpiadores",
    image: IMG.gel,
  },
  {
    id: "elementre-age",
    brand: "Elementre",
    name: "Age Defy Cream",
    price: 1650,
    category: "Anti-edad",
    image: IMG.cream,
  },
  {
    id: "accuderm-foam",
    brand: "Accuderm",
    name: "Gentle Foam Cleanser",
    price: 620,
    category: "Limpiadores",
    image: IMG.cleanser,
  },
  {
    id: "accuderm-retinol",
    brand: "Accuderm",
    name: "Retinol Night Cream",
    price: 1420,
    category: "Anti-edad",
    image: IMG.cream,
  },
];

export type GoogleReview = {
  id: string;
  name: string;
  text: string;
  rating: number;
  localGuide?: boolean;
};

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  count: 16,
  reviews: [
    {
      id: "ana-osuna",
      name: "Ana Osuna",
      text: "La mejor doctora en Mazatlán!! Feliz cumpleaños Laura!! Que sea un gran año!!",
      rating: 5,
    },
    {
      id: "blanca-lopez",
      name: "Blanca Nelva López",
      text: "Estoy encantada con el producto, me cambió la cara, gracias por dármelo a conocer.",
      rating: 5,
    },
    {
      id: "angelica-bojorquez",
      name: "Angélica Bojórquez",
      text: "La Clínica de Laura Simental, aparte de manejar productos de alta calidad, los aparatos de última generación en tecnología y productos reconocidos altamente calificados, brindan una atención con mucha calidez y atención humana.",
      rating: 5,
      localGuide: true,
    },
    {
      id: "nidia-moreno",
      name: "Nidia Moreno",
      text: "La recomiendo porque es muy profesional, amable y siempre te dice lo que necesitas realmente.",
      rating: 5,
    },
    {
      id: "teresa-silva",
      name: "Teresa Silva",
      text: "Es una excelente Dra., eficiente y comprensiva con sus pacientes; también sus colaboradoras son atentas, trabajadoras y amables.",
      rating: 5,
    },
    {
      id: "octavio-pano",
      name: "Octavio Pano Eventos",
      text: "La doctora y todo su equipo muy profesionales, ofrecen un servicio de calidad y los mejores productos con excelente atención al cliente.",
      rating: 5,
    },
    {
      id: "lupita-bernal",
      name: "Lupita Bernal",
      text: "Excelente Dra.!!!",
      rating: 5,
    },
    {
      id: "lisa-peacey",
      name: "Lisa Peacey",
      text: "¡Me encantan mis resultados! La Dra. Laura Simental habla inglés, así que es fantástica tanto para turistas angloparlantes como para hispanohablantes. Solo usa marcas reconocidas y aprobadas por la FDA de rellenos y bótox, algo imprescindible para mí. Sus precios son excelentes y ofrece un descuento muy bueno. Estoy muy contenta con mis resultados naturales: solo un poco más joven y descansada. ¡La recomiendo ampliamente!",
      rating: 5,
      localGuide: true,
    },
    {
      id: "m-a",
      name: "M A",
      text: "Tuve una experiencia fantástica con la Dra. Laura. Es muy profesional y tiene muchos conocimientos. Su trato es muy amable y comprensivo con mis inquietudes. La visita fue muy agradable y estoy muy contenta con los resultados del relleno. Además, me dio un plan de cuidado de la piel que me encanta. La recomiendo ampliamente y volveré en el futuro.",
      rating: 5,
      localGuide: true,
    },
    {
      id: "isela-lizarraga",
      name: "Isela Lizárraga",
      text: "Excelente servicio.",
      rating: 5,
    },
    {
      id: "fausto-guerrero",
      name: "Fausto Guerrero",
      text: "Excelente atención y muy bonitas instalaciones. Súper recomendado.",
      rating: 5,
    },
    {
      id: "marco-gonzalez",
      name: "Marco González",
      text: "Es una experiencia increíble ir con la Dra. Laura Simental: excelente atención, servicio y los mejores productos.",
      rating: 5,
      localGuide: true,
    },
    {
      id: "melchor-perez",
      name: "Melchor Pérez",
      text: "La mejor dra. en medicina estética de Mazatlán. ¡200% recomendada!",
      rating: 5,
    },
    {
      id: "araceli-lizarraga",
      name: "Araceli Lizárraga",
      text: "Excelente doctora, sin duda la mejor. Siempre con los mejores tratamientos a la vanguardia y los mejores productos. Ampliamente recomendada, 10 de 10.",
      rating: 5,
    },
    {
      id: "fabiola-lopez",
      name: "Fabiola López Meza",
      text: "Excelente Dra. Siempre a la vanguardia con los mejores tratamientos y equipos para verse y sentirse mejor. Y su clínica nueva súper bonita. Experiencia y excelencia.",
      rating: 5,
    },
    {
      id: "eduardo-zamora",
      name: "Eduardo Zamora",
      text: "El mejor servicio.",
      rating: 5,
      localGuide: true,
    },
  ] satisfies GoogleReview[],
} as const;
