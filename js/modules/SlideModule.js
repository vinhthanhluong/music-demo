export default function SlideModule() {
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function () {
        slide;
    });

    document.querySelectorAll('.swiper-custom').forEach(el => {
        let slider = el.querySelector('.swiper');
        let pagination = el.querySelector('.swiper-pagination');
        let prevBtn = el.querySelector('.swiper-button-prev');
        let nextBtn = el.querySelector('.swiper-button-next');

        //not slide
        let touchMove = el.querySelector('.notslide');
        if (touchMove) {
            var notSlide = false;
        } else {
            var notSlide = true;
        }

        //pagi dynamic
        let pagiDynamic = el.querySelector('.dynamic');
        if (pagiDynamic) {
            var dynamic = true;
        } else {
            var dynamic = false;
        }

        //loop
        let slideLoop = el.querySelector('.not-loop');
        if (slideLoop) {
            var loops = false;
        } else {
            var loops = true;
        }

        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                loop: loops,
                allowTouchMove: notSlide,

                autoplay: {
                    delay: 4000,
                },

                pagination: {
                    el: pagination,
                    clickable: true,
                    dynamicBullets: dynamic,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
            });
        } catch (err) {
            console.log(err);
        }
    })


    if (document.querySelector('.swiper-demo')) {
        const swiper = document.querySelector('.swiper-demo');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                slidesPerView: 2,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}