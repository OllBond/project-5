import $ from "jquery";
import "slick-carousel";

$(".carousel").slick({
    dots: true,
    speed: 1000,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 2500,
    arrows: false
});

import "slick-slider";


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

