const cardscontainer = document.querySelector('.cards-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const cardWidth = cardscontainer.querySelector('.card').offsetWidth; // Width of one card

nextBtn.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex > cardscontainer.children.length - 1) {
        currentIndex = 0;
    }
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = cardscontainer.children.length - 1;
    }
    updateSlide();
});

function updateSlide() {
    const offset = -currentIndex * cardWidth;
    cardscontainer.style.transform = `translateX(${offset}px)`;
}
