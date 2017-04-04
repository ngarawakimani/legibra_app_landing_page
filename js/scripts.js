/**
 * Created by wa kimani on 3/31/2017.
 */


$(document).ready(function () {
    $('.slick-carousel').slick({
        infinite:true,
        autoplay:true,
        dots:true
    });
    $('.screen-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});