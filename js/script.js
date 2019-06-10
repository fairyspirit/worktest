
$(document).ready(function(){
	$(function() {
  	$('.slider1').owlCarousel({
      loop:true,
      margin:30,
			nav:true,
			navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			pagination:false,
			autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
	      0:{
		      items:1
        },
        700:{
          items:2
        },
        1000:{
          items:3
        }
			}
		});
	});
	$(function() {
		var owl = $('.slider2'),
		owlOptions = {
			loop:true,
			nav:true,
			pagination:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			items:1
		};
 		if ( $(window).width() < 820 ) {
		var owlActive = owl.owlCarousel(owlOptions);
		}
	  else {
		owl.addClass('off');
		}
		$(window).resize(function() {
			if ( $(window).width() < 820 ) {
				if ( $('.slider2').hasClass('off') ) {
					var owlActive = owl.owlCarousel(owlOptions);
					owl.removeClass('off');
				}
			} 
			else {
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
jQuery(document).ready(function()
{
    jQuery(window).scroll(function()
    {
        var scroll_top = jQuery(window).scrollTop();
         
        if(scroll_top >= 600)
        {
            jQuery('[data-btn="toTop"]').addClass('to-top--fixed');
        }
        else
        {
            jQuery('[data-btn="toTop"]').removeClass('to-top--fixed');
        }
    });
     
    jQuery('[data-btn="toTop"]').on('click', function(e)
    {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 100);
    });
});