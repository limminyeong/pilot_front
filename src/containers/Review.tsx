import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Review.scss'

import apiclient, { ReviewData, CommentData, PostCommentData } from '../apiclient';
import { ReviewCard } from '../components/ReviewCard';
import { CommentForm } from '../components/CommentForm';
import { CreateComment } from '../components/CreateComment';
import { Button } from '../components/Button';

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

//Modal.setAppElement('#checkModal')
const Review = (props: { reviewId: string }) => {
  const { reviewId } = props;
  const [reviewData, setReviewData] = useState<ReviewData | null>(null)
  const [commentsData, setCommentsData] = useState<CommentData[] | null>(null)

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
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
      <Button
        content="수정하기"
        func={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Password Check"
        >

      </Modal>
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
      {commentsData && <CommentForm comments={commentsData} />}
      <CreateComment addComment={addComment} />
    </div>
  )
}

export { Review };