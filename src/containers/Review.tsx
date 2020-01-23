import React, { useState, useEffect } from 'react';

import apiclient, { ReviewData } from '../apiclient';
import { ReviewCard } from '../components/ReviewCard'


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
  }, [reviewId])
  return (
    <div className="Review">
      {reviewData && 
      <ReviewCard 
      title={reviewData.title}
      author={reviewData.author}
      content={reviewData.content}
      createdAt={reviewData.created_at}
      updatedAt={reviewData.updated_at}
      comments={reviewData.comments}
      imgUrl={reviewData.img_url}
       />}
    </div>
  )
}

export { Review };