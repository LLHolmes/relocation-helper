class UserSerializer < ActiveModel::Serializer
  attributes :name

  has_many :homes
  has_many :favorites
end
