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
document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('.flash-sale-list');
    const cards = document.querySelectorAll('.flash-sale-card');
    const nextBtn = document.querySelector('.flash-sale-btn.next-btn');
    const prevBtn = document.querySelector('.flash-sale-btn.prev-btn');
    const visibleCount = 6;
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 8; 
        list.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextBtn.addEventListener('click', function () {
        if (currentIndex < cards.length - visibleCount) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Responsive: cập nhật lại khi resize
    window.addEventListener('resize', updateCarousel);
});