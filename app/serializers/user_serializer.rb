class UserSerializer < ActiveModel::Serializer
  attributes :name

  has_many :homes, serializer: UserHomeSerializer
  has_many :favorites, serializer: UserFavoriteSerializer
end
