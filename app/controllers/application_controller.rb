class ApplicationController < ActionController::API
  include ::ActionController::Cookies
  # include ActionController::HttpAuthentication::Token::ControllerMethods
  # before_action :authenticate_user

  private

  # def authenticate_user
  #   authenticate_or_request_with_http_token do |token|
  #     begin
  #       data = decode(token)
  #       @current_user = User.find(data[0]["user_id"])
  #     rescue JWT::DecodeError
  #       render json: { authorized: false }, status: 401
  #     end
  #   end
  # end

  def current_user
    # @current_user ||= authenticate_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  # def secret_key
  #   # binding.pry
  #   # 'secret'
  #   # look into Rails application secret to generate secret
  #   ENV['TOKEN_AUTH_SECRET']
  # end
  #
  # def encode(payload)
  #   # payload = { user_id: User.find_by(email: email).id }
  #   JWT.encode(payload, secret_key, 'HS256')
  #   # => jaowenopvhGIBBERISH9q348htnt0gnb9neu0134u0
  # end
  #
  # def decode(token)
  #   JWT.decode(token, secret_key, true, { algorithm: 'HS256' })
  #   # => [{"user_id"=>2}, {"alg"=>"HS256"}]
  # end

end
