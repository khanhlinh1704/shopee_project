let currentBannerIndex = 0; // Vị trí hiện tại của banner

function updateBanner() {
    const banners = document.querySelectorAll('.banner-item');
    const totalBanners = banners.length;

    // Ẩn tất cả các banner
    banners.forEach((banner) => {
        banner.classList.remove('active');
    });

    // Hiển thị banner hiện tại
    banners[currentBannerIndex].classList.add('active');
}

function nextBanner() {
    const banners = document.querySelectorAll('.banner-item');
    const totalBanners = banners.length;

    // Chuyển sang banner tiếp theo
    currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
    updateBanner();
}

// Gắn sự kiện cho nút ">"
document.querySelector('.banner-arrow.next').addEventListener('click', nextBanner);

// Khởi tạo banner
updateBanner();

// Danh mục section
let currentIndex = 0; 

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const totalSets = document.querySelectorAll('.carousel-set').length;

    // Calculate the offset based on the current index
    const offset = -currentIndex * 100; // Each set takes 100% width
    carousel.style.transform = `translateX(${offset}%)`;

    // Ẩn/hiện nút điều hướng
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
    nextBtn.style.display = currentIndex === totalSets - 1 ? 'none' : 'flex';
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--; 
        updateCarousel();
    }
}

function nextSlide() {
    const totalSets = document.querySelectorAll('.carousel-set').length;
    if (currentIndex < totalSets - 1) {
        currentIndex++; 
        updateCarousel();
    }
}


updateCarousel();
updateCarousel();
// Flash sale
let flashSaleIndex = 0;

function updateFlashSaleCarousel() {
    const carousel = document.querySelector('.flash-sale-carousel');
    const totalItems = document.querySelectorAll('.flash-sale-card').length;
    const itemsPerView = 6;
    const totalSlides = Math.ceil(totalItems / itemsPerView);

    const offset = -flashSaleIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    // Hiển thị hoặc ẩn nút điều hướng
    document.querySelector('.prev-btn').style.display = flashSaleIndex === 0 ? 'none' : 'flex';
    document.querySelector('.next-btn').style.display = flashSaleIndex === totalSlides - 1 ? 'none' : 'flex';
}

function prevFlashSale() {
    if (flashSaleIndex > 0) {
        flashSaleIndex--;
        updateFlashSaleCarousel();
    }
}

function nextFlashSale() {
    const totalItems = document.querySelectorAll('.flash-sale-card').length;
    const itemsPerView = 6;
    const totalSlides = Math.ceil(totalItems / itemsPerView);

    if (flashSaleIndex < totalSlides - 1) {
        flashSaleIndex++;
        updateFlashSaleCarousel();
    }
}

// Khởi tạo carousel
updateFlashSaleCarousel();

