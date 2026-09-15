/* =========================================================
   FIRSTBEST — PRODUCT DETAILS
   ========================================================= */

const WHATSAPP_NUMBER = "212723354542";


/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [

  {
    id:1,
    name:"iPhone 16 Pro",
    brand:"Apple",
    category:"Smartphones",
    price:12990,
    oldPrice:13990,
    badge:"NEW",
    image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85",
    description:"Un smartphone premium avec performances exceptionnelles, caméra avancée et design élégant."
  },

  {
    id:2,
    name:"Galaxy S25 Ultra",
    brand:"Samsung",
    category:"Smartphones",
    price:11990,
    oldPrice:12990,
    badge:"-8%",
    image:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=85",
    description:"Puissance, photographie et écran premium dans un smartphone conçu pour les utilisateurs exigeants."
  },

  {
    id:13,
    name:"Redmi Note 14 Pro",
    brand:"Xiaomi",
    category:"Smartphones",
    price:3490,
    oldPrice:3990,
    badge:"NEW",
    image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
    description:"Smartphone moderne offrant un excellent équilibre entre performances, autonomie et prix."
  },

  {
    id:14,
    name:"Galaxy A56",
    brand:"Samsung",
    category:"Smartphones",
    price:4290,
    oldPrice:4690,
    badge:"HOT",
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    description:"Un smartphone polyvalent avec écran moderne, grande autonomie et design élégant."
  },

  {
    id:3,
    name:"MacBook Pro",
    brand:"Apple",
    category:"PC Portables",
    price:18990,
    oldPrice:19990,
    badge:"PRO",
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    description:"Un ordinateur portable puissant pour la création, le développement et la productivité."
  },

  {
    id:9,
    name:"Lenovo ThinkPad",
    brand:"Lenovo",
    category:"PC Portables",
    price:7990,
    oldPrice:8990,
    badge:"-11%",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    description:"Ordinateur professionnel fiable pour le travail et les études."
  },

  {
    id:15,
    name:"HP Pavilion 15",
    brand:"HP",
    category:"PC Portables",
    price:6490,
    oldPrice:6990,
    badge:"SALE",
    image:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=85",
    description:"PC portable polyvalent adapté au travail, aux études et à la bureautique."
  },

  {
    id:16,
    name:"ASUS VivoBook",
    brand:"ASUS",
    category:"PC Portables",
    price:6990,
    oldPrice:7590,
    badge:"NEW",
    image:"https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=900&q=85",
    description:"PC portable fin et polyvalent pour une utilisation quotidienne."
  },

  {
    id:17,
    name:"PC Bureau HP ProDesk",
    brand:"HP",
    category:"PC de Bureau",
    price:5490,
    oldPrice:5990,
    badge:"PRO",
    image:"https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=900&q=85",
    description:"Ordinateur de bureau professionnel pour la bureautique, la gestion et le travail quotidien."
  },

  {
    id:18,
    name:"Lenovo ThinkCentre",
    brand:"Lenovo",
    category:"PC de Bureau",
    price:5990,
    oldPrice:6490,
    badge:"BUSINESS",
    image:"https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=900&q=85",
    description:"PC de bureau compact et fiable pour les entreprises et les professionnels."
  },

  {
    id:19,
    name:"PC Bureau Gaming",
    brand:"FirstBest",
    category:"PC de Bureau",
    price:10990,
    oldPrice:11990,
    badge:"GAMING",
    image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85",
    description:"Configuration desktop pensée pour le gaming et les applications exigeantes."
  },

  {
    id:4,
    name:"ASUS ROG Gaming",
    brand:"ASUS",
    category:"Gaming",
    price:14990,
    oldPrice:16990,
    badge:"-12%",
    image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=900&q=85",
    description:"Laptop gaming performant avec puissance graphique et écran immersif."
  },

  {
    id:20,
    name:"Gaming Keyboard RGB",
    brand:"Logitech",
    category:"Gaming",
    price:1190,
    oldPrice:1390,
    badge:"RGB",
    image:"https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=85",
    description:"Clavier gaming RGB conçu pour une expérience de jeu réactive."
  },

  {
    id:21,
    name:"Gaming Mouse",
    brand:"Logitech",
    category:"Gaming",
    price:690,
    oldPrice:790,
    badge:"PRO",
    image:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    description:"Souris gaming précise et confortable pour les longues sessions."
  },

  {
    id:5,
    name:"iPad Pro",
    brand:"Apple",
    category:"Tablettes",
    price:9990,
    oldPrice:10990,
    badge:"HOT",
    image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85",
    description:"Une tablette premium parfaite pour le travail, les études et la création."
  },

  {
    id:8,
    name:"Xiaomi Pad",
    brand:"Xiaomi",
    category:"Tablettes",
    price:3990,
    oldPrice:4490,
    badge:"BEST",
    image:"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=85",
    description:"Tablette moderne offrant un excellent équilibre entre performances et prix."
  },

  {
    id:22,
    name:"Samsung Galaxy Tab",
    brand:"Samsung",
    category:"Tablettes",
    price:4990,
    oldPrice:5490,
    badge:"NEW",
    image:"https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=900&q=85",
    description:"Tablette polyvalente pour les études, le travail et le divertissement."
  },

  {
    id:6,
    name:"AirPods Pro",
    brand:"Apple",
    category:"Audio",
    price:2490,
    oldPrice:2790,
    badge:"-10%",
    image:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85",
    description:"Écouteurs sans fil avec réduction de bruit et expérience audio immersive."
  },

  {
    id:7,
    name:"Sony Headphones",
    brand:"Sony",
    category:"Audio",
    price:3290,
    oldPrice:3790,
    badge:"SALE",
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description:"Casque audio confortable avec qualité sonore premium."
  },

  {
    id:12,
    name:"Portable Speaker",
    brand:"JBL",
    category:"Audio",
    price:1290,
    oldPrice:1490,
    badge:"-13%",
    image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    description:"Enceinte Bluetooth compacte avec un son puissant."
  },

  {
    id:23,
    name:'Moniteur Full HD 24"',
    brand:"Samsung",
    category:"Écrans & Moniteurs",
    price:1690,
    oldPrice:1890,
    badge:"FHD",
    image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
    description:"Moniteur Full HD polyvalent pour le travail, les études et le multimédia."
  },

  {
    id:24,
    name:'Moniteur Gaming 27"',
    brand:"AOC",
    category:"Écrans & Moniteurs",
    price:2990,
    oldPrice:3290,
    badge:"GAMING",
    image:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=900&q=85",
    description:"Écran gaming 27 pouces conçu pour une expérience fluide et immersive."
  },

  {
    id:25,
    name:"Moniteur professionnel",
    brand:"LG",
    category:"Écrans & Moniteurs",
    price:3490,
    oldPrice:3790,
    badge:"PRO",
    image:"https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=900&q=85",
    description:"Moniteur professionnel adapté au travail, à la création et à la bureautique."
  },

  {
    id:26,
    name:"Pack vidéosurveillance Dahua 5MP Couleur— 4 caméras",
    brand:"FirstBest Security",
    category:"Packs de Surveillance",
    price:1650,
    oldPrice:2279,
    badge:"PACK",
    image:"pack1.jpg",
    description:`
Pack complet de vidéosurveillance professionnel, comprenant tout le nécessaire pour réaliser une installation CCTV : enregistreur vidéo numérique Dahua HDCVI WizSense, 4 caméras Dahua 5MP HDCVI Smart Dual Light, alimentation centralisée WDLink 12V 24CH, câble coaxial WDLink RG59 + DC + Jacket de 100 mètres, câble HDMI 2.0 4K, disque dur Western Digital 500GB, ainsi que les connecteurs BNC et connecteurs d'alimentation DC.

<br><br>

<strong>📦 Contenu du pack :</strong>

<br><br>

🎥 4 × Caméras Dahua HDCVI lentille 2,8 <strong>5MP Smart Dual Light</strong><br>
🖥️ 1 × Enregistreur vidéo Dahua <strong>HDCVI WizSense</strong><br>
⚡ 1 × Alimentation <strong>WDLink 10A 12V 24CH</strong><br>
🔌 1 × Câble coaxial <strong>RG45 1M + DC + Jacker RG59 – 20M</strong><br>
📺 1 × Câble <strong>HDMI 2.0 4K 1,5M</strong><br>
💾 1 × Disque dur <strong>WD 500GB</strong><br>
🔩 Connecteurs <strong>BNC</strong><br>
🔋 Connecteurs d'alimentation <strong>DC</strong>
`
  },

  {
    id:27,
    name:"Pack vidéosurveillance Dahua 2MP Couleur — 4 caméras",
    brand:"FirstBest Security",
    category:"Packs de Surveillance",
    price:1300,
    oldPrice:1879,
    badge:"",
    image:"pack2.jpg",
    description:`
Pack complet de vidéosurveillance professionnel, comprenant tout le nécessaire pour réaliser une installation CCTV : enregistreur vidéo numérique Dahua HDCVI WizSense, 4 caméras Dahua 5MP HDCVI Smart Dual Light, alimentation centralisée WDLink 12V 24CH, câble coaxial WDLink RG59 + DC + Jacket de 100 mètres, câble HDMI 2.0 4K, disque dur Western Digital 500GB, ainsi que les connecteurs BNC et connecteurs d'alimentation DC.

<br><br>

<strong>📦 Contenu du pack :</strong>

<br><br>

🎥 4 × Caméras Dahua HDCVI lentille 2,8 <strong>2MP Smart Dual Light</strong><br>
🖥️ 1 × Enregistreur vidéo Dahua <strong>HDCVI WizSense</strong><br>
⚡ 1 × Alimentation <strong>WDLink 10A 12V 24CH</strong><br>
🔌 1 × Câble coaxial <strong>RG45 1M + DC + Jacker RG59 – 20M</strong><br>
📺 1 × Câble <strong>HDMI 2.0 4K 1,5M</strong><br>
💾 1 × Disque dur <strong>WD 500GB</strong><br>
🔩 Connecteurs <strong>BNC</strong><br>
🔋 Connecteurs d'alimentation <strong>DC</strong>
`
  },

  {
    id:28,
    name:"Pack Hikvision 2MP lentille 2,8  – 4 Caméras Turbo HD",
    brand:"FirstBest Security",
    category:"Packs de Surveillance",
    price:1300,
    oldPrice:1879,
    badge:"",
    image:"pack3.jpg",
    description:`
Pack complet de vidéosurveillance professionnel, comprenant tout le nécessaire pour réaliser une installation CCTV : enregistreur vidéo numérique hybride Hikvision <strong>Turbo HD</strong>, 4 caméras Hikvision <strong>2MP Turbo HD</strong>, alimentation centralisée WDLink 12V 24CH, câble coaxial WDLink RG59 + DC + Jacket de 100 mètres, câble HDMI 2.0 4K, disque dur Western Digital 500GB, ainsi que les connecteurs BNC et connecteurs d'alimentation DC.

<br><br>

<strong>📦 Contenu du pack :</strong>

<br><br>

🎥 4 × Caméras Hikvision <strong>2MP Turbo HD</strong><br>
🖥️ 1 × Enregistreur vidéo hybride Hikvision <strong>Turbo HD 5-in-1</strong><br>
⚡ 1 × Alimentation <strong>WDLink 10A 12V 24CH</strong><br>
🔌 1 × Câble coaxial <strong>RG45 1M + DC + Jacket RG59 – 20M</strong><br>
📺 1 × Câble <strong>HDMI 2.0 4K 1,5M</strong><br>
💾 1 × Disque dur <strong>WD 500GB</strong><br>
🔩 Connecteurs <strong>BNC</strong><br>
🔋 Connecteurs d'alimentation <strong>DC</strong>
`
  },

  {
    id:29,
    name:"Pack Hikvision 3K lentille 2,8 – 4 Caméras",
    brand:"FirstBest Security",
    category:"Packs de Surveillance",
    price:1300,
    oldPrice:1800,
    badge:"",
    image:"pack4.jpg",
    description:`
Pack complet de vidéosurveillance professionnel avec technologie <strong>3K Couleur</strong>, conçu pour assurer une surveillance haute définition avec une excellente qualité d'image, y compris en conditions de faible luminosité. Le pack comprend les équipements essentiels pour réaliser une installation CCTV complète.

<br><br>

<strong>📦 Contenu du pack :</strong>

<br><br>

🎥 4 × Caméras <strong>3K Couleur</strong><br>
🖥️ 1 × Enregistreur vidéo numérique <strong>3K</strong><br>
⚡ 1 × Alimentation centralisée <strong>10A 12V</strong><br>
🔌 1 × Câble coaxial <strong>RG45 1M + DC + Jacke RG59 – 20M</strong><br>
📺 1 × Câble <strong>HDMI 2.0 4K – 1,5M</strong><br>
💾 1 × Disque dur <strong>500GB</strong><br>
🔩 Connecteurs <strong>BNC</strong><br>
🔋 Connecteurs d'alimentation <strong>DC</strong>
`
  },

 {
    id:46,
    name:"Pack Caméra 3K Full Color lentille 3,6 – Image & Audio",
    brand:"FirstBest Security",
    category:"Packs de Surveillance",
    price:1300,
    oldPrice:1800,
    badge:"BUSINESS",
    image:"pack5.jpg",
    description:`
Pack complet de vidéosurveillance professionnel avec technologie <strong>3K Couleur</strong>, conçu pour assurer une surveillance haute définition avec une excellente qualité d'image, y compris en conditions de faible luminosité. Le pack comprend les équipements essentiels pour réaliser une installation CCTV complète.

<br><br>

<strong>📦 Contenu du pack :</strong>

<br><br>

🎥 4 × Caméras <strong>3K Couleur</strong><br>
🖥️ 1 × Enregistreur vidéo numérique <strong>3K</strong><br>
⚡ 1 × Alimentation centralisée <strong> 10A 12V</strong><br>
🔌 1 × Câble coaxial <strong>RG45 1M + DC + Jacke RG59 – 20M</strong><br>
📺 1 × Câble <strong>HDMI 2.0 4K – 1,5M</strong><br>
💾 1 × Disque dur <strong>500GB</strong><br>
🔩 Connecteurs <strong>BNC</strong><br>
🔋 Connecteurs d'alimentation <strong>DC</strong>
`
  },

 {
    id:47,
    name:"PACK DAHUA 5MP WIZSENSE ORIGINAL – COULEUR, IMAGE & AUDIO",
    brand:"FirstBest Security",
    category:"Packs de Surveillance",
    price:1300,
    oldPrice:1800,
    badge:"premium",
    image:"pack6.jpg",
    description:`
Pack complet de vidéosurveillance professionnel <strong>Dahua 5MP WizSense Original</strong>, comprenant tout le nécessaire pour réaliser une installation CCTV : système haute résolution 5MP avec <strong>vision couleur, image et audio</strong>, enregistreur vidéo numérique Dahua HDCVI WizSense, caméras Dahua originales, alimentation centralisée, câble coaxial, câble HDMI 4K, disque dur et connecteurs nécessaires à l'installation.

<br><br>

<strong>📦 Contenu du pack :</strong>

<br><br>

🎥 4 × Caméras Dahua Original <strong>5MP WizSense Full Color – Image & Audio</strong><br>
🖥️ 1 × Enregistreur vidéo Dahua <strong>HDCVI WizSense</strong><br>
⚡ 1 × Alimentation centralisée <strong>WDLink 12V</strong><br>
🔌 1 × Câble coaxial <strong>WDLink RG45 1M + DC + Jacket RG59 20M</strong><br>
📺 1 × Câble <strong>HDMI 2.0 4K 1,5M</strong><br>
💾 1 × Disque dur <strong>500GB</strong><br>
🔩 Connecteurs <strong>BNC</strong><br>
🔋 Connecteurs d'alimentation <strong>DC</strong>
`
  },
   
  {
    id:30,
    name:"Pack de surveillance solaire — Sécurité & autonomie",
    brand:"Multiscreen Camera",
    category:"Caméras de Surveillance",
    price:1300,
    oldPrice:1500,
    badge:"solaire",
    image:"camera1.jpg",
    description:`
Pack complet de vidéosurveillance solaire, comprenant tout le nécessaire pour réaliser une installation de surveillance extérieure autonome : caméra de surveillance avec vision étendue, deux panneaux solaires pour l'alimentation du système et les accessoires nécessaires à l'installation.

<br><br>

<strong>📦 Contenu:</strong>

<br><br>

📹 1 × Caméra de surveillance solaire <strong>multifonction</strong><br>
☀️ 2 × Panneaux solaires <strong>pour alimentation autonome</strong><br>
🔋 1 × Système d'alimentation <strong>solaire</strong><br>
🔌 1 × Câblage nécessaire <strong>à l'installation</strong><br>
🔩 Connecteurs et accessoires <strong>nécessaires</strong>
`
  },

  {
    id:31,
    name:"IMOU Dual Lens – Caméra Extérieure 24/7 avec Batterie + Panneau Solaire",
    brand:"IMOU",
    category:"Caméras de Surveillance",
    price:1300,
    oldPrice:1500,
    badge:"OUTDOOR",
    image:"camera2.jpg",
    description:"Caméra de surveillance conçue pour une installation extérieure."
  },

  {
    id:32,
    name:"Caméra IP Full HD",
    brand:"Dahua",
    category:"Caméras de Surveillance",
    price:890,
    oldPrice:990,
    badge:"FULL HD",
    image:"",
    description:"Caméra IP Full HD pour une surveillance fiable et une visualisation claire."
  },

  {
    id:33,
    name:"Caméra PTZ Wi-Fi",
    brand:"TP-Link",
    category:"Caméras de Surveillance",
    price:1090,
    oldPrice:1290,
    badge:"PTZ",
    image:"",
    description:"Caméra motorisée connectée avec contrôle à distance."
  },

  {
    id:34,
    name:"Trottinette Électrique City",
    brand:"Xiaomi",
    category:"Trottinettes Électriques",
    price:3490,
    oldPrice:3990,
    badge:"CITY",
    image:"",
    description:"Trottinette électrique pratique pour les déplacements urbains quotidiens."
  },

  {
    id:35,
    name:"Trottinette Électrique Pro",
    brand:"Ninebot",
    category:"Trottinettes Électriques",
    price:4990,
    oldPrice:5490,
    badge:"PRO",
    image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
    description:"Modèle performant destiné aux déplacements urbains réguliers."
  },

  {
    id:36,
    name:"Trottinette Électrique Urban",
    brand:"Ninebot",
    category:"Trottinettes Électriques",
    price:4290,
    oldPrice:4690,
    badge:"URBAN",
    image:"https://images.unsplash.com/photo-1600712242805-6f78671b24da?auto=format&fit=crop&w=900&q=85",
    description:"Trottinette moderne avec design urbain et utilisation pratique."
  },

  {
    id:10,
    name:"Mechanical Keyboard",
    brand:"Logitech",
    category:"Électronique & Accessoires",
    price:990,
    oldPrice:1190,
    badge:"NEW",
    image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    description:"Clavier mécanique moderne pour gaming et productivité."
  },

  {
    id:11,
    name:"Smart Watch",
    brand:"Samsung",
    category:"Électronique & Accessoires",
    price:1990,
    oldPrice:2290,
    badge:"HOT",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description:"Montre connectée élégante pour suivre votre activité quotidienne."
  },

  {
    id:37,
    name:"Câble USB-C",
    brand:"Baseus",
    category:"Électronique & Accessoires",
    price:99,
    oldPrice:129,
    badge:"ACCESSORY",
    image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85",
    description:"Câble USB-C pratique pour la charge et la connexion de vos appareils."
  },

  {
    id:38,
    name:"Chargeur Rapide USB-C",
    brand:"Anker",
    category:"Électronique & Accessoires",
    price:249,
    oldPrice:299,
    badge:"FAST",
    image:"https://images.unsplash.com/photo-1591290619762-c588e37f3d9b?auto=format&fit=crop&w=900&q=85",
    description:"Chargeur compact conçu pour une recharge rapide et pratique."
  },

  {
    id:39,
    name:"Power Bank",
    brand:"Anker",
    category:"Électronique & Accessoires",
    price:399,
    oldPrice:449,
    badge:"POWER",
    image:"https://images.unsplash.com/photo-1609592424854-9e4a6e7f2c55?auto=format&fit=crop&w=900&q=85",
    description:"Batterie externe pratique pour recharger vos appareils en déplacement."
  },

  {
    id:40,
    name:"Coque Smartphone",
    brand:"Baseus",
    category:"Électronique & Accessoires",
    price:129,
    oldPrice:159,
    badge:"CASE",
    image:"https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85",
    description:"Coque élégante et protectrice pour smartphone."
  },

  {
    id:41,
    name:"Support Smartphone",
    brand:"Baseus",
    category:"Électronique & Accessoires",
    price:149,
    oldPrice:179,
    badge:"NEW",
    image:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=85",
    description:"Support pratique pour maintenir votre smartphone en toute sécurité."
  },

  {
    id:42,
    name:"Hub USB Multiport",
    brand:"UGREEN",
    category:"Électronique & Accessoires",
    price:349,
    oldPrice:399,
    badge:"USB",
    image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    description:"Hub USB multiport pour connecter plusieurs périphériques."
  },

  {
    id:43,
    name:"Adaptateur HDMI",
    brand:"UGREEN",
    category:"Électronique & Accessoires",
    price:199,
    oldPrice:249,
    badge:"HDMI",
    image:"https://images.unsplash.com/photo-1626379953827-baec19c3accd?auto=format&fit=crop&w=900&q=85",
    description:"Adaptateur pratique pour connecter vos équipements vidéo."
  },

  {
    id:44,
    name:"Carte Mémoire 128GB",
    brand:"SanDisk",
    category:"Électronique & Accessoires",
    price:179,
    oldPrice:219,
    badge:"128GB",
    image:"https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=900&q=85",
    description:"Carte mémoire fiable pour smartphones, appareils photo et autres équipements."
  },

  {
    id:45,
    name:"Batterie Rechargeable",
    brand:"Duracell",
    category:"Électronique & Accessoires",
    price:149,
    oldPrice:179,
    badge:"POWER",
    image:"https://images.unsplash.com/photo-1621939514649-280e2aa3b9dc?auto=format&fit=crop&w=900&q=85",
    description:"Batterie rechargeable destinée à différents appareils électroniques."
  }

];


/* =========================================================
   GET PRODUCT
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find(item => item.id === productId);


/* =========================================================
   HELPERS
   ========================================================= */

function money(value){
  return Number(value).toLocaleString("fr-FR") + " DH";
}


function discount(product){

  if(!product.oldPrice || product.oldPrice <= product.price){
    return 0;
  }

  return Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
}


function getHighlights(product){

  const category = product.category.toLowerCase();

  if(category.includes("smartphone")){

    return [
      "Design moderne et premium",
      "Performances adaptées à une utilisation quotidienne",
      "Expérience photo et multimédia avancée",
      "Solution idéale pour communication et divertissement"
    ];

  }

  if(category.includes("pc portable")){

    return [
      "Pensé pour le travail et la productivité",
      "Format pratique pour une utilisation mobile",
      "Adapté aux études et aux usages professionnels",
      "Excellent choix pour les utilisateurs polyvalents"
    ];

  }

  if(category.includes("pc de bureau")){

    return [
      "Configuration pensée pour la productivité",
      "Solution adaptée aux environnements professionnels",
      "Confort d'utilisation au quotidien",
      "Idéal pour bureautique et applications exigeantes"
    ];

  }

  if(category.includes("gaming")){

    return [
      "Pensé pour une expérience gaming immersive",
      "Design orienté performance",
      "Adapté aux longues sessions",
      "Solution idéale pour les passionnés de gaming"
    ];

  }

  if(category.includes("tablettes")){

    return [
      "Format pratique et polyvalent",
      "Adaptée au travail et aux études",
      "Parfaite pour le multimédia",
      "Solution pratique pour une utilisation mobile"
    ];

  }

  if(category.includes("audio")){

    return [
      "Expérience audio immersive",
      "Design confortable et moderne",
      "Adapté à la musique et au divertissement",
      "Solution pratique pour une utilisation quotidienne"
    ];

  }

  if(category.includes("écrans")){

    return [
      "Affichage adapté au quotidien",
      "Solution pour travail et multimédia",
      "Design moderne",
      "Adapté aux configurations personnelles et professionnelles"
    ];

  }

  if(category.includes("surveillance")){

    return [
      "Solution pensée pour renforcer la sécurité",
      "Utilisation adaptée aux besoins résidentiels ou professionnels",
      "Installation et utilisation pratiques",
      "Possibilité de demander conseil au vendeur"
    ];

  }

  if(category.includes("trottinettes")){

    return [
      "Pensée pour les déplacements urbains",
      "Utilisation pratique au quotidien",
      "Design moderne",
      "Solution adaptée à la mobilité personnelle"
    ];

  }

  return [
    "Produit pratique pour votre équipement",
    "Design moderne",
    "Solution adaptée au quotidien",
    "Excellent complément à votre installation tech"
  ];
}


/* =========================================================
   ERROR PAGE
   ========================================================= */

function showProductNotFound(){

  document.title = "Produit introuvable — FirstBest";

  const page = document.getElementById("productPage");

  page.innerHTML = `

    <section style="
      min-height:65vh;
      display:grid;
      place-items:center;
      text-align:center;
      padding:50px 20px;
    ">

      <div>

        <div style="
          font-size:70px;
          margin-bottom:20px;
        ">
          ⌕
        </div>

        <h1 style="
          font-family:'Space Grotesk',sans-serif;
          font-size:45px;
          margin-bottom:15px;
        ">
          Produit introuvable
        </h1>

        <p style="
          color:#9aa7b8;
          max-width:500px;
          margin:0 auto 25px;
          line-height:1.7;
        ">
          Le produit que vous recherchez n'existe pas
          ou n'est plus disponible.
        </p>

        <a
          href="index.html#shop"
          style="
            display:inline-flex;
            padding:14px 22px;
            border-radius:12px;
            color:#061018;
            text-decoration:none;
            font-weight:800;
            background:linear-gradient(135deg,#00e5ff,#7c4dff);
          "
        >
          Retour à la boutique ↗
        </a>

      </div>

    </section>

  `;

}


/* =========================================================
   RENDER PRODUCT
   ========================================================= */

function renderProduct(){

  if(!product){

    showProductNotFound();
    return;

  }

  const reduction = discount(product);

  document.title = `${product.name} — FirstBest`;

  document.getElementById("breadcrumbProduct").textContent =
    product.name;

  document.getElementById("productImage").src =
    product.image;

  document.getElementById("productImage").alt =
    product.name;

  document.getElementById("productBadge").textContent =
    product.badge;

  document.getElementById("productCategory").textContent =
    product.category;

  document.getElementById("productBrand").textContent =
    product.brand;

  document.getElementById("productName").textContent =
    product.name;

  document.getElementById("detailsProductName").textContent =
    product.name;

  document.getElementById("bannerProductName").textContent =
    product.name;

 document.getElementById("productDescription").innerHTML =
  product.description;

  document.getElementById("longDescription").innerHTML =
  `${product.description}

  <br><br>

  Ce produit a été sélectionné par FirstBest pour répondre aux besoins des utilisateurs qui recherchent une solution fiable, moderne et adaptée à leur quotidien.

  <br><br>

  Pour obtenir les caractéristiques techniques exactes, la disponibilité actuelle ou des informations supplémentaires, contactez directement notre équipe sur WhatsApp.`;

  document.getElementById("productPrice").textContent =
    money(product.price);

  document.getElementById("productOldPrice").textContent =
    money(product.oldPrice);

  document.getElementById("productDiscount").textContent =
    reduction > 0 ? `-${reduction}%` : product.badge;

  document.getElementById("infoBrand").textContent =
    product.brand;

  document.getElementById("infoCategory").textContent =
    product.category;

  document.getElementById("infoReference").textContent =
    `FB-${String(product.id).padStart(3,"0")}`;

  const highlights =
    document.getElementById("highlights");

  highlights.innerHTML = "";

  getHighlights(product).forEach(item => {

    const li = document.createElement("li");

    li.textContent = item;

    highlights.appendChild(li);

  });

  updateWhatsAppLinks();

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function whatsappMessage(quantity = 1){

  return `
Bonjour FirstBest 👋

Je suis intéressé(e) par :

Produit : ${product.name}
Marque : ${product.brand}
Catégorie : ${product.category}
Prix : ${money(product.price)}
Quantité : ${quantity}

Référence : FB-${String(product.id).padStart(3,"0")}

Je souhaite avoir plus d'informations et confirmer la disponibilité.
  `.trim();

}


function whatsappURL(quantity = 1){

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${
    encodeURIComponent(whatsappMessage(quantity))
  }`;

}


function updateWhatsAppLinks(){

  const url = whatsappURL(quantity);

  document.getElementById("productWhatsApp").href = url;

  document.getElementById("bannerWhatsApp").href = url;

}


/* =========================================================
   QUANTITY
   ========================================================= */

let quantity = 1;

const quantityElement =
  document.getElementById("quantity");


function updateQuantity(){

  quantityElement.textContent = quantity;

  updateWhatsAppLinks();

}


document.getElementById("minusBtn").addEventListener("click", () => {

  if(quantity > 1){

    quantity--;

    updateQuantity();

  }

});


document.getElementById("plusBtn").addEventListener("click", () => {

  quantity++;

  if(quantity > 99){
    quantity = 99;
  }

  updateQuantity();

});


/* =========================================================
   CART
   ========================================================= */

function getCart(){

  try{

    return JSON.parse(
      localStorage.getItem("firstbest_cart")
    ) || [];

  }catch(error){

    return [];

  }

}


function saveCart(cart){

  localStorage.setItem(
    "firstbest_cart",
    JSON.stringify(cart)
  );

}


function addToCart(){

  const cart = getCart();

  const existing = cart.find(
    item => Number(item.id) === product.id
  );

  if(existing){

    existing.qty =
      Number(existing.qty || 1) + quantity;

  }else{

    cart.push({

      id:product.id,

      name:product.name,

      brand:product.brand,

      category:product.category,

      price:product.price,

      oldPrice:product.oldPrice,

      badge:product.badge,

      image:product.image,

      qty:quantity

    });

  }

  saveCart(cart);

  showToast(
    `${quantity} × ${product.name} ajouté au panier ✓`
  );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message){

  const toast =
    document.getElementById("productToast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2600);

}


/* =========================================================
   ADD BUTTON
   ========================================================= */

document
  .getElementById("addProductBtn")
  .addEventListener("click", addToCart);


/* =========================================================
   INIT
   ========================================================= */

renderProduct();
updateQuantity();
