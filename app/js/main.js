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
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
    new WOW().init();

    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
    });
});