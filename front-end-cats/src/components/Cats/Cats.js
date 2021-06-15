import React, { Component } from 'react';
import Cat from './Cat'

class Cats extends Component {

  render() {
    const { catsList }   = this.props; //destructuring  
    // console.log(catsList)
    const catsAll= catsList.map( cat => {
         return(
             <Cat cat={cat} key={cat.id} voteCat={this.props.voteCat}/>
         )
        }  
    )
    return(<ul> {catsAll} </ul>)
  }
};

export default Cats;