json.extract! post, :id, :location, :body, :created_at, :author
json.username User.all.find(post.author_id).username
json.like_counter post.likes.length
json.like_by_user post.liked.include?(current_user)
json.photoUrl url_for(post.photo)