import React from 'react';

import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = (props: { title: string, hasSpoiler: boolean, author: string, imgUrl: string, commentSize: number, id: number }) => {
  const { title, author, hasSpoiler, imgUrl, commentSize, id } = props;
  return (
    <Link to={`/review/${id}`}>
      <div className="Card">
        <div
          className="Card__background"
          style={{
            backgroundImage: `url(${imgUrl})`
          }} >
        </div>
        <div className="Card__contents">
          <div className="Card__title">{title}</div>
          <div className="Card__author" >{author}</div>
        </div>
        <div className="Card__info">
          <span className="Card__spoiler">
          <img src={`/static/asset/${hasSpoiler? "check-red" : "safe"}.svg`} alt="spoiler check" />
            {hasSpoiler ? "Spoiler!" : "Safe"}
            </span>
          <span className="Card__comment">
            <img src="/static/asset/quotation.svg" alt="comment" />
            {commentSize}
          </span>
        </div>
      </div>
    </Link>
  )
}

export { Card }