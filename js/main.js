let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.banner-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the first slide
showSlide(currentSlide);

// Danh mục section
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselSets = document.querySelectorAll('.carousel-set');

let activeIndex = 0;

function updateCarousel(direction = 0) {
    carouselSets.forEach((set, index) => {
        set.classList.remove('active-set', 'slide-out-left');
        if (index === activeIndex) {
            set.classList.add('active-set');
        } else if (direction === 1 && index === activeIndex - 1) {
            set.classList.add('slide-out-left');
        }
    });

    prevBtn.style.display = activeIndex === 0 ? 'none' : 'flex';
    nextBtn.style.display = activeIndex === carouselSets.length - 1 ? 'none' : 'flex';
}

prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex--;
        updateCarousel(-1);
    }
});

nextBtn.addEventListener('click', () => {
    if (activeIndex < carouselSets.length - 1) {
        activeIndex++;
        updateCarousel(1);
    }
});

// Initialize the carousel
updateCarousel();

// FLASH SALE SLIDER
const flashSaleList = document.querySelector('.flash-sale-list');
const flashSaleCards = document.querySelectorAll('.flash-sale-card');
const flashSalePrev = document.querySelector('.flash-sale-arrow--left');
const flashSaleNext = document.querySelector('.flash-sale-arrow--right');

let flashSaleIndex = 0;
const cardsPerView = 6; // Number of cards to show at once
const totalCards = flashSaleCards.length;
const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

function updateFlashSaleSlider() {
    const percent = -(flashSaleIndex * 100);
    flashSaleList.style.transform = `translateX(${percent}%)`;

    // Hide/Show arrows
    flashSalePrev.style.display = flashSaleIndex === 0 ? 'none' : 'flex';
    flashSaleNext.style.display = flashSaleIndex === maxIndex ? 'none' : 'flex';
}

flashSaleNext.addEventListener('click', () => {
    if (flashSaleIndex < maxIndex) {
        flashSaleIndex++;
        updateFlashSaleSlider();
    }
});

flashSalePrev.addEventListener('click', () => {
    if (flashSaleIndex > 0) {
        flashSaleIndex--;
        updateFlashSaleSlider();
    }
});

// Initialize the flash sale slider
updateFlashSaleSlider();