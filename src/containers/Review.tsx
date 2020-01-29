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

  //state config
  const [reviewData, setReviewData] = useState<ReviewData | null>(null)
  const [commentsData, setCommentsData] = useState<CommentData[] | null>(null)
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [deleteModalIsOpen, setDeleteIsOpen] = useState<boolean>(false);

  //modal controll
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const openDeleteModal = () => {
    setDeleteIsOpen(true);
  }

  const closeDeleteModal = () => {
    setDeleteIsOpen(false);
  }

  //fetch review
  const getReview = async (id: number) => {
    try {
      const reviewData = await apiclient.getReview(id);
      setReviewData(reviewData);
      setCommentsData(reviewData.comments);
    } catch (error) {
      console.log(error)
    }
  }

  //delete review
  const deleteReview = async (value: { password: string }) => {
    try {
      const id = Number(reviewId)
      await apiclient.deleteReview(value, id);
      window.open("/", "_self");
    } catch (error) {
      console.log(error);
      window.open("/", "_self");
    }
  }

  // add comment
  const addComment = async (commentValue: PostCommentData) => {
    try {
      const id = Number(reviewId)
      await apiclient.postComment(id, commentValue);
      await getReview(id);
    } catch (error) {
      console.log(error);
    }
  }
  //delete comment
  const deleteComment = async (value: { password: string }, id: number) => {
    try {
      await apiclient.deleteComment(value, Number(reviewId), id);
      await getReview(id);
    } catch (error) {
      console.log(error);
    }
  }

  //lifecycle
  useEffect(() => {
    getReview(Number(reviewId))
  }, [reviewId])

  //render
  return (
    <div className="Review">
      <div className="Review__buttongroup">
        <Button
          content="수정"
          func={openModal}
        />
        <Button
          content="삭제"
          func={openDeleteModal}
        />
      </div>
      {!reviewData && "불러오는 중입니다..."}
      {reviewData && <CheckModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
        handleSubmit={() => window.open(`/review/${reviewId}/edit`, '_self')}
        reviewPassword={reviewData.password}
        buttonText="수정페이지로" />}
      {reviewData && <CheckModal
        modalIsOpen={deleteModalIsOpen}
        closeModal={closeDeleteModal}
        customStyles={customStyles}
        handleSubmit={deleteReview}
        reviewPassword={reviewData.password}
        buttonText="삭제" />}
      {(reviewData && reviewData !== undefined) &&
        <ReviewCard
          title={reviewData.title}
          author={reviewData.author}
          content={reviewData.content}
          createdAt={reviewData.created_at}
          updatedAt={reviewData.updated_at}
          imgUrl={reviewData.img_url}
        />}
      {commentsData && <Comment
        comments={commentsData}
        handleSubmit={deleteComment} />}
      <CreateComment addComment={addComment} />
    </div>
  )
}

export { Review };