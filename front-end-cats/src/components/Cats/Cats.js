import React, { Component } from 'react';
import Cat from './Cat'

class Cats extends Component {
  render() {
    const { cats, deleteCat } = this.props; //destructuring

    const catsAll= restaurants.map( restaurant => {
         return(
             <Cat cat={cat} deleteCat={deleteCat} key={cat.id}/> //Id is inside cat
         )
      }  
    )
    return(<ul> {catsAll} </ul>)
  }
};

export default Cats;