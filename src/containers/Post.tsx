import React from 'react';
import './Post.scss';
import { ReviewForm } from '../components/ReviewForm';
import apiclient, { PostReviewData } from '../apiclient';

const Post = () => {
  const addReview = async (reviewValue: PostReviewData) => {
    try {
      await apiclient.postReview(reviewValue);
      window.open("/","_self");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="Post">
      <ReviewForm handleReview={addReview} reviewData={null}/>
    </div>
  )
}

export { Post };