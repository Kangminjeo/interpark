window.addEventListener("load", function(){
    var swiper = new Swiper(".sw-todaypick", {
        // slidesPerView: 1,
        // spaceBetween: 25,
        navigation: {
            nextEl: ".todaypick .sw-next",
            prevEl: ".todaypick .sw-prev",
        },
        loop:true,
    //   loop:true, 반복되도록 만든 것
    //   loop 기본값은 false
        pagination: {
            el: ".sw-todaypick-pg",
            clickable: true,
            // clickable: true, 해줘야지 동그라미 클릭해서 이동할 수 있음
        },
        breakpoints: {
        // 화면 사이즈가 760일때 작동, 이하일때는 작동하지 않음
            320: {
            slidesPerView: 1,
            spaceBetween: 25,
            },
            760: {
            slidesPerView: 2,
            spaceBetween: 25,
            },
        },
    });
})