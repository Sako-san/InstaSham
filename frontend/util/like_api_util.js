
export const createLike = (post_id) => {
    debugger
    $.ajax({
        method: 'POST',
        url: `api/likes/`,
        data: {like: {post_id: post_id}}
    })
};

export const deleteLike = (post_id) => (
    $.ajax({
        method: 'delete',
        url: `api/likes/${post_id}`
    })
);