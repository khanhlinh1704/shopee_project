//Banner
let currentBanner = 0;
const bannerItems = document.querySelectorAll('.banner-item');

function showBanner(index) {
    bannerItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function prevBanner() {
    currentBanner = (currentBanner - 1 + bannerItems.length) % bannerItems.length;
    showBanner(currentBanner);
}

function nextBanner() {
    currentBanner = (currentBanner + 1) % bannerItems.length;
    showBanner(currentBanner);
}

// Khởi tạo banner đầu tiên
showBanner(currentBanner);
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

let currentBannerIndex = 0; 

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

// Flash Sale Carousel dạng trượt
let flashsaleIndex = 0;
const flashsaleList = document.querySelector('.flashsale-list');
const flashsaleItems = document.querySelectorAll('.flashsale-item');
const flashsalePerPage = 6;
const flashsaleTotal = flashsaleItems.length;
const maxFlashsaleIndex = Math.ceil(flashsaleTotal / flashsalePerPage) - 1;

function updateFlashsale() {
    const offset = -flashsaleIndex * 100;
    flashsaleList.style.transform = `translateX(${offset}%)`;

    // Ẩn/hiện nút
    const prevBtn = document.querySelector('.flashsale-arrow.prev');
    const nextBtn = document.querySelector('.flashsale-arrow.next');
    prevBtn.style.display = flashsaleIndex === 0 ? 'none' : 'flex';
    nextBtn.style.display = flashsaleIndex === maxFlashsaleIndex ? 'none' : 'flex';
}

function prevFlashsale() {
    if (flashsaleIndex > 0) {
        flashsaleIndex--;
        updateFlashsale();
    }
}

function nextFlashsale() {
    if (flashsaleIndex < maxFlashsaleIndex) {
        flashsaleIndex++;
        updateFlashsale();
    }
}

const flashsalePrevBtn = document.querySelector('.flashsale-arrow.prev');
const flashsaleNextBtn = document.querySelector('.flashsale-arrow.next');
if (flashsalePrevBtn) flashsalePrevBtn.addEventListener('click', prevFlashsale);
if (flashsaleNextBtn) flashsaleNextBtn.addEventListener('click', nextFlashsale);

// Khởi tạo
updateFlashsale();