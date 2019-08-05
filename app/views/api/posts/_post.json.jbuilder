json.extract! post, :id, :location, :body, :created_at
json.authorId post.author_id
json.photoUrl url_for(post.photo)

if post.likes
    json.like_ids post.likes.pluck(:user_id)
end