class Api::V1::HomesController < ApplicationController
  before_action :find_home, only: [:show, :update, :destroy]

  def index
    @homes = current_user.homes
    render json: @homes, status: 200
  end

  def show
    render json: @home, status: 200
  end

  def create
    @home = current_user.homes.build(home_params)
    if @home.save
      render json: @home, status: 201
    else
      render json: { error: "Unable to save this home" }, status: 400
    end
  end

  def update
    if @home.update(home_params)
      render json: @home, status: 202
    else
      render json: { error: "Unable to edit this home" }, status: 400
    end
  end

  def destroy
    temp_id = @home.id
    if @home.destroy
      render json: { id: temp_id }, status: 202
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
