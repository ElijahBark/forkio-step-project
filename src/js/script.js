
$(document).ready(function(){
    // language=JQuery-CSS
    $('.carousel__avatar').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows: false,
        fade: true,
        asNavFor: '.carousel__slider'
    });
    $('.carousel__slider').slick({
        asNavFor: '.carousel__avatar',
        adaptiveHeight: true
        // adaptiveHeight: true
    });
});




