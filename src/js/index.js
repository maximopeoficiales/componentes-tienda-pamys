document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        autoplay: true,
        pauseOnHover: false,
        cover: true
    }).mount();
    new Splide('.splide2', {
        // lazyload: true,
        // preloadPages: 3,
        margin: "auto",
        cover: true,
        // height: '8rem',
        padding: '1rem',
        perPage: 2,
        autoWidth: true,
    }).mount();
});