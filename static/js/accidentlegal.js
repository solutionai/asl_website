// console.log('accidentlegal')

var $ = jQuery;


// SCROLL DETECTION
// FIXED HEADER
var headerclass = "body, header";
$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    // console.log(scroll)
    if (scroll > 5) {
        $(headerclass).addClass("header-scroll");
    }
    if (scroll < 4) {
        $(headerclass).removeClass("header-scroll");
    }

    if (scroll > 500) {
        $("#back-to-top").addClass("show")
    }
    if (scroll < 400) {
        $("#back-to-top").removeClass("show")
    }
});





$(function() {
    $("img").each(function() {
        var img_src = $(this).attr('src');
        if (typeof img_src !== typeof undefined && img_src !== false) {
            var img_alt = $(this).attr('alt');
            var str = img_src
            var pieces = str.split('/');
            var imgName = pieces[pieces.length - 1];
            var imgnameArray = imgName.split('.');
            var alt = imgnameArray[0];
            if (img_alt == '' || typeof img_alt === typeof undefined || img_alt === false) {
                $(this).attr('alt', alt);
            }
        }
    });


    document.addEventListener('wpcf7mailsent', function(event) {
        if (event.detail.contactFormId == '62') {
            location = 'https://survey.zohopublic.com/zs/bUCNWu';
        }
        if (event.detail.contactFormId == '249375') {
            location = 'https://survey.zohopublic.com/zs/bUCNWu';
        }
    }, false);


    $(".gm-menu-btn").click(function() {
        $(headerclass).toggleClass("mobile-menu");
    })
    $(".gm-main-menu-wrapper").click(function(e) {
        if (e.target != this) return;
        $(headerclass).removeClass("mobile-menu");
    })

    // CHANGE YEAR
    var xyear = new Date().getFullYear();
    $(".cyear").html(xyear);
    // var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"57125a42b28d15ce583c0c0594e26fe7223cb253ae3bfa1575ad6bb8c906f31b406e3a265fefdfd90db30962926b69ac", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");


    // SMOOTH SCROLL
    // SMOOTH SCROLL
    // SMOOTH SCROLL
    $('a[href*="#"]').on('click', function(e) {
        // e.preventDefault();
        var xattr = $(this).attr('href');
        xattr = xattr.replace('/', '')
        if ($(xattr).length) {
            e.preventDefault();
        }
        // console.log(xattr)
        var xpos = $(xattr).offset().top - 150;
        // console.log(xpos)
        $('body').animate({
            scrollTop: xpos,
        }, 500);
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: xpos,
            }, 100);
        }, 500)
    })


})