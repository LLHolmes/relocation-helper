class AuthController < ApplicationController
  skip_before_action :authenticate_user, only: [:login]

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      # Rails version:
      # session[:user_id] = user.id
      token = encode({ user_id: user.id })
      render json: { token: token, success: true }
    else
      # Rails version:
      # indicate some kind of error
      # keep errors generic for safety (not e-mail or password wrong, just something went wrong)
      render json: { success: false }, status: 401
    end
  end

end
