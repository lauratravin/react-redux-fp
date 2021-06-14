import React, { Component } from 'react';
import Cat from './Cat'

class Cats extends Component {
  debbuger
  render() {
    const { catsList } = this.props; //destructuring  
    
    const catsAll= catsList.map( cat => {
         return(
             <Cat cat={cat} key={cat.id}/>
         )
        }  
    )
    return(<ul> {catsAll} </ul>)
  }
};

export default Cats;