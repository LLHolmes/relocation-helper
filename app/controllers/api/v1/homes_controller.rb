class Api::V1::HomesController < ApplicationController
  before_action :find_home, only: [:destroy]

  def create
    @home = current_user.homes.build(home_params)
    if @home.save
      render json: @home, status: 201
    else
      render json: { error: "Unable to save this home" }, status: 400
    end
  end

  def destroy
    if @home.destroy
      render json: { notice: "Deleted this home" }, status: 202
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
