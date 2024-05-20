export default function ourCollection() {
    const menuItems = document.querySelectorAll('.collection-menu a');
    const productsSections = document.querySelectorAll('.our-collection > .collection > div');

    // Приховати всі секції крім першої (Комплекти жіночої білизни)
    productsSections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    menuItems.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Перешкодження дії за замовчуванням

            // Приховати всі секції
            productsSections.forEach(section => section.style.display = 'none');

            // Показати вибрану секцію
            const sectionClass = item.getAttribute('class').replace('-menu-item', '');
            const selectedSection = document.querySelector(`.${sectionClass}`);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }

            // Приховати всі продукти
            document.querySelectorAll('.our-products > div').forEach(product => product.style.display = 'none');

            // Показати чотири продукти вибраної категорії
            const selectedProducts = selectedSection.querySelectorAll('.our-products > div');
            selectedProducts.forEach((product, index) => {
                if (index < 10) {
                    product.style.display = 'block';
                }
            });
        });
    });
}