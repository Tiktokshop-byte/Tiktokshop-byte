var swiper01 = new Swiper("#slide_upper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 7000,
  delay: 1,
  loopAdditionalSlides: 1,
  watchOverflow: false,
  initialSlide: 4,
  autoplay: {
    delay: 1,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
    width: "400px",
  },
});
var swiper02 = new Swiper("#slide_lower", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 7000,
  delay: 1,
  loopAdditionalSlides: 1,
  initialSlide: 4,
  autoplay: {
    delay: 1,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});
