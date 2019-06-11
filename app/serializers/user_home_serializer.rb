class UserHomeSerializer < ActiveModel::Serializer
  attributes :street, :cityState, :zipcode
end
