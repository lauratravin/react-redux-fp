
import React, { Component } from 'react';



class CatInput extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      image: ''
    }
  }


  handleChange(e){
   this.setState({ 
     text: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.addCat(this.state.name,this.state.image)
    this.setState({  //reset
      name: '',
      image: ''
    })
  }

  render() {
    return (
      <div>
          <form onSubmit={(e)=> this.handleOnSubmit(e) }>
              <label>Name</label>
              <input  type="text" 
                      value={this.state.name}  
                      onChange={(e => this.handleChange(e))}/>
            
              <label>Image </label>
              <input  type="text" 
                      value={this.state.image}  
                      onChange={(e => this.handleChange(e))}/>
              <input type="Submit" />
          </form>
      </div>
    );
  }
};

export default CatInput;