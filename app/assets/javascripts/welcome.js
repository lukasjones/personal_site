


$(document).ready(function(){

  $(".scroll").on("click", function(event) {
    event.preventDefault();

    var divToScrollTo = $(this).attr("href");
    console.log($(divToScrollTo).offset().top);
      $('html, body').animate({
          scrollTop: $(divToScrollTo).offset().top
      }, 2000);
  });

})