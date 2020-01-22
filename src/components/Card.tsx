import React from 'react';

import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = (props: { title: string, hasSpoiler: boolean, author: string, imgUrl: string, commentSize: number, id: number }) => {
  const { title, author, hasSpoiler, imgUrl, commentSize, id } = props;
  return (
    <Link to={`/review/${id}`}>
    <div className="Card">
      <div className="Card__background" >
        {imgUrl.length > 0 && <img src={imgUrl} alt={title} />}
      </div>
      <div className="Card__contents">
        <div className="Card__title">{title}</div>
        <div className="Card__author" >{author}</div>
        {hasSpoiler && <span className="Card__spoiler">Spoiler!</span>}
        <span className="Card__comment">{commentSize}</span>
      </div>
    </div>
    </Link>
  )
}

export { Card }