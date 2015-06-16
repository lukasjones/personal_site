class WelcomeController < ApplicationController
  def index
    @contact = Contact.new
    @recent_blog_post = Blog.last
  end

  def projects

  end

  def bio
  end


end
