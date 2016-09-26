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

	//offset side nav on pages 

	var offsetheight = 75; 
	//adjusts for the navbar height while scrolling
	$('body').scrollspy({
   		offset:  offsetheight 
	});

	$('#toc').affix({
		offset: {
			top: 0,
    		bottom: function () {
      			return (this.bottom = $('.footer').outerHeight(true))
    		}
    	}	
	})

	//adjusts for click on sidebar
	$("#toc .nav li a").click(function(event) {
	    event.preventDefault();
	    console.log("click");
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -offsetheight);
	});
})
