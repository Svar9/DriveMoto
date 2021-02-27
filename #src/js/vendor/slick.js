//= ../../../node_modules/slick-carousel/slick/slick.js
console.log (1);

    
    $(".slider").slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slider__arrow slider__arrow--prev"></button>',
        nextArrow: '<button type="button" class="slick-next slider__arrow slider__arrow--next"></button>',
        dots: true,
        autoplay: false,
        infinite: true
    });
        

    $(".product-slider").slick({
        arrows:true,
        prevArrow: '<button type="button" class="slick-prev product-slider__arrow product-slider__arrow--prev"></button>',
        nextArrow: '<button type="button" class="slick-next product-slider__arrow product-slider__arrow--next"></button>',
        autoplay:false,
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 1
    })
