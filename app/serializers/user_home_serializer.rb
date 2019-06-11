class UserHomeSerializer < ActiveModel::Serializer
  attributes :street, :cityState, :zipcode

  belongs_to :user
end
