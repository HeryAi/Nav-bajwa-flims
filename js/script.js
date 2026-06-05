$(function () {
    $('.posters-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 3000,

    });
});


$(function () {
    $('.posters-slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">❮</button>',
        nextArrow: '<button type="button" class="slick-next">❯</button>'
    });
});