
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
        slidesToShow: 1,
        slidesToScroll: 3,
        asNavFor: '.carousel__avatar',
        centerMode: true,
        focusOnSelect: true,
        // adaptiveHeight: true
    });
});




