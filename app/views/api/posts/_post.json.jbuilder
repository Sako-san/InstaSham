json.extract! post, :id, :location, :body, :created_at
json.username User.all.find(post.author_id).username
json.photoUrl url_for(post.photo)