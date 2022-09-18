// slick slider #1
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {    
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({ // tiny-slider #2
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
}),
dotFirst = document.querySelector('.dot_first'),
dotSecond = document.querySelector('.dot_second'),
dotThird = document.querySelector('.dot_third');

document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
});

dotFirst.addEventListener('click', () => {
    slider.goTo('0');
    dotSecond.classList.remove('active');
    dotThird.classList.remove('active');
    dotFirst.classList.add('active');
});
dotSecond.addEventListener('click', () => {
    slider.goTo('1');
    dotFirst.classList.remove('active');
    dotThird.classList.remove('active');
    dotSecond.classList.add('active');
});
dotThird.addEventListener('click', () => {
    slider.goTo('2');
    dotFirst.classList.remove('active');
    dotSecond.classList.remove('active');
    dotThird.classList.add('active');
});