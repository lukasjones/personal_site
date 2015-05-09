$(document).ready(function(){


  initialText = $(".blog-content").text();
  $(".blog-content").html(initialText);

  $(".blog-ul li").on("click", function(event){
    event.preventDefault();
    url = "/blogs/" + $(this).attr("id");
    $.ajax({
      url: url,
      type: "get",
    })
    .done(function(response){
      console.log(response);
      $(".blog-title").text(response.title);
      $(".blog-content").html(response.content);
      $(".blog-date").html(response.created_at);

    })
    .fail(function(){
      console.log("fail")
    })
  })


})