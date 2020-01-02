$(function () {

    $('.slider__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prew"><img src="../images/slide-left.png" alt=""></button>',
        nextArrow: false,
    });
    $('.customers__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        arrows: false,
    });

});