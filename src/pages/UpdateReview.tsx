import React from 'react';
import { Update } from '../containers/Update';

const UpdateReview = ({ match }: any) => {
  const reviewId = match.params.review_id;
  return (
    <Update reviewId={reviewId}/>
  )
};

export default UpdateReview;