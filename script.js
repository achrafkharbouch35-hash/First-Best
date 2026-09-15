/* =====================================================
   FirstBest — TECH & MOBILE
   ===================================================== */

/* =====================================================
   CONFIGURATION
   ===================================================== */

const WHATSAPP_NUMBER = "212723354542";
const INSTAGRAM_URL = "https://www.instagram.com/best2720f/";


/* =====================================================
   PRODUCTS
   ===================================================== */

const products = [

  /* =========================
     SMARTPHONES
  ========================== */

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
    description: "Un smartphone premium avec performances exceptionnelles, caméra avancée et design élégant."
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
    description: "Puissance, photographie et écran premium dans un smartphone conçu pour les utilisateurs exigeants."
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
    description: "Smartphone moderne offrant un excellent équilibre entre performances, autonomie et prix."
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
    description: "Un smartphone polyvalent avec écran moderne, grande autonomie et design élégant."
  },


  /* =========================
     PC PORTABLES
  ========================== */

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
    description: "Un ordinateur portable puissant pour la création, le développement et la productivité."
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
    description: "Ordinateur professionnel fiable pour le travail et les études."
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
    description: "PC portable polyvalent adapté au travail, aux études et à la bureautique."
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
    description: "PC portable fin et polyvalent pour une utilisation quotidienne."
  },


  /* =========================
     PC DE BUREAU
  ========================== */

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
    description: "Ordinateur de bureau professionnel pour la bureautique, la gestion et le travail quotidien."
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
    description: "PC de bureau compact et fiable pour les entreprises et les professionnels."
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
    description: "Configuration desktop pensée pour le gaming et les applications exigeantes."
  },


  /* =========================
     GAMING
  ========================== */

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
    description: "Laptop gaming performant avec puissance graphique et écran immersif."
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
    description: "Clavier gaming RGB conçu pour une expérience de jeu réactive."
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
    description: "Souris gaming précise et confortable pour les longues sessions."
  },


  /* =========================
     TABLETTES
  ========================== */

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
    description: "Une tablette premium parfaite pour le travail, les études et la création."
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
    description: "Tablette moderne offrant un excellent équilibre entre performances et prix."
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
    description: "Tablette polyvalente pour les études, le travail et le divertissement."
  },


  /* =========================
     AUDIO
  ========================== */

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
    description: "Écouteurs sans fil avec réduction de bruit et expérience audio immersive."
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
    description: "Casque audio confortable avec qualité sonore premium."
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
    description: "Enceinte Bluetooth compacte avec un son puissant."
  },


  /* =========================
     ÉCRANS & MONITEURS
  ========================== */

  {
    id: 23,
    name: "Moniteur Full HD 24\"",
    brand: "Samsung",
    category: "Écrans & Moniteurs",
    price: 1690,
    oldPrice: 1890,
    badge: "FHD",
    newest: true,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
    description: "Moniteur Full HD polyvalent pour le travail, les études et le multimédia."
  },

  {
    id: 24,
    name: "Moniteur Gaming 27\"",
    brand: "AOC",
    category: "Écrans & Moniteurs",
    price: 2990,
    oldPrice: 3290,
    badge: "GAMING",
    newest: true,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=900&q=85",
    description: "Écran gaming 27 pouces conçu pour une expérience fluide et immersive."
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
    description: "Moniteur professionnel adapté au travail, à la création et à la bureautique."
  },


  /* =========================
     PACKS DE SURVEILLANCE
     EXACTEMENT 4 PACKS
     ========================== */

  {
    id: 26,
    name: "Pack vidéosurveillance Dahua 5MP — 4 caméras",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 1650,
    oldPrice: 2279,
    badge: "PACK",
    newest: true,
    image: "pack1.jpg",
    description: "Solution complète de surveillance pour sécuriser efficacement votre maison ou votre commerce."
  },

  {
    id: 27,
    name: "Pack vidéosurveillance Dahua 2MP Couleur — 4 caméras",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 1300,
    oldPrice: 1879,
    badge: "",
    newest: true,
    image: "pack2.jpg",
    description: "Pack de surveillance complet avec solution adaptée aux besoins professionnels."
  },

  {
    id: 28,
    name: "Pack Hikvision 2MP lentille 2,8  – 4 Caméras Turbo HD",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 1300,
    oldPrice: 1879,
    badge: "",
    newest: true,
    image: "pack3.jpg",
    description: "Solution premium de sécurité et de surveillance pour les installations exigeantes."
  },

  {
    id: 29,
    name: "Pack Hikvision 3K lentille 2,8 – 4 Caméras",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 1300,
    oldPrice: 1879,
    badge: "",
    newest: false,
    image: "pack4.jpg",
    description: "Solution complète pensée pour les commerces, bureaux et installations professionnelles."
  },

     {
    id: 46,
    name: "Pack Caméra 3K Full Color lentille 3,6 – Image & Audio",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 1300,
    oldPrice: 1879,
    badge: "",
    newest: false,
    image: "pack4.jpg",
    description: "Solution complète pensée pour les commerces, bureaux et installations professionnelles."
  },

     {
    id: 47,
    name: "PACK DAHUA 5MP WIZSENSE ORIGINAL – COULEUR, IMAGE & AUDIO",
    brand: "FirstBest Security",
    category: "Packs de Surveillance",
    price: 1300,
    oldPrice: 1879,
    badge: "BUSINESS",
    newest: false,
    image: "pack4.jpg",
    description: "Solution complète pensée pour les commerces, bureaux et installations professionnelles."
  },

  /* =========================
     CAMÉRAS
  ========================== */

  {
    id: 30,
    name: "Pack de surveillance solaire — Sécurité & autonomie",
    brand: "Multiscreen Camera",
    category: "Caméras de Surveillance",
    price: 1300,
    oldPrice: 1500,
    badge: "solaire",
    newest: true,
    image: "camera1.jpg",
    description: "Caméra connectée destinée à la surveillance solaire."
  },

  {
    id: 31,
    name: "IMOU Dual Lens – Caméra Extérieure 24/7 avec Batterie + Panneau Solaire",
    brand: "IMOU",
    category: "Caméras de Surveillance",
    price: 1300,
    oldPrice: 1500,
    badge: "OUTDOOR",
    newest: true,
    image: "camera2.jpg",
    description: "Caméra de surveillance conçue pour une installation extérieure."
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
    image: "",
    description: "Caméra IP Full HD pour une surveillance fiable et une visualisation claire."
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
    image: "",
    description: "Caméra motorisée connectée avec contrôle à distance."
  },


  /* =========================
     TROTTINETTES
  ========================== */

  {
    id: 34,
    name: "Trottinette Électrique City",
    brand: "Xiaomi",
    category: "Trottinettes Électriques",
    price: 3490,
    oldPrice: 3990,
    badge: "CITY",
    newest: true,
    image: "",
    description: "Trottinette électrique pratique pour les déplacements urbains quotidiens."
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
    image: "",
    description: "Modèle performant destiné aux déplacements urbains réguliers."
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
    image: "",
    description: "Trottinette moderne avec design urbain et utilisation pratique."
  },


  /* =========================
     ÉLECTRONIQUE & ACCESSOIRES
  ========================== */

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
    description: "Clavier mécanique moderne pour gaming et productivité."
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
    description: "Montre connectée élégante pour suivre votre activité quotidienne."
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
    description: "Câble USB-C pratique pour la charge et la connexion de vos appareils."
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
    description: "Chargeur compact conçu pour une recharge rapide et pratique."
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
    description: "Batterie externe pratique pour recharger vos appareils en déplacement."
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
    description: "Coque élégante et protectrice pour smartphone."
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
    image: "",
    description: "Support pratique pour maintenir votre smartphone en toute sécurité."
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
    image: "",
    description: "Hub USB multiport pour connecter plusieurs périphériques."
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
    image: "",
    description: "Adaptateur pratique pour connecter vos équipements vidéo."
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
    image: "",
    description: "Carte mémoire fiable pour smartphones, appareils photo et autres équipements."
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
    image: "",
    description: "Batterie rechargeable destinée à différents appareils électroniques."
  }


];


/* =====================================================
   CATEGORIES
   ===================================================== */

const categories = [

  {
    name: "Smartphones",
    icon: "📱",
    description: "Les dernières générations"
  },

  {
    name: "PC Portables",
    icon: "💻",
    description: "Performance & productivité"
  },

  {
    name: "PC de Bureau",
    icon: "🖥️",
    description: "Bureautique & performance"
  },

  {
    name: "Tablettes",
    icon: "▣",
    description: "Travail & créativité"
  },

  {
    name: "Écrans & Moniteurs",
    icon: "🖥️",
    description: "Affichage & gaming"
  },

  {
    name: "Audio",
    icon: "🎧",
    description: "Un son immersif"
  },

  {
    name: "Gaming",
    icon: "🎮",
    description: "Pour jouer sans limite"
  },

  {
    name: "Packs de Surveillance",
    icon: "🛡️",
    description: "Solutions complètes de sécurité"
  },

  {
    name: "Caméras de Surveillance",
    icon: "📹",
    description: "Sécurité & surveillance"
  },

  {
    name: "Trottinettes Électriques",
    icon: "🛴",
    description: "Mobilité urbaine"
  },

  {
    name: "Électronique & Accessoires",
    icon: "🔌",
    description: "Câbles, batteries, coques & accessoires"
  }

];


/* =====================================================
   STATE
   ===================================================== */

let currentCategory = "Tous";
let searchTerm = "";

let cart = JSON.parse(
  localStorage.getItem("firstbest_cart") || "[]"
);

let favorites = JSON.parse(
  localStorage.getItem("firstbesta_favorites") || "[]"
);


/* =====================================================
   DOM
   ===================================================== */

const productsContainer =
  document.getElementById("products");

const filtersContainer =
  document.getElementById("filters");

const catGrid =
  document.getElementById("catGrid");

const empty =
  document.getElementById("empty");

const sort =
  document.getElementById("sort");

const cartDrawer =
  document.getElementById("drawer");

const backdrop =
  document.getElementById("backdrop");

const cartList =
  document.getElementById("cartList");

const cartEmpty =
  document.getElementById("cartEmpty");

const cartBottom =
  document.getElementById("cartBottom");

const cartCount =
  document.getElementById("cartCount");

const favCount =
  document.getElementById("favCount");

const total =
  document.getElementById("total");

const toast =
  document.getElementById("toast");

const modal =
  document.getElementById("modal");

const modalBody =
  document.getElementById("modalBody");


/* =====================================================
   SAVE
   ===================================================== */

function saveData() {

  localStorage.setItem(
    "firstbest_cart",
    JSON.stringify(cart)
  );

  localStorage.setItem(
    "firstbesta_favorites",
    JSON.stringify(favorites)
  );

}


/* =====================================================
   FORMAT PRICE
   ===================================================== */

function formatPrice(price) {

  return new Intl.NumberFormat("fr-FR")
    .format(price) + " DH";

}


/* =====================================================
   RENDER CATEGORIES
   ===================================================== */

function renderCategories() {

  catGrid.innerHTML =
    categories.map(category => `

      <article
        class="category reveal"
        data-category="${category.name}"
      >

        <div class="category-bg"></div>

        <div class="category-icon">
          ${category.icon}
        </div>

        <h3>
          ${category.name}
        </h3>

        <p>
          ${category.description}
        </p>

      </article>

    `).join("");


  document
    .querySelectorAll(".category")
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          currentCategory =
            card.dataset.category;

          document
            .getElementById("shop")
            .scrollIntoView({
              behavior: "smooth"
            });

          renderFilters();
          renderProducts();

        }
      );

    });

}


/* =====================================================
   FILTERS
   ===================================================== */

function renderFilters() {

  const names = [
    "Tous",
    ...categories.map(
      category => category.name
    )
  ];


  filtersContainer.innerHTML =
    names.map(name => `

      <button
        class="filter-btn ${
          currentCategory === name
            ? "active"
            : ""
        }"
        data-filter="${name}"
      >
        ${name}
      </button>

    `).join("");


  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          currentCategory =
            button.dataset.filter;

          renderFilters();
          renderProducts();

        }
      );

    });

}


/* =====================================================
   FILTER PRODUCTS
   ===================================================== */

function getFilteredProducts() {

  let list = [...products];


  if (currentCategory !== "Tous") {

    list = list.filter(
      product =>
        product.category === currentCategory
    );

  }


  if (searchTerm.trim()) {

    const query =
      searchTerm
        .toLowerCase()
        .trim();

    list = list.filter(product =>

      product.name
        .toLowerCase()
        .includes(query)

      ||

      product.brand
        .toLowerCase()
        .includes(query)

      ||

      product.category
        .toLowerCase()
        .includes(query)

      ||

      product.description
        .toLowerCase()
        .includes(query)

    );

  }


  switch (sort.value) {

    case "priceAsc":

      list.sort(
        (a, b) =>
          a.price - b.price
      );

      break;


    case "priceDesc":

      list.sort(
        (a, b) =>
          b.price - a.price
      );

      break;


    case "newest":

      list.sort(
        (a, b) =>
          Number(b.newest) -
          Number(a.newest)
      );

      break;


    default:
      break;

  }


  return list;

}


/* =====================================================
   RENDER PRODUCTS
   ===================================================== */

function renderProducts() {

  const list =
    getFilteredProducts();


  productsContainer.innerHTML = "";


  empty.hidden =
    list.length !== 0;


  list.forEach(product => {

    const discount =
      product.oldPrice
        ? Math.round(
            (
              1 -
              product.price /
              product.oldPrice
            ) * 100
          )
        : 0;


    const isFavorite =
      favorites.includes(
        product.id
      );


    const article =
      document.createElement(
        "article"
      );


    article.className =
      "product reveal";


    article.innerHTML = `

      <div class="product-image">

        ${
          product.badge
            ? `
              <span class="product-badge">
                ${product.badge}
              </span>
            `
            : ""
        }


        <button
          class="heart ${
            isFavorite
              ? "active"
              : ""
          }"
          data-favorite="${product.id}"
          aria-label="Ajouter aux favoris"
        >
          ${
            isFavorite
              ? "♥"
              : "♡"
          }
        </button>


        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

      </div>


      <div class="info">

        <div class="brand">
          ${product.brand}
        </div>


        <h3>
          ${product.name}
        </h3>


        <div class="prices">

          <span class="now">
            ${formatPrice(product.price)}
          </span>


          ${
            product.oldPrice
              ? `
                <span class="old">
                  ${formatPrice(
                    product.oldPrice
                  )}
                </span>
              `
              : ""
          }


          ${
            discount > 0
              ? `
                <span class="off">
                  -${discount}%
                </span>
              `
              : ""
          }

        </div>


        <div class="product-actions">

          <button
            class="details"
            data-details="${product.id}"
          >
            Détails
          </button>


          <button
            class="add"
            data-add="${product.id}"
          >
            Ajouter
          </button>

        </div>

      </div>

    `;


    productsContainer.appendChild(
      article
    );

  });


  bindProductButtons();
  observeReveal();

}


/* =====================================================
   PRODUCT BUTTONS
   ===================================================== */

function bindProductButtons() {

  document
    .querySelectorAll("[data-add]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          addToCart(
            Number(
              button.dataset.add
            )
          );

        }
      );

    });


  document
    .querySelectorAll("[data-details]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id = Number(
            button.dataset.details
          );

          window.location.href =
            `product.html?id=${id}`;

        }
      );

    });


  document
    .querySelectorAll("[data-favorite]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          toggleFavorite(
            Number(
              button.dataset.favorite
            )
          );

        }
      );

    });

}
/* =====================================================
   CART
   ===================================================== */

function addToCart(id) {

  const product =
    products.find(
      item => item.id === id
    );


  if (!product) return;


  const existing =
    cart.find(
      item => item.id === id
    );


  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id: id,
      quantity: 1
    });

  }


  saveData();
  renderCart();


  showToast(
    `${product.name} ajouté au panier ✓`
  );

}


function removeFromCart(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );


  saveData();
  renderCart();

}


function clearCart() {

  cart = [];

  saveData();
  renderCart();


  showToast(
    "Panier vidé"
  );

}


function renderCart() {

  const quantity =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );


  cartCount.textContent =
    quantity;


  if (cart.length === 0) {

    cartList.innerHTML = "";

    cartEmpty.style.display =
      "flex";

    cartBottom.style.display =
      "none";

    total.textContent =
      "0 DH";

    return;

  }


  cartEmpty.style.display =
    "none";

  cartBottom.style.display =
    "block";


  let totalPrice = 0;


  cartList.innerHTML =
    cart.map(item => {

      const product =
        products.find(
          p => p.id === item.id
        );


      if (!product) return "";


      const itemTotal =
        product.price *
        item.quantity;


      totalPrice +=
        itemTotal;


      return `

        <div class="cart-item">

          <img
            src="${product.image}"
            alt="${product.name}"
          >


          <div>

            <h4>
              ${product.name}
            </h4>

            <small>
              Quantité :
              ${item.quantity}
            </small>

            <div class="cart-item-price">
              ${formatPrice(
                itemTotal
              )}
            </div>

          </div>


          <button
            class="cart-remove"
            data-remove="${product.id}"
          >
            ×
          </button>

        </div>

      `;

    }).join("");


  total.textContent =
    formatPrice(totalPrice);


  document
    .querySelectorAll("[data-remove]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          removeFromCart(
            Number(
              button.dataset.remove
            )
          );

        }
      );

    });

}


/* =====================================================
   FAVORITES
   ===================================================== */

function toggleFavorite(id) {

  if (
    favorites.includes(id)
  ) {

    favorites =
      favorites.filter(
        item => item !== id
      );


    showToast(
      "Retiré des favoris"
    );

  } else {

    favorites.push(id);


    showToast(
      "Ajouté aux favoris ♥"
    );

  }


  saveData();

  updateFavoriteCount();

  renderProducts();

}


function updateFavoriteCount() {

  favCount.textContent =
    favorites.length;

}


/* =====================================================
   OPEN / CLOSE CART
   ===================================================== */

function openCart() {

  cartDrawer.classList.add(
    "open"
  );

  backdrop.classList.add(
    "open"
  );

  document.body.classList.add(
    "lock"
  );

}


function closeCart() {

  cartDrawer.classList.remove(
    "open"
  );

  backdrop.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "lock"
  );

}


/* =====================================================
   WHATSAPP
   ===================================================== */

function createWhatsAppMessage() {

  if (cart.length === 0) {

    return "Bonjour FirstBest, je souhaite avoir plus d'informations sur vos produits.";

  }


  let message =
    "Bonjour FirstBest 👋%0A%0A";


  message +=
    "Je souhaite commander les produits suivants :%0A%0A";


  let totalPrice = 0;


  cart.forEach(item => {

    const product =
      products.find(
        p => p.id === item.id
      );


    if (!product) return;


    const subtotal =
      product.price *
      item.quantity;


    totalPrice +=
      subtotal;


    message +=
      `• ${product.name} x${item.quantity} — ${formatPrice(subtotal)}%0A`;

  });


  message +=
    `%0A💰 Total estimé : ${formatPrice(totalPrice)}%0A%0A`;


  message +=
    "Je souhaite confirmer la disponibilité et finaliser la commande avec vous.";


  return message;

}


function openWhatsApp(message) {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


  window.open(
    url,
    "_blank",
    "noopener"
  );

}


/* =====================================================
   PRODUCT MODAL
   ===================================================== */

function openProductModal(id) {

  const product =
    products.find(
      p => p.id === id
    );


  if (!product) return;


  modalBody.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

      </div>


      <div>

        <div class="kicker">

          <span></span>

          ${product.brand}

        </div>


        <h2>
          ${product.name}
        </h2>


        <div class="modal-price">

          ${formatPrice(
            product.price
          )}

        </div>


        <p>
          ${product.description}
        </p>


        <button
          class="btn primary"
          id="modalAdd"
        >
          Ajouter au panier ↗
        </button>

      </div>

    </div>

  `;


  modal.classList.add(
    "open"
  );


  document.body.classList.add(
    "lock"
  );


  document
    .getElementById("modalAdd")
    .addEventListener(
      "click",
      () => {

        addToCart(
          product.id
        );

        closeModal();

        openCart();

      }
    );

}


function closeModal() {

  modal.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "lock"
  );

}


/* =====================================================
   SEARCH
   ===================================================== */

function openSearch() {

  document
    .getElementById(
      "searchOverlay"
    )
    .classList.add(
      "open"
    );


  document.body.classList.add(
    "lock"
  );


  setTimeout(() => {

    document
      .getElementById(
        "searchInput"
      )
      .focus();

  }, 100);

}


function closeSearch() {

  document
    .getElementById(
      "searchOverlay"
    )
    .classList.remove(
      "open"
    );


  document.body.classList.remove(
    "lock"
  );

}


/* =====================================================
   TOAST
   ===================================================== */

let toastTimeout;


function showToast(message) {

  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimeout
  );


  toastTimeout =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}


/* =====================================================
   COUNTDOWN
   ===================================================== */

function startCountdown() {

  const target =
    new Date();


  target.setDate(
    target.getDate() + 3
  );


  target.setHours(
    23,
    59,
    59,
    0
  );


  function update() {

    const now =
      new Date();


    const difference =
      target - now;


    if (difference <= 0) {

      document.getElementById("dd")
        .textContent = "00";

      document.getElementById("hh")
        .textContent = "00";

      document.getElementById("mm")
        .textContent = "00";

      document.getElementById("ss")
        .textContent = "00";

      return;

    }


    const days =
      Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      );


    const hours =
      Math.floor(
        (
          difference /
          (1000 * 60 * 60)
        ) % 24
      );


    const minutes =
      Math.floor(
        (
          difference /
          (1000 * 60)
        ) % 60
      );


    const seconds =
      Math.floor(
        (
          difference /
          1000
        ) % 60
      );


    document.getElementById("dd")
      .textContent =
      String(days)
        .padStart(2, "0");


    document.getElementById("hh")
      .textContent =
      String(hours)
        .padStart(2, "0");


    document.getElementById("mm")
      .textContent =
      String(minutes)
        .padStart(2, "0");


    document.getElementById("ss")
      .textContent =
      String(seconds)
        .padStart(2, "0");

  }


  update();


  setInterval(
    update,
    1000
  );

}


/* =====================================================
   SCROLL HEADER
   ===================================================== */

function handleHeader() {

  const header =
    document.getElementById(
      "header"
    );


  if (window.scrollY > 30) {

    header.classList.add(
      "scrolled"
    );

  } else {

    header.classList.remove(
      "scrolled"
    );

  }

}


/* =====================================================
   REVEAL ANIMATION
   ===================================================== */

function observeReveal() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: .08
      }
    );


  elements.forEach(
    element =>
      observer.observe(element)
  );

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

function toggleMobileMenu() {

  const mobileNav =
    document.getElementById(
      "mobileNav"
    );


  mobileNav.classList.toggle(
    "open"
  );

}


/* =====================================================
   EVENTS
   ===================================================== */

document
  .getElementById("cartBtn")
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


backdrop.addEventListener(
  "click",
  closeCart
);


document
  .getElementById("clearCart")
  .addEventListener(
    "click",
    clearCart
  );


document
  .getElementById("modalClose")
  .addEventListener(
    "click",
    closeModal
  );


modal.addEventListener(
  "click",
  event => {

    if (
      event.target === modal
    ) {

      closeModal();

    }

  }
);


document
  .getElementById("searchBtn")
  .addEventListener(
    "click",
    openSearch
  );


document
  .getElementById("closeSearch")
  .addEventListener(
    "click",
    closeSearch
  );


document
  .getElementById("searchInput")
  .addEventListener(
    "input",
    event => {

      searchTerm =
        event.target.value;

      renderProducts();

    }
  );


document
  .getElementById("sort")
  .addEventListener(
    "change",
    renderProducts
  );


document
  .getElementById("hamb")
  .addEventListener(
    "click",
    toggleMobileMenu
  );


document
  .querySelectorAll(
    "#mobileNav a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        document
          .getElementById(
            "mobileNav"
          )
          .classList.remove(
            "open"
          );

      }
    );

  });


document
  .getElementById("allProducts")
  .addEventListener(
    "click",
    () => {

      currentCategory =
        "Tous";

      searchTerm =
        "";

      renderFilters();
      renderProducts();

    }
  );


document
  .getElementById("orderWa")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      openWhatsApp(
        createWhatsAppMessage()
      );

    }
  );


document
  .getElementById("contactWa")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      openWhatsApp(
        "Bonjour FirstBest 👋 Je souhaite avoir des informations sur vos produits."
      );

    }
  );


document
  .getElementById("footerWa")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      openWhatsApp(
        "Bonjour FirstBest 👋 Je souhaite avoir des informations sur vos produits."
      );

    }
  );


window.addEventListener(
  "scroll",
  handleHeader
);


/* =====================================================
   ESCAPE KEY
   ===================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeCart();
      closeModal();
      closeSearch();

    }

  }
);


/* =====================================================
   INITIALIZATION
   ===================================================== */

function init() {

  renderCategories();

  renderFilters();

  renderProducts();

  renderCart();

  updateFavoriteCount();

  startCountdown();

  handleHeader();

  observeReveal();

}


init();


/* =====================================================
   INSTAGRAM
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const instagramLinks =
      document.querySelectorAll(
        'a[href="#instagram"]'
      );


    instagramLinks.forEach(
      link => {

        link.href =
          INSTAGRAM_URL;

        link.target =
          "_blank";

        link.rel =
          "noopener noreferrer";

      }
    );

  }
);
