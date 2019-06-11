class HomesController < ApplicationController
  before_action :find_home, only: [:show, :update, :destroy]

  def index
    @homes = current_user.homes
    render json: @homes
  end

  def show
    render json: @home
  end

  def create
    @home = current_user.homes.build(home_params)
    if @home.save
      render json: @home
    else
      render json: { error: "Unable to save this home" }, status: 400
    end
  end

  def update
    if @home.update(home_params)
      render json: @home
    else
      render json: { error: "Unable to edit this home" }, status: 400
    end
  end

  def destroy
    if @home.destroy
      status: 202
    else
      render json: { error: "Unable to delete this home" }, status: 400
    end
  end

  private
    def find_home
      @home = Home.find(params[:id])
    end

    def home_params
      params.permit(:street, :cityState, :zipcode)
    end

end
