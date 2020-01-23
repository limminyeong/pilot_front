import React, { useEffect, useState } from 'react';
import "./Landing.scss";

import apiclient, { ReviewList } from '../apiclient';

import { WriteButton } from '../components/WriteButton';
import { CardList } from '../components/CardList';
import { Pagenation } from '../components/Pagenation';

const Landing = () => {

  const [reviewList, setReviewList] = useState<ReviewList | null>(null)
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number[]>([])

  const getReviewList = async (page: number) => {
    try {
      const reviewList = await apiclient.getReviews(page);
      setReviewList(reviewList);

      const total = reviewList.total;
      const pageCount = 12;
      const maxPage = Math.ceil(total / pageCount);
      const pages: number[] = Array.from(Array(maxPage + 1).keys());
      pages.shift();
      setPages(pages);

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
      <div className="Landing__write">
        <WriteButton />
      </div>
      <div className="Landing__cardlist">
        {reviewList && <CardList reviews={reviewList.reviews} />}
      </div>
      {reviewList && <Pagenation
        pages={pages}
        handlePage={handlePage}
        thisPage={page}
      />}
    </div>
  )
}

export { Landing };