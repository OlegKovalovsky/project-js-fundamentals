document.addEventListener('partialsLoaded', () => {
    import('./bestsellers.js')
    import('./our-collection.js').then(module => module.default());
    import('./header-collection-menu.js')
    import('./footer-write-to-us.js')
});

