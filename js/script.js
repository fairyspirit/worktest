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
});
function initMap() {
	var coordinates = {lat: 38.653572 lng: 119.582971},
	
			map = new google.maps.Map(document.getElementById('map'), {
					center: coordinates,
					zoom: 10,
					disableDefaultUI: boolean,
					scrollwheel: boolean
			});
}