/**
 * ==========================================================================
 * AUREA FASHION MAISON - MODERN LUXURY E-COMMERCE JAVASCRIPT
 * Pure Vanilla JavaScript (ES6+)
 * Features:
 * - Dynamic Product Rendering & Catalog
 * - Real-Time Category Filtering & Sorting
 * - Add to Cart / Update Quantity / Remove Items
 * - Cart Calculations & Free Shipping Tracker
 * - LocalStorage Persistence (Cart & Wishlist)
 * - Live Search Modal & Quick Filter Tags
 * - Interactive Quick View Product Modal
 * - Mobile Navigation Drawer & Back-to-Top
 * - Newsletter & Concierge Validation
 * - High-End Toast Notification System
 * ==========================================================================
 */

// Global State
const STATE = {
  products: [
    // --- DRESSES ---
    {
      id: "prod-01",
      name: "The Solstice Silk Slip Dress",
      category: "Dresses",
      price: 8900,
      originalPrice: 11500,
      rating: 4.9,
      reviewCount: 184,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
      badge: "BESTSELLER",
      badgeType: "gold",
      description: "Cut on the bias from liquid mulberry silk that drapes effortlessly over the natural silhouette. Features a subtle cowled neckline and delicate rouleau straps.",
      isBestseller: true
    },
    {
      id: "prod-02",
      name: "Ethereal Pleated Maxi Gown",
      category: "Dresses",
      price: 14500,
      originalPrice: 16800,
      rating: 4.8,
      reviewCount: 92,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
      badge: "COUTURE",
      badgeType: "dark",
      description: "Architectural sunray pleating with an open back and graceful sweeping hem. Crafted from high-twist chiffon georgette designed for gala evenings.",
      isBestseller: false
    },
    {
      id: "prod-03",
      name: "Monochrome Tailored Blazer Dress",
      category: "Dresses",
      price: 11200,
      originalPrice: 13500,
      rating: 5.0,
      reviewCount: 142,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      badge: "ICONIC",
      badgeType: "gold",
      description: "Structured double-breasted silhouette made with fine Italian wool twill. Finished with handcrafted horn buttons and peaked silk lapels.",
      isBestseller: true
    },
    {
      id: "prod-04",
      name: "Aura Ribbed Cashmere Midi Dress",
      category: "Dresses",
      price: 9400,
      originalPrice: 10900,
      rating: 4.7,
      reviewCount: 65,
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
      badge: "NEW ARRIVAL",
      badgeType: "outline",
      description: "Spun from 100% grade-A Mongolian cashmere. A whisper-soft ribbed knit that gently hugs the contours while offering comfortable all-day elegance.",
      isBestseller: false
    },

    // --- TOPS ---
    {
      id: "prod-05",
      name: "Sculpted Draped Satin Blouse",
      category: "Tops",
      price: 5800,
      originalPrice: 7200,
      rating: 4.8,
      reviewCount: 118,
      image: "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=800&auto=format&fit=crop",
      badge: "LIMITED",
      badgeType: "outline",
      description: "An elegant asymmetrical neckline with waterfall drapery that cascades softly. Perfect with high-waisted tailored trousers or pencil skirts.",
      isBestseller: false
    },
    {
      id: "prod-06",
      name: "Atelier Structured Poplin Shirt",
      category: "Tops",
      price: 4900,
      originalPrice: 5900,
      rating: 4.9,
      reviewCount: 204,
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop",
      badge: "WARDROBE ESSENTIAL",
      badgeType: "dark",
      description: "Crisp Egyptian long-staple cotton poplin with elongated French cuffs and an architecturally precise spread collar.",
      isBestseller: false
    },
    {
      id: "prod-07",
      name: "Cashmere Boatneck Knit",
      category: "Tops",
      price: 7600,
      originalPrice: 9200,
      rating: 4.9,
      reviewCount: 88,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
      badge: "AUTUMN EDIT",
      badgeType: "outline",
      description: "Ultra-fine gauge cashmere in an oatmeal cream tone. Designed with a wide feminine boatneck and elongated rib-knit cuffs.",
      isBestseller: false
    },
    {
      id: "prod-08",
      name: "Minimalist Asymmetric Linen Top",
      category: "Tops",
      price: 4200,
      originalPrice: 5100,
      rating: 4.6,
      reviewCount: 54,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
      badge: "ORGANIC",
      badgeType: "outline",
      description: "Crafted from breathable French Normandy flax linen with clean edges, an angled hemline, and breathable summer comfort.",
      isBestseller: false
    },

    // --- HANDBAGS ---
    {
      id: "prod-09",
      name: "Le Marais Leather Shoulder Bag",
      category: "Handbags",
      price: 16800,
      originalPrice: 19500,
      rating: 5.0,
      reviewCount: 240,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
      badge: "BESTSELLER",
      badgeType: "gold",
      description: "Hand-milled calfskin leather structured in Florence. Finished with our signature brushed champagne gold clasp and suede-lined compartments.",
      isBestseller: true
    },
    {
      id: "prod-10",
      name: "The Sculptural Mini Tote",
      category: "Handbags",
      price: 12900,
      originalPrice: 14800,
      rating: 4.8,
      reviewCount: 112,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
      badge: "ATELIER",
      badgeType: "dark",
      description: "A compact geometric silhouette with curved handles, a detachable leather crossbody strap, and reinforced edge painting.",
      isBestseller: false
    },
    {
      id: "prod-11",
      name: "Woven Caramel Bucket Bag",
      category: "Handbags",
      price: 14200,
      originalPrice: 16500,
      rating: 4.7,
      reviewCount: 78,
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
      badge: "NEW",
      badgeType: "outline",
      description: "Interlaced hand-woven supple nappa leather in warm caramel cognac. Features a drawstring closure and brushed brass hardware.",
      isBestseller: false
    },
    {
      id: "prod-12",
      name: "Classic Quilted Flap Bag",
      category: "Handbags",
      price: 18500,
      originalPrice: 22000,
      rating: 4.9,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
      badge: "SIGNATURE",
      badgeType: "gold",
      description: "Chevron quilted lambskin leather with a convertible chain strap. An everlasting statement piece for day or evening gala.",
      isBestseller: false
    },

    // --- SHOES ---
    {
      id: "prod-13",
      name: "Palais Pointed Slingback Heels",
      category: "Shoes",
      price: 9800,
      originalPrice: 12000,
      rating: 4.9,
      reviewCount: 96,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
      badge: "BESTSELLER",
      badgeType: "gold",
      description: "An elongated sculptural toe, 65mm flared kitten heel, and elasticated slingback strap. Crafted from butter-soft Italian leather.",
      isBestseller: true
    },
    {
      id: "prod-14",
      name: "Minimalist Nappa Leather Mules",
      category: "Shoes",
      price: 8400,
      originalPrice: 9900,
      rating: 4.7,
      reviewCount: 68,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
      badge: "EDITOR'S PICK",
      badgeType: "outline",
      description: "Slip-on simplicity with an architectural square toe and padded footbed engineered for graceful support throughout the day.",
      isBestseller: false
    },
    {
      id: "prod-15",
      name: "Atelier Strappy Block Sandals",
      category: "Shoes",
      price: 7900,
      originalPrice: 9400,
      rating: 4.8,
      reviewCount: 84,
      image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=800&auto=format&fit=crop",
      badge: "NEW",
      badgeType: "outline",
      description: "Refined crisscrossing leather straps that cradle the foot, grounded on a sculpted cylindrical block heel in rich caramel tones.",
      isBestseller: false
    },
    {
      id: "prod-16",
      name: "Chelsea Sculpted Ankle Boots",
      category: "Shoes",
      price: 13500,
      originalPrice: 15800,
      rating: 4.9,
      reviewCount: 124,
      image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop",
      badge: "AUTUMN EDIT",
      badgeType: "dark",
      description: "Polished full-grain box calf leather with elastic side gussets and a handcrafted leather welt. Masterfully weather-treated.",
      isBestseller: false
    },

    // --- ACCESSORIES ---
    {
      id: "prod-17",
      name: "Gilded Heritage Chunky Hoops",
      category: "Accessories",
      price: 3600,
      originalPrice: 4500,
      rating: 4.9,
      reviewCount: 215,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
      badge: "FAVORITE",
      badgeType: "gold",
      description: "18-karat gold vermeil over recycled sterling silver. Hollow-formed for ultra-lightweight wear from morning till midnight.",
      isBestseller: false
    },
    {
      id: "prod-18",
      name: "Handcrafted Hammered Gold Cuff",
      category: "Accessories",
      price: 4800,
      originalPrice: 5800,
      rating: 4.8,
      reviewCount: 76,
      image: "https://images.unsplash.com/photo-1611591475155-426c09a14424?q=80&w=800&auto=format&fit=crop",
      badge: "ARTISANAL",
      badgeType: "outline",
      description: "Individually hammered by master jewelers in Jaipur. Catching light at every angle with an adjustable ergonomic wrist contour.",
      isBestseller: false
    },
    {
      id: "prod-19",
      name: "Pure Mulberry Silk Hair Foulard",
      category: "Accessories",
      price: 2900,
      originalPrice: 3600,
      rating: 4.7,
      reviewCount: 110,
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
      badge: "GIFT EDIT",
      badgeType: "outline",
      description: "Square 70x70cm twill silk scarf featuring subtle tonal geometric prints and hand-rolled edges finished by artisans.",
      isBestseller: false
    },
    {
      id: "prod-20",
      name: "Vintage Oval Tortoiseshell Sunglasses",
      category: "Accessories",
      price: 5200,
      originalPrice: 6500,
      rating: 4.8,
      reviewCount: 94,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
      badge: "SIGNATURE",
      badgeType: "dark",
      description: "Handcrafted Italian Mazzucchelli acetate with 100% UVA/UVB protection and gold-toned Maison hardware accents.",
      isBestseller: false
    }
  ],

  // Active Filters & States
  currentCategory: "all",
  currentSort: "featured",
  cart: [],
  wishlist: [],
  activeQuickViewProduct: null,
  quickViewSelectedSize: "S",
  quickViewQuantity: 1
};

// Shipping Threshold for Complimentary Delivery (INR)
const FREE_SHIPPING_THRESHOLD = 5000;
const STANDARD_SHIPPING_FEE = 250;

/**
 * Helper: Format Number into Indian Rupee Currency Format (₹)
 */
function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Toast Notification System
 */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === "success" 
        ? '<polyline points="20 6 9 17 4 12"></polyline>' 
        : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto Dismiss Toast
  setTimeout(() => {
    toast.classList.add("toast-leave");
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

/* ==========================================================================
   LocalStorage Management
   ========================================================================== */
function loadPersistedData() {
  try {
    const savedCart = localStorage.getItem("aurea_cart");
    if (savedCart) {
      STATE.cart = JSON.parse(savedCart);
    }
  } catch (err) {
    console.warn("Could not load cart from localStorage", err);
    STATE.cart = [];
  }

  try {
    const savedWishlist = localStorage.getItem("aurea_wishlist");
    if (savedWishlist) {
      STATE.wishlist = JSON.parse(savedWishlist);
    }
  } catch (err) {
    console.warn("Could not load wishlist from localStorage", err);
    STATE.wishlist = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("aurea_cart", JSON.stringify(STATE.cart));
  } catch (err) {
    console.warn("Could not save cart to localStorage", err);
  }
}

function saveWishlistToStorage() {
  try {
    localStorage.setItem("aurea_wishlist", JSON.stringify(STATE.wishlist));
  } catch (err) {
    console.warn("Could not save wishlist to localStorage", err);
  }
}

/* ==========================================================================
   Product Card HTML Template Generator
   ========================================================================== */
function createProductCardHTML(product) {
  const isWishlisted = STATE.wishlist.includes(product.id);
  const badgeClass = product.badgeType === "gold" ? "gold" : product.badgeType === "outline" ? "outline" : "";

  return `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">
      <div class="product-thumbnail-wrap">
        ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ""}
        
        <button class="product-wishlist-btn ${isWishlisted ? "active" : ""}" 
                data-product-id="${product.id}" 
                aria-label="${isWishlisted ? "Remove from wishlist" : "Add to wishlist"}"
                title="${isWishlisted ? "In Wishlist" : "Add to Wishlist"}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <img src="${product.image}" alt="${product.name}" class="product-thumbnail" loading="lazy">

        <div class="product-actions-overlay">
          <button class="quick-action-btn btn-cart-primary" data-action="add-cart" data-product-id="${product.id}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
            </svg>
            <span>Add to Bag</span>
          </button>
          <button class="quick-action-btn" data-action="quick-view" data-product-id="${product.id}">
            <span>Quick View</span>
          </button>
        </div>
      </div>

      <div class="product-meta">
        <span class="product-category-label">${product.category}</span>
        <h3 class="product-title" data-action="quick-view" data-product-id="${product.id}">${product.name}</h3>
        <div class="product-rating-row">
          <span class="star-icons">★★★★★</span>
          <span class="rating-count">(${product.rating}) · ${product.reviewCount} reviews</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatINR(product.price)}</span>
          ${product.originalPrice ? `<span class="product-price-original">${formatINR(product.originalPrice)}</span>` : ""}
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   Render Products Grid & Best Sellers
   ========================================================================== */
function renderCollection() {
  const container = document.getElementById("main-product-grid");
  const countDisplay = document.getElementById("product-count-display");
  const emptyState = document.getElementById("collection-empty");
  if (!container) return;

  // Filter products by active category
  let list = STATE.products.filter(item => {
    if (STATE.currentCategory === "all") return true;
    return item.category.toLowerCase() === STATE.currentCategory.toLowerCase();
  });

  // Sort products
  if (STATE.currentSort === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (STATE.currentSort === "price-high") {
    list.sort((a, b) => b.price - a.price);
  } else if (STATE.currentSort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  // Update UI count
  if (countDisplay) {
    countDisplay.textContent = `Showing ${list.length} creations`;
  }

  if (list.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  container.innerHTML = list.map(item => createProductCardHTML(item)).join("");
}

function renderBestSellers() {
  const container = document.getElementById("bestsellers-grid");
  if (!container) return;

  const bestsellers = STATE.products.filter(p => p.isBestseller);
  container.innerHTML = bestsellers.map(item => createProductCardHTML(item)).join("");
}

/* ==========================================================================
   Shopping Bag / Cart Functionality
   ========================================================================== */
function addToCart(productId, size = "S", quantity = 1) {
  const product = STATE.products.find(p => p.id === productId);
  if (!product) return;

  // Check if item with same ID & size already in bag
  const existingItem = STATE.cart.find(item => item.id === productId && item.size === size);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    STATE.cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      size: size,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added to your bag: ${product.name}`);
  openCartDrawer();
}

function updateCartItemQuantity(productId, size, change) {
  const itemIndex = STATE.cart.findIndex(i => i.id === productId && i.size === size);
  if (itemIndex === -1) return;

  STATE.cart[itemIndex].quantity += change;

  if (STATE.cart[itemIndex].quantity <= 0) {
    const removedItem = STATE.cart[itemIndex];
    STATE.cart.splice(itemIndex, 1);
    showToast(`Removed from bag: ${removedItem.name}`);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(productId, size) {
  const itemIndex = STATE.cart.findIndex(i => i.id === productId && i.size === size);
  if (itemIndex === -1) return;

  const removedItem = STATE.cart[itemIndex];
  STATE.cart.splice(itemIndex, 1);
  saveCartToStorage();
  updateCartUI();
  showToast(`Removed from bag: ${removedItem.name}`);
}

function updateCartUI() {
  // Counters
  const cartCounter = document.getElementById("cart-counter");
  const drawerItemCount = document.getElementById("drawer-item-count");
  const cartItemsList = document.getElementById("cart-items-list");
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const shippingEl = document.getElementById("cart-shipping-val");
  const grandTotalEl = document.getElementById("cart-grandtotal-val");
  const shippingText = document.getElementById("shipping-progress-text");
  const shippingFill = document.getElementById("shipping-progress-fill");

  const totalQuantity = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCounter) cartCounter.textContent = totalQuantity;
  if (drawerItemCount) drawerItemCount.textContent = `(${totalQuantity} pieces)`;

  // Free shipping tracker logic
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : STANDARD_SHIPPING_FEE;
  const grandTotal = subtotal + shippingFee;

  if (shippingText && shippingFill) {
    if (subtotal === 0) {
      shippingText.innerHTML = `Add <strong>${formatINR(FREE_SHIPPING_THRESHOLD)}</strong> more for Complimentary Express Delivery`;
      shippingFill.style.width = "0%";
    } else if (isFreeShipping) {
      shippingText.innerHTML = `✨ <strong>Complimentary Express Delivery</strong> unlocked!`;
      shippingFill.style.width = "100%";
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingText.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more for Complimentary Delivery`;
      shippingFill.style.width = `${percent}%`;
    }
  }

  // Summary rows
  if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);
  if (shippingEl) {
    if (subtotal === 0) {
      shippingEl.textContent = "Calculated at checkout";
    } else if (isFreeShipping) {
      shippingEl.textContent = "Complimentary";
    } else {
      shippingEl.textContent = formatINR(shippingFee);
    }
  }
  if (grandTotalEl) grandTotalEl.textContent = formatINR(grandTotal);

  // Cart Items Render
  if (!cartItemsList) return;

  if (STATE.cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-view">
        <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <h4>Your Shopping Bag is Empty</h4>
        <p>Explore our latest curations and discover timeless luxury pieces.</p>
        <button class="btn btn-secondary" id="empty-cart-shop-btn">Explore Collections</button>
      </div>
    `;

    const emptyShopBtn = document.getElementById("empty-cart-shop-btn");
    if (emptyShopBtn) {
      emptyShopBtn.addEventListener("click", () => {
        closeCartDrawer();
        scrollToSection("collection");
      });
    }
    return;
  }

  cartItemsList.innerHTML = STATE.cart.map(item => `
    <div class="cart-item" data-cart-id="${item.id}" data-cart-size="${item.size}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-header">
          <h4 class="cart-item-title">${item.name}</h4>
          <button class="cart-item-remove-btn" 
                  data-action="remove-item" 
                  data-product-id="${item.id}" 
                  data-size="${item.size}" 
                  aria-label="Remove item">✕</button>
        </div>
        <span class="cart-item-variant">Size: <strong>${item.size}</strong> · ${item.category}</span>
        <div class="cart-item-footer">
          <div class="quantity-controller">
            <button class="qty-btn" data-action="decrease-qty" data-product-id="${item.id}" data-size="${item.size}">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" data-action="increase-qty" data-product-id="${item.id}" data-size="${item.size}">+</button>
          </div>
          <span class="cart-item-price">${formatINR(item.price * item.quantity)}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* ==========================================================================
   Wishlist Handling
   ========================================================================== */
function toggleWishlist(productId) {
  const index = STATE.wishlist.indexOf(productId);
  const product = STATE.products.find(p => p.id === productId);

  if (index > -1) {
    STATE.wishlist.splice(index, 1);
    if (product) showToast(`Removed from wishlist: ${product.name}`);
  } else {
    STATE.wishlist.push(productId);
    if (product) showToast(`Added to wishlist: ${product.name}`);
  }

  saveWishlistToStorage();
  updateWishlistUI();
  renderCollection();
  renderBestSellers();
}

function updateWishlistUI() {
  const counter = document.getElementById("wishlist-counter");
  if (counter) {
    counter.textContent = STATE.wishlist.length;
  }
}

/* ==========================================================================
   Quick View Modal
   ========================================================================== */
function openQuickView(productId) {
  const product = STATE.products.find(p => p.id === productId);
  if (!product) return;

  STATE.activeQuickViewProduct = product;
  STATE.quickViewSelectedSize = "S";
  STATE.quickViewQuantity = 1;

  const modal = document.getElementById("quickview-modal");
  const backdrop = document.getElementById("quickview-backdrop");
  const imgEl = document.getElementById("qv-image");
  const catEl = document.getElementById("qv-category");
  const titleEl = document.getElementById("qv-title");
  const priceEl = document.getElementById("qv-price");
  const descEl = document.getElementById("qv-description");
  const ratingEl = document.getElementById("qv-rating");
  const qtyValEl = document.getElementById("qv-qty-val");

  if (imgEl) imgEl.src = product.image;
  if (catEl) catEl.textContent = product.category;
  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = formatINR(product.price);
  if (descEl) descEl.textContent = product.description;
  if (ratingEl) ratingEl.textContent = `★★★★★ (${product.rating} / 5.0 · ${product.reviewCount} customer reviews)`;
  if (qtyValEl) qtyValEl.textContent = "1";

  // Reset size options
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.size === "S");
  });

  if (modal && backdrop) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeQuickView() {
  const modal = document.getElementById("quickview-modal");
  const backdrop = document.getElementById("quickview-backdrop");
  if (modal && backdrop) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
    STATE.activeQuickViewProduct = null;
  }
}

/* ==========================================================================
   Search Modal & Instant Filtering
   ========================================================================== */
function openSearchModal() {
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("catalog-search-input");
  if (modal) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    setTimeout(() => {
      if (input) input.focus();
    }, 200);
  }
}

function closeSearchModal() {
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("catalog-search-input");
  const results = document.getElementById("search-results-container");
  const clearBtn = document.getElementById("clear-search-btn");

  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (input) input.value = "";
    if (results) results.innerHTML = "";
    if (clearBtn) clearBtn.style.display = "none";
  }
}

function performSearch(query) {
  const resultsContainer = document.getElementById("search-results-container");
  const clearBtn = document.getElementById("clear-search-btn");
  if (!resultsContainer) return;

  const cleanQuery = query.trim().toLowerCase();

  if (clearBtn) {
    clearBtn.style.display = cleanQuery ? "block" : "none";
  }

  if (!cleanQuery) {
    resultsContainer.innerHTML = "";
    return;
  }

  const matches = STATE.products.filter(p => {
    return p.name.toLowerCase().includes(cleanQuery) ||
           p.category.toLowerCase().includes(cleanQuery) ||
           p.description.toLowerCase().includes(cleanQuery);
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--color-gray-muted);">
        <p style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-black); margin-bottom: 0.5rem;">
          No matching pieces found for "${query}"
        </p>
        <p style="font-size: 0.85rem;">Try searching for "silk", "handbag", "dress", or "gold".</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.map(item => `
    <div class="product-card search-card" style="cursor: pointer;" data-action="quick-view" data-product-id="${item.id}">
      <div class="product-thumbnail-wrap" style="aspect-ratio: 4/5;">
        <img src="${item.image}" alt="${item.name}" class="product-thumbnail">
      </div>
      <div class="product-meta" style="padding-top: 0.75rem;">
        <span class="product-category-label">${item.category}</span>
        <h4 class="product-title" style="font-size: 1.1rem;">${item.name}</h4>
        <span class="product-price">${formatINR(item.price)}</span>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   Informational Policy Modals (Shipping, Returns, etc.)
   ========================================================================== */
const INFO_CONTENTS = {
  shipping: {
    title: "Complimentary Worldwide Delivery",
    content: `
      <p>AUREA provides complimentary insured express delivery on all orders above ₹5,000 across India and worldwide.</p>
      <br>
      <p><strong>Domestic Delivery:</strong> Hand-delivered within 2 to 4 business days via our luxury logistics partners with white-glove security verification.</p>
      <br>
      <p><strong>International Shipments:</strong> Delivered within 4 to 7 business days. All duties, import taxes, and boutique insurance are pre-calculated for a frictionless experience.</p>
      <br>
      <p><strong>Bespoke Packaging:</strong> Every piece arrives encased in archival tissue, enclosed inside our signature embossed champagne-gold gift box.</p>
    `
  },
  returns: {
    title: "Seamless 14-Day Returns & Exchanges",
    content: `
      <p>We invite you to experience our garments in the comfort of your home. Should a piece not meet your exacting standards, we offer complimentary door-to-door collection within 14 days of delivery.</p>
      <br>
      <p><strong>Return Criteria:</strong> Pieces must remain unworn, unaltered, and with all original AUREA security tags and boutique packaging intact.</p>
      <br>
      <p><strong>Concierge Exchange:</strong> Need an alternative size or silhouette? Our styling advisors will reserve and expedite your replacement immediately upon request.</p>
    `
  },
  care: {
    title: "Artisanal Garment Care Guide",
    content: `
      <p>Every AUREA garment is fashioned from high-twist pure mulberry silk, virgin Mongolian cashmere, and vegetable-tanned Italian leather.</p>
      <br>
      <p><strong>Pure Silk Pieces:</strong> Professional dry clean recommended, or hand-wash in cool water with specialized neutral silk detergent. Steam gently on reverse.</p>
      <br>
      <p><strong>Cashmere Knitwear:</strong> Store folded in breathable cedar wood drawers. Never hang knitwear on wire frames.</p>
      <br>
      <p><strong>Nappa & Calfskin Leather:</strong> Clean with a soft micro-cloth and nourish periodically with organic beeswax conditioner.</p>
    `
  },
  sustainability: {
    title: "Conscious Haute Couture",
    content: `
      <p>AUREA is committed to radical transparency and zero compromise on environmental ethics.</p>
      <br>
      <p>• 100% of our silk is traceable to organic certified family sericultures.</p>
      <p>• All dyeing processes utilize GOTS-certified closed-loop non-toxic botanical pigments.</p>
      <p>• Zero single-use plastics: our shipping mailers and boutique boxes are 100% recycled biodegradable fiber.</p>
    `
  },
  privacy: {
    title: "Privacy & Data Protection",
    content: `
      <p>At AUREA Maison, your privacy and client discretion are strictly safeguarded.</p>
      <br>
      <p>We employ enterprise 256-bit SSL encryption for all transaction processing. We will never sell, lease, or monetize your personal styling records, contact coordinates, or purchase history to third parties.</p>
    `
  },
  terms: {
    title: "Maison Terms of Service",
    content: `
      <p>All orders placed through AUREA Fashion Maison are subject to bespoke quality inspection prior to dispatch.</p>
      <br>
      <p>Prices are displayed in Indian Rupees (₹) inclusive of all applicable luxury GST and luxury excise taxes. For private salon orders and bridal custom tailoring, consultations may require a preliminary deposit.</p>
    `
  }
};

function openInfoModal(key) {
  const modal = document.getElementById("info-modal");
  const backdrop = document.getElementById("info-backdrop");
  const title = document.getElementById("info-modal-title");
  const body = document.getElementById("info-modal-body");

  const data = INFO_CONTENTS[key] || { title: "AUREA Maison", content: "<p>Information unavailable.</p>" };

  if (title) title.textContent = data.title;
  if (body) body.innerHTML = data.content;

  if (modal && backdrop) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeInfoModal() {
  const modal = document.getElementById("info-modal");
  const backdrop = document.getElementById("info-backdrop");
  if (modal && backdrop) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* ==========================================================================
   Smooth Scrolling & Utility Handlers
   ========================================================================== */
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.getElementById("main-header")?.offsetHeight || 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerHeight - 15,
      behavior: "smooth"
    });
  }
}

/* ==========================================================================
   Document Initialization & Event Listeners
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Load Stored Data
  loadPersistedData();
  updateWishlistUI();
  updateCartUI();

  // 2. Render Products & Bestsellers
  renderCollection();
  renderBestSellers();

  // 3. Current Year in Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 4. Sticky Header & Back to Top Toggle on Scroll
  const header = document.getElementById("main-header");
  const backToTopBtn = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (header) {
      header.classList.toggle("scrolled", scrollPos > 40);
    }

    if (backToTopBtn) {
      backToTopBtn.classList.toggle("show", scrollPos > 400);
    }

    // Active nav link highlight
    const sections = ["home", "categories", "collection", "bestsellers", "about", "contact"];
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach(secId => {
      const section = document.getElementById(secId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          navLinks.forEach(link => {
            const href = link.getAttribute("href");
            link.classList.toggle("active", href === `#${secId}`);
          });
        }
      }
    });
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 5. Mobile Drawer Toggle
  const hamburgerToggle = document.getElementById("hamburger-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const closeDrawerBtn = document.getElementById("close-drawer");
  const navBackdrop = document.getElementById("nav-backdrop");

  function openMobileNav() {
    mobileDrawer.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    hamburgerToggle.setAttribute("aria-expanded", "true");
    navBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    mobileDrawer.classList.remove("open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    hamburgerToggle.setAttribute("aria-expanded", "false");
    navBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (hamburgerToggle) hamburgerToggle.addEventListener("click", openMobileNav);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeMobileNav);
  if (navBackdrop) navBackdrop.addEventListener("click", closeMobileNav);

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      closeMobileNav();
    });
  });

  // 6. Cart Drawer Triggers
  const cartToggleBtn = document.getElementById("cart-toggle-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const continueShoppingBtn = document.getElementById("continue-shopping-btn");

  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener("click", closeCartDrawer);

  // 7. Cart Delegate Actions (+ / - / Remove / Checkout)
  const cartContainer = document.getElementById("cart-items-list");
  if (cartContainer) {
    cartContainer.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]");
      if (!target) return;

      const action = target.dataset.action;
      const productId = target.dataset.productId;
      const size = target.dataset.size;

      if (action === "increase-qty") {
        updateCartItemQuantity(productId, size, 1);
      } else if (action === "decrease-qty") {
        updateCartItemQuantity(productId, size, -1);
      } else if (action === "remove-item") {
        removeCartItem(productId, size);
      }
    });
  }

  // Checkout Button
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (STATE.cart.length === 0) {
        showToast("Your shopping bag is currently empty.", "error");
        return;
      }
      const totalQuantity = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
      const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const isFree = subtotal >= FREE_SHIPPING_THRESHOLD;
      const totalAmount = subtotal + (isFree ? 0 : STANDARD_SHIPPING_FEE);

      alert(`AUREA FASHION MAISON\n--------------------------------------\nThank you for choosing AUREA.\n\nItems in order: ${totalQuantity}\nOrder Total: ${formatINR(totalAmount)}\n\nYour order has been forwarded to our Client Advisory Concierge for priority dispatch.`);

      STATE.cart = [];
      saveCartToStorage();
      updateCartUI();
      closeCartDrawer();
      showToast("Order placed successfully with AUREA Maison!");
    });
  }

  // 8. Collection Filter Tabs
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      STATE.currentCategory = tab.dataset.category;
      renderCollection();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      STATE.currentSort = e.target.value;
      renderCollection();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById("reset-filter-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      STATE.currentCategory = "all";
      filterTabs.forEach(t => {
        t.classList.toggle("active", t.dataset.category === "all");
      });
      renderCollection();
    });
  }

  // Category Cards Click (Smoothly filters and scrolls to collection)
  document.querySelectorAll(".category-card, .category-cta, [data-filter]").forEach(element => {
    element.addEventListener("click", (e) => {
      const filterCategory = element.dataset.filter || element.dataset.category;
      if (!filterCategory) return;

      e.preventDefault();
      STATE.currentCategory = filterCategory;

      filterTabs.forEach(tab => {
        const matches = tab.dataset.category.toLowerCase() === filterCategory.toLowerCase();
        tab.classList.toggle("active", matches);
        tab.setAttribute("aria-selected", matches ? "true" : "false");
      });

      renderCollection();
      scrollToSection("collection");
    });
  });

  // 9. Wishlist Header Button Click (Scrolls or filters)
  const wishlistToggleBtn = document.getElementById("wishlist-toggle");
  if (wishlistToggleBtn) {
    wishlistToggleBtn.addEventListener("click", () => {
      if (STATE.wishlist.length === 0) {
        showToast("Your wishlist is currently empty. Tap the heart on pieces you admire.", "error");
      } else {
        showToast(`You have ${STATE.wishlist.length} luxury item(s) saved in your Wishlist.`);
        scrollToSection("collection");
      }
    });
  }

  // 10. Global Delegate for Product Card actions (Add to Bag / Quick View / Wishlist)
  document.addEventListener("click", (e) => {
    // Wishlist Button
    const wishlistBtn = e.target.closest(".product-wishlist-btn");
    if (wishlistBtn) {
      e.stopPropagation();
      const productId = wishlistBtn.dataset.productId;
      toggleWishlist(productId);
      return;
    }

    // Add to Bag Button
    const addCartBtn = e.target.closest('[data-action="add-cart"]');
    if (addCartBtn) {
      e.stopPropagation();
      const productId = addCartBtn.dataset.productId;
      addToCart(productId, "S", 1);
      return;
    }

    // Quick View Button or Product Title
    const quickViewBtn = e.target.closest('[data-action="quick-view"]');
    if (quickViewBtn) {
      e.stopPropagation();
      const productId = quickViewBtn.dataset.productId;
      openQuickView(productId);
      return;
    }

    // Policy / Informational Modal Triggers
    const modalTrigger = e.target.closest(".modal-info-trigger");
    if (modalTrigger) {
      e.preventDefault();
      const modalKey = modalTrigger.dataset.modal;
      openInfoModal(modalKey);
      return;
    }
  });

  // 11. Quick View Modal Interactions
  const qvModal = document.getElementById("quickview-modal");
  const qvBackdrop = document.getElementById("quickview-backdrop");
  const qvCloseBtn = document.getElementById("quickview-close-btn");
  const qvMinusBtn = document.getElementById("qv-minus-btn");
  const qvPlusBtn = document.getElementById("qv-plus-btn");
  const qvQtyVal = document.getElementById("qv-qty-val");
  const qvAddCartBtn = document.getElementById("qv-add-cart-btn");

  if (qvCloseBtn) qvCloseBtn.addEventListener("click", closeQuickView);
  if (qvBackdrop) qvBackdrop.addEventListener("click", closeQuickView);

  // Size Picker in Quick View
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.quickViewSelectedSize = btn.dataset.size;
    });
  });

  if (qvMinusBtn && qvQtyVal) {
    qvMinusBtn.addEventListener("click", () => {
      if (STATE.quickViewQuantity > 1) {
        STATE.quickViewQuantity--;
        qvQtyVal.textContent = STATE.quickViewQuantity;
      }
    });
  }

  if (qvPlusBtn && qvQtyVal) {
    qvPlusBtn.addEventListener("click", () => {
      if (STATE.quickViewQuantity < 10) {
        STATE.quickViewQuantity++;
        qvQtyVal.textContent = STATE.quickViewQuantity;
      }
    });
  }

  if (qvAddCartBtn) {
    qvAddCartBtn.addEventListener("click", () => {
      if (STATE.activeQuickViewProduct) {
        addToCart(
          STATE.activeQuickViewProduct.id, 
          STATE.quickViewSelectedSize, 
          STATE.quickViewQuantity
        );
        closeQuickView();
      }
    });
  }

  // 12. Search Modal Events
  const searchOpenBtn = document.getElementById("search-open-btn");
  const searchCloseBtn = document.getElementById("search-close-btn");
  const searchInput = document.getElementById("catalog-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  if (searchOpenBtn) searchOpenBtn.addEventListener("click", openSearchModal);
  if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearchModal);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      performSearch(e.target.value);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        performSearch("");
        searchInput.focus();
      }
    });
  }

  // Quick search tags click
  document.querySelectorAll(".quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const val = tag.dataset.tag;
      if (searchInput) {
        searchInput.value = val;
        performSearch(val);
      }
    });
  });

  // 13. Informational Modal Close Events
  const infoModalClose = document.getElementById("info-modal-close");
  const infoBackdrop = document.getElementById("info-backdrop");
  const infoAckBtn = document.getElementById("info-modal-ack-btn");

  if (infoModalClose) infoModalClose.addEventListener("click", closeInfoModal);
  if (infoBackdrop) infoBackdrop.addEventListener("click", closeInfoModal);
  if (infoAckBtn) infoAckBtn.addEventListener("click", closeInfoModal);

  // 14. Newsletter Form Validation & Submission
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterEmail = document.getElementById("newsletter-email");
  const newsletterFeedback = document.getElementById("newsletter-feedback");

  if (newsletterForm && newsletterEmail && newsletterFeedback) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        newsletterFeedback.className = "form-feedback error";
        newsletterFeedback.textContent = "Please enter your email address.";
        return;
      }

      if (!emailRegex.test(email)) {
        newsletterFeedback.className = "form-feedback error";
        newsletterFeedback.textContent = "Please provide a valid email format (e.g., name@domain.com).";
        return;
      }

      // Success
      newsletterFeedback.className = "form-feedback success";
      newsletterFeedback.textContent = "Welcome to the Inner Circle. Your private invitation & 10% code AUREA10 have been dispatched.";
      newsletterEmail.value = "";
      showToast("Subscription confirmed! Welcome to AUREA.");
    });
  }

  // 15. Concierge & Client Advisory Form
  const conciergeForm = document.getElementById("concierge-form");
  const contactFeedback = document.getElementById("contact-feedback");

  if (conciergeForm && contactFeedback) {
    conciergeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name")?.value.trim();
      const email = document.getElementById("contact-email")?.value.trim();
      const message = document.getElementById("contact-message")?.value.trim();

      if (!name || !email || !message) {
        contactFeedback.className = "contact-feedback error";
        contactFeedback.textContent = "Please complete all fields so our stylist may contact you.";
        return;
      }

      contactFeedback.className = "contact-feedback success";
      contactFeedback.textContent = `Thank you, ${name}. A Senior Client Advisor has been assigned and will reply within 4 business hours.`;
      conciergeForm.reset();
      showToast("Consultation inquiry sent to AUREA Concierge.");
    });
  }

  // 16. Keyboard Escape Key Listener to dismiss any open modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileNav();
      closeCartDrawer();
      closeQuickView();
      closeSearchModal();
      closeInfoModal();
    }
  });
});
