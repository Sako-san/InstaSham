class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer 'follower_id', null: false
      t.integer 'following_id', null: false
      t.index ['follower_id', 'following_id'], name: 'index_follower_id_and_following_id', unique: true
      t.index ['follower_id'], name: 'index_follower_id'
      t.index ['following_id'], name: 'index_following_id'
      
      t.timestamps
    end
  end
end
