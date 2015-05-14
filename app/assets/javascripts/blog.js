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

      $(".comment_list").html("");

      for (var i = 0; i < response.comments.length; i++) {
        $(".comment_list").append("<li><h3>" + response.comments[i].name + "</h3><p>" + response.comments[i].content + "</p></li>")
        console.log(response.comments[i]);
      }

    })
    .fail(function(){
      console.log("you fail")
    })
  })


})