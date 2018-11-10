$(document).ready(function () {

    $('.header__menu-icon').click(function () {
        $('.header__menu-icon').toggleClass('js-icon-active');
        $('.header__menu-icon-item:first-of-type').toggleClass('js-hidden');
        $('.header__menu-icon-item:nth-of-type(2)').toggleClass('js-rotate');
        $('.header__menu-icon-item:nth-of-type(3)').toggleClass('js-rotate-back');
        $('.header__menu-mob').toggleClass('js-mob-menu-active');

    })
});