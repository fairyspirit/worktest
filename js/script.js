$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
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
                items:3
            },
            1000:{
                items:3
            }
        }
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