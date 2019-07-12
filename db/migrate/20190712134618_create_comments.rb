class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text "comment_body", null: false
      t.integer "user_id", null: false
      t.integer "post_id", null: false
      t.index ['user_id'], name: 'index_user_comments'
      t.index ['post_id'], name: 'index_post_comments'
      
      t.timestamps
    end
  end
end
