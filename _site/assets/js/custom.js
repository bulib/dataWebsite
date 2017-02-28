$(function() {

	console.log("Hello Developer!");

    // shrink the navbar 
	$(window).scroll(function() {
  		if ($(document).scrollTop() > 50) {
    		$('nav.navbar').addClass('shrink');
  		} else {
    		$('nav.navbar').removeClass('shrink');
  		}
	});

    //offset side nav on pages
    
	var offsetheight =90; 
	//adjusts for the navbar height while scrolling
	$('body').scrollspy({
   		offset:  offsetheight 
	});

	$('nav#toc').affix({
	    offset: {
		top: 250,
		bottom: function () {
		    return (this.bottom = $('.footer').outerHeight(true))
		}
	    }
	})

    //adjusts for click on sidebar
	$("#toc .nav li a").click(function(event) {
	    event.preventDefault();
//	    console.log("click");
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -offsetheight);
	});
    
    //form submit process
    $("#contact-form").submit(function(){
	event.preventDefault();	
	
	var post_data = $(this).serializeArray();
	var post_url = $(this).attr("action"); 
	console.log("form submitted")
	console.log(post_url); 
	$.ajax({
	    url: post_url,
	    type: "POST",
	    data: post_data,
	    success: function(data, status, xhr){
		$("#name, #email, #question").css("background-color", "unset"); 

//		console.log("success");
		html = $.parseHTML(data);
		var return_errors = $(html).find(".errors");
//		console.log(return_errors.length); 
		if (return_errors.length > 0) {
//		    console.log("errors returned");
//		    console.log(return_errors);
		    return_errors_text = return_errors.prop('outerHTML');
//		    console.log(return_errors_text); 
		    var name_error = return_errors_text.search("Name");
		    if (name_error > 0 ){
			$("#name").css("background-color", "#ffd4d4"); 
//			console.log(name_error);
		    }
		    var email_error = return_errors_text.search("email");
		    if (email_error > 0) {
//			console.log(email_error);
			$("#email").css("background-color", "#ffd4d4");
		    }
		    var question_error = return_errors_text.search("Question");
		    if(question_error > 0 ){
//			console.log(question_error);
			$("#question").css("background-color", "#ffd4d4");
		    }
		} else {
//		    console.log("close modal");
		    $("#contact-form").trigger("reset");
		    $("#submit").prop('disabled', true);
		    grecaptcha.reset();
		    $("#myModal").modal('toggle'); 
		}
	    },
	    error: function(xhr, status, return_error){
//		console.log("error");
//		console.log(status); 
	    }
	    
	}); 
    }); 

});

$("#page-url-here").append(window.location.href ); 


function enableSubmit(){
//    console.log("button enabled"); 
    $("#submit").prop('disabled', false); 
}
