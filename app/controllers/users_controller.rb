class UsersController < ApplicationController

  def show_user
    # binding.pry
    render json: current_user
  end

end
