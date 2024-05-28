document.addEventListener('partialsLoaded', async () => {
    try {
        const bestsellersModule = await import('./bestsellers.js');
        const ourCollectionModule = await import('./our-collection.js');
        const headerCollectionMenuModule = await import('./header-collection-menu.js');
        const footerWriteToUsModule = await import('./footer-write-to-us.js');
        const basketModule = await import('./basket-for-orders.js');
        const basketButtonsModule = await import('./basket-buttons.js'); 

        const response = await fetch('./collection.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        console.log('Data loaded', data);

        ourCollectionModule.default(data);

        // Модуль корзини після завантаження даних
        basketModule.default();
        initializeCartModal();

        // Кнопки корзини
        basketButtonsModule.default(); 

    } catch (error) {
        console.error('Error loading modules and JSON:', error);
    }
});

// Модальне вікно корзини
function initializeCartModal() {
    const openCartBtn = document.querySelector('.Basket .open-cart');
    const closeCartBtn = document.querySelector('#cart-modal .close');
    const cartModal = document.getElementById('cart-modal');

    openCartBtn.addEventListener('click', function(event) {
        event.preventDefault();
        cartModal.style.display = 'block';
    });

    closeCartBtn.addEventListener('click', function(event) {
        event.preventDefault();
        cartModal.style.display = 'none';
    });

    // закриття за межами вікна
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    import('./basket-buttons.js').then(module => module.default());
}
