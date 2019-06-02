class Post < ApplicationRecord
    


    belongs_to :author, 
    foreign_key: :author_id,
    class_name: :User

    # has_many :likes
    # has_many :comments

    # Active Storage Association
    # has_one_attached :photo
end
