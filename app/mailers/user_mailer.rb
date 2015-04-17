class UserMailer < ApplicationMailer

  default from: "joneslukas21@gmail.com"

  def contact_email(contact)
    @contact = contact

    mail(to: 'joneslukas21@gmail.com', from: @contact.email, :subject => "New message from lukasjones.com")
  end

end
