export default function addToCart(item) {
    if (!item || !item.id || !item.description || !item.price || !item.size || !item.color || !item.imgSrc) {
        console.error('Invalid item:', item);
        return;
    }

    const cartItems = document.querySelectorAll('.cart-item');
    let newItem = true;

    // Чи є такий товар у корзині
    cartItems.forEach(cartItem => {
        const cartItemId = parseInt(cartItem.getAttribute('data-id')); 
        const cartItemSize = cartItem.getAttribute('data-size');
        const cartItemColor = cartItem.getAttribute('data-color');
        const cartItemPrice = parseFloat(cartItem.getAttribute('data-price')); 

        if (cartItemId === item.id && cartItemSize === item.size && cartItemColor === item.color && cartItemPrice === item.price) {
            const itemCountElement = cartItem.querySelector('.item-count');
            let itemCount = parseInt(itemCountElement.textContent);
            itemCount++;
            itemCountElement.textContent = itemCount + ' шт.';
            const itemPrice = parseFloat(item.price);
            const totalPrice = (itemCount * itemPrice).toFixed(2);
            cartItem.querySelector('.total-price').textContent = totalPrice + ' грн';
            newItem = false;

            updateCartSummary();
        }
    });

    // Коли овару немає, додаємо новий 
    if (newItem) {
        const cartItemsContainer = document.querySelector('.cart-items');
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-info">
            <img src="${item.imgSrc}" alt="${item.description}" class="item-image">
                <div class="item-details">
                    <p class="item-description">${item.description}</p>
                    <p class="item-size"> Розмір: ${item.size}</p>
                    <p class="item-color"> Колір: ${item.color}</p>
                    
                    <div class="item-controls">
                        <button class="decrease-button round-button">-</button>
                        <p class="item-count">1 шт.</p>
                        <button class="increase-button round-button">+</button>
                        <p class="item-price">${item.price}грн</p>
                        =
                        <p class="total-price">${item.price}грн</p>
                        <button class="remove-button">Х</button>
                    </div>
                </div>
            </div>
        `;
        li.classList.add('cart-item');
        li.setAttribute('data-id', item.id);
        li.setAttribute('data-description', item.description);
        li.setAttribute('data-price', item.price);
        li.setAttribute('data-size', item.size);
        li.setAttribute('data-color', item.color);

        li.querySelector('.remove-button').addEventListener('click', () => {
            li.remove(); // Видалити товар 
            updateCartSummary(); // Загальна сума 
        });

        li.querySelector('.decrease-button').addEventListener('click', () => {
            decreaseItemCount(li); // - товар
        });

        li.querySelector('.increase-button').addEventListener('click', () => {
            increaseItemCount(li); // + товар
        });

        cartItemsContainer.appendChild(li);
        updateCartSummary(); // Загальна сума
    }
}

// Зменшення к-сті товару
function decreaseItemCount(itemElement) {
    const itemCountElement = itemElement.querySelector('.item-count');
    let itemCount = parseInt(itemCountElement.textContent);
    if (itemCount > 1) {
        itemCount--;
        itemCountElement.textContent = itemCount + ' шт.';
        updateTotalPrice(itemElement, itemCount); // Загальна сума товару
        updateCartSummary(); // Загальна сума корзини
    } else {
        itemElement.remove(); // Видаляю товар, коли к-сть < 1
        updateCartSummary(); // Загальна сума корзини
    }
}

// Збільшення к-сті товару
function increaseItemCount(itemElement) {
    const itemCountElement = itemElement.querySelector('.item-count');
    let itemCount = parseInt(itemCountElement.textContent);
    itemCount++;
    itemCountElement.textContent = itemCount + ' шт.';
    updateTotalPrice(itemElement, itemCount); // Загальна сума товару
    updateCartSummary(); // Сума корзини
}

// Загальноа сума товару
function updateTotalPrice(itemElement, count) {
    const itemPriceText = itemElement.querySelector('.item-price').textContent;
    const itemPrice = parseFloat(itemPriceText);
    const totalPriceElement = itemElement.querySelector('.total-price');
    const totalPrice = (count * itemPrice).toFixed(2);
    totalPriceElement.textContent = totalPrice + ' грн';
}

// Очищення корзини
export function clearCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    updateCartSummary();
}

// Загальна сума корзини
function updateCartSummary() {
    let totalAmount = 0;
    let totalItems = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const itemCountText = item.querySelector('.item-count').textContent;
        const itemCount = parseInt(itemCountText.split(' ')[0]);
        totalItems += itemCount;
        const totalPriceText = item.querySelector('.total-price').textContent;
        const totalPrice = parseFloat(totalPriceText);
        totalAmount += totalPrice;
    });
    document.getElementById('cart-item-count').textContent = totalItems;
    document.getElementById('total-amount').textContent = `${totalAmount.toFixed(2)} грн`;
}

// Ініціалізація корзини
function initializeCart() {
    const openCartBtn = document.querySelector('.Basket .open-cart');
    const closeCartBtn = document.querySelector
}

