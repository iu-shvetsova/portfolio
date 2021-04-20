import Swiper from "swiper/bundle";

const swiper = new Swiper(".experience__slider", {
  slidesPerView: 3,
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
