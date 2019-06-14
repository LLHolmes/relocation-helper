class HomeSerializer < ActiveModel::Serializer
  attributes :id, :street, :cityState, :zipcode
end
