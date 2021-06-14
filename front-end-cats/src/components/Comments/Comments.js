import React, { Component } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';





class Comments extends Component {

  
  render() {
    // const { comments, catId, addComment, deleteComment } = this.props;  this doesnt work
    const comments = this.props.cat_comments
    const catId= this.props.cat_id
    const addComment = this.props.addComment
    const deleteComment = this.props.deleteComment 
 
    // const restReviews = reviews.filter(review => review.restaurantId === catId);

    const commentAll= comments.map( comment => {
          return  <Comment key={comment.id} comment={comment} deleteComment={deleteComment} />
          
    })
    return (
      <div>
           {commentAll}
           <CommentInput addComment={addComment}/>
      </div>
    );
  }


};

export default Comments;