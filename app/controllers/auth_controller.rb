class AuthController < ApplicationController
  # skip_before_action :authenticate_user, only: [:create]

  def create
    user = User.find_by(email: params[:auth][:email])
    if user && user.authenticate(params[:auth][:password])
      # Rails version:
      session[:user_id] = user.id
      render json: user

      # token = encode({ user_id: user.id })
      # render json: { token: token, success: true }
    else
      # Rails version:
      # indicate some kind of error
      # keep errors generic for safety (not e-mail or password wrong, just something went wrong)
      render json: { error: "Invalid Login" }, status: 401
    end
  end

  def get_current_user
    if logged_in?
      render json: current_user
    else
      render json: { notice: "No one logged in" }, status: 202
    end
  end

  def destroy
    session.clear
    render json: { notice: "Successfully logged out"}, status: 202
  end

end
