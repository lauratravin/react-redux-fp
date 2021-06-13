
import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Cat extends Component {

  handleOnClick(e){
    this.props.deleteCat(this.props.cat.id)
  }

  render() {
    const { cat } = this.props;

    return (
      <div>
        <li>
          {cat.name}
          {cat.image}
          <button onClick={(e) => this.handleOnClick(e) }> X </button>
          <ReviewsContainer cat={cat}/>
        </li>
      </div>
    );
  }
};

export default Cat;