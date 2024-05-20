const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imgContainer = document.querySelector('.bestsellers-img-container');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < 3) {
        currentIndex++;
        imgContainer.style.transform = `translateX(-${currentIndex * 33.333}%)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        imgContainer.style.transform = `translateX(-${currentIndex * 33.333}%)`;
    }
});