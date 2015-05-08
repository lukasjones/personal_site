class BlogsController < ApplicationController
  def index
    @blogs = Blog.all
  end

  def show
    blog = Blog.find(params[:id])

    render json: blog
  end

  def create
    prms = params["/blogs/new"]
    blog = Blog.new(title: prms["title"], content: prms[:content])
    if blog.save
      redirect_to blogs_path
    else
      redirect_to blogs_path
    end
  end
end
