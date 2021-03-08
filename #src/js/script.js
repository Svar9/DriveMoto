$(function(){

//= alert.js
//= vendor/slick.js
//= vendor/jquery.rateyo.min.js
//= vendor/jquery.formstyler.min.js
//= vendor/ion.rangeSlider.min.js



// tabs
$('.tab').on('click', function(e){
    e.preventDefault();

    //удаляем класс эктив у всех табов
    $($(this).siblings()).removeClass('active');
    //удаляем класс эктив у всех контентов
    $($(this).parent().siblings().find('div')).removeClass('active');

    $(this).addClass('active');
    //добавляем эктив нужному контенту
    $($(this).attr('href')).addClass('active');
});

//favorite heart
$('.product-item__favorite').on('click', function(e){
    $(this).toggleClass('active');
});

//filter active
$('.catalog__filter--item').on('click', function(e){
    $(this).toggleClass('active');
});

//filter-sort
$('.catalog__filter--btngrid').click(function(){
    $(this).addClass('active');
    $('.catalog__filter--btnline').removeClass('active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--line');
});
$('.catalog__filter--btnline').click(function(){
    $(this).addClass('active');
    $('.catalog__filter--btngrid').removeClass('active');
    $('.product-item__wrapper').addClass('product-item__wrapper--line');
});

//filter-dropdown
$('.filter__item--drop, .filter__extra').on('click', function(e){
    $(this).toggleClass('active');
    $(this).next().slideToggle(200);
});

//filter form-styler

$('.filter-style').styler();

// input range

$(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: false,

});

//star-raiting

$(".rate-yo").rateYo({
    spacing: "7px",
    ratedFill: "#1C62CD",
    normalFill: "#c4c4c4",
  });

//burger +mobile menu

$('.menu__btn').click(function(){
    $('.menu-mobile__list').toggleClass('active');
    $('.menu__btn').toggleClass('active');
})


// footer dropdown
$('.footer-top__drop').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
})

});