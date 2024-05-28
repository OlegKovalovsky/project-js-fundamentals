document.querySelectorAll('.collection-menu a').forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionClass = this.getAttribute('class').replace('-menu-item', '');
        const sectionElement = document.querySelector(`.${sectionClass}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Section element not found for class:', sectionClass);
        }
    });
});

document.querySelectorAll('.main-menu a').forEach(menuItem => {
    menuItem.addEventListener('mouseover', function() {
        menuItem.classList.add('active'); // + "active" при наведенні
    });

    menuItem.addEventListener('mouseout', function() {
        menuItem.classList.remove('active'); // - "active" при відведенні
    });
});

window.addEventListener('scroll', function() {
    const basket = document.querySelector('.Basket');
    const scrolled = window.scrollY;

    if (scrolled > 100) { 
        basket.style.top = scrolled + 'px';
    } else {
        basket.style.top = '10px'; 
    }
});

