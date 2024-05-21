export default function ourCollection(productsData) {
    const menuItems = document.querySelectorAll('.collection-menu a');
    const productsContainer = document.querySelector('.products-container');

    function createProductCards(products, sectionClass) {
        productsContainer.innerHTML = ''; // Очищення контейнера

        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card', sectionClass, `product-${index + 1}`);
            productCard.innerHTML = `
                <img src="${product.imgSrc}" alt="Фото ${index + 1}">
                <h3 class="name-product">${product.description}</h3>
                <select class="size-product">
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
                <select class="color-product">
                    ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                </select>
                <p class="price-product">${product.price}</p>
                <div class="button-product">
                    <button type="button" class="buy-button">Купити зараз</button>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });

        // Створення секції
        const sectionElement = document.createElement('div');
        sectionElement.classList.add(sectionClass);
        productsContainer.appendChild(sectionElement);
    }

    // Створення початкового класу секції
const initialSectionClass = menuItems[0].getAttribute('class').replace('-menu-item', '');
if (productsData[initialSectionClass]) {
    createProductCards(productsData[initialSectionClass], initialSectionClass);
} else {
    console.error('Initial section class does not exist in data:', initialSectionClass);
}

    // Додаємо обробники подій для кожного елементу меню
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionClass = item.getAttribute('class').replace('-menu-item', '');
            if (productsData[sectionClass]) {
                createProductCards(productsData[sectionClass], sectionClass);
                // Після створення секції прокручуємо до неї
                const sectionElement = document.querySelector(`.${sectionClass}`);
                if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Section element not found for class:', sectionClass);
                }
            } else {
                console.error('Section class does not exist in data:', sectionClass);
            }
        });
    });
}

fetch('collection.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        ourCollection(data);
    })
    .catch(error => console.error('Error loading JSON:', error));

