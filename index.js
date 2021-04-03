new Swiper('.how__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    speed: 800,

    loop: true,

});

new Swiper('.companies__pages', {
    slidesPerView: 5,
    autoplay: {
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: false
        
    },

    speed: 2500,
    loop: true,
})