class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, :logged_in?

    def create
        @like = Like.new(like_params)
        @like.user_id = current_user.id
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def show
        @like = Like.find_by(id: params[:id])
        if @like
            render :show
        else
            render json: ["Like #{params[:id]} not found"], status: 422
        end
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
        if @like
            @like.destroy
            render json: {post_id: @like.post_id}
        else
            render json: ["No 'Like' to delete"], status: 422
        end
    end

    private

    def like_params
        params.require(:like).permit( :user_id, :post_id)
    end
end
