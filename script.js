// Product data - matching TheCrystalPrintShop's actual products
const productsData = [
    {
        id: 1,
        title: "Signature Sparkly Glitter Glass Photo Print - Wedding Gift",
        description: "Components of photo embellished with sparkling glass. Multiple frame options available. Hand-embellished with multiple blends of crushed European glass to enhance colors, highlights, and details.",
        price: 89.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/79ABA614-0B5E-44C9-A855-F612C28A2C7E.jpg?v=1754954312&width=400",
        category: "Wedding",
        featured: true,
        rating: 5.0,
        reviewCount: 39,
        freeShipping: true,
        tags: ["wedding", "signature", "sparkly", "glass", "gift"]
    },
    {
        id: 2,
        title: "DiamondLuxe Glass & Resin Mounted Print - Premium Sparkle",
        description: "Our premium DiamondLuxe treatment with glass glitter and resin mounting for maximum brilliance. Perfect for displaying your most treasured memories with extraordinary sparkle.",
        price: 189.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/E64BE9EE-9137-4DA3-A56E-8169042BA24E.jpg?v=1754954312&width=400",
        category: "Premium",
        featured: true,
        rating: 5.0,
        reviewCount: 15,
        freeShipping: true,
        tags: ["diamond-luxe", "resin", "premium", "mounting", "brilliance"]
    },
    {
        id: 3,
        title: "Full Color Sparkly Glitter Photo Art Print - Original Enhancement",
        description: "Your original photo enhanced with our signature crushed glass treatment. Maintains full color while adding magical sparkle that catches and reflects light beautifully.",
        price: 79.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/55FDB251-A5C7-4083-9B04-EA73CB0B99F7.jpg?v=1754954312&width=400",
        category: "Art Print",
        featured: true,
        rating: 5.0,
        reviewCount: 12,
        freeShipping: true,
        tags: ["full-color", "art-print", "enhancement", "sparkle", "original"]
    },
    {
        id: 4,
        title: "B/W With Pop of Color Sparkly Photo - Artist's Choice",
        description: "Artist selects specific elements to keep in color while rest becomes elegant black & white, enhanced with strategic crushed glass placement for stunning visual impact.",
        price: 85.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/283E5A09-0EFD-460F-9FE6-3E6A3B06C5C5.jpg?v=1754954312&width=400",
        category: "Artistic",
        featured: false,
        rating: 5.0,
        reviewCount: 8,
        freeShipping: true,
        tags: ["black-white", "color-pop", "artistic", "selective", "enhancement"]
    },
    {
        id: 5,
        title: "Wedding Dress Sparkle Enhancement - Bridal Special",
        description: "Perfect for bridal photos, this treatment brings wedding dresses to life with magical sparkle. Highlights intricate lace details and creates fairytale-like brilliance.",
        price: 95.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/808B9C72-C8CC-4744-B3B2-C7E719D1B8E2.jpg?v=1754954312&width=400",
        category: "Bridal",
        featured: false,
        rating: 5.0,
        reviewCount: 22,
        freeShipping: true,
        tags: ["bridal", "wedding-dress", "lace", "fairytale", "enhancement"]
    },
    {
        id: 6,
        title: "Family Portrait Glass Embellishment - Memory Keeper",
        description: "Transform your precious family moments into sparkling works of art. Hand-applied crushed glass highlights bring warmth and magic to your cherished memories.",
        price: 89.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/670C56A8-9991-443A-B91E-EEB3B35940AD.jpg?v=1754579144&width=400",
        category: "Family",
        featured: false,
        rating: 5.0,
        reviewCount: 16,
        freeShipping: true,
        tags: ["family", "portrait", "memories", "warmth", "embellishment"]
    },
    {
        id: 7,
        title: "Custom Matted Sparkle Print - Professional Display",
        description: "Hand-painted or hand-stamped mats paired with our signature glass treatment. Perfect for professional display in homes or offices. Multiple mat colors available.",
        price: 125.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/IMG_7127.jpg?v=1754231738&width=400",
        category: "Professional",
        featured: false,
        rating: 5.0,
        reviewCount: 9,
        freeShipping: true,
        tags: ["matted", "professional", "display", "hand-painted", "custom"]
    },
    {
        id: 8,
        title: "Vintage Photo Restoration with Sparkle - Heritage Collection",
        description: "Restore and enhance your vintage family photos with our special heritage treatment. Brings old photographs to new life while preserving their historical essence.",
        price: 99.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/IMG_4987.jpg?v=1754231062&width=400",
        category: "Heritage",
        featured: false,
        rating: 5.0,
        reviewCount: 7,
        freeShipping: true,
        tags: ["vintage", "restoration", "heritage", "historical", "preservation"]
    },
    {
        id: 9,
        title: "Anniversary Celebration Sparkle - Love Story Enhancement",
        description: "Celebrate your love story with our romantic sparkle treatment. Perfect for anniversary gifts, capturing the magic of your relationship milestones.",
        price: 89.00,
        imageUrl: "https://crystalprintshop.com/cdn/shop/files/12356242-AD38-472C-B3DE-F2F4CDCEAC98.jpg?v=1754225860&width=400",
        category: "Anniversary",
        featured: false,
        rating: 5.0,
        reviewCount: 14,
        freeShipping: true,
        tags: ["anniversary", "love-story", "romantic", "celebration", "milestone"]
    }
];

// Global state
let currentProducts = [...productsData];
let filteredProducts = [...productsData];

// DOM Elements
const featuredProductsContainer = document.getElementById('featuredProducts');
const allProductsContainer = document.getElementById('allProducts');
const productCountElement = document.getElementById('productCount');
const priceFilter = document.getElementById('priceFilter');
const sortBy = document.getElementById('sortBy');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Render products
    renderProducts();
    
    // Add event listeners
    setupEventListeners();
    
    // Add sparkle effect to some elements
    addSparkleEffect();
});

// Product rendering functions
function renderProducts() {
    renderFeaturedProducts();
    renderAllProducts();
    updateProductCount();
}

function renderFeaturedProducts() {
    const featuredProducts = filteredProducts.filter(product => product.featured);
    featuredProductsContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productElement = createProductCard(product, true);
        featuredProductsContainer.appendChild(productElement);
    });
}

function renderAllProducts() {
    allProductsContainer.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productElement = createProductCard(product, false);
        allProductsContainer.appendChild(productElement);
    });
}

function createProductCard(product, isFeatured = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.imageUrl}" alt="${product.title}" class="product-image">
            <div class="product-badges">
                ${isFeatured ? '<span class="badge badge-featured">Featured</span>' : ''}
                ${product.category === 'Premium' ? '<span class="badge badge-premium">Premium</span>' : ''}
            </div>
            <button class="favorite-btn" onclick="event.stopPropagation(); toggleFavorite(${product.id})" aria-label="Add to favorites">
                <i data-lucide="heart"></i>
            </button>
            ${product.freeShipping ? `
                <div class="shipping-badge">
                    <span class="badge badge-shipping">
                        <i data-lucide="truck"></i>
                        FREE shipping
                    </span>
                </div>
            ` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <div class="product-rating">
                    <i data-lucide="star" class="rating-star"></i>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
            </div>
        </div>
    `;
    
    // Re-initialize icons for this card
    setTimeout(() => {
        lucide.createIcons(card);
    }, 0);
    
    return card;
}

// Modal functions
function openProductModal(product) {
    modalBody.innerHTML = createProductModalContent(product);
    productModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Re-initialize icons in modal
    setTimeout(() => {
        lucide.createIcons(modalBody);
    }, 0);
}

function closeProductModal() {
    productModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function createProductModalContent(product) {
    return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
            <div>
                <div style="aspect-ratio: 1; border-radius: 0.75rem; overflow: hidden; background: white; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); border: 1px solid hsl(0, 0%, 95%);">
                    <img src="${product.imageUrl}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        ${product.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
                        <span class="badge" style="background: transparent; color: var(--charcoal); border: 1px solid var(--gray-300);">${product.category}</span>
                    </div>
                    <h1 style="font-family: var(--font-serif); font-size: 1.875rem; font-weight: 600; color: var(--charcoal); margin-bottom: 1rem;">${product.title}</h1>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="display: flex; align-items: center;">
                            ${Array(5).fill().map(() => '<i data-lucide="star" style="width: 1.25rem; height: 1.25rem; fill: var(--yellow-400); color: var(--yellow-400);"></i>').join('')}
                            <span style="margin-left: 0.5rem; font-size: 0.875rem; color: var(--soft-gray);">(${product.reviewCount} reviews)</span>
                        </div>
                    </div>
                    <p style="color: var(--soft-gray); line-height: 1.6;">${product.description}</p>
                </div>
                
                <div style="border-top: 1px solid var(--gray-200); padding-top: 1.5rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <div style="font-size: 1.875rem; font-weight: 600; color: var(--charcoal);">$${product.price.toFixed(2)}</div>
                        ${product.freeShipping ? `
                            <div style="display: flex; align-items: center; color: var(--green-600); font-size: 0.875rem;">
                                <i data-lucide="truck" style="width: 1rem; height: 1rem; margin-right: 0.25rem;"></i>
                                FREE shipping
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                ${product.tags && product.tags.length > 0 ? `
                    <div style="border-top: 1px solid var(--gray-200); padding-top: 1.5rem;">
                        <h3 style="font-size: 0.875rem; font-weight: 500; color: var(--charcoal); margin-bottom: 0.75rem;">Tags</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${product.tags.map(tag => `<span class="badge" style="background: var(--gray-100); color: var(--charcoal); font-size: 0.75rem;">${tag}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem; padding-top: 1.5rem;">
                    <button class="btn btn-primary" style="font-size: 1.125rem; padding: 1rem;">Add to Cart</button>
                    <div style="display: flex; gap: 0.75rem;">
                        <button class="btn btn-outline" style="flex: 1;">
                            <i data-lucide="heart"></i>
                            Add to Favorites
                        </button>
                        <button class="btn btn-outline" style="flex: 1;">
                            <i data-lucide="share-2"></i>
                            Share
                        </button>
                    </div>
                    <button class="btn btn-accent" style="font-size: 1.125rem;">Request Custom Order</button>
                </div>
                
                <div style="border-top: 1px solid var(--gray-200); padding-top: 1.5rem;">
                    <h3 style="font-size: 0.875rem; font-weight: 500; color: var(--charcoal); margin-bottom: 0.75rem;">Shop Information</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem; color: var(--soft-gray);">
                        <p>From TheCrystalPrintShop in Carmel Valley, California</p>
                        <p>Usually ships within 1-2 business days</p>
                        <p>61 sales • 5.0 star rating • 39 reviews</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Filter and sort functions
function applyFilters() {
    let filtered = [...productsData];
    
    // Apply price filter
    const priceValue = priceFilter.value;
    if (priceValue === 'under-100') {
        filtered = filtered.filter(product => product.price < 100);
    } else if (priceValue === '100-150') {
        filtered = filtered.filter(product => product.price >= 100 && product.price <= 150);
    } else if (priceValue === 'over-150') {
        filtered = filtered.filter(product => product.price > 150);
    }
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Apply sorting
    const sortValue = sortBy.value;
    if (sortValue === 'lowest') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'highest') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'recent') {
        filtered.sort((a, b) => b.id - a.id);
    }
    
    filteredProducts = filtered;
    renderProducts();
}

function updateProductCount() {
    productCountElement.textContent = filteredProducts.length;
}

// Event listeners
function setupEventListeners() {
    // Filter and sort controls
    priceFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
    
    // Search functionality
    searchInput.addEventListener('input', debounce(applyFilters, 300));
    
    // Modal controls
    modalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && productModal.classList.contains('show')) {
            closeProductModal();
        }
    });
    
    // View controls
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Here you could implement different view layouts
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function toggleFavorite(productId) {
    // Here you could implement favorite functionality
    console.log(`Toggled favorite for product ${productId}`);
    // You could save to localStorage or send to a backend
}

// Add sparkle effect to certain elements
function addSparkleEffect() {
    const sparkleElements = document.querySelectorAll('.section-icon, .logo-icon');
    sparkleElements.forEach(element => {
        element.classList.add('sparkle');
    });
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards for scroll animations
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize scroll animations after products are rendered
setTimeout(setupScrollAnimations, 100);

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading states
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; min-height: 200px;">
            <div style="width: 3rem; height: 3rem; border: 3px solid var(--gray-200); border-top: 3px solid var(--rose-gold); border-radius: 50%; animation: spin 1s linear infinite;"></div>
        </div>
    `;
    return loader;
}

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);