import React from 'react';
import './Post.scss';
import { ReviewForm } from '../components/ReviewForm';
import apiclient, { PostReviewData } from '../apiclient';

const Post = () => {
  const addReview = async (reviewValue: PostReviewData) => {
    try {
      await apiclient.postReview(reviewValue);
      window.open("/");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="Post">
      <ReviewForm addReview={addReview} />
    </div>
  )
}

export { Post };