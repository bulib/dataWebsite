$(function() {

	console.log("Hello Developer!");

	// shrink the navbar 
	$(window).scroll(function() {
  		if ($(document).scrollTop() > 50) {
    		$('nav').addClass('shrink');
  		} else {
    		$('nav').removeClass('shrink');
  		}
	});


})