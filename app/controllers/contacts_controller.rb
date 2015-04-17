class ContactsController < ApplicationController

  def create
    contact = Contact.create!(email: params[:contact][:email])
    UserMailer.contact_email(contact).deliver_now
    redirect_to root_path
  end

end
