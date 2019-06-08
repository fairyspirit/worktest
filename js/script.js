
$(document).ready(function(){
	$(function() {
	    $('.slider1').owlCarousel({
        loop:true,
        margin:30,
				nav:true,
				navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
		});
		$('.slider2').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
					0:{
							items:1
					},
					600:{
							items:2
					}
			}
	}
	);	
});
$(function() {
	var owl = $('.slider2'),
			owlOptions = {
					loop: false,
					margin: 10,
					responsive: {
							0: {
									items: 1
							},
							780: {
								items: 2
							}
					}
			};

	if ( $(window).width() < 854 ) {
			var owlActive = owl.owlCarousel(owlOptions);
	} else {
			owl.addClass('off');
	}

	$(window).resize(function() {
			if ( $(window).width() < 854 ) {
					if ( $('.slider2').hasClass('off') ) {
							var owlActive = owl.owlCarousel(owlOptions);
							owl.removeClass('off');
					}
			} else {
					if ( !$('.slider2').hasClass('off') ) {
							owl.addClass('off').trigger('destroy.owl.carousel');
							owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
					}
			}
	});
});	
		
		$(function(){
		$('.menu__icon').on('click', function(){

			$(this).closest('.menu').toggleClass('menu_state_open');
		});
		$('.menu__links-item').on('click',function() {
			$(this).closest('.menu').removeClass('menu_state_open');
		});
	});
	});