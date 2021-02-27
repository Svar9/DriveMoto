$(function(){

//= alert.js
//= vendor/slick.js


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

});