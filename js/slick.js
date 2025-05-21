$(".team__slider").slick({
  arrows: false,
  speed: 800,
  autoplay: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});