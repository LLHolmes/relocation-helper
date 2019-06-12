class Api::V1::UsersController < ApplicationController

  # def show_user
  #   render json: current_user
  #   # { name: current_user.name, email: current_user.email }
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    else
      render json: { error: "Unable to create this user" }, status: 400
    end
  end
  #
  # def destroy
  #   @user = User.find(params[:id])
  #   if @user.destroy
  #     status: 202
  #   else
  #     render json: { error: "Unable to delete this user" }, status: 400
  #   end
  # end
  #
  private
    def user_params
      params.permit(:name, :email, :password)
    end

end
