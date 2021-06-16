class CatsController < ApplicationController


    def index
        if (params[:order] == "true")
            cats = Cat.order(likes: :desc)
        else 
            cats = Cat.all
            # options = {
            #    include: [:seats]
            #  }
        end
        render json: cats, only: [:id, :name, :image, :likes], include: [:comments]
        # render json: FlightSerializer.new(fligths,options) 
        #NOTE: the serializer in this class that has relationship doesnt work as written in Flatiron course. I use serializer
        #for Passenger. Here it returns an ugly json. I asked help in Ask Question about it and nobody could help me. 
        

     end


     def create

        @cat = Cat.new
        @cat.name= params[:name]
        @cat.image= params[:image]
        @cat.likes= 0
        
         
        @cat.save
        render json: @cat, include: [:comments]
    end

    def update
    
        @cat = Cat.find(params[:id])
        @cat.likes = @cat.likes.to_i + 1
        @cat.save
        render json: @cat
    end
end
