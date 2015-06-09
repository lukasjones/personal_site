class BlogsController < ApplicationController
  def index
  end

  def show
    blog = Blog.find(params[:id])
    comments = blog.comments
    session[:blog_id] = blog.id

    render json: { title: blog.title, content: blog.content, created_at: blog.created_at.to_date, comments: comments }
  end

  def all
    json_blogs = Blog.all.each{|blog| blog.created_at = blog.created_at.strftime("%B, %d, %Y")}
    render json: json_blogs
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
