class AuthController < ApplicationController

  def create
    user = User.find_by(email: params[:auth][:email])
    if user && user.authenticate(params[:auth][:password])
      session[:user_id] = user.id
      render json: user
    else
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
