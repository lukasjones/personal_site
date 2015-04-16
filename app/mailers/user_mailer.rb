class UserMailer < ApplicationMailer

  def contact_email(contact)
    @contact = contact
    mail(to: 'joneslukas21@gmail.com', from: @contact.email, :subject => "New message from lukasjones.com")
  end

end
