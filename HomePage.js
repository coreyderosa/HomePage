// JavaScript template- This template will help the JavaScript code begin as soon as HTML page is done loading.
$(document).ready(function() {   
	

    $("h3").hide();
    $("main").hide();	

	
    $("#purpose").mouseenter(function () {
		
        $("h3").slideDown(300);
		
    });
	
	$("#purpose").click(function () {
	
		$("h3").slideUp(300);	
		
    });		

	$("#dreams").click(function () {
	
		$("main").slideToggle(300);
	
    });



});