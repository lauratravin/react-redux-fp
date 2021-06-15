class CommentsController < ApplicationController

    def index
        comments = Comment.all
        # options = {
        #    include: [:seats]
        #  }
        render json: comments
        # render json: FlightSerializer.new(fligths,options) 
        #NOTE: the serializer in this class that has relationship doesnt work as written in Flatiron course. I use serializer
        #for Passenger. Here it returns an ugly json. I asked help in Ask Question about it and nobody could help me. 
        

     end


    def create
      
        @comment = Comment.new
        @comment.comment= params[:text]
       
       
        @cat = Cat.find_by_id(params[:catId])
        
        @comment.cat = @cat
        @comment.save
        render json: @comment
    end 


    def destroy
        @comment = Comment.find_by_id(params[:id])
        @cat= @comment.cat
    
        @comment.destroy
      
    
        response = [@cat.id, params[:id]]
       
            format.json  { render :json => response }
          

    end

end
