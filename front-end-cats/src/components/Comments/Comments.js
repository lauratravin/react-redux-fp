import React, { Component } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import { connect } from 'react-redux'


class Comments extends Component {
  
  render() {
  
    const comments = this.props.cat_comments
    const catId= this.props.cat_id
    const addComment = this.props.addComment
    const deleteComment = this.props.deleteComment 
    // console.log(comments)
    // debugger
    if (comments.length > 0){
      const commentAll= comments.map( comment => {
        return  <Comment key={comment.id} comment={comment} deleteComment={deleteComment} />
      })
  
      return (
        <div>
            
            <div>{commentAll}</div>
            <div class="newCat">
            <CommentInput catId={catId} addComment={addComment}/>
            </div>
        </div>
      );
      
    } else{
      return (
        <div>
            <div class="newCat">
            <CommentInput catId={catId} addComment={addComment}/>
            </div>
        </div>
      );


    }
 
  }
};


export default Comments;