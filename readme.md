# 🖥️ DeskLab PK — Minimalist Workspace & Desk Setup E-Commerce Store

**DeskLab PK** is a responsive Direct-to-Consumer (D2C) e-commerce web application built for university students, software developers, and remote professionals across Pakistan. Developed using **HTML5, CSS3, and Vanilla JavaScript**, it combines a modern storefront with a dedicated **About** page, automated **EmailJS** order receipts, and an interactive **Business Plan & Unit Economics Dashboard**.

## ✨ Key Features

* **Dynamic Product Catalog:** 8 curated workspace essentials across 5 categories (*Organization, Lighting, Ergonomics, Peripherals,* and *Accessories*) with real-time keyword search and category filtering.
* **Dedicated About Page:** Standalone brand story view highlighting DeskLab's cohesive matte-black and Nordic grey ecosystem, student-first pricing, and nationwide delivery.
* **Full-Page Product Detail Views:** Clicking any product opens a dedicated single-product view with high-resolution imagery, detailed descriptions, and technical specifications.
* **Interactive Slide-Over Cart & Pakistani Checkout:**
  * Real-time quantity controls (`+` / `−`) and dynamic PKR (`Rs.`) currency formatting.
  * Flat **Rs. 300** nationwide shipping calculation.
  * Local Pakistani payment methods: **Cash on Delivery (COD)**, **JazzCash** (`03089558396`), and **Easypaisa** (`03103527369`) with dynamic account details and Transaction ID (`TID`) verification.
* **🎓 15% University Student Discount:** Buyers can verify their student status at checkout using a `.edu.pk` email or roll number to automatically deduct **15%** off their product subtotal.
* **📧 Automated Email Order Receipts:** Integrated with **EmailJS** so customers receive an itemized order confirmation directly in their inbox upon placing an order.
* **📊 Integrated Business Plan Dashboard:** An executive view detailing KPIs, marketing strategy, local wholesale sourcing, home micro-warehousing logistics, unit economics, and Google Keyword Planner search demand.

## 📦 Product Catalog & Unit Economics (PKR)

| ID | Product Name | Category | Unit Cost | Selling Price | Profit / Unit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | Under-Desk Cable Management Tray | Organization | Rs. 900 | **Rs. 1,299** | Rs. 399 |
| 02 | Minimalist LED Ambient Light Bars (Pair) *(Sale)* | Lighting | Rs. 2,850 | ~~Rs. 4,999~~ **Rs. 3,999** | Rs. 1,149 |
| 03 | Ergonomic Folding Laptop & Tablet Stand | Ergonomics | Rs. 2,800 | **Rs. 3,999** | Rs. 1,199 |
| 04 | Nordic Grey Felt Desk Mat | Accessories | Rs. 850 | **Rs. 1,199** | Rs. 349 |
| 05 | Silent Wireless Ergonomic Mouse | Peripherals | Rs. 2,150 | **Rs. 2,999** | Rs. 849 |
| 06 | Compact 75% Mechanical Keyboard *(Sale)* | Peripherals | Rs. 5,400 | ~~Rs. 7,999~~ **Rs. 6,999** | Rs. 1,599 |
| 07 | 7-in-1 Aluminum USB-C Hub | Accessories | Rs. 2,050 | **Rs. 2,899** | Rs. 849 |
| 08 | Matte-Black Aluminum Headphone Stand | Organization | Rs. 1,350 | **Rs. 1,899** | Rs. 549 |

## 📈 Business Model Overview (2 Orders / Day)

* **Target Audience:** University students, programmers, designers, and remote professionals across Pakistan.
* **Projected Monthly Traffic & Conversion:** 2,400 monthly visitors at a **2.5%** conversion rate (**60 orders/month** or ~2 orders/day).
* **Blended Average Order Value (AOV):** **Rs. 3,800** (including Rs. 300 shipping and 15% student discounts).
* **Projected Monthly Gross Revenue:** **Rs. 228,000 / month**
* **Estimated Net Profit:** **~Rs. 42,000 / month** (**~18.4% net margin** after ~Rs. 150k COGS, ~Rs. 17k courier fees, ~Rs. 3k packaging, and ~Rs. 16k social media ads).
* **Supply Chain & Logistics:** Small-batch wholesale sourcing from Karachi (Saddar/Techno City) and Lahore (Hall Road), stored in a zero-rent home micro-warehouse in Hyderabad/Karachi and fulfilled nationwide via PostEx, Trax, and Leopards Courier.

## 🗂️ Project Structure

```text
desklab-ecoomerce/
├── index.html      # Storefront, About page, Business Plan view, Product Detail view & Checkout drawer
├── style.css       # Responsive CSS variables, grid layouts, modal drawer, and mobile breakpoints
├── script.js       # Product catalog, search/filter logic, cart state, student discount, & EmailJS integration
├── assets/         # Hero banner (desk-hero.webp) and product photos (item-01.webp to item-08.webp)
└── README.md       # Project documentation
```

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/NajeebAhmed69/desklabwebstore-ecommerce.git
   ```
2. Open the project folder and launch `index.html` in any modern web browser (no build tools or local server required).

## 👤 Author

**Najeeb Ahmed**
* 📧 Email: [najeebahmd69@gmail.com](mailto:najeebahmd69@gmail.com)
* 📞 Phone / JazzCash: `+92 308 9558396`
* 📍 Location: Karachi / Hyderabad, Pakistan