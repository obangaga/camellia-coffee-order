// Data menu
const menuData = {
    "coffee": [
        {
            "id": 1,
            "name": "Americano",
            "description": "Espresso dengan air panas, rasa kopi yang kuat dan pure",
            "price": 25000,
            "category": "coffee"
        },
        {
            "id": 2,
            "name": "Cappuccino",
            "description": "Espresso dengan steamed milk dan foam yang creamy",
            "price": 30000,
            "category": "coffee"
        },
        {
            "id": 3,
            "name": "Latte",
            "description": "Espresso dengan lebih banyak steamed milk dan sedikit foam",
            "price": 32000,
            "category": "coffee"
        },
        {
            "id": 4,
            "name": "Espresso",
            "description": "Kopi murni yang kuat dan concentrated",
            "price": 20000,
            "category": "coffee"
        },
        {
            "id": 5,
            "name": "Mocha",
            "description": "Perpaduan espresso, coklat, dan steamed milk",
            "price": 35000,
            "category": "coffee"
        },
        {
            "id": 6,
            "name": "Macchiato",
            "description": "Espresso dengan sedikit foam milk",
            "price": 28000,
            "category": "coffee"
        }
    ],
    "non-coffee": [
        {
            "id": 7,
            "name": "Hot Chocolate",
            "description": "Coklat panas dengan whipped cream",
            "price": 28000,
            "category": "non-coffee"
        },
        {
            "id": 8,
            "name": "Matcha Latte",
            "description": "Matcha premium dengan steamed milk",
            "price": 32000,
            "category": "non-coffee"
        },
        {
            "id": 9,
            "name": "Red Velvet",
            "description": "Minuman creamy dengan rasa red velvet yang unik",
            "price": 35000,
            "category": "non-coffee"
        },
        {
            "id": 10,
            "name": "Taro Latte",
            "description": "Latte dengan rasa taro yang manis dan creamy",
            "price": 30000,
            "category": "non-coffee"
        }
    ],
    "tea": [
        {
            "id": 11,
            "name": "Lemon Tea",
            "description": "Teh segar dengan perasan lemon",
            "price": 20000,
            "category": "tea"
        },
        {
            "id": 12,
            "name": "Peach Tea",
            "description": "Teh dengan rasa peach yang menyegarkan",
            "price": 22000,
            "category": "tea"
        },
        {
            "id": 13,
            "name": "Green Tea",
            "description": "Teh hijau murni yang menyehatkan",
            "price": 18000,
            "category": "tea"
        },
        {
            "id": 14,
            "name": "Thai Tea",
            "description": "Teh Thailand dengan rasa yang khas",
            "price": 25000,
            "category": "tea"
        },
        {
            "id": 15,
            "name": "Jasmine Tea",
            "description": "Teh melati dengan aroma yang harum",
            "price": 20000,
            "category": "tea"
        }
    ]
};

class CoffeeOrderApp {
    constructor() {
        this.cart = [];
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        this.loadMenu();
        this.setupEventListeners();
        this.updateCartCount();
    }

    loadMenu() {
        const menuGrid = document.getElementById('menuGrid');
        menuGrid.innerHTML = '';

        let allMenuItems = [];
        
        if (this.currentCategory === 'all') {
            allMenuItems = [
                ...menuData.coffee,
                ...menuData['non-coffee'],
                ...menuData.tea
            ];
        } else {
            allMenuItems = menuData[this.currentCategory] || [];
        }

        allMenuItems.forEach(item => {
            const menuItem = this.createMenuItem(item);
            menuGrid.appendChild(menuItem);
        });
    }

    createMenuItem(item) {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <i class="fas fa-coffee" style="font-size: 3rem; color: #8B4513; margin-bottom: 15px;"></i>
            <h3>${item.name}</h3>
            <p class="description">${item.description}</p>
            <p class="price">Rp ${item.price.toLocaleString('id-ID')}</p>
            <button class="add-to-cart" data-id="${item.id}">
                <i class="fas fa-plus"></i> Tambah ke Keranjang
            </button>
        `;
        return menuItem;
    }

    setupEventListeners() {
        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.loadMenu();
            });
        });

        // Cart icon
        document.getElementById('cartIcon').addEventListener('click', () => {
            this.toggleCart();
        });

        // Close cart
        document.getElementById('closeCart').addEventListener('click', () => {
            this.toggleCart();
        });

        // Overlay
        document.getElementById('overlay').addEventListener('click', () => {
            this.toggleCart();
        });

        // Add to cart (delegation)
        document.getElementById('menuGrid').addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                const itemId = parseInt(button.dataset.id);
                this.addToCart(itemId);
            }
        });

        // Checkout
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            this.checkout();
        });
    }

    addToCart(itemId) {
        // Find item in all categories
        let item = null;
        for (const category in menuData) {
            item = menuData[category].find(i => i.id === itemId);
            if (item) break;
        }

        if (!item) return;

        const existingItem = this.cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...item,
                quantity: 1
            });
        }

        this.updateCartCount();
        this.showNotification(`${item.name} ditambahkan ke keranjang!`);
        
        // If cart is open, update cart display
        if (document.getElementById('cartSidebar').classList.contains('active')) {
            this.updateCartDisplay();
        }
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.updateCartCount();
        this.updateCartDisplay();
    }

    updateQuantity(itemId, change) {
        const item = this.cart.find(cartItem => cartItem.id === itemId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                this.updateCartCount();
                this.updateCartDisplay();
            }
        }
    }

    updateCartCount() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cartCount').textContent = totalItems;
    }

    updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const totalAmount = document.getElementById('totalAmount');

        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 40px 0;">Keranjang masih kosong</p>';
            totalAmount.textContent = '0';
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="item-price">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)">-</button>
                    <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="app.removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmount.textContent = total.toLocaleString('id-ID');
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');

        cartSidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        if (cartSidebar.classList.contains('active')) {
            this.updateCartDisplay();
        }
    }

    checkout() {
        if (this.cart.length === 0) {
            alert('Keranjang masih kosong!');
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        let message = `Halo CoffeeSpace! Saya ingin memesan:\n\n`;
        
        this.cart.forEach(item => {
            message += `• ${item.name} x${item.quantity} - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
        });
        
        message += `\nTotal: Rp ${total.toLocaleString('id-ID')}`;
        message += `\n\nTerima kasih!`;

        // Encode message for WhatsApp URL
        const phoneNumber = '6285198257241'
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Reset cart after checkout
        this.cart = [];
        this.updateCartCount();
        this.updateCartDisplay();
        this.toggleCart();
        
        this.showNotification('Pesanan berhasil dikirim via WhatsApp!');
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27AE60;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CoffeeOrderApp();
});
