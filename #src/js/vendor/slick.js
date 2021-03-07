//= ../../../node_modules/slick-carousel/slick/slick.js
console.log (1);

    
    $(".slider").slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slider__arrow slider__arrow--prev"></button>',
        nextArrow: '<button type="button" class="slick-next slider__arrow slider__arrow--next"></button>',
        dots: true,
        autoplay: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 968,
              settings: {
                arrows: false
              }
            }]
    });
        

    $(".product-slider").slick({
        arrows:true,
        prevArrow: '<button type="button" class="slick-prev product-slider__arrow product-slider__arrow--prev"></button>',
        nextArrow: '<button type="button" class="slick-next product-slider__arrow product-slider__arrow--next"></button>',
        autoplay:false,
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1301,
            settings: {
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 3,
              dots: true,
            }
          },
          {
            breakpoint: 875,
            settings: {
              slidesToShow: 2,
              dots: true,
            }
          },{
            breakpoint: 590,
            settings: {
              slidesToShow: 1,
              dots: true,
            }
          }
        ]
    })
