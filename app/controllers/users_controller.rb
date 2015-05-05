class UsersController < ApplicationController

  def p_sign_in
    p "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    p params["/sign_in"]
    p "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"

    redirect_to sign_in_path
  end

end
