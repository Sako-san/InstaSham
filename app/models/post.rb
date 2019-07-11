# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  location   :string
#  body       :text
#  author_id  :integer          not null
#

class Post < ApplicationRecord
    validate :ensure_photo

    belongs_to :author, 
    foreign_key: :author_id,
    class_name: :User

    has_many :likes
    # has_many :comments

  
    has_one_attached :photo

    def ensure_photo
        unless self.photo.attached?
                errors[:photo] << "must be attached."
        end
    end
end
