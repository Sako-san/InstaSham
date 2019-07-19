# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  comment_body :text             not null
#  user_id      :integer          not null
#  post_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ApplicationRecord
    validates :comment_body, :user_id, :post_id, presence: true
    
    belongs_to :commentor, 
    foreign_key: :user_id,
    class_name:  :User

    belongs_to :post
    
end
