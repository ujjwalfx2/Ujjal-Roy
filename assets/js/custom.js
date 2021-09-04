(function($) {
    'use strict';
    $(window).load(function() {
    /* PreLoader */
        $('.status').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
        /* Init GMaps */
        $(".gmap").each(function() {
            var a = $(this).attr('data-center');
            $(this).mobileGmap({
                markers: [{
                    position: "center",
                    info: a,
                    showInfo: !0
                }]
            })
        });
    });
    /* Backstretch */
    $.backstretch('assets/images/background/home.png');
    /* Animation Backstretch On Page Load */
    $(window).scrollTop() > $(window).height() ? $(".backstretch").fadeOut("slow") : $(".backstretch").fadeIn("slow");
    /* Animation Navbar On Page Load */
    $(window).scrollTop() > $(window).height() - 80 ? $(".navbar").addClass("scroll") : $(".navbar").removeClass("scroll");
    $(window).on("scroll", function() {
        var a = $(this).scrollTop(),
            b = $(window).height(),
            c = 1.2 - a / (10 * b);
        /* Animation Backstretch On Page Scroll */
        $(".backstretch img").css({
            "transform": "scale(" + c + ")",
            "-webkit-transform": "scale(" + c + ")"
        });
        /* Animation Header On Page Scroll */
        $(".header .container-fluid").css({
            "opacity": 1 - a / 400
        });
        /* Animation Background Section About On Page Scroll */
        $("section.about").css({
            "background-color": "rgba(255, 255, 255, 0" + a / 200 + ")"
        });
        /* Animation Backstretch On Page Scroll */
        $(window).scrollTop() > $(window).height() ? $(".backstretch").fadeOut("slow") : $(".backstretch").fadeIn("slow");
        /* Animation Navbar On Page Scroll */
        $(window).scrollTop() > $(window).height() - 80 ? $(".navbar").addClass("scroll") : $(".navbar").removeClass("scroll");
    });
    /* ScrollTop */
    $('.nav > li > a, a.navbar-brand').on('click', function(event) {
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    /* scrollspy highlighting active navbar menu */
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })
    $(function() {
        /* init Isotope */
        var $container = $('.work-posts');
        $container.imagesLoaded().progress(function() {
            $container.isotope({
                itemSelector: '.item'
            });
        });
        /* filter functions */
        var filterFns = {
            /* show if number is greater than 50 */
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            /* show if name ends with -ium */
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        /* bind filter button click */
        $('#filters').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            /* use filterFn if matches value */
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({
                filter: filterValue
            });
        });
        /* change is-checked class on buttons */
        $('.filters').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });
    /* Init Text Rotator */
    $(".description .sub").typed({
        strings: ["Data Analyst", "Data Analyst"],
        typeSpeed: 1,
        backSpeed: 1,
        backDelay: 1400,
        loop: true
    });
    /* Optional Init Animation Reveal    new WOW().init(); */

})(jQuery);