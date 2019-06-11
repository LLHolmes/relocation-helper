class User < ApplicationRecord
  has_secure_password

  has_many :homes, dependent: :destroy
  has_many :favorites, dependent: :destroy

  # validates_presence_of :email, :name, :password
  # validates_uniqueness_of :email
end
