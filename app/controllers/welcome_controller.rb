class WelcomeController < ApplicationController

	before_action :set_contact

  def index
  end

  def projects
  end

  def bio
  end

  private

  def set_contact
  	@contact = Contact.new
  end

end
