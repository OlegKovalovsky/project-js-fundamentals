document.addEventListener('partialsLoaded', () => {
    import('./bestsellers.js').then(module => module.default());
    import('./our-collection.js').then(module => module.default());
    import('./header-collection-menu.js').then(module => module.default());
    import('./footer-write-to-us.js').then(module => module.default());
});

