jQuery(function($){
	$('.testimonial-slider').owlCarousel({
	    items : 1,
	    itemsDesktop : [1000,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,1],
		itemsMobile : [600,1],
		autoPlay : 5000,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true
	});

	var select_dummy = $(".select-dummy");
	var get_select = select_dummy.next().find("select");
	var get_select_text = get_select.find("option").first().text();
	select_dummy.text(get_select_text);
	get_select.change(function(){
		select_dummy.text( $(this).find("option:selected").text() );
		updateColor( $(this).find("option:selected").index() );
	});

	var isSticky = false;
	var body = $("body");
	$(window).scroll(function(){
		addStickyMenu($(this).scrollTop());
	});

	function addStickyMenu(val){
		if (val > 200 ){
			if( isSticky == false ){
		    	body.addClass("sticky");
		    	isSticky = true;
			}
		}
		else{
		    body.removeClass("sticky");
		    isSticky = false;
		}
	}

	var select_logo = $("#select-logo");
	var company = $(".company").find("select");
	var checkbox = $(".checkbox");
	var wpcf7_submit = $(".wpcf7-submit");
	// select_logo.on("click","a",function(){
	// 	var get_color = $(this).attr("data-color");
	// 	var current_index = $(this).data("index");
	// 	company.val( company.find("option").eq(current_index).val() ).trigger("change");

	// 	var custom_style = $("#custom-style");
	// 	if( custom_style.length < 1 ){
	// 		$('head').append('<style id="custom-style"></style');
	// 		custom_style = $("#custom-style");
	// 	}
	// 	var html_code = '.section-1 .contact .contact-form .form .wpcf7-list-item label input:checked+span:before{background-color:'+get_color+'}';
	// 	custom_style.html(html_code);
	// 	wpcf7_submit.css("background",get_color);
	// 	if( !wpcf7_submit.hasClass("active-color") ){
	// 		setTimeout(function() {
	// 		    wpcf7_submit.addClass("active-color");
	// 		}, 100);
	// 	}

	// 	return false;
	// });

	function updateColor(index){
		var get_color = select_logo.find("a[data-index='"+index+"']").attr("data-color");
		if (!get_color) {
			wpcf7_submit.css("background","");
		}
		var custom_style = $("#custom-style");
		if( custom_style.length < 1 ){
			$('head').append('<style id="custom-style"></style');
			custom_style = $("#custom-style");
		}
		var html_code = '.section-1 .contact .contact-form .form .wpcf7-list-item label input:checked+span:before{background-color:'+get_color+'}';
		custom_style.html(html_code);
		wpcf7_submit.css("background",get_color);
		if( !wpcf7_submit.hasClass("active-color") ){
			setTimeout(function() {
			    wpcf7_submit.addClass("active-color");
			}, 100);
		}
	}

	// scroll to
	if($(window).width() < 768) {
		$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	        e.preventDefault();
	        var target = this.hash,
	        $target = $(target);

	        $('html, body').stop().animate( {
	            'scrollTop': $target.offset().top-20
	        }, 900, 'swing', function () {
	            window.location.hash = target;
	        } );
	    } );
    }
    
});