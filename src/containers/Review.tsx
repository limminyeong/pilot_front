import React, { useState, useEffect } from 'react';

import apiclient, { ReviewData } from '../apiclient';


const Review = (props: { reviewId: string }) => {
  const { reviewId } = props;
  const [reviewData, setReviewData] = useState<ReviewData | null>(null)

  const getReview = async (id: number) => {
    try {
      const reviewData = await apiclient.getReview(id);
      setReviewData(reviewData);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getReview(Number(reviewId))
  },[reviewId])
  return (
    <div>{reviewId}</div>
  )
}

export { Review };