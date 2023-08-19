(function ($) {
  "use strict";
  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut("slow");
  });

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  var lastScroll = 0;
  var isScrolled = false;

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header-area");
    if (header) {
      var currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      var scrollDirection = currentScroll < lastScroll;
      var shouldToggle = isScrolled && scrollDirection;

      if (currentScroll === 0) {
        header.classList.remove("stick");
      } else {
        isScrolled = true;
        header.classList.toggle("stick", shouldToggle);
      }

      lastScroll = currentScroll;
    }
  });

  jQuery(document).ready(function () {
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
    /*-------------------------------------------
      hero-slider active
    --------------------------------------------- */
    $(".hero-slider").slick({
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      dots: true,
      arrows: false,
      prevArrow: '<i class="fa-solid fa-angle-left slick-prev"></i>',
      nextArrow: '<i class="fa-solid fa-angle-right slick-next"></i>',
    });
    /*-------------------------------------------
      testimonial-slide active
    --------------------------------------------- */
    $(".testimonial-slide").slick({
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      prevArrow: '<i class="fa-solid fa-angle-left slick-prev"></i>',
      nextArrow: '<i class="fa-solid fa-angle-right slick-next"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    /*-------------------------------------------
      new-srrivals-slider active
    --------------------------------------------- */
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.new-arrivals-slider.slick-slider').slick('setPosition');
    });
    $(".new-arrivals-slider").slick({
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      prevArrow: '<i class="fa-solid fa-angle-left slick-prev"></i>',
      nextArrow: '<i class="fa-solid fa-angle-right slick-next"></i>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.new-arrivals-slider.slick-slider').slick('setPosition');
    });
  });
})(jQuery);
