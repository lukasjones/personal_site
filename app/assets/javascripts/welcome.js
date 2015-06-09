 


$(document).ready(function(){

  $(".scroll").on("click", function(event) {
    event.preventDefault();

    var divToScrollTo = $(this).attr("href");
    console.log($(divToScrollTo).offset().top);
      $('html, body').animate({
          scrollTop: $(divToScrollTo).offset().top
      }, 1000);
  });

  $(".contact-button").on("click", function(){
    $(this).hide();
    $(".contact-form").slideDown();
  });

  $(".contact-form").on("submit", function(event){
    event.preventDefault();
    messageData = $(this).serialize();
    $.ajax({
      url: "/contacts",
      type: "post",
      data: messageData,
      dataType: "json" 
    })
    .success(function(response){
      $(".contact-form").find("input[type='text']").val("");
      $(".contact-form").find("textarea").val("");
      $(".contact-form").slideUp();
      $(".contact-button").slideDown();
      $(".contact-button").css("color", "green");
      $(".contact-button").text("Message sent!");
      setTimeout(function(){ 
        $(".contact-button").css("color", "#325BB3");

        $('.contact-button').fadeOut(1000, function() {
                $(this).text('Say Hi!').fadeIn(1000);
            });
      }, 3000);

    })
    .fail(function(){
      $(".contact-form").find("input[type='text']").val("");
      $(".contact-form").find("textarea").val("");
      $(".contact-form").slideUp();
      $(".contact-button").slideDown();
      

      console.log("failed to make contact");
    })
  })



})