function showNewsletter() {
    let modal = document.getElementById('newsletter-modal');
    modal.style.display = 'block';
}

function closeNewsletter() {
    let modal = document.getElementById('newsletter-modal');
    modal.style.display = 'none';
}

// Зробіть функції доступними глобально
window.showNewsletter = showNewsletter;
window.closeNewsletter = closeNewsletter;