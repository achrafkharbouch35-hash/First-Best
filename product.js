/* =========================================================
   FIRSTBEST — PRODUCT.JS
   Page produit dynamique
   ========================================================= */

const WHATSAPP_NUMBER = "212723354542";
const CART_KEY = "firstbest_cart";

/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [

  /* =========================
     SMARTPHONES
     ========================= */

  {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 12990,
    oldPrice: 13990,
    badge: "NEW",
    newest: true,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85",
    description: "Un smartphone premium avec performances exceptionnelles, caméra avancée et design élégant.",
    highlights: [
      "Smartphone premium Apple",
      "Performances exceptionnelles",
      "Caméra avancée",
      "Design élégant et moderne"
    ]
  },

  {
    id: 2,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 11990,
    oldPrice: 12990,
    badge: "-8%",
    newest: true,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=85",
    description: "Puissance, photographie et écran premium dans un smartphone conçu pour les utilisateurs exigeants.",
    highlights: [
      "Smartphone Samsung haut de gamme",
      "Écran premium",
      "Performances élevées",
      "Photographie avancée"
    ]
  },

  {
    id: 13,
    name: "Redmi Note 14 Pro",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 3490,
    oldPrice: 3990,
    badge: "NEW",
    newest: true,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
    description: "Smartphone moderne offrant un excellent équilibre entre performances, autonomie et prix.",
    highlights: [
      "Excellent rapport qualité-prix",
      "Bonne autonomie",
      "Performances polyvalentes",
      "Design moderne"
    ]
  },

  {
    id: 14,
    name: "Galaxy A56",
    brand: "Samsung",
    category: "Smartphones",
    price: 4290,
    oldPrice: 4690,
    badge: "HOT",
    newest: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    description: "Un smartphone polyvalent avec écran moderne, grande autonomie et design élégant.",
    highlights: [
      "Écran moderne",
      "Grande autonomie",
      "Design élégant",
      "Utilisation polyvalente"
    ]
  },


  /* =========================
     PC PORTABLES
     ========================= */

  {
    id: 3,
    name: "MacBook Pro",
    brand: "Apple",
    category: "PC Portables",
    price: 18990,
    oldPrice: 19990,
    badge: "PRO",
    newest: true,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    description: "Un ordinateur portable puissant pour la création, le développement et la productivité.",
    highlights: [
      "Ordinateur portable professionnel",
      "Performances élevées",
      "Idéal pour la création",
      "Adapté au développement"
    ]
  },

  {
    id: 9,
    name: "Lenovo ThinkPad",
    brand: "Lenovo",
    category: "PC Portables",
    price: 7990,
    oldPrice: 8990,
    badge: "-11%",
    newest: false,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    description: "Ordinateur professionnel fiable pour le travail et les études.",
    highlights: [
      "Conçu pour le travail",
      "Fiable et polyvalent",
      "Adapté aux études",
      "Format professionnel"
    ]
  },

  {
    id: 15,
    name: "HP Pavilion 15",
    brand: "HP",
    category: "PC Portables",
    price: 6490,
    oldPrice: 6990,
    badge: "SALE",
    newest: true,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=85",
    description: "PC portable polyvalent adapté au travail, aux études et à la bureautique.",
    highlights: [
      "Polyvalent",
      "Adapté aux études",
      "Bureautique",
      "Utilisation quotidienne"
    ]
  },

  {
    id: 16,
    name: "ASUS VivoBook",
    brand: "ASUS",
    category: "PC Portables",
    price: 6990,
    oldPrice: 7590,
    badge: "NEW",
    newest: true,
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=900&q=85",
    description: "PC portable fin et polyvalent pour une utilisation quotidienne.",
    highlights: [
      "Format fin",
      "Polyvalent",
      "Idéal au quotidien",
      "Design moderne"
    ]
  },


  /* =========================
     GAMING
     ========================= */

  {
    id: 4,
    name: "ASUS ROG Gaming",
    brand: "ASUS",
    category: "Gaming",
    price: 14990,
    oldPrice: 16990,
    badge: "-12%",
    newest: false,
    image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=900&q=85",
    description: "Laptop gaming performant avec puissance graphique et écran immersif.",
    highlights: [
      "Gaming haute performance",
      "Puissance graphique",
      "Écran immersif",
      "Conçu pour les joueurs"
    ]
  },

  {
    id: 20,
    name: "Gaming Keyboard RGB",
    brand: "Logitech",
    category: "Gaming",
    price: 1190,
    oldPrice: 1390,
    badge: "RGB",
    newest: true,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=85",
    description: "Clavier gaming RGB conçu pour une expérience de jeu réactive.",
    highlights: [
      "Éclairage RGB",
      "Conçu pour le gaming",
      "Frappe réactive",
      "Design gaming"
    ]
  },

  {
    id: 21,
    name: "Gaming Mouse",
    brand: "Logitech",
    category: "Gaming",
    price: 690,
    oldPrice: 790,
    badge: "PRO",
    newest: false,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    description: "Souris gaming précise et confortable pour les longues sessions.",
    highlights: [
      "Grande précision",
      "Confortable",
      "Adaptée aux longues sessions",
      "Design gaming"
    ]
  },


  /* =========================
     PC DE BUREAU
     ========================= */

  {
    id: 17,
    name: "PC Bureau HP ProDesk",
    brand: "HP",
    category: "PC de Bureau",
    price: 5490,
    oldPrice: 5990,
    badge: "PRO",
    newest: true,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=900&q=85",
    description: "Ordinateur de bureau professionnel pour la bureautique, la gestion et le travail quotidien.",
    highlights: [
      "PC professionnel",
      "Bureautique",
      "Gestion et travail",
      "Format desktop"
    ]
  },

  {
    id: 18,
    name: "Lenovo ThinkCentre",
    brand: "Lenovo",
    category: "PC de Bureau",
    price: 5990,
    oldPrice: 6490,
    badge: "BUSINESS",
    newest: false,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=900&q=85",
    description: "PC de bureau compact et fiable pour les entreprises et les professionnels.",
    highlights: [
      "Format compact",
      "Conçu pour les entreprises",
      "Fiable",
      "Utilisation professionnelle"
    ]
  },

  {
    id: 19,
    name: "PC Bureau Gaming",
    brand: "FirstBest",
    category: "PC de Bureau",
    price: 10990,
    oldPrice: 11990,
    badge: "GAMING",
    newest: true,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85",
    description: "Configuration desktop pensée pour le gaming et les applications exigeantes.",
    highlights: [
      "Configuration gaming",
      "Performances élevées",
      "Applications exigeantes",
      "Desktop performant"
    ]
  },


  /* =========================
     TABLETTES
     ========================= */

  {
    id: 5,
    name: "iPad Pro",
    brand: "Apple",
    category: "Tablettes",
    price: 9990,
    oldPrice: 10990,
    badge: "HOT",
    newest: true,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85",
    description: "Une tablette premium parfaite pour le travail, les études et la création.",
    highlights: [
      "Tablette premium",
      "Travail et études",
      "Création de contenu",
      "Design moderne"
    ]
  },

  {
    id: 8,
    name: "Xiaomi Pad",
    brand: "Xiaomi",
    category: "Tablettes",
    price: 3990,
    oldPrice: 4490,
    badge: "BEST",
    newest: false,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=85",
    description: "Tablette moderne offrant un excellent équilibre entre performances et prix.",
    highlights: [
      "Excellent rapport qualité-prix",
      "Performances polyvalentes",
      "Design moderne",
      "Utilisation quotidienne"
    ]
  },

  {
    id: 22,
    name: "Samsung Galaxy Tab",
    brand: "Samsung",
    category: "Tablettes",
    price: 4990,
    oldPrice: 5490,
    badge: "NEW",
    newest: true,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=900&q=85",
    description: "Tablette polyvalente pour les études, le travail et le divertissement.",
    highlights: [
      "Polyvalente",
      "Études",
      "Travail",
      "Divertissement"
    ]
  },


  /* =========================
     AUDIO
     ========================= */

  {
    id: 6,
    name: "AirPods Pro",
    brand: "Apple",
    category: "Audio",
    price: 2490,
    oldPrice: 2790,
    badge: "-10%",
    newest: false,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85",
    description: "Écouteurs sans fil avec réduction de bruit et expérience audio immersive.",
    highlights: [
      "Sans fil",
      "Réduction de bruit",
      "Audio immersif",
      "Format compact"
    ]
  },

  {
    id: 7,
    name: "Sony Headphones",
    brand: "Sony",
    category: "Audio",
    price: 3290,
    oldPrice: 3790,
    badge: "SALE",
    newest: false,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description: "Casque audio confortable avec qualité sonore premium.",
    highlights: [
      "Qualité sonore premium",
      "Confortable",
      "Casque audio",
      "Design moderne"
    ]
  },

  {
    id: 12,
    name: "Portable Speaker",
    brand: "JBL",
    category: "Audio",
    price: 1290,
    oldPrice: 1490,
    badge: "-13%",
    newest: false,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    description: "Enceinte Bluetooth compacte avec un son puissant.",
    highlights: [
      "Bluetooth",
      "Format compact",
      "Son puissant",
      "Facile à transporter"
    ]
  },


  /* =========================
     ECRANS
     ========================= */

  {
    id: 23,
    name: 'Moniteur Full HD 24"',
    brand: "Samsung",
    category: "Écrans & Moniteurs",
    price: 1690,
    oldPrice: 1890,
    badge: "FHD",
    newest: true,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
    description: "Moniteur Full HD polyvalent pour le travail, les études et le multimédia.",
    highlights: [
      "Full HD",
      "Travail et études",
      "Multimédia",
      "Format 24 pouces"
    ]
  },

  {
    id: 24,
    name: 'Moniteur Gaming 27"',
    brand: "AOC",
    category: "Écrans & Moniteurs",
    price: 2990,
    oldPrice: 3290,
    badge: "GAMING",
    newest: true,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=900&q=85",
    description: "Écran gaming 27 pouces conçu pour une expérience fluide et immersive.",
    highlights: [
      "27 pouces",
      "Gaming",
      "Expérience immersive",
      "Affichage fluide"
    ]
  },

  {
    id: 25,
    name: "Moniteur professionnel",
    brand: "LG",
    category: "Écrans & Moniteurs",
    price: 3490,
    oldPrice: 3790,
    badge: "PRO",
    newest: false,
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=900&q=85",
    description: "Moniteur professionnel adapté au travail, à la création et à la bureautique.",
    highlights: [
      "Usage professionnel",
      "Travail",
      "Création",
      "Bureautique"
    ]
  },


  /* =====================================================
     PACK SURVEILLANCE
     ===================================================== */

  {
    id: 26,

    name: "Pack complet vidéosurveillance — Dahua & WDLink",

    brand: "Dahua & WDLink",

    category: "Packs de Surveillance",

    price: 2490,

    oldPrice: 2790,

    badge: "PACK",

    newest: true,

    image: "pack1.jpg",

    description: `
      Pack complet de vidéosurveillance professionnel, comprenant tout le nécessaire
      pour réaliser une installation CCTV : enregistreur vidéo numérique Dahua HDCVI
      WizSense, 4 caméras Dahua 5MP HDCVI Smart Dual Light, alimentation centralisée
      WDLink 12V 24CH, câble coaxial WDLink RG59 + DC + Jacket de 100 mètres,
      câble HDMI 2.0 4K, disque dur Western Digital 500GB, ainsi que les connecteurs
      BNC et connecteurs d'alimentation DC.

      Une solution complète et pratique pour équiper une maison, un magasin,
      un bureau, un entrepôt ou un local professionnel avec un système de
      surveillance fiable.
    `,

    highlights: [
      "Solution complète de vidéosurveillance professionnelle",
      "4 caméras Dahua HDCVI 5MP Smart Dual Light",
      "Enregistreur Dahua HDCVI WizSense",
      "Alimentation centralisée WDLink 12V 24CH",
      "Câble coaxial RG59 + DC + Jacket de 100 mètres",
      "Disque dur Western Digital 500GB",
      "Câble HDMI 2.0 compatible 4K",
      "Connecteurs BNC et alimentation DC inclus"
    ],

    profile: {
      "Marque": "Dahua & WDLink",
      "Catégorie": "Packs de Surveillance",
      "Type": "Pack complet CCTV",
      "Utilisation": "Maison, magasin, bureau, entrepôt et local professionnel"
    },

    packContents: [
      "🎥 4 × Caméras Dahua HDCVI 5MP Smart Dual Light",
      "🖥️ 1 × Enregistreur vidéo Dahua HDCVI WizSense",
      "⚡ 1 × Alimentation WDLink 12V 24CH",
      "🔌 1 × Câble coaxial RG59 + DC + Jacket — 100M",
      "📺 1 × Câble HDMI 2.0 4K",
      "💾 1 × Disque dur Western Digital 500GB",
      "🔩 Connecteurs BNC",
      "🔋 Connecteurs d'alimentation DC"
    ]
  },

  {
    id: 27,
    name: "Pack Surveillance Pro",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 3990,
    oldPrice: 4490,
    badge: "PRO",
    newest: true,
    image: "pack2.jpg",
    description: "Pack de surveillance complet avec solution adaptée aux besoins professionnels.",
    highlights: [
      "Solution de surveillance professionnelle",
      "Installation adaptée aux professionnels",
      "Solution complète",
      "Sécurité renforcée"
    ]
  },

  {
    id: 28,
    name: "Pack Surveillance Premium",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 5490,
    oldPrice: 5990,
    badge: "PREMIUM",
    newest: true,
    image: "pack3.jpg",
    description: "Solution premium de sécurité et de surveillance pour les installations exigeantes.",
    highlights: [
      "Solution premium",
      "Sécurité renforcée",
      "Pour installations exigeantes",
      "Solution complète"
    ]
  },

  {
    id: 29,
    name: "Pack Surveillance Business",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 7490,
    oldPrice: 7990,
    badge: "BUSINESS",
    newest: false,
    image: "pack4.jpg",
    description: "Solution complète pensée pour les commerces, bureaux et installations professionnelles.",
    highlights: [
      "Pensé pour les commerces",
      "Adapté aux bureaux",
      "Usage professionnel",
      "Solution complète"
    ]
  },


  /* =========================
     CAMERAS
     ========================= */

  {
    id: 30,
    name: "Caméra Wi-Fi Intérieure",
    brand: "TP-Link",
    category: "Caméras de Surveillance",
    price: 590,
    oldPrice: 690,
    badge: "Wi-Fi",
    newest: true,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=85",
    description: "Caméra connectée destinée à la surveillance intérieure avec accès à distance.",
    highlights: [
      "Connexion Wi-Fi",
      "Surveillance intérieure",
      "Accès à distance",
      "Installation pratique"
    ]
  },

  {
    id: 31,
    name: "Caméra Extérieure",
    brand: "Hikvision",
    category: "Caméras de Surveillance",
    price: 790,
    oldPrice: 890,
    badge: "OUTDOOR",
    newest: true,
    image: "https://images.unsplash.com/photo-1580982327559-c1202864ebd9?auto=format&fit=crop&w=900&q=85",
    description: "Caméra de surveillance conçue pour une installation extérieure.",
    highlights: [
      "Installation extérieure",
      "Surveillance",
      "Conception adaptée à l'extérieur",
      "Solution de sécurité"
    ]
  },

  {
    id: 32,
    name: "Caméra IP Full HD",
    brand: "Dahua",
    category: "Caméras de Surveillance",
    price: 890,
    oldPrice: 990,
    badge: "FULL HD",
    newest: false,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85",
    description: "Caméra IP Full HD pour une surveillance fiable et une visualisation claire.",
    highlights: [
      "IP",
      "Full HD",
      "Visualisation claire",
      "Surveillance fiable"
    ]
  },

  {
    id: 33,
    name: "Caméra PTZ Wi-Fi",
    brand: "TP-Link",
    category: "Caméras de Surveillance",
    price: 1090,
    oldPrice: 1290,
    badge: "PTZ",
    newest: true,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85",
    description: "Caméra motorisée connectée avec contrôle à distance.",
    highlights: [
      "Caméra motorisée",
      "Wi-Fi",
      "Contrôle à distance",
      "Surveillance connectée"
    ]
  },


  /* =========================
     TROTTINETTES
     ========================= */

  {
    id: 34,
    name: "Trottinette Électrique City",
    brand: "Xiaomi",
    category: "Trottinettes Électriques",
    price: 3490,
    oldPrice: 3990,
    badge: "CITY",
    newest: true,
    image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=900&q=85",
    description: "Trottinette électrique pratique pour les déplacements urbains quotidiens.",
    highlights: [
      "Mobilité urbaine",
      "Pratique au quotidien",
      "Design moderne",
      "Déplacements urbains"
    ]
  },

  {
    id: 35,
    name: "Trottinette Électrique Pro",
    brand: "Ninebot",
    category: "Trottinettes Électriques",
    price: 4990,
    oldPrice: 5490,
    badge: "PRO",
    newest: true,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
    description: "Modèle performant destiné aux déplacements urbains réguliers.",
    highlights: [
      "Modèle performant",
      "Déplacements urbains",
      "Utilisation régulière",
      "Design moderne"
    ]
  },

  {
    id: 36,
    name: "Trottinette Électrique Urban",
    brand: "Ninebot",
    category: "Trottinettes Électriques",
    price: 4290,
    oldPrice: 4690,
    badge: "URBAN",
    newest: false,
    image: "https://images.unsplash.com/photo-1600712242805-6f78671b24da?auto=format&fit=crop&w=900&q=85",
    description: "Trottinette moderne avec design urbain et utilisation pratique.",
    highlights: [
      "Design urbain",
      "Utilisation pratique",
      "Mobilité quotidienne",
      "Format moderne"
    ]
  },


  /* =========================
     ACCESSOIRES
     ========================= */

  {
    id: 10,
    name: "Mechanical Keyboard",
    brand: "Logitech",
    category: "Électronique & Accessoires",
    price: 990,
    oldPrice: 1190,
    badge: "NEW",
    newest: true,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    description: "Clavier mécanique moderne pour gaming et productivité.",
    highlights: [
      "Clavier mécanique",
      "Gaming",
      "Productivité",
      "Design moderne"
    ]
  },

  {
    id: 11,
    name: "Smart Watch",
    brand: "Samsung",
    category: "Électronique & Accessoires",
    price: 1990,
    oldPrice: 2290,
    badge: "HOT",
    newest: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description: "Montre connectée élégante pour suivre votre activité quotidienne.",
    highlights: [
      "Montre connectée",
      "Design élégant",
      "Suivi de l'activité",
      "Utilisation quotidienne"
    ]
  },

  {
    id: 37,
    name: "Câble USB-C",
    brand: "Baseus",
    category: "Électronique & Accessoires",
    price: 99,
    oldPrice: 129,
    badge: "ACCESSORY",
    newest: true,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85",
    description: "Câble USB-C pratique pour la charge et la connexion de vos appareils.",
    highlights: [
      "USB-C",
      "Charge",
      "Connexion des appareils",
      "Format pratique"
    ]
  },

  {
    id: 38,
    name: "Chargeur Rapide USB-C",
    brand: "Anker",
    category: "Électronique & Accessoires",
    price: 249,
    oldPrice: 299,
    badge: "FAST",
    newest: true,
    image: "https://images.unsplash.com/photo-1591290619762-c588e37f3d9b?auto=format&fit=crop&w=900&q=85",
    description: "Chargeur compact conçu pour une recharge rapide et pratique.",
    highlights: [
      "Recharge rapide",
      "USB-C",
      "Format compact",
      "Pratique"
    ]
  },

  {
    id: 39,
    name: "Power Bank",
    brand: "Anker",
    category: "Électronique & Accessoires",
    price: 399,
    oldPrice: 449,
    badge: "POWER",
    newest: false,
    image: "https://images.unsplash.com/photo-1609592424854-9e4a6e7f2c55?auto=format&fit=crop&w=900&q=85",
    description: "Batterie externe pratique pour recharger vos appareils en déplacement.",
    highlights: [
      "Batterie externe",
      "Recharge en déplacement",
      "Format pratique",
      "Mobilité"
    ]
  },

  {
    id: 40,
    name: "Coque Smartphone",
    brand: "Baseus",
    category: "Électronique & Accessoires",
    price: 129,
    oldPrice: 159,
    badge: "CASE",
    newest: true,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85",
    description: "Coque élégante et protectrice pour smartphone.",
    highlights: [
      "Protection",
      "Design élégant",
      "Pour smartphone",
      "Format pratique"
    ]
  },

  {
    id: 41,
    name: "Support Smartphone",
    brand: "Baseus",
    category: "Électronique & Accessoires",
    price: 149,
    oldPrice: 179,
    badge: "NEW",
    newest: false,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=85",
    description: "Support pratique pour maintenir votre smartphone en toute sécurité.",
    highlights: [
      "Support smartphone",
      "Pratique",
      "Maintien sécurisé",
      "Utilisation quotidienne"
    ]
  },

  {
    id: 42,
    name: "Hub USB Multiport",
    brand: "UGREEN",
    category: "Électronique & Accessoires",
    price: 349,
    oldPrice: 399,
    badge: "USB",
    newest: true,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    description: "Hub USB multiport pour connecter plusieurs périphériques.",
    highlights: [
      "Multiport",
      "USB",
      "Connexion de plusieurs périphériques",
      "Pratique"
    ]
  },

  {
    id: 43,
    name: "Adaptateur HDMI",
    brand: "UGREEN",
    category: "Électronique & Accessoires",
    price: 199,
    oldPrice: 249,
    badge: "HDMI",
    newest: false,
    image: "https://images.unsplash.com/photo-1626379953827-baec19c3accd?auto=format&fit=crop&w=900&q=85",
    description: "Adaptateur pratique pour connecter vos équipements vidéo.",
    highlights: [
      "HDMI",
      "Connexion vidéo",
      "Pratique",
      "Compatible avec différents équipements"
    ]
  },

  {
    id: 44,
    name: "Carte Mémoire 128GB",
    brand: "SanDisk",
    category: "Électronique & Accessoires",
    price: 179,
    oldPrice: 219,
    badge: "128GB",
    newest: true,
    image: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=900&q=85",
    description: "Carte mémoire fiable pour smartphones, appareils photo et autres équipements.",
    highlights: [
      "Capacité 128GB",
      "Stockage",
      "Smartphones",
      "Appareils photo"
    ]
  },

  {
    id: 45,
    name: "Batterie Rechargeable",
    brand: "Duracell",
    category: "Électronique & Accessoires",
    price: 149,
    oldPrice: 179,
    badge: "POWER",
    newest: false,
    image: "https://images.unsplash.com/photo-1621939514649-280e2aa3b9dc?auto=format&fit=crop&w=900&q=85",
    description: "Batterie rechargeable destinée à différents appareils électroniques.",
    highlights: [
      "Rechargeable",
      "Pour appareils électroniques",
      "Solution pratique",
      "Utilisation polyvalente"
    ]
  }

];


/* =========================================================
   GET PRODUCT
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find(p => p.id === productId);


/* =========================================================
   HELPERS
   ========================================================= */

function formatPrice(price){
  return Number(price).toLocaleString("fr-FR") + " DH";
}

function escapeHTML(value){
  if(value === undefined || value === null) return "";

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function discountPercent(product){
  if(!product.oldPrice || product.oldPrice <= product.price){
    return 0;
  }

  return Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
}


/* =========================================================
   CART
   ========================================================= */

function getCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch{
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product, quantity = 1){

  const cart = getCart();

  const existing = cart.find(
    item => Number(item.id) === Number(product.id)
  );

  if(existing){
    existing.quantity =
      Number(existing.quantity || 0) + quantity;
  }else{
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price,
      image: product.image,
      quantity
    });
  }

  saveCart(cart);

  showToast("Produit ajouté au panier ✓");

  updateCartCount();
}

function updateCartCount(){

  const cart = getCart();

  const count = cart.reduce(
    (total,item) => total + Number(item.quantity || 0),
    0
  );

  const counters = document.querySelectorAll(
    "#cartCount, .cart-count"
  );

  counters.forEach(counter => {
    counter.textContent = count;
  });
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message){

  let toast =
    document.querySelector("#productToast") ||
    document.querySelector(".product-toast") ||
    document.querySelector("#toast");

  if(!toast){

    toast = document.createElement("div");

    toast.id = "productToast";
    toast.className = "product-toast";

    document.body.appendChild(toast);
  }

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.__toastTimer);

  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}


/* =========================================================
   WHATSAPP
   ========================================================= */

function whatsappURL(message){

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${
    encodeURIComponent(message)
  }`;
}

function createWhatsAppMessage(product, quantity = 1){

  return `Bonjour FirstBest 👋

Je suis intéressé(e) par :

📦 ${product.name}

🏷️ Marque : ${product.brand}
📂 Catégorie : ${product.category}
💰 Prix : ${formatPrice(product.price)}
🔢 Quantité : ${quantity}

Je voudrais avoir plus d'informations et confirmer la disponibilité.`;
}


/* =========================================================
   FIND DOM ELEMENTS
   ========================================================= */

const productContainer =
  document.querySelector("#productContainer") ||
  document.querySelector(".product-page") ||
  document.querySelector("main");


/* =========================================================
   PRODUCT NOT FOUND
   ========================================================= */

if(!product){

  if(productContainer){

    productContainer.innerHTML = `
      <div style="
        min-height:60vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding:50px 20px;
      ">

        <div style="
          font-size:60px;
          margin-bottom:20px;
        ">⌕</div>

        <h1 style="
          font-family:'Space Grotesk',sans-serif;
          margin-bottom:12px;
        ">
          Produit introuvable
        </h1>

        <p style="
          color:#9aa7b8;
          margin-bottom:25px;
        ">
          Ce produit n'existe pas ou n'est plus disponible.
        </p>

        <a
          href="index.html#shop"
          class="btn primary"
        >
          Retour à la boutique ↗
        </a>

      </div>
    `;
  }

}else{

  renderProduct(product);
}


/* =========================================================
   RENDER PRODUCT
   ========================================================= */

function renderProduct(product){

  document.title =
    `${product.name} — FirstBest`;

  const discount = discountPercent(product);

  const isPack =
    Array.isArray(product.packContents) &&
    product.packContents.length > 0;


  /*
   * IMAGE
   */

  const imageHTML = `
    <div class="product-image-card">

      <span class="product-badge">
        ${escapeHTML(product.badge || "FIRSTBEST")}
      </span>

      <img
        src="${escapeHTML(product.image)}"
        alt="${escapeHTML(product.name)}"
        loading="eager"
      >

    </div>
  `;


  /*
   * PRODUCT INFO
   */

  const productInfoHTML = `

    <div class="product-info">

      <div class="product-kicker">
        <span></span>
        FIRSTBEST PRODUCT
      </div>

      <div class="product-category">
        ${escapeHTML(product.category)}
      </div>

      <h1 class="product-title">
        ${escapeHTML(product.name)}
      </h1>

      <div class="product-brand">
        ${escapeHTML(product.brand)}
      </div>

      <p class="product-description">
        ${escapeHTML(product.description).replace(/\n/g,"<br>")}
      </p>


      <div class="product-price-box">

        <strong class="product-price">
          ${formatPrice(product.price)}
        </strong>

        ${
          product.oldPrice
          ? `
            <span class="product-old-price">
              ${formatPrice(product.oldPrice)}
            </span>
          `
          : ""
        }

        ${
          discount > 0
          ? `
            <span class="product-discount">
              -${discount}%
            </span>
          `
          : ""
        }

      </div>


      <div class="product-availability">
        Disponible — Commande directe avec FirstBest
      </div>


      <div class="product-actions-row">

        <div class="quantity">

          <button
            type="button"
            id="minusQty"
          >
            −
          </button>

          <input
            type="number"
            id="productQty"
            value="1"
            min="1"
            max="99"
          >

          <button
            type="button"
            id="plusQty"
          >
            +
          </button>

        </div>


        <button
          type="button"
          class="btn primary product-btn product-btn-primary"
          id="addProduct"
        >
          Ajouter au panier
          ↗
        </button>

      </div>


      <a
        class="product-whatsapp"
        id="productWhatsApp"
        target="_blank"
        rel="noopener"
      >
        Commander / demander sur WhatsApp
        ↗
      </a>

    </div>

  `;


  /*
   * MAIN PRODUCT
   */

  const mainHTML = `

    <div class="product-breadcrumb breadcrumb">

      <a href="index.html#home">
        Accueil
      </a>

      <span>›</span>

      <a href="index.html#shop">
        Boutique
      </a>

      <span>›</span>

      <a href="index.html#shop">
        ${escapeHTML(product.category)}
      </a>

      <span>›</span>

      <strong>
        ${escapeHTML(product.name)}
      </strong>

    </div>


    <div class="product-detail">

      ${imageHTML}

      ${productInfoHTML}

    </div>


    <section class="product-details-section">

      <div class="product-section-heading">

        <div>

          <div class="kicker">
            <span></span>
            PRODUCT INFORMATION
          </div>

          <h2>
            Découvrez le <em>produit.</em>
          </h2>

        </div>

      </div>


      <div class="product-details-grid">


        <!-- DESCRIPTION -->

        <article class="product-detail-card">

          <span class="product-detail-number">
            01
          </span>

          <h3>
            Description
          </h3>

          <p>
            ${escapeHTML(product.description)}
          </p>

        </article>


        <!-- POINTS FORTS -->

        <article class="product-detail-card">

          <span class="product-detail-number">
            02
          </span>

          <h3>
            Points forts
          </h3>

          <p>

            ${
              product.highlights
              ? product.highlights.map(item => `
                <span style="
                  display:block;
                  margin:8px 0;
                ">
                  <span style="
                    color:var(--accent);
                    margin-right:8px;
                  ">•</span>
                  ${escapeHTML(item)}
                </span>
              `).join("")
              : "Produit sélectionné par FirstBest."
            }

          </p>

        </article>


        <!-- PROFIL -->

        <article class="product-detail-card">

          <span class="product-detail-number">
            03
          </span>

          <h3>
            Profil produit
          </h3>

          <p>

            <strong>
              Marque
            </strong>

            <br>

            ${escapeHTML(product.brand)}

            <br><br>

            <strong>
              Catégorie
            </strong>

            <br>

            ${escapeHTML(product.category)}

          </p>

        </article>


        <!-- COMMANDE -->

        <article class="product-detail-card">

          <span class="product-detail-number">
            04
          </span>

          <h3>
            Commander
          </h3>

          <p>
            Aucun paiement en ligne.
            Préparez votre commande et
            contactez directement FirstBest
            via WhatsApp.
          </p>

        </article>

      </div>


      ${
        isPack
        ? renderPackContents(product)
        : ""
      }


      ${
        product.profile
        ? renderProfileTable(product)
        : ""
      }


    </section>


    ${renderRelatedProducts(product)}

    ${renderOrderBanner(product)}

  `;


  if(productContainer){

    /*
     * On garde éventuellement un wrapper interne
     * si le HTML possède #productContainer.
     */

    const target =
      document.querySelector("#productContainer") ||
      productContainer;

    target.innerHTML = mainHTML;
  }


  setupProductInteractions(product);

  updateCartCount();

  revealElements();

}


/* =========================================================
   PACK CONTENTS
   ========================================================= */

function renderPackContents(product){

  if(!product.packContents?.length){
    return "";
  }

  return `

    <section
      class="product-info-banner pack-contents"
      style="margin-top:35px;"
    >

      <div class="kicker">
        <span></span>
        CONTENU DU PACK
      </div>

      <h2>
        Tout ce qu'il vous faut pour votre
        <em>installation.</em>
      </h2>

      <p style="margin-bottom:28px;">
        Le pack comprend les éléments nécessaires
        pour réaliser une installation CCTV complète.
      </p>


      <div
        class="product-pack-list"
        style="
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:12px;
          position:relative;
          z-index:2;
        "
      >

        ${
          product.packContents.map((item,index) => `

            <div
              class="pack-item"
              style="
                padding:16px 18px;
                border:1px solid var(--line);
                border-radius:14px;
                background:rgba(255,255,255,.025);
                color:#dce5ef;
                font-size:13px;
                line-height:1.5;
                transition:.3s ease;
              "
            >

              <span style="
                display:block;
                margin-bottom:4px;
                color:var(--accent);
                font-size:9px;
                font-weight:800;
                letter-spacing:.12em;
              ">
                ÉLÉMENT ${String(index + 1).padStart(2,"0")}
              </span>

              ${escapeHTML(item)}

            </div>

          `).join("")
        }

      </div>

    </section>

  `;
}


/* =========================================================
   PROFILE TABLE
   ========================================================= */

function renderProfileTable(product){

  const entries =
    Object.entries(product.profile);

  return `

    <section
      class="product-specs"
      style="margin-top:18px;"
    >

      ${
        entries.map(([label,value]) => `

          <div class="product-spec-row">

            <div class="product-spec-label">
              ${escapeHTML(label)}
            </div>

            <div class="product-spec-value">
              ${escapeHTML(value)}
            </div>

          </div>

        `).join("")
      }

    </section>

  `;
}


/* =========================================================
   RELATED PRODUCTS
   ========================================================= */

function renderRelatedProducts(currentProduct){

  const related = products
    .filter(p =>
      p.id !== currentProduct.id &&
      p.category === currentProduct.category
    )
    .slice(0,4);


  if(!related.length){
    return "";
  }


  return `

    <section class="related-products">

      <div class="product-section-heading">

        <div>

          <div class="kicker">
            <span></span>
            YOU MAY ALSO LIKE
          </div>

          <h2>
            Produits <em>similaires.</em>
          </h2>

        </div>

      </div>


      <div class="related-grid">

        ${
          related.map(item => `

            <a
              href="product.html?id=${item.id}"
              class="related-card"
            >

              <div class="related-card-image">

                <img
                  src="${escapeHTML(item.image)}"
                  alt="${escapeHTML(item.name)}"
                  loading="lazy"
                >

              </div>


              <div class="related-card-body">

                <div class="related-card-category">
                  ${escapeHTML(item.category)}
                </div>

                <h3>
                  ${escapeHTML(item.name)}
                </h3>

                <div class="related-card-price">
                  ${formatPrice(item.price)}
                </div>

              </div>

            </a>

          `).join("")
        }

      </div>

    </section>

  `;
}


/* =========================================================
   ORDER BANNER
   ========================================================= */

function renderOrderBanner(product){

  return `

    <section class="product-info-banner">

      <div class="kicker">
        <span></span>
        READY WHEN YOU ARE
      </div>

      <h2>
        Besoin de plus
        d'informations ?
      </h2>

      <p>
        Demandez le prix, la disponibilité,
        les caractéristiques techniques ou
        les informations supplémentaires
        directement à notre équipe.
      </p>

      <a
        class="product-whatsapp"
        href="${whatsappURL(
          createWhatsAppMessage(product,1)
        )}"
        target="_blank"
        rel="noopener"
        style="
          width:auto;
          display:inline-flex;
          padding:0 25px;
          margin-top:25px;
        "
      >
        WhatsApp
        ↗
      </a>

    </section>

  `;
}


/* =========================================================
   PRODUCT INTERACTIONS
   ========================================================= */

function setupProductInteractions(product){

  const qtyInput =
    document.querySelector("#productQty");

  const minus =
    document.querySelector("#minusQty");

  const plus =
    document.querySelector("#plusQty");

  const add =
    document.querySelector("#addProduct");

  const whatsapp =
    document.querySelector("#productWhatsApp");


  /* =========================
     QUANTITY
     ========================= */

  function getQuantity(){

    if(!qtyInput){
      return 1;
    }

    let quantity =
      parseInt(qtyInput.value,10);

    if(!Number.isFinite(quantity)){
      quantity = 1;
    }

    quantity =
      Math.max(1,Math.min(99,quantity));

    qtyInput.value = quantity;

    return quantity;
  }


  if(minus){

    minus.addEventListener("click",() => {

      const quantity = getQuantity();

      qtyInput.value =
        Math.max(1,quantity - 1);

      updateWhatsAppLink();

    });

  }


  if(plus){

    plus.addEventListener("click",() => {

      const quantity = getQuantity();

      qtyInput.value =
        Math.min(99,quantity + 1);

      updateWhatsAppLink();

    });

  }


  if(qtyInput){

    qtyInput.addEventListener("input",() => {

      getQuantity();

      updateWhatsAppLink();

    });

  }


  /* =========================
     ADD CART
     ========================= */

  if(add){

    add.addEventListener("click",() => {

      const quantity =
        getQuantity();

      addToCart(
        product,
        quantity
      );

    });

  }


  /* =========================
     WHATSAPP
     ========================= */

  function updateWhatsAppLink(){

    if(!whatsapp){
      return;
    }

    const quantity =
      getQuantity();

    whatsapp.href =
      whatsappURL(
        createWhatsAppMessage(
          product,
          quantity
        )
      );
  }


  updateWhatsAppLink();

}


/* =========================================================
   REVEAL
   ========================================================= */

function revealElements(){

  const elements =
    document.querySelectorAll(
      ".reveal, .product-detail-card, .related-card"
    );


  if(!("IntersectionObserver" in window)){

    elements.forEach(el =>
      el.classList.add("visible")
    );

    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            entry.target.classList.add("visible");

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold:.08
      }
    );


  elements.forEach(el =>
    observer.observe(el)
  );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown",event => {

  if(event.key === "Escape"){

    const elements =
      document.querySelectorAll(
        ".modal.open,.drawer.open,.search-overlay.open"
      );

    elements.forEach(el =>
      el.classList.remove("open")
    );

  }

});


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded",() => {

  updateCartCount();

});
