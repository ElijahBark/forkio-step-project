
$(document).ready(function(){
    // language=JQuery-CSS
    $('.carousel__avatar').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.carousel__slider'
    });
    $('.carousel__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.carousel__avatar',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});




