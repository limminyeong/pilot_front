import React, { useState, useEffect } from 'react';

import apiclient, { ReviewData, CommentData } from '../apiclient';
import { ReviewCard } from '../components/ReviewCard';
import { CommentBox } from '../components/CommentBox';
import { CreateComment } from '../components/CreateComment';


const Review = (props: { reviewId: string }) => {
  const { reviewId } = props;
  const [reviewData, setReviewData] = useState<ReviewData | null>(null)
  const [commentsData, setCommentsData] = useState<CommentData[] | null>(null)

  const getReview = async (id: number) => {
    try {
      const reviewData = await apiclient.getReview(id);
      setReviewData(reviewData);
      setCommentsData(reviewData.comments);
    } catch (error) {
      console.log(error)
    }
  }
  const addComment = async (commentValue: CommentData) => {
    //ev.preventDefault();
    const id = Number(reviewId)
    await apiclient.postComment(id, commentValue);
    getReview(id);
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
          imgUrl={reviewData.img_url}
        />}
      <hr />
      {commentsData && <CommentBox comments={commentsData} />}
      <CreateComment addComment={addComment}/>
    </div>
  )
}

export { Review };