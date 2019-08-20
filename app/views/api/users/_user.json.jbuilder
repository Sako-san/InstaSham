json.extract! user, :username, :email, :name, :id, :bio
json.photoUrl url_for(user.prof_pic)

if user.followers
    json.followerIds user.followers.pluck(:id)
else
    json.followerIds []
end

if user.following
    json.followingIds user.following.pluck(:id)
else
    json.followingIds []
end

