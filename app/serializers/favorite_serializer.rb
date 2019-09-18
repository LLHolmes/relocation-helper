class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :street, :cityState, :zipcode

  belongs_to :user
end
