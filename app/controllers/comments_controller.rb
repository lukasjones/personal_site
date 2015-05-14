class CommentsController < ApplicationController

  def index
  end

  def create

    comment = Comment.new(name: params[:comment][:name], content: params[:comment][:content], blog_id: session[:blog_id])

    if comment.save
      redirect_to blogs_path
    else
      p "fail"
      redirect_to blogs_path
    end

  end

end
