$(document).ready(function () {

    $('.header__menu-icon').click(function () {
        $('.header__menu-icon').toggleClass('js-icon-active');
        $('.header__menu-icon-item:first-of-type').toggleClass('js-hidden');
        $('.header__menu-icon-item:nth-of-type(2)').toggleClass('js-rotate');
        $('.header__menu-icon-item:nth-of-type(3)').toggleClass('js-rotate-back');
        $('.header__menu-mob').toggleClass('js-mob-menu-active');

    });
    $(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(i){i.preventDefault(),$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(i){i.preventDefault(),$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")}),$(".prices-item").click(function(){$(".prices-item").removeClass("prices-item_active"),$(this).addClass("prices-item_active")});

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

    $(".twitter_btn").hover(function () {
            $(this).children("img").attr("src","img/twitter-icon-hover.png");
            $(this).css({
                "background-color" : "#ffffff",
                "color" : "#21a7d2"
            })
        },
        function () {
            $(this).children("img").attr("src","img/twitter-icon.png");
            $(this).css({
                "background-color" : "#21a7d2",
                "color" : "#ffffff"
            })
        });

    $(".github_btn").hover(function () {
            $(this).children("img").attr("src","img/gh-icon-hover.png");
            $(this).css({
                "background-color" : "#273f4c",
                "color" : "#fff"
            })
        },
        function () {
            $(this).children("img").attr("src","img/gh-icon.png");
            $(this).css({
                "background-color" : "#f3f3f3",
                "color" : "#000"
            })
        });

    $(".facebook_btn").hover(function () {
            $(this).children("img").attr("src","img/facebook-icon-hover.png");
            $(this).css({
                "background-color" : "#ffffff",
                "color" : "#385899"
            })
        },
        function () {
            $(this).children("img").attr("src","img/facebook-icon.png");
            $(this).css({
                "background-color" : "#385899",
                "color" : "#ffffff"
            })
        });
});
