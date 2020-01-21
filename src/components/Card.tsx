import React from 'react';

import "./Card.scss";

const Card = (props: { title: string, has_spoiler: boolean, author: string, img_url: string, comment_size: number }) => {
  const { title, author, has_spoiler, img_url, comment_size } = props;
  return (
    <div className="Card">
      <div className="Card__background" >
        {img_url.length > 0 && <img src={img_url} alt={title} />}
      </div>
      <div className="Card__contents">
        <div className="Card__title">{title}</div>
        <div className="Card__author" >{author}</div>
        {has_spoiler && <span className="Card__spoiler">Spoiler!</span>}
        <span className="Card__comment">{comment_size}</span>
      </div>
    </div>
  )
}

export { Card }