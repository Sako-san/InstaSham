class Post < ApplicationRecord
    # validate :ensure_photo

    belongs_to :author, 
    foreign_key: :author_id,
    class_name: :User

    # has_many :likes
    # has_many :comments

  
    has_one_attached :photo

    def ensure_photo
        unless self.photo.attached?
                errors[:photo] << "must be attached."
        end
    end
end
