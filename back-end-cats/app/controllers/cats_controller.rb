class CatsController < ApplicationController


    def index
        cats = Cat.all
        # options = {
        #    include: [:seats]
        #  }
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
        
    end
end
