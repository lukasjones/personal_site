class CommentsController < ApplicationController

  def show
    blog = Blog.find(params[:id])
    render json: blog.comments
  end

  def create
    comment = Comment.new(name: params[:comment][:name], content: params[:comment][:content], blog_id: session[:blog_id])

    if comment.save
      render partial: "blogs/comment", locals: {comment: comment}
    else
      p "fail"
      redirect_to blogs_path
    end

  end

end
