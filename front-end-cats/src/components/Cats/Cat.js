
import React, { Component } from 'react';
import Comments from '../../components/Comments/Comments';
import { connect } from 'react-redux'


class Cat extends Component {

  // handleOnClick(e){
  //   this.props.deleteCat(this.props.cat.id)
  // }

  render() {
    const { cat } = this.props;

    return (
      <div>
       
          <img src={cat.image}/>
          <p>Name: {cat.name}</p>
          {cat.likes}
          {/* <button onClick={(e) => this.handleOnClick(e) }> X </button> */}
          <div>

             <Comments cat_comments={cat.comments} cat_id={cat.id}  addComment={this.props.addComment} deleteComment={this.props.deleteComment}/>
          </div>  
        
    
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch({type: 'ADD_COMMENT', comment}),
  deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
 })

export default connect(null, mapDispatchToProps)(Cat);