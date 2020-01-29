import React from 'react';
import './Update.scss';
import { ReviewForm } from '../components/ReviewForm';
import apiclient, { PostReviewData } from '../apiclient';

const Update = (props: { reviewId: string }) => {
  const {reviewId} = props;
  const editReview = async (reviewValue: PostReviewData) => {
    try {
      await apiclient.updateReview(reviewValue, Number(reviewId));
      window.open("/","_self");
    } catch (error) {
      console.log(error);
      window.open("/","_self");
    }
  }
  return (
    <div className="Update">
      <ReviewForm handleReview={editReview} />
    </div>
  )
}

export { Update };