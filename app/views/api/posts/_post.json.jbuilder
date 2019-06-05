json.extract! post, :id, :location, :body, :photo, :created_at
json.username User.all.find(post.author_id).username
if json.PhotoUrl 
    json.PhotoUrl url_for(post.photo) 
end