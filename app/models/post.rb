class Post < ApplicationRecord
    
    belongs_to :user
    # has_many :likes
    # has_many :comments

    # Active Storage Association
    has_one_attached :photo
end
