function showNewsletter() {
    var modal = document.getElementById('footer-modal');
    modal.style.display = 'block';
}

// Закриття модального вікна
function closeNewsletter() {
    var modal = document.getElementById('footer-modal');
    modal.style.display = 'none';
}

document.querySelectorAll('.footer .links a').forEach(menuItem => {
    menuItem.addEventListener('mouseover', function() {
        menuItem.classList.add('active'); // + клас "active" при наведенні
    });

    menuItem.addEventListener('mouseout', function() {
        menuItem.classList.remove('active'); // - клас "active" при відведенні
    });
});

window.showNewsletter = showNewsletter;
window.closeNewsletter = closeNewsletter;
