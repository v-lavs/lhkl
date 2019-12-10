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
    var owl = jQuery("#slider-carousel");
    owl.owlCarousel({
        items: 3,
        pagination: false,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        slideSpeed: 5000,
        stopOnHover: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            970: {
                items: 3,
                loop: false
            }
        }
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