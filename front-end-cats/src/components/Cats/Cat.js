import React, { Component } from 'react';
import Comments from '../../components/Comments/Comments';
import { connect } from 'react-redux'


class Cat extends Component {

handleOnClick = () => {
  // debugger

  this.props.voteCat(this.props.cat.id)
}

  render() {
    const { cat } = this.props;

    return (
      <div>
          <img src={cat.image}/>
          <p>Name: {cat.name}</p>
         
          <button onClick={(e) => this.handleOnClick() }>Vote: {cat.likes} </button> 
          <div>
             <Comments cat_comments={cat.comments} cat_id={cat.id}  addComment={this.props.addComment} deleteComment={this.props.deleteComment}/>
          </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cats: state.cats
  }
}


export default connect(mapStateToProps)(Cat);