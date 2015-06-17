class CommentsController < ApplicationController

  def show
    blog = Blog.find(params[:id])
    render json: blog.comments
  end

  def create
    p params
    p "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
    comment = Comment.new(
      name: params[:comment][:name], 
      content: params[:comment][:content], 
      blog_id: params[:comment][:blog_id]
      )

    if comment.save
      render json: comment
    else
      "didn't work"
    end

  end

end
