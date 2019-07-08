json.partial! "api/posts/post", post: @post

json.likes do
    @post.likes.each do |like|
        json.set! like.id do
            json.partial! "api/likes/like", like: like
        end
    end