(function($) {
    "use strict";
    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    })

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    /*--/ Navbar Menu Reduce /--*/
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
            $('.navbar-expand-md').addClass('navbar-trans');
            $('.navbar-expand-md').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

})(jQuery);

// import axios from 'axios';

// var sendActivityButton = document.querySelector("#sendActivity");

// sendActivityButton.addEventListener("click", function() {
//         console.log("Hello From sendActivityButton")
    
//         let url = 'http://localhost:3000/api/todos'
//         console.log(`Making POST request to: ${url}`);
    
//         return axios.get(url).then(function(res) {
//             if (res.status !== 200)
//                 throw new Error(`Unexpected response code: ${res.status}`);
//             console.log("Ready to Ret Client")
//             return "123456";
//         });
//     })

// var article = document.querySelectorAll(".event-body");
// console.log(article)