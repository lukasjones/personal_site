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
        $(".comment_list").append("<li><h3>" + response.comments[i].name + "</h3><h5>" + response.comments[i].created_at + "</h5><p>" + response.comments[i].content + "</p></li>")
      }

    })
    .fail(function(){
      console.log("you fail")
    })
  });

  $("#new_comment").on("submit", function(event){
    event.preventDefault();

    var data = $(this).serialize();

    $("input[type='text']").val("");
    $("textarea").val("");

    $.ajax({
      url: "/comments",
      type: "POST",
      data: data
    })
    .done(function(response){
      console.log(response);
      $(".comment_list").append(response)
    })
    .fail(function(){
      console.log("you failed");
    })
  })


})