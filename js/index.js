document.addEventListener('partialsLoaded', async () => {
    try {
        const bestsellersModule = await import('./bestsellers.js');
        const ourCollectionModule = await import('./our-collection.js');
        const headerCollectionMenuModule = await import('./header-collection-menu.js');
        const footerWriteToUsModule = await import('./footer-write-to-us.js');

        // JSON дані
        const response = await fetch('/collection.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        // Виклик функцій модулів та передача даних
        ourCollectionModule.default(data);
    } catch (error) {
        console.error('Error loading modules and JSON:', error);
    }
});

