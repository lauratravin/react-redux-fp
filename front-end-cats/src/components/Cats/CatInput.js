
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCat } from '../../actions/addCat'




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
    [e.target.id]: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.addCat(this.state)
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
                      id= "name"
                      value={this.state.name}  
                      onChange={(e => this.handleChange(e))}/>
            
              <label>Image </label>
              <input  type="text" 
                      id= "image"
                      value={this.state.image}  
                      onChange={(e => this.handleChange(e))}/>
              <input type="Submit" />
          </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addCat: (d) => dispatch(addCat(d))
  }
}

export default connect(null, mapDispatchToProps)(CatInput)