import Swiper from "swiper/bundle";

const swiper = new Swiper(".experience__slider", {
  slidesPerView: 3,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      allowTouchMove: true,
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 3,
      // allowTouchMove: false,
      spaceBetween: 60,
    },
    // 1400: {
    //   slidesPerView: 3,
    //   spaceBetween: 80,
    // },
    // 1650: {
    //   spaceBetween: 190,
  },
});
