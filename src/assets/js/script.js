(function($) {
    'use strict';
    // Preloader js    
    $(window).on('load', function() {
        $('.preloader').fadeOut(700);
        // Background-images
        $('[data-background]').each(function() {
            $(this).css({
                'background-image': 'url(' + $(this).data('background') + ')'
            });
        });
        //Hero Slider
        $('.hero-slider').slick({
            autoplay: true,
            autoplaySpeed: 7500,
            pauseOnFocus: false,
            pauseOnHover: false,
            infinite: true,
            arrows: true,
            fade: true,
            prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
            nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
            dots: true
        });
        $('.hero-slider').slickAnimation();

        $('.venobox').venobox();

        // Partner slide
        $('.partner').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000, //
            pauseOnFocus: true,
            pauseOnHover: false,
            arrows: false,
        });
        $('.partner').slickAnimation();

        $('.clients').slick({
            infinite: true,
            autoplay: true,
            speed: 5000, //
            autoplaySpeed: 0, //
            cssEase: 'linear', //
            pauseOnFocus: true,
            pauseOnHover: false,
            arrows: false,
        });
        $('.clients').slickAnimation();

    });

    // Menu
    $(window).scroll(function() {
        var height = $('.top-header').innerHeight();
        if ($('header').offset().top > 10) {
            $('.top-header').addClass('hide');
            $('.navigation').addClass('nav-bg');
            $('.navigation').css('margin-top', '-' + height + 'px');
        } else {
            $('.top-header').removeClass('hide');
            $('.navigation').removeClass('nav-bg');
            $('.navigation').css('margin-top', '-' + 0 + 'px');
        }

        // conteur
        function counter() {
            var oTop;
            if ($('.counterUp').length !== 0) {
                oTop = $('.counterUp').offset().top - window.innerHeight;
            }
            if ($(window).scrollTop() > oTop) {
                $('.counterUp').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                });
            }
        }
        counter(); // demarrer

        // scroll to top
        function scrollTopBtn() {
            var scrollToTop = $('#back-to-top'),
                scroll = $(window).scrollTop();
            if (scroll >= 50) {
                scrollToTop.fadeIn();
            } else {
                scrollToTop.fadeOut();
            }
        }
        scrollTopBtn(); //start fonction

    });

    // back to top
    function backToTop() {
        $('#back-to-top').on('click', function() {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }
    backToTop();

    // navbarDropdown
    if ($(window).width() < 992) {
        $('.navigation .dropdown-toggle').on('click', function() {
            $(this).siblings('.dropdown-menu').animate({
                height: 'toggle'
            }, 300);
        });
    }

    // venobox popup
    $(document).ready(function() {
        $('#back-to-top').on('click', function() {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    // filter
    $(document).ready(function() {
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
            filterizd = $('.filtr-container').filterizr({});
        }
        //Active changer
        $('.filter-controls li').on('click', function() {
            $('.filter-controls li').removeClass('active');
            $(this).addClass('active');
        });

    });

    //  Count Up
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function() {
        counter();
    });

})(jQuery);