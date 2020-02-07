import React, { useState, useEffect } from 'react';
import './Update.scss';
import { ReviewForm } from '../components/ReviewForm';
import apiclient, { PostReviewData, ReviewData } from '../apiclient';

const Update = (props: { reviewId: string }) => {
  const {reviewId} = props;
  const [reviewData, setReviewData] = useState<ReviewData | null>(null)

  const getReview = async (id: number) => {
    try {
      const reviewData = await apiclient.getReview(id);
      setReviewData(reviewData);
    } catch (error) {
      console.log(error)
    }
  }

  const editReview = async (reviewValue: PostReviewData) => {
    try {
      await apiclient.updateReview(reviewValue, Number(reviewId));
      window.open("/","_self");
    } catch (error) {
      console.log(error);
      window.open("/","_self");
    }
  }

  useEffect(() => {
    getReview(Number(reviewId))
  }, [reviewId])
  return (
    <div className="Update">
      {reviewData && <ReviewForm handleReview={editReview} reviewData={reviewData}/>}
    </div>
  )
}

export { Update };