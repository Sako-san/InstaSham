class AddBodyColumnToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column  :posts, :body, :text
    add_column  :posts, :author_id, :integer, null: false
    add_index :posts, :author_id
  end
end
