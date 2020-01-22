import React from 'react';
import "./CardArray.scss";
import { Card } from './Card';
import {ReviewList} from '../apiclient';

const CardArray = (props: {reviewList:ReviewList}) => {
  const {reviewList} = props;
  return (
    <div className="CardArray">
      {reviewList.map((item, i) => (
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

export { CardArray };
