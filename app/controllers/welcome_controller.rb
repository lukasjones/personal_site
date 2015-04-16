class WelcomeController < ApplicationController
  def index
  end



  def mail
    p params
    # UserMailer.contact_email()
  end
end
