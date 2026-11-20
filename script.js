const products = [
  {
    id: 1,
    name: "Under-Desk Cable Management Tray",
    category: "organization",
    price: 1299,
    image: "assets/item-01.webp",
    description: "Heavy-duty matte black steel clamp-on tray that hides power strips and cables.",
    fullDescription: "Keep your workspace clean and hazard-free with our heavy-duty Under-Desk Cable Management Tray. Designed with a no-drill clamp mechanism, it attaches securely to any desk in seconds and holds bulky power bricks, surge protectors, and excess wires completely out of sight.",
    specs: [
      "Material: Powder-coated heavy-duty steel",
      "Installation: No-drill padded desk clamps",
      "Weight Capacity: Up to 10 kg",
      "Dimensions: 40cm x 15cm x 12cm"
    ]
  },
  {
    id: 2,
    name: "Minimalist LED Ambient Light Bars (Pair)",
    category: "lighting",
    price: 3999,
    originalPrice: 4999,
    image: "assets/item-02.webp",
    description: "Dual vertical matte-black LED light tubes with remote-controlled dimming.",
    fullDescription: "Transform your desk atmosphere for late-night coding, gaming, or studying. These dual vertical LED light bars cast a soft, glare-free ambient glow against your wall, reducing eye strain while elevating your setup's aesthetic.",
    specs: [
      "Color Modes: Warm White (2700K) to Cool Daylight (6500K)",
      "Control: Inline remote with 10 brightness levels",
      "Power: USB-A / Wall adapter compatible",
      "Height: 38cm matte-black aluminum body"
    ]
  },
  {
    id: 3,
    name: "Ergonomic Folding Laptop & Tablet Stand",
    category: "ergonomics",
    price: 3999,
    image: "assets/item-03.webp",
    description: "Portable, height-adjustable stand that elevates your laptop and tablet to eye level.",
    fullDescription: "Say goodbye to neck and back pain. This ultra-portable folding stand raises your laptop screen to an ergonomic eye level, improving posture and airflow to keep your device cool during heavy workloads.",
    specs: [
      "Compatibility: 11-inch to 17-inch laptops & tablets",
      "Adjustability: 6 ergonomic height angles",
      "Material: Reinforced ABS & non-slip silicone pads",
      "Portability: Folds flat in 2 seconds"
    ]
  },
  {
    id: 4,
    name: "Nordic Grey Felt Desk Mat",
    category: "accessories",
    price: 1199,
    image: "assets/item-04.webp",
    description: "Soft, anti-slip acoustic felt desk pad that protects surfaces and defines your workspace.",
    fullDescription: "Anchor your keyboard, mouse, and notebook on one sleek surface. Our Nordic Grey Felt Desk Mat dampens typing noise, protects your desk from scratches, and provides a warm, tactile feel for all-day comfort.",
    specs: [
      "Size: 80cm x 40cm (Large)",
      "Thickness: 4mm dense acoustic felt",
      "Base: Anti-slip rubberized backing",
      "Care: Spill-resistant and easy to wipe clean"
    ]
  },
  {
    id: 5,
    name: "Silent Wireless Ergonomic Mouse",
    category: "peripherals",
    price: 2999,
    image: "assets/item-05.webp",
    description: "Dual-mode Bluetooth & 2.4GHz wireless mouse with silent clicks and adjustable DPI.",
    fullDescription: "Work quietly from anywhere with our Silent Wireless Ergonomic Mouse. Contoured to fit naturally in your hand, it features whisper-quiet buttons, seamless switching between two devices, and a rechargeable battery that lasts up to 60 days.",
    specs: [
      "Connectivity: Bluetooth 5.1 + 2.4GHz USB Receiver",
      "DPI Levels: 800 / 1200 / 1600 / 2400",
      "Battery: Rechargeable 500mAh (USB-C)",
      "Buttons: 6 silent tactile buttons"
    ]
  },
  {
    id: 6,
    name: "Compact 75% Mechanical Keyboard",
    category: "peripherals",
    price: 6999,
    originalPrice: 7999,
    image: "assets/item-06.webp",
    description: "Space-saving matte-black mechanical keyboard with hot-swappable switches and white backlight.",
    fullDescription: "Designed for developers and writers, this 75% layout mechanical keyboard saves desk space while keeping dedicated arrow and function keys. Enjoy crisp tactile feedback and clean white LED backlighting.",
    specs: [
      "Layout: 84-Key Compact (75%)",
      "Switches: Tactile Brown (Hot-swappable)",
      "Connection: Detachable USB-C braided cable",
      "Compatibility: Windows, macOS, and Linux"
    ]
  },
  {
    id: 7,
    name: "7-in-1 Aluminum USB-C Hub",
    category: "accessories",
    price: 2899,
    image: "assets/item-07.webp",
    description: "Sleek space-grey adapter adding 4K HDMI, USB 3.0, and SD card slots to your laptop.",
    fullDescription: "Expand a single USB-C port into a complete workstation. Connect an external 4K monitor, transfer files from SD cards, and plug in your wired peripherals all at once.",
    specs: [
      "Video Output: 4K @ 30Hz HDMI",
      "Data Ports: 3x USB 3.0 (5Gbps)",
      "Card Readers: SD & MicroSD slots",
      "Pass-through Charging: 100W USB-C PD"
    ]
  },
  {
    id: 8,
    name: "Matte-Black Aluminum Headphone Stand",
    category: "organization",
    price: 1899,
    image: "assets/item-08.webp",
    description: "Weighted desk stand with a contoured silicone rest to keep your headphones safe and organized.",
    fullDescription: "Keep your over-ear headphones off your desk and within arm's reach. Built with a solid aluminum stem and a weighted non-slip base, this stand prevents headband creases and frees up valuable workspace.",
    specs: [
      "Material: Anodized aluminum + soft TPU headrest",
      "Base: Weighted with anti-slip silicone pad",
      "Height: 24cm (fits all over-ear headphones)",
      "Color: Matte Black"
    ]
  }
];

const SHIPPING_COST = 300;
const STUDENT_DISCOUNT_RATE = 0.15;
const EMAILJS_PUBLIC_KEY = "VpQ_zS7eRu8JQyF3Q";
const EMAILJS_SERVICE_ID = "service_knddfxj";
const EMAILJS_TEMPLATE_ID = "template_zcmqxok";

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const resultsCount = document.getElementById("results-count");
const storeHomeView = document.getElementById("store-home-view");
const productDetailView = document.getElementById("product-detail-view");
const productDetailContent = document.getElementById("product-detail-content");
const businessPlanView = document.getElementById("business-plan-view");
const aboutPageView = document.getElementById("about-page-view");

const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const drawerTitle = document.getElementById("drawer-title");
const cartView = document.getElementById("cart-view");
const cartItems = document.getElementById("cart-items");
const cartFooter = document.getElementById("cart-footer");
const cartCount = document.getElementById("cart-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartShipping = document.getElementById("cart-shipping");
const cartDiscountRow = document.getElementById("cart-discount-row");
const cartDiscount = document.getElementById("cart-discount");
const cartTotal = document.getElementById("cart-total");
const checkoutForm = document.getElementById("checkout-form");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutConfirmation = document.getElementById("checkout-confirmation");
const orderSummary = document.getElementById("order-summary");
const cartNotice = document.getElementById("cart-notice");

const studentCheck = document.getElementById("student-check");
const studentIdField = document.getElementById("student-id-field");
const studentUniId = document.getElementById("student-uni-id");
const studentDiscountMsg = document.getElementById("student-discount-msg");
const paymentMethodSelect = document.getElementById("payment-method");
const paymentDetailsBox = document.getElementById("payment-details-box");
const paymentAccountInfo = document.getElementById("payment-account-info");
const trxIdInput = document.getElementById("trx-id");
const placeOrderBtn = document.getElementById("place-order-btn");

const PAYMENT_ACCOUNTS = {
  JazzCash: {
    number: "03089558396",
    title: "DeskLab PK (Najeeb Ahmed)"
  },
  Easypaisa: {
    number: "03103527369",
    title: "DeskLab PK (Najeeb Ahmed)"
  }
};

function updatePaymentDetails() {
  const method = paymentMethodSelect.value;
  const account = PAYMENT_ACCOUNTS[method];

  if (account) {
    paymentAccountInfo.innerHTML = `Send the order total to <strong>${method}</strong>:<br>Account Number: <strong>${account.number}</strong><br>Account Title: <strong>${account.title}</strong>`;
    paymentDetailsBox.classList.remove("hidden");
    trxIdInput.required = true;
  } else {
    paymentDetailsBox.classList.add("hidden");
    trxIdInput.required = false;
    trxIdInput.value = "";
  }
}

paymentMethodSelect.addEventListener("change", updatePaymentDetails);

const numberFormat = new Intl.NumberFormat("en-PK");
const cart = new Map();
let lastProductButton;
let noticeTimer;

function formatPKR(amount) {
  return `Rs. ${numberFormat.format(amount)}`;
}

function renderPrice(product) {
  const original = product.originalPrice
    ? `<del class="old-price">${formatPKR(product.originalPrice)}</del>`
    : "";
  return `<strong class="price">${formatPKR(product.price)}</strong>${original}`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.querySelector('[aria-pressed="true"]').dataset.category;
  const matches = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const searchable = `${product.name} ${product.description}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });
  resultsCount.textContent = `${matches.length} ${matches.length === 1 ? "product" : "products"}`;

  if (matches.length === 0) {
    productGrid.innerHTML = `
      <div class="no-results">
        <h3>No products found</h3>
        <p>Try another search or choose a different category.</p>
      </div>`;
    return;
  }

  productGrid.innerHTML = matches.map((product) => {
    const saleBadge = product.originalPrice ? '<span class="sale-badge">Sale</span>' : "";
    return `
      <article class="product-card">
        <button class="product-photo" type="button" data-product="${product.id}" aria-label="View ${product.name}" tabindex="-1">
          <img src="${product.image}" alt="" loading="lazy" decoding="async">
          ${saleBadge}
        </button>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3><button class="product-name" type="button" data-product="${product.id}">${product.name}</button></h3>
          <p>${product.description}</p>
          <div class="product-footer">
            <div class="product-prices">${renderPrice(product)}</div>
            <button class="add-btn" type="button" data-add="${product.id}" aria-label="Add to cart (${product.name})">Add to cart</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

function showView(view) {
  for (const page of [storeHomeView, productDetailView, businessPlanView, aboutPageView]) {
    page.classList.toggle("hidden", page !== view);
  }
}

function openProductPage(product) {
  const specs = product.specs.map((spec) => `<li>${spec}</li>`).join("");
  productDetailContent.innerHTML = `
    <div class="detail-image"><img src="${product.image}" alt="${product.name}"></div>
    <div class="detail-info">
      <span class="product-category">${product.category}</span>
      <h1 tabindex="-1">${product.name}</h1>
      <div class="product-prices detail-price">${renderPrice(product)}</div>
      <p class="detail-description">${product.fullDescription}</p>
      <h2>Specifications</h2>
      <ul class="detail-specs">${specs}</ul>
      <button class="btn-primary" type="button" data-add="${product.id}">Add to cart</button>
    </div>`;
  showView(productDetailView);
  window.scrollTo(0, 0);
  productDetailContent.querySelector("h1").focus({ preventScroll: true });
}

function setDrawerView(view, title) {
  for (const panel of [cartView, checkoutForm, checkoutConfirmation]) {
    panel.classList.toggle("hidden", panel !== view);
  }
  drawerTitle.textContent = title;
  cartModal.scrollTop = 0;
  if (cartModal.open) drawerTitle.focus();
}

function updateCart() {
  const entries = [...cart.values()];
  const itemCount = entries.reduce((count, item) => count + item.quantity, 0);
  const subtotal = entries.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = studentCheck.checked ? Math.round(subtotal * STUDENT_DISCOUNT_RATE) : 0;
  const shipping = itemCount > 0 ? SHIPPING_COST : 0;
  const total = formatPKR(subtotal - discount + shipping);

  cartCount.textContent = itemCount;
  cartSubtotal.textContent = formatPKR(subtotal);
  cartShipping.textContent = formatPKR(shipping);
  cartDiscountRow.classList.toggle("hidden", discount === 0);
  cartDiscount.textContent = `−${formatPKR(discount)}`;
  cartTotal.textContent = total;
  checkoutTotal.textContent = total;
  studentDiscountMsg.textContent = discount ? `You save ${formatPKR(discount)} on products.` : "";
  cartFooter.classList.toggle("hidden", itemCount === 0);

  if (itemCount === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty.</p>
        <button class="btn-secondary" type="button" data-continue-shopping>Continue shopping</button>
      </div>`;
    return;
  }

  cartItems.innerHTML = entries.map(({ product, quantity }) => `
    <div class="cart-item">
      <img src="${product.image}" alt="">
      <div>
        <strong>${product.name}</strong>
        <div class="cart-item-bottom">
          <span>${formatPKR(product.price * quantity)}</span>
          <div class="cart-item-controls">
            <button type="button" class="qty-btn" data-item="${product.id}" data-change="-1" aria-label="Decrease quantity of ${product.name}">−</button>
            <span>${quantity}</span>
            <button type="button" class="qty-btn" data-item="${product.id}" data-change="1" aria-label="Increase quantity of ${product.name}">+</button>
          </div>
        </div>
      </div>
    </div>`).join("");
}

function addToCart(product) {
  const quantity = (cart.get(product.id)?.quantity ?? 0) + 1;
  cart.set(product.id, { product, quantity });
  updateCart();

  cartNotice.textContent = `${product.name} added to cart. Quantity ${quantity}.`;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => { cartNotice.textContent = ""; }, 3500);
}

function toggleStudentDiscount() {
  studentIdField.classList.toggle("hidden", !studentCheck.checked);
  studentUniId.required = studentCheck.checked;
  if (!studentCheck.checked) studentUniId.value = "";
  updateCart();
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-category]");
  if (!filter || filter.getAttribute("aria-pressed") === "true") return;
  categoryFilter.querySelector('[aria-pressed="true"]').setAttribute("aria-pressed", "false");
  filter.setAttribute("aria-pressed", "true");
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  lastProductButton = button.closest(".product-card").querySelector(".product-name");
  openProductPage(products.find((product) => product.id === Number(button.dataset.product)));
});

document.getElementById("back-to-store").addEventListener("click", () => {
  showView(storeHomeView);
  lastProductButton?.focus();
});

document.querySelectorAll("[data-home]").forEach((link) => {
  link.addEventListener("click", () => showView(storeHomeView));
});

document.querySelectorAll("[data-about]").forEach((button) => {
  button.addEventListener("click", () => {
    showView(aboutPageView);
    window.scrollTo(0, 0);
    aboutPageView.querySelector("h1").focus({ preventScroll: true });
  });
});

document.querySelectorAll("[data-business-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    showView(businessPlanView);
    window.scrollTo(0, 0);
    businessPlanView.querySelector("h1").focus({ preventScroll: true });
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(products.find((product) => product.id === Number(button.dataset.add)));
});

cartBtn.addEventListener("click", () => {
  setDrawerView(cartView, "Your cart");
  cartModal.showModal();
});

cartModal.addEventListener("click", (event) => {
  if (event.target === cartModal || event.target.closest("#close-cart, [data-close-cart]")) cartModal.close();
});

cartItems.addEventListener("click", (event) => {
  if (event.target.closest("[data-continue-shopping]")) {
    cartModal.close();
    return;
  }

  const button = event.target.closest("[data-item]");
  if (!button) return;
  const id = Number(button.dataset.item);
  const item = cart.get(id);
  item.quantity += Number(button.dataset.change);
  if (item.quantity === 0) cart.delete(id);
  updateCart();

  const nextFocus = cartItems.querySelector(`[data-item="${id}"][data-change="${button.dataset.change}"]`)
    ?? cartItems.querySelector("[data-item], [data-continue-shopping]");
  nextFocus?.focus();
});

document.getElementById("checkout-btn").addEventListener("click", () => setDrawerView(checkoutForm, "Checkout"));
document.getElementById("back-to-cart").addEventListener("click", () => setDrawerView(cartView, "Your cart"));
studentCheck.addEventListener("change", toggleStudentDiscount);

checkoutForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (cart.size === 0) return;

  const name = document.getElementById("cust-name").value.trim();
  const email = document.getElementById("cust-email").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const address = document.getElementById("cust-address").value.trim();
  const payment = paymentMethodSelect.value;
  const tid = trxIdInput.value.trim();
  const total = checkoutTotal.textContent;
  const studentInfo = studentCheck.checked ? `Yes (${studentUniId.value.trim()})` : "No";

  const itemsList = [...cart.values()]
    .map(({ product, quantity }) => `${product.name} x${quantity} (${formatPKR(product.price * quantity)})`)
    .join(", ");

  placeOrderBtn.disabled = true;
  placeOrderBtn.textContent = "Sending confirmation...";

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: email,
      customer_name: name,
      customer_phone: phone,
      delivery_address: address,
      items_ordered: itemsList,
      payment_method: tid ? `${payment} (TID: ${tid})` : payment,
      student_discount: studentInfo,
      order_total: total
    });
  } catch (err) {
    console.error("EmailJS error:", err);
  }

  const paymentNote = tid ? `${payment} (TID: ${tid})` : payment;
  orderSummary.textContent = `Thank you, ${name}. Your order total is ${total} via ${paymentNote}. A confirmation notification has been sent to ${email}.`;

  cart.clear();
  checkoutForm.reset();
  updatePaymentDetails();
  toggleStudentDiscount();
  placeOrderBtn.disabled = false;
  placeOrderBtn.textContent = "Place order";
  setDrawerView(checkoutConfirmation, "Order confirmed");
});

renderProducts();
updateCart();