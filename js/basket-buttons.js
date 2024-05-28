import { clearCart } from './basket-for-orders.js';

export default function initializeBasketButtons() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    const cleanUpBtn = document.querySelector('.clean-up-btn');

    checkoutBtn.addEventListener('click', handleCheckout);
    cleanUpBtn.addEventListener('click', handleCleanUp);
}

function handleCheckout() {
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;

    if (!name || !phone || !cartItems.length) {
        alert('Будь ласка, заповніть всі поля та додайте товари до корзини.');
        return;
    }

    const emailContent = `
        Ім'я: ${name}
        Телефон: ${phone}
        Товари: ${cartItems.map(item => `Опис ${item.description} ${item.id}, ${item.quantity} шт. - ${item.price * item.quantity}грн`).join('\n')}
    `;

    // Відправка на email...

    alert('Замовлення відправлено!');

    clearCart();
}

function handleCleanUp() {
    clearCart();
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
}