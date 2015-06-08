$(document).ready(function(){

    $("body").on("click","#menuLink",function(e){
      e.preventDefault();

        $("body").find("#layout").first().toggleClass("active");
        $("body").find("#menu").toggleClass("active");
        $("body").find("#menuLink").toggleClass("active");
      
    });
});

