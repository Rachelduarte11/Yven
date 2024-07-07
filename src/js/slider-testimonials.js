
// Reseñas Usuario Función

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-resenas");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let scrollAmount = 0;
  
    nextBtn.addEventListener("click", function () {
      scrollAmount += slider.offsetWidth / 1;
      if (scrollAmount > slider.scrollWidth - slider.offsetWidth) {
        scrollAmount = slider.scrollWidth - slider.offsetWidth;
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    });
  
    prevBtn.addEventListener("click", function () {
      scrollAmount -= slider.offsetWidth / 1;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    });
  });