class HomesController < ApplicationController
  before_action :find_favorite, only: [:show, :update, :destroy]

  def index
    @favorites = current_user.favorites
    render json: @favorites
  end

  def show
    render json: @favorite
  end

  def create
    @favorite = current_user.favorites.build(favorite_params)
    if @favorite.save
      render json: @favorite
    else
      render json: { error: "Unable to favorite this home" }, status: 400
    end
  end

  def destroy
    if @favorite.destroy
      status: 202
    else
      render json: { error: "Unable to unfavorite this home" }, status: 400
    end
  end

  private
    def find_favorite
      @favorite = Favorite.find(params[:id])
    end

    def favorite_params
      params.permit(:street, :cityState, :zipcode)
    end

end