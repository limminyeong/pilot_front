import React from 'react';
import { Review } from "../containers/Review";

const Detail = ({ match }: any) => {
  const reviewId = match.params.review_id;
  return (
    <Review reviewId={reviewId} />
  )
}

export default Detail;