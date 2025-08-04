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
//Flashsale
document.addEventListener("DOMContentLoaded", () => {
    const listWrapper = document.querySelector(".flash-sale-list");
    const cards = document.querySelectorAll(".flash-sale-card");
    const cardWidth = cards[0].offsetWidth + 8; 
    const visibleCards = 6; 
    const totalCards = cards.length;

    let currentIndex = 0;

    function updateCarousel() {
        const offset = cardWidth * currentIndex;
        listWrapper.style.transform = `translateX(-${offset}px)`;
    }

    window.prevFlashSale = () => {
        currentIndex = 0;
        updateCarousel();
    };

    window.nextFlashSale = () => {
        
        if (currentIndex + visibleCards < totalCards) {
            currentIndex += visibleCards;
        } else {
           
            currentIndex = totalCards - visibleCards;
        }
        updateCarousel();
    };
});
//shopee mall
document.addEventListener("DOMContentLoaded", () => {
  const dealContainer = document.querySelector(".mall-hotdeal-deals");
  const rows = dealContainer.querySelectorAll(".mall-hotdeal-row");
  
  let showingFirst = true;

  function showFirstRows() {
    rows.forEach((row, index) => {
      row.style.display = index <= 1 ? "flex" : "none"; // hiển thị 2 dòng đầu
    });
    showingFirst = true;
  }

  function showRemainingRows() {
    rows.forEach((row, index) => {
      row.style.display = index > 1 ? "flex" : "none"; // hiện phần còn lại
    });
    showingFirst = false;
  }

  // Hiển thị dòng đầu khi mới load
  showFirstRows();

  // Gắn vào global để HTML gọi được
  window.showFirstRows = showFirstRows;
  window.showRemainingRows = showRemainingRows;
});


  // OTHER PRODUCTS CAROUSEL
 document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.other-products-container');
  if (!container) return;

  const wrapper = container.querySelector('.carousel-wrapper');
  const cards = wrapper.querySelectorAll('.product-card');
  const leftBtn = container.querySelector('.left-btn');
  const rightBtn = container.querySelector('.right-btn');

  
  function getVisibleCount() {
    if (window.innerWidth < 600) return 2;
    if (window.innerWidth < 900) return 4;
    return 6;
  }

  let currentIndex = 0;

  function getCardWidth() {
   
    const card = cards[0];
    if (!card) return 0;
    const style = window.getComputedStyle(card);
    const marginRight = parseInt(style.marginRight) || 0;
    return card.offsetWidth + marginRight;
  }

  function updateCarousel() {
    const visibleCount = getVisibleCount();
    const cardWidth = getCardWidth();
   
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalCards - visibleCount) currentIndex = totalCards - visibleCount;
    const offset = cardWidth * currentIndex;
    wrapper.style.transform = `translateX(-${offset}px)`;
    
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex >= totalCards - visibleCount;
  }

  rightBtn.addEventListener('click', function () {
    const visibleCount = getVisibleCount();
    const totalCards = cards.length;
    if (currentIndex < totalCards - visibleCount) {
      currentIndex++;
      updateCarousel();
    }
  });

  leftBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Khởi tạo
  updateCarousel();
  window.addEventListener('resize', updateCarousel);
});
