import $ from "jquery";
import "slick-carousel";

$(".carousel").slick({
    dots: true,
    speed: 1000,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 2500,
});

import "slick-slider";
$('.single-item').slick({
     dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
});

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
    autoplaySpeed: 3000,
    arrows: false

});
