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


//filter-dropdown

$('.filter__item--drop').on('click', function(e){
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


});