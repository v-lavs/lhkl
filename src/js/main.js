/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/owl-slider/js/build.js


/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {

    var nav = $('.main-nav');
    /**
     * MOB MENU SCRIPT
     **/

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    $('.sub-menu__toggle').click(function (e) {
        $(this).toggleClass('sub-menu__toggle_active')
    });

    /**
     * OWL-CAROUSEL SCRIPT
     **/
    jQuery("#slider-carousel").owlCarousel({
        items: 3,
        pagination: false,
        dots: false,
        nav: true,
        slideSpeed: 2000,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                stagePadding: 150,
            },
            1190: {
                items: 3,
            }
        }
    });

    jQuery("#slider-carousel1").owlCarousel({
        items: 1,
        autoHeight: false,
        pagination: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        slideSpeed: 5000,
        stopOnHover: true,
        margin: 0,

    });

    /***
     * SMOOTH SCROLL TO ANCHOR
     **/

    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            var anchor = $.attr(this, 'href');

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 150
                }, 2000);
            }
        });
    }

    smoothScrollToAnchor('#requestDemo');
    smoothScrollToAnchor('.header .menu__link, .sub-menu__link');

});