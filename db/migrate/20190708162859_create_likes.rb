class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer "user_id", null: false
      t.integer "post_id", null: false
      t.index ["post_id"], name: "index_postid_likes"
      t.index ["user_id"], name: "index_userid_likes"
      t.timestamps
    end
  end
end
