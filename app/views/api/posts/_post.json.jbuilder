json.extract! post, :id, :location, :body, :created_at, :author
json.username User.all.find(post.author_id).username
json.photoUrl url_for(post.photo)

if post.likes
    json.like_ids post.likes.pluck(:id)
else
    json.like_ids []
end