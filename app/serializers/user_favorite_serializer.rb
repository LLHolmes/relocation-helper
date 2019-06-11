class UserFavoriteSerializer < ActiveModel::Serializer
  attributes :street, :cityState, :zipcode
end
