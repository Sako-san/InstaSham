class Api::UsersController < ApplicationController
    
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        @user.prof_pic.attach(io: File.open("#{Rails.root}/app/assets/images/blank-profile.png"), filename: "blank-profile.png")
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 418 
        end
    end

    def update
        @user = current_user

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    private 

    def user_params
        params.require(:user).permit(:username, :password, :email, :name, :prof_pic, :bio)
    end
end
