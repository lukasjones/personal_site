class ContactsController < ApplicationController

  def create
    contact = Contact.find_or_create_by(email: params[:contact][:email])
    contact.update_attributes(content: params[:contact][:content])
    UserMailer.contact_email(contact).deliver_now
    redirect_to root_path
  end

end
