class UsersController < ApplicationController

  def show_user
    render json: current_user
  end

end
