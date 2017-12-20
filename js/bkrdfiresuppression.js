(function($) {
    "use strict"; // Start of use strict

    // code to allow you to update unofficial website warning text in one place
    var warningTitle = "UNOFFICIAL WEBSITE";
    var warningMsg = "\
    All information, postings, pictures, etc. are solely those of independent individuals who do not necessarily represent Beckwourth District, Plumas National Forest, the U.S. Forest Service, the USDA, or any entity of the U.S. Government.\
    <br /><br />\
    ***This site exists solely to assist with recruitment for fire suppression positions on the Beckwourth District only.***";

    // code to allow you to update the date-last-updated in one place
    var copyright = "Copyright &copy; 2017 PNF Beckwourth Ranger District - All rights reserved.";
    var dateLastUpdated = "Last updated December 20, 2017";


    $("aside").html('<div class="container text-center"><div class="call-to-action"><h2>'+warningTitle+'</h2><p class="text-white">'+warningMsg+'</p></div></div>');
    $("footer").html('<div class="container"><div class="row"><div class="col-md-8"><p class="text-white">' + copyright + '</p></div><div class="col-md-4 last-updated"><p class="text-muted">' + dateLastUpdated + '</p></div></div></div>');

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    //$('.navbar-collapse ul li a').click(function() {
    //    $('.navbar-toggle:visible').click();
    //});

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
