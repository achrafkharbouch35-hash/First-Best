/* =====================================================
   FirstBest — TECH & MOBILE
   ===================================================== */

/* =====================================================
   CONFIGURATION
   ===================================================== */

const WHATSAPP_NUMBER = "212723354542";
const INSTAGRAM_URL = "https://www.instagram.com/best2720f/";


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
