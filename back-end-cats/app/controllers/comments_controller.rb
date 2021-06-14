class CommentsController < ApplicationController


    def create

        @comment = Comment.new
        @comment.comment= params[:comment]
       
       
        @cat = Cat.find_by_id(params[:id])
        
        @comment.cat = @cat
        @comment.save
        
    end 



end
