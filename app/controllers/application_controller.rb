class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authenticate_user

  private

  def authenticate_user
    # if session[:user_id].nil?
    #   redirect_to :login
    # end
    authenticate_or_request_with_http_token do |token|
      begin
        data = decode(token)
        @current_user = User.find(data[0]["user_id"])
      rescue JWT::DecodeError
        render json: { authorized: false }, status: 401
      end
    end
  end

  def current_user
    # @user ||= User.find(session[:user_id])
  end

  def secret_key
    'secret'
    # look into Rails application secret to generate secret
  end

  def encode(payload)
    # payload = { user_id: User.find_by(email: email).id }
    JWT.encode(payload, secret_key, 'HS256')
    # => jaowenopvhGIBBERISH9q348htnt0gnb9neu0134u0
  end

  def decode(token)
    JWT.decode(token, secret_key, true, { algorithm: 'HS256' })
    # => [{"user_id"=>2}, {"alg"=>"HS256"}]
  end

end
