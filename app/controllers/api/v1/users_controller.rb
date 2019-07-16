class Api::V1::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    elsif User.find_by(email: @user.email)
      render json: { error: "User already exists" }, status: 400
    else
      render json: { error: "Unable to create this user" }, status: 400
    end
  end

  def destroy
    if logged_in?
      if current_user.destroy
        render json: { notice: "Successfully deleted account"}, status: 202
      else
        render json: { error: "Unable to delete this user" }, status: 400
      end
    else
      render json: { notice: "You must be logged in to delete your account" }, status: 400
    end
  end

  private
    def user_params
      params.permit(:name, :email, :password)
    end

end
