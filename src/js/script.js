
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
            $(this).css({
                "background-color" : "#ffffff",
                "color" : "#21a7d2"
            })
        },
        function () {
            $(this).css({
                "background-color" : "#21a7d2",
                "color" : "#ffffff"
            })
        });

    $(".github_btn").hover(function () {
            $(this).css({
                "background-color" : "#273f4c",
                "color" : "#fff"
            })
        },
        function () {
            $(this).css({
                "background-color" : "#f3f3f3",
                "color" : "#000"
            })
        });

    $(".facebook_btn").hover(function () {
            $(this).css({
                "background-color" : "#ffffff",
                "color" : "#385899"
            })
        },
        function () {
            $(this).css({
                "background-color" : "#385899",
                "color" : "#ffffff"
            })
        });
});
