$(document).ready(function() {
	
	/* scroll */
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

	! function(i) {
		var o, n;
		i(".accordion_item").on("click", function() {
			o = i(this), n = o.find(".info"),
			o.hasClass("active_block") ? (o.removeClass("active_block"),
				n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
				o.siblings(".active_block").removeClass("active_block").children(
					".info").stop(!0, !0).slideUp())
			})
	}(jQuery);

	/*to form*/
    $('.catalog .item .button-m').on('click', function(){
        var nameProd = $(this).siblings('span').text();
        $('input[name="comment"]').val(nameProd);
    });

});


$(window).on("load", function(){

	$(".gallery").owlCarousel({
		center: true,
		autoWidth: true,
		margin: 20,
		loop: true,
		autoHeight: true,
		smartSpeed: 300,
		mouseDrag: true,
		pullDrag: true,
		dots: true,
		nav: true,
		navText: '',
		autoplay: true,
		autoplayTimeout: 2000
	});

	$('.reviews').owlCarousel({
		loop:true,
		margin:10,
		autoHeight: true,
		navText: "",
		dots: false,
		responsive:{
			0:{
				items:1,
				nav:true,
			},
			659:{
				items:2,
				nav:true,
			},
			979:{
				items:3,
				nav:false,
				loop:false
			}
		}
	});

});


