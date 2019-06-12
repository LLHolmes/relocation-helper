class FavoriteSerializer < ActiveModel::Serializer
  attributes :street, :cityState, :zipcode
end
