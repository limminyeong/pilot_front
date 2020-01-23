import React from 'react';
import './CommentBox.scss';
import { CommentData } from '../apiclient';


const CommentBox = (props: {comments: CommentData[]}) => {
  const {comments} = props;
  return (
    <div className="CommentBox">
      {comments.map(comment => (
        <div key={comment.id} className="CommentBox__comment">
          <span> {comment.commenter} </span>
          <span> {comment.content} </span>
        </div>
      ))}
    </div>
  )
}
export { CommentBox };