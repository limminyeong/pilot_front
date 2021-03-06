import React from 'react';
import "./CardList.scss";
import { Card } from './Card';
import { ReviewData } from '../apiclient';

const CardList = (props: { reviews: ReviewData[] }) => {
  const { reviews } = props;
  return (
    <div className="CardArray">
      {reviews.map((item, i) => (
        <div key={i} className="CardArray__wrapper">
          <Card
            title={item.title}
            author={item.author}
            hasSpoiler={item.has_spoiler}
            imgUrl={item.img_url}
            commentSize={item.comments.length}
            id={item.id}
          />
        </div>
      ))}
    </div>
  )
}

export { CardList };
