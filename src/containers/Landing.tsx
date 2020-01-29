import React, { useEffect, useState } from 'react';
import "./Landing.scss";

import apiclient, { ReviewList } from '../apiclient';

import { LinkButton } from '../components/LinkButton';
import { CardList } from '../components/CardList';
import { Pagenation } from '../components/Pagenation';

const Landing = () => {

  const [reviewList, setReviewList] = useState<ReviewList | null>(null)
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number[]>([])
  const [category, setCategory] = useState<number>(0)

  const getReviewList = async (page: number, category: number) => {
    try {
      const reviewList = await apiclient.getReviews(page, category);
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

  // const handleCategory = (value: number) => {
  //   setCategory(value);
  // }

  useEffect(() => {
    getReviewList(page, category);
  }, [page, category])


  return (
    <div className="Landing">
      <div className="Landing__write">
        <LinkButton
          link="/reviews/new"
          content="글쓰기"
          light={false} />
      </div>
      <div className="Landing__buttongroup">
        {categories.map(category => (
          <span key={category.id} className="Landing__category">
            <button onClick={() => setCategory(category.id)}>
              {category.name}
            </button>
          </span>
        ))}
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

const categories: { id: number, name: string }[] = [
  {
    id: 0,
    name: "All"
  },
  {
    id: 1,
    name: "영화"
  }, {
    id: 2,
    name: "드라마"
  }, {
    id: 3,
    name: "다큐멘터리"
  }, {
    id: 4,
    name: "애니메이션"
  }, {
    id: 5,
    name: "TV프로그램"
  },
];

export { Landing };