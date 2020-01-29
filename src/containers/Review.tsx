import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Review.scss'

import apiclient, { ReviewData, CommentData, PostCommentData } from '../apiclient';
import { ReviewCard } from '../components/ReviewCard';
import { Comment } from '../components/CommentForm';
import { CreateComment } from '../components/CreateComment';
import { Button } from '../components/Button';
import { CheckModal } from '../components/CheckModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
const Review = (props: { reviewId: string }) => {
  const { reviewId } = props;
  const [reviewData, setReviewData] = useState<ReviewData | null>(null)
  const [commentsData, setCommentsData] = useState<CommentData[] | null>(null)
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const getReview = async (id: number) => {
    try {
      const reviewData = await apiclient.getReview(id);
      setReviewData(reviewData);
      setCommentsData(reviewData.comments);
    } catch (error) {
      console.log(error)
    }
  }
  const addComment = async (commentValue: PostCommentData) => {
    try {
      const id = Number(reviewId)
      await apiclient.postComment(id, commentValue);
      getReview(id);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReview(Number(reviewId))
  }, [reviewId])
  return (
    <div className="Review">
      <div className="Review__buttongroup">
        <Button
          content="수정하기"
          func={openModal}
        />
      </div>
      {reviewData && <CheckModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
        handleSubmit={() => window.open(`/review/${reviewId}/edit`, '_self')}
        reviewPassword={reviewData.password}
        buttonText="수정페이지로" />}
      {reviewData &&
        <ReviewCard
          title={reviewData.title}
          author={reviewData.author}
          content={reviewData.content}
          createdAt={reviewData.created_at}
          updatedAt={reviewData.updated_at}
          imgUrl={reviewData.img_url}
        />}
      {commentsData && <Comment comments={commentsData} />}
      <CreateComment addComment={addComment} />
    </div>
  )
}

export { Review };