import React, { Component } from 'react';
import Cat from './Cat'

class Cats extends Component {

  render() {
    const { catsList }   = this.props; //destructuring  
    // console.log(catsList)
    const catsAll= catsList.map( cat => {
         return(
           <div class="catsGrid">
             <Cat cat={cat} key={cat.id} voteCat={this.props.voteCat} fav={this.props.fav}/>
             </div>
         )
        }  
    )
    return(<div class="rankingGrid"> {catsAll} </div>)
  }
};

export default Cats;