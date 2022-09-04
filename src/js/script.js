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
    autoplay: tru,
    autoplaySpeed: 3000,
    arrows:false,
});