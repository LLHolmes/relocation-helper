class UsersController < ApplicationController

  def show_user
    # binding.pry
    render json: { name: current_user.name, email: current_user.email }
  end

end
