document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        autoplay: true,
        pauseOnHover: false,
        cover: true
    }).mount();
    new Splide('.splide1', {
        // lazyload: true,
        // preloadPages: 3,
        margin: "auto",
        cover: true,
        // height: '8rem',
        padding: '1rem',
        perPage: 1,
        arrows: false,
        autoWidth: true,
    }).mount();
    new Splide('.splide2', {
        margin: "auto",
        cover: true,
        padding: '1rem',
        perPage: 2,
        autoWidth: true,
    }).mount();
    new Splide('.splide3', {
        margin: "auto",
        cover: true,
        padding: '1rem',
        perPage: 2,
        autoWidth: true,
    }).mount();
    new Splide('.splide4', {
        margin: "auto",
        cover: true,
        padding: '1rem',
        perPage: 2,
        arrows: false,
        autoWidth: true,
    }).mount();
});