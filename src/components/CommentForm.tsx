import React from 'react';
import './CommentForm.scss';
import { CommentData } from '../apiclient';


const Comment = (props: {comments: CommentData[]}) => {
  const {comments} = props;
  return (
    <div className="Comment">
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="Comment__comment">
          <span className="Comment__commenter"> {comment.commenter} </span>
          <span className="Comment__content"> {comment.content} </span>
        </div>
      ))}
    </div>
  )
}
export { Comment };