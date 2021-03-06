import React from 'react';
import './ReviewCard.scss';

const ReviewCard = (props: {
  title: string,
  author: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  imgUrl: string
}) => {
  const { title, author, content, createdAt, updatedAt, imgUrl } = props;

  return (
    <div className="ReviewCard">
      <div className="ReviewCard__header">
        <div style={{ backgroundImage: `url(${imgUrl})` }} className="ReviewCard__background" />
        <div className="ReviewCard__headercontent">
          <div className="ReviewCard__title">{title}</div>
          <div className="ReviewCard__author">{author}</div>
          <div className="ReviewCard__createdAt">작성일 {createdAt.split('T')[0]} </div>
          {(createdAt !== updatedAt) && <div className="ReviewCard__updatedAt">마지막 수정 {updatedAt.split('T')[0]} </div>}
        </div>
      </div>
      <div className="ReviewCard__body">
        <div className="ReviewCard__content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export { ReviewCard };