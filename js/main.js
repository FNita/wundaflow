(function ($) {
    "use strict";


    // Spinner

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs

    new WOW().init();


    // Fact Counter

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: jQuery.easeInQuad,
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    // Navigation active state on scroll

    var nav_sections = $('.section');
    var main_nav = $('.navbar-nav');
    var main_nav_height = $('#navbar').outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('a').removeClass('active');
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });


    // Sticky Navbar

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Close floating message

    $('#close-floating-action').click(function () {
        $('#sticky-action-button').removeClass('d-xxl-block');
    });


    // Toggle features

    $(".toggle-button").on("click", function () {
        var id = $(this).attr("data-id");

        $(".toggle-button").removeClass("active");
        $(this).addClass("active");

        $(".feature-desc").addClass("d-none");
        $(id).removeClass("d-none");
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // RESET animations when element is out of view (replacement for WOW JS)

    $(function () {

        var $window = $(window);

        $window.on('scroll', revealOnScroll);

        function revealOnScroll() {
            var scrolled = $window.scrollTop(),
                win_height_padded = $window.height() * 1.1;

            // Showed...
            $(".revealOnScroll:not(.animated)").each(function () {
                var $this = $(this),
                    offsetTop = $this.offset().top;

                if (scrolled + win_height_padded > offsetTop) {
                    if ($this.data('timeout')) {
                        window.setTimeout(function () {
                            $this.addClass('animated ' + $this.data('animation'));
                        }, parseInt($this.data('timeout'), 10));
                    } else {
                        $this.addClass('animated ' + $this.data('animation'));
                    }
                }
            });
            // Hidden...
            $(".revealOnScroll.animated").each(function (index) {
                var $this = $(this),
                    offsetTop = $this.offset().top,
                    offsetBottom = offsetTop + 2 * ($this.closest('.section').height());
                if (scrolled + win_height_padded < offsetTop || scrolled + win_height_padded > offsetBottom) {

                    $(this).removeClass('animated ' + $this.data('animation'))
                }
            });
        }

        revealOnScroll();
    });



    // Show modal on start
    //$('#subscribeModal').modal('show');

    // Show modal on delay 5 sec
    var showSubscribe = function () {
        setTimeout(function () {
            if ($('#subscribeModal').length > 0) {
                $('#subscribeModal').modal('show');
            }
        }, 5000);
    };
    showSubscribe();


})(jQuery);

