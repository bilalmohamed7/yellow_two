/* global $, jaQuery, alert*/
$(document).ready(function () {
    "use strict";

    // Nice Scroll
    
    $('html').niceScroll({
		
		cursorcolor: '#eea715',

		cursorwidth: '10px',

		cursorborder: '1px solid #eea715'
	});


    $('.carousel').carousel({

        interval: 6000

    });

    // Show Color Option Div When Click On The Gear

    $(".gear-check").click(function () {

        $(".color-option").fadeToggle();

    });

    // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li"),
    
    scrollButton = $("#scroll-top");

    colorLi
        .eq(0).css("backgroundColor", "#eea715").end()

        .eq(1).css("backgroundColor", "#428bca").end()

        .eq(2).css("backgroundColor", "#a94442").end()

        .eq(3).css("backgroundColor", "#3c763d");

    colorLi.click(function () {
    
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    
    });

    // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        

        // $(this).scrollTop() >= 700 ? scrollButton.show():scrollButton.hide();

        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 900);
        
    });

    // Fixed Menu

    $('.fixed-menu .fa-gear').on('click', function () {

        $(this).parent('.fixed-menu').toggleClass('is-visible');

        if($(this).parent('.fixed-menu').hasClass('is-visible')) {

            $(this).parent('.fixed-menu').animate({

                left: 0

            }, 1000);

            // $('body').animate({

                // paddingLeft: '220px'

            // }, 1000);


        } else {

            $(this).parent('.fixed-menu').animate({

                left: '-220px'

            }, 1000);

            // $('body').animate({

                // paddingLeft: 0

            // }, 1000);

        }

    });

    // Change Colors

    $('.change-colores li').on('click', function () {

        $('body').attr('data-default-color', $(this).data('color'));

    });

});

// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});

