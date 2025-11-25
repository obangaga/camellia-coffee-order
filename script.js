// Data menu lengkap berdasarkan menu asli Camellia Coffee
const menuData = {
    "coffee": [
        {
            "id": 1,
            "name": "Camelliano",
            "description": "Signature coffee dengan rasa yang seimbang",
            "price": 24200,
            "category": "coffee",
            "icon": "fa-crown",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 2,
            "name": "Camelliano Rempah",
            "description": "Signature coffee dengan rempah khas",
            "price": 26400,
            "category": "coffee",
            "icon": "fa-star",
            "variants": ["Hot"]
        },
        {
            "id": 3,
            "name": "Espresso",
            "description": "Kopi murni yang kuat dan concentrated",
            "price": 15400,
            "category": "coffee",
            "icon": "fa-coffee",
            "variants": ["Hot"]
        },
        {
            "id": 4,
            "name": "Americano",
            "description": "Espresso dengan air panas, rasa kopi yang kuat",
            "price": 19800,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 5,
            "name": "Mocha Latte Classic",
            "description": "Perpaduan espresso, coklat, dan steamed milk",
            "price": 24200,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 6,
            "name": "Caramel Machiato",
            "description": "Espresso dengan caramel dan foam milk",
            "price": 26400,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 7,
            "name": "Vanilla Café Latte",
            "description": "Latte dengan rasa vanilla yang lembut",
            "price": 26400,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 8,
            "name": "Kopi Susu Klasik",
            "description": "Kopi dengan susu klasik Indonesia",
            "price": 26400,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 9,
            "name": "Kopi Pandan Latte",
            "description": "Kopi dengan aroma pandan yang khas",
            "price": 24200,
            "category": "coffee",
            "icon": "fa-leaf",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 10,
            "name": "Kopi Kurma",
            "description": "Kopi dengan rasa kurma alami",
            "price": 27500,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 11,
            "name": "Kopi Kurma (B)",
            "description": "Kopi kurma ukuran besar",
            "price": 49500,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 12,
            "name": "Banana Latte",
            "description": "Latte dengan rasa pisang yang creamy",
            "price": 26400,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 13,
            "name": "Butter Scot Latte",
            "description": "Latte dengan rasa butter scotch yang manis",
            "price": 26400,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 14,
            "name": "Spanish Latte",
            "description": "Latte ala Spanyol yang creamy dan manis",
            "price": 26400,
            "category": "coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        }
    ],
    "brew": [
        {
            "id": 15,
            "name": "V60",
            "description": "Manual brew dengan metode V60",
            "price": 24200,
            "category": "brew",
            "icon": "fa-filter",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 16,
            "name": "Tubruk (Houseblend)",
            "description": "Kopi tubruk dengan houseblend",
            "price": 18700,
            "category": "brew",
            "icon": "fa-mug-hot",
            "variants": ["Hot"]
        },
        {
            "id": 17,
            "name": "Tubruk (Arabica)",
            "description": "Kopi tubruk dengan biji arabica",
            "price": 18700,
            "category": "brew",
            "icon": "fa-mug-hot",
            "variants": ["Hot"]
        },
        {
            "id": 18,
            "name": "Vietnam Drip",
            "description": "Kopi Vietnam dengan drip tradisional",
            "price": 18700,
            "category": "brew",
            "icon": "fa-tint",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 19,
            "name": "Lemon Coffee Ice",
            "description": "Kopi dingin dengan perasan lemon",
            "price": 24200,
            "category": "brew",
            "icon": "fa-glass-whiskey",
            "variants": ["Ice"]
        },
        {
            "id": 20,
            "name": "Japanese Ice Coffee with Lemon",
            "description": "Kopi Jepang dingin dengan lemon",
            "price": 24200,
            "category": "brew",
            "icon": "fa-glass-whiskey",
            "variants": ["Ice"]
        }
    ],
    "non-coffee": [
        {
            "id": 21,
            "name": "Chocolate Mint",
            "description": "Coklat dengan rasa mint yang menyegarkan",
            "price": 26400,
            "category": "non-coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 22,
            "name": "Chocolate",
            "description": "Coklat panas klasik",
            "price": 24200,
            "category": "non-coffee",
            "icon": "fa-mug-hot",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 23,
            "name": "Red Velvet",
            "description": "Minuman creamy dengan rasa red velvet",
            "price": 24200,
            "category": "non-coffee",
            "icon": "fa-glass-whiskey",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 24,
            "name": "Strawberry Mint Tea",
            "description": "Teh strawberry dengan mint segar",
            "price": 24200,
            "category": "non-coffee",
            "icon": "fa-glass-whiskey",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 25,
            "name": "Ice Mint Tea",
            "description": "Teh mint dingin yang menyegarkan",
            "price": 24200,
            "category": "non-coffee",
            "icon": "fa-glass-whiskey",
            "variants": ["Ice"]
        },
        {
            "id": 26,
            "name": "Peach Mint Tea",
            "description": "Teh peach dengan mint",
            "price": 24200,
            "category": "non-coffee",
            "icon": "fa-glass-whiskey",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 27,
            "name": "Matcha",
            "description": "Matcha premium asli Jepang",
            "price": 24200,
            "category": "non-coffee",
            "icon": "fa-leaf",
            "variants": ["Hot", "Ice"]
        },
        {
            "id": 28,
            "name": "Taro",
            "description": "Minuman dengan rasa taro yang unik",
            "price": 24200,
            "category": "non-coffee",
            "icon": "fa-glass-whiskey",
            "variants": ["Hot", "Ice"]
        }
    ]
};

// ✅✅✅ KONFIGURASI TELEGRAM BOT - UBAH DI SINI ✅✅✅
const TELEGRAM_CONFIG = {
    botToken: '8005976774:AAFMI-ZmcYPTq9QtTDZQ-lkOMjYEomzcU6k', // Token dari BotFather
    chatId: '7699020587' // Chat ID kasir
};

class CoffeeOrderApp {
    constructor() {
        this.cart = [];
        this.currentCategory = 'all';
        this.isLoading = false;
        this.init();
    }

    init() {
        try {
            this.loadCartFromStorage();
            this.renderMenu();
            this.updateOrderUI();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showNotification('Error memuat aplikasi', 'error');
        }
    }

    loadCartFromStorage() {
        const savedCart = localStorage.getItem('camellia-coffee-cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
    }

    saveCartToStorage() {
        localStorage.setItem('camellia-coffee-cart', JSON.stringify(this.cart));
    }

    renderMenu() {
        const menuGrid = document.getElementById('menuGrid');
        const sectionTitle = document.getElementById('sectionTitle');
        
        // Update section title
        sectionTitle.textContent = this.currentCategory === 'all' ? 'All Menu' : 
                                  this.currentCategory === 'coffee' ? 'Coffee Menu' :
                                  this.currentCategory === 'brew' ? 'Brew & Manual' : 'Non Coffee Menu';

        let menuItems = [];
        
        if (this.currentCategory === 'all') {
            menuItems = [
                ...menuData.coffee,
                ...menuData.brew,
                ...menuData['non-coffee']
            ];
        } else {
            menuItems = menuData[this.currentCategory] || [];
        }

        menuGrid.innerHTML = menuItems.map(item => `
            <div class="menu-card">
                <div class="menu-img">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="menu-content">
                    <h3 class="menu-title">${item.name}</h3>
                    <p class="menu-description">${item.description}</p>
                    <div class="menu-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                    <div class="menu-variants">
                        ${item.variants.map(variant => 
                            `<span class="variant-tag ${variant.toLowerCase()}">${variant}</span>`
                        ).join('')}
                    </div>
                    <button class="add-btn" data-id="${item.id}">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateOrderUI() {
        const orderItems = document.getElementById('orderItems');
        const totalAmount = document.getElementById('totalAmount');
        const itemCount = document.getElementById('itemCount');
        const checkoutBtn = document.getElementById('checkoutBtn');

        if (this.cart.length === 0) {
            orderItems.innerHTML = '<div class="order-empty">Your cart is empty</div>';
            totalAmount.textContent = '0';
            itemCount.textContent = '0 item';
            checkoutBtn.disabled = true;
            return;
        }

        orderItems.innerHTML = this.cart.map(item => `
            <div class="order-item">
                <div class="order-item-info">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-price">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</div>
                    <div class="order-quantity">
                        <button class="qty-btn minus" data-id="${item.id}">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                        <button class="remove-btn" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        totalAmount.textContent = total.toLocaleString('id-ID');
        itemCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
        checkoutBtn.disabled = false;
    }

    addToCart(itemId) {
        if (this.isLoading) return;
        
        try {
            // Find item in all categories
            let item = null;
            for (const category in menuData) {
                item = menuData[category].find(i => i.id === itemId);
                if (item) break;
            }

            if (!item) {
                this.showNotification('Menu tidak ditemukan', 'error');
                return;
            }

            const existingItem = this.cart.find(cartItem => cartItem.id === itemId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({
                    ...item,
                    quantity: 1
                });
            }

            this.saveCartToStorage();
            this.updateOrderUI();
            this.showNotification(`${item.name} ditambahkan ke keranjang!`);
            
        } catch (error) {
            console.error('Error adding to cart:', error);
            this.showNotification('Error menambahkan ke keranjang', 'error');
        }
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCartToStorage();
        this.updateOrderUI();
        this.showNotification('Item dihapus dari keranjang', 'info');
    }

    updateQuantity(itemId, change) {
        const item = this.cart.find(cartItem => cartItem.id === itemId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                this.saveCartToStorage();
                this.updateOrderUI();
            }
        }
    }

    setupEventListeners() {
        // Category navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.renderMenu();
            });
        });

        // Event delegation for menu interactions
        document.addEventListener('click', (e) => {
            // Add to cart
            if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) {
                const button = e.target.classList.contains('add-btn') ? e.target : e.target.closest('.add-btn');
                const itemId = parseInt(button.dataset.id);
                this.addToCart(itemId);
            }

            // Quantity buttons
            if (e.target.classList.contains('minus') || e.target.closest('.minus')) {
                const button = e.target.classList.contains('minus') ? e.target : e.target.closest('.minus');
                const itemId = parseInt(button.dataset.id);
                this.updateQuantity(itemId, -1);
            }

            if (e.target.classList.contains('plus') || e.target.closest('.plus')) {
                const button = e.target.classList.contains('plus') ? e.target : e.target.closest('.plus');
                const itemId = parseInt(button.dataset.id);
                this.updateQuantity(itemId, 1);
            }

            // Remove item
            if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
                const button = e.target.classList.contains('remove-btn') ? e.target : e.target.closest('.remove-btn');
                const itemId = parseInt(button.dataset.id);
                this.removeFromCart(itemId);
            }
        });

        // Checkout
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            this.checkout();
        });

        // Modal
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('successModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('successModal')) {
                this.closeModal();
            }
        });
    }

    async checkout() {
        if (this.cart.length === 0) {
            this.showNotification('Keranjang masih kosong!', 'error');
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const orderId = 'ORD' + Date.now().toString().slice(-6);
        const timestamp = new Date().toLocaleString('id-ID');
        
        let message = `🆕 *PESANAN BARU - Camellia Coffee* 🆕\n`;
        message += `🆔 *Order ID:* ${orderId}\n`;
        message += `⏰ *Waktu:* ${timestamp}\n`;
        message += `═══════════════════════\n\n`;
        message += `📋 *DETAIL PESANAN:*\n`;
        
        this.cart.forEach((item, index) => {
            message += `▫️ ${item.name} x${item.quantity} = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
        });
        
        message += `\n═══════════════════════\n`;
        message += `💰 *TOTAL: Rp ${total.toLocaleString('id-ID')}*\n`;
        message += `═══════════════════════\n`;
        message += `\n_📱 Pesanan ini dikirim otomatis dari Camellia Coffee App_`;

        try {
            this.isLoading = true;
            document.getElementById('checkoutBtn').disabled = true;
            document.getElementById('checkoutBtn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

            // Kirim ke Telegram
            const success = await this.sendToTelegram(message);
            
            if (success) {
                // Simpan riwayat
                this.saveOrderHistory(orderId, message);
                
                // Reset cart
                this.cart = [];
                this.saveCartToStorage();
                this.updateOrderUI();
                
                // Tampilkan modal sukses
                this.showModal();
                
                this.showNotification('Pesanan terkirim otomatis ke kasir! ✅');
            } else {
                this.showNotification('Gagal mengirim pesanan ke kasir', 'error');
            }
            
        } catch (error) {
            console.error('Error during checkout:', error);
            this.showNotification('Error mengirim pesanan', 'error');
        } finally {
            this.isLoading = false;
            document.getElementById('checkoutBtn').disabled = false;
            document.getElementById('checkoutBtn').innerHTML = '<i class="fab fa-telegram"></i> Checkout ke Telegram';
        }
    }

    async sendToTelegram(message) {
        try {
            const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CONFIG.chatId,
                    text: message,
                    parse_mode: 'Markdown'
                })
            });

            const data = await response.json();
            return data.ok === true;
            
        } catch (error) {
            console.error('Error sending to Telegram:', error);
            return false;
        }
    }

    showModal() {
        document.getElementById('successModal').classList.add('active');
    }

    closeModal() {
        document.getElementById('successModal').classList.remove('active');
    }

    saveOrderHistory(orderId, message) {
        const orderHistory = {
            id: orderId,
            timestamp: new Date().toISOString(),
            message: message,
            items: [...this.cart]
        };
        
        const history = JSON.parse(localStorage.getItem('camellia-order-history') || '[]');
        history.unshift(orderHistory);
        localStorage.setItem('camellia-order-history', JSON.stringify(history.slice(0, 50)));
    }

    showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type === 'error' ? 'error' : ''}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CoffeeOrderApp();
});
