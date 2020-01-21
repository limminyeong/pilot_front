import React from 'react';

import "./Card.scss";

const Card = (props: { title: string, has_spoiler: boolean, author: string, img_url: string, comment_size: number }) => {
  const { title, author, has_spoiler, img_url, comment_size } = props;
  return (
    <div className="Card">
      <img className="Card__background" src={img_url} />
      <div className="Card__title">{title}</div>
      <div className="Card__author" >{author}</div>
      {has_spoiler && <span className="Card__spoiler">Spoiler!</span>}
      <span className="Card__comment">{comment_size}</span>
    </div>
  )
}

export { Card }