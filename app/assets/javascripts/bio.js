$(document).ready(function(){


	$(".skill-bar").each(function(i, blah){
		var width = $(this).find(".inner-bar").attr("data-skill") + "%";
		$(this).find(".inner-bar").css("width", width);
	})


	$(".skill-bar").on("click", function(){
		$(this).find(".description").slideToggle();
	})



})