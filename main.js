var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    568: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const faq = document.querySelectorAll(".faq");

faq.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })

});