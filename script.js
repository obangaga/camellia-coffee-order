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
        this.isLoading = false;
        this.init();
    }

    init() {
        try {
            this.loadMenu();
            this.setupEventListeners();
            this.updateCartCount();
            this.loadCartFromStorage();
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showNotification('Error memuat aplikasi', 'error');
        }
    }

    loadCartFromStorage() {
        const savedCart = localStorage.getItem('camellia-coffee-cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
            this.updateCartCount();
        }
    }

    saveCartToStorage() {
        localStorage.setItem('camellia-coffee-cart', JSON.stringify(this.cart));
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
        if (this.isLoading) return;
        
        try {
            this.isLoading = true;
            
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

            this.updateCartCount();
            this.saveCartToStorage();
            this.showNotification(`${item.name} ditambahkan ke keranjang!`, 'success');
            
            if (document.getElementById('cartSidebar').classList.contains('active')) {
                this.updateCartDisplay();
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            this.showNotification('Error menambahkan ke keranjang', 'error');
        } finally {
            this.isLoading = false;
        }
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.updateCartCount();
        this.updateCartDisplay();
        this.saveCartToStorage();
        this.showNotification('Item dihapus dari keranjang', 'info');
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
                this.saveCartToStorage();
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
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Keranjang masih kosong</p>
                    <small>Tambahkan menu favorit Anda</small>
                </div>
            `;
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
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span style="margin: 0 10px; font-weight: bold; min-width: 30px; text-align: center;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
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
            this.showNotification('Keranjang masih kosong!', 'error');
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const orderId = 'ORD' + Date.now().toString().slice(-6);
        const timestamp = new Date().toLocaleString('id-ID');
        
        let message = `🆕 *PESANAN BARU - Camellia Coffee* 🆕\n`;
        message += `🆔 Order ID: ${orderId}\n`;
        message += `⏰ Waktu: ${timestamp}\n`;
        message += `═══════════════════════\n\n`;
        message += `📋 *DETAIL PESANAN:*\n`;
        
        this.cart.forEach((item, index) => {
            message += `▫️ ${item.name} x${item.quantity} = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
        });
        
        message += `\n═══════════════════════\n`;
        message += `💰 *TOTAL: Rp ${total.toLocaleString('id-ID')}*\n`;
        message += `═══════════════════════\n`;
        message += `\n_📱 Pesanan ini dikirim otomatis dari Camellia Coffee App_`;

        // ✅✅✅ UBAH NOMOR WHATSAPP KASIR DI SINI ✅✅✅
        const phoneNumber = '6285198257241'; // Ganti dengan nomor WhatsApp kasir
        
        try {
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Buka WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Tampilkan modal sukses
            this.showSuccessModal();
            
            // Reset cart
            this.cart = [];
            this.updateCartCount();
            this.updateCartDisplay();
            this.saveCartToStorage();
            this.toggleCart();
            
            // Simpan riwayat
            this.saveOrderHistory(orderId, message);
            
        } catch (error) {
            console.error('Error during checkout:', error);
            this.showNotification('Error mengirim pesanan', 'error');
        }
    }

    showSuccessModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'flex';
        
        // Auto close setelah 5 detik
        setTimeout(() => {
            closeModal();
        }, 5000);
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
        const notification = document.createElement('div');
        const bgColor = type === 'error' ? '#E74C3C' : type === 'info' ? '#3498DB' : '#27AE60';
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Function untuk close modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CoffeeOrderApp();
});
