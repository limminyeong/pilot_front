import React, { useEffect, useState } from 'react';
import "./Landing.scss";

import { WriteButton } from '../components/WriteButton';
import { CardArray } from '../components/CardArray';

import apiclient, { ReviewList } from '../apiclient';
const Landing = () => {

  const [reviewList, setReviewList] = useState<ReviewList | null>(null)
  const [page, setPage] = useState<number>(1)

  const getReviewList = async (page: number) => {
    try {
      const reviewList = await apiclient.getReviews(page);
      setReviewList(reviewList)
    } catch (error) {
      console.log(error)
    }
  }
  const handlePage = (value: number) => {
    setPage(value);
  }

  useEffect(() => {
    getReviewList(page);
  }, [page])

  return (
    <div className="Landing">
      <WriteButton />
      {reviewList && <CardArray reviewList={reviewList}/>}
    </div>
  )
}

export { Landing };