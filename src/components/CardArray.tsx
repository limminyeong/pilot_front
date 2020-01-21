import React from 'react';
import "./CardArray.scss";
import { Card } from './Card';

const CardArray = () => {
  return (
    <div className="CardArray">
      {cardDummy.map(item => (
        <div key={item.created_at} className="CardArray__wrapper">
        <Card
          title={item.title}
          author={item.author}
          has_spoiler={item.has_spoiler} 
          img_url={item.img_url}
          comment_size={item.comment_size}
        />
        </div>
      ))}
    </div>
  )
}

export { CardArray };

const cardDummy = [
  {
    title: "ggg",
    author: "happy",
    has_spoiler: false,
    img_url: "https://images.unsplash.com/photo-1579445047822-0beaccbc1b37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    comment_size: 3,
    created_at: "2020-01-06T053628"
  },{
    title: "ggg",
    author: "happy",
    has_spoiler: true,
    img_url: "",
    comment_size: 3,
    created_at: "2020-01-06T053622"
  },{
    title: "ggg",
    author: "happy",
    has_spoiler: false,
    img_url: "https://images.unsplash.com/photo-1579250003282-c20177ddb297?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=942&q=80",
    comment_size: 3,
    created_at: "2020-01-06T053428"
  },{
    title: "ggg",
    author: "happy",
    has_spoiler: true,
    img_url: "https://images.unsplash.com/photo-1578422211457-069fb9dc9fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    comment_size: 3,
    created_at: "2020-01-06T053258"
  },{
    title: "ggg",
    author: "happy",
    has_spoiler: false,
    img_url: "",
    comment_size: 3,
    created_at: "2020-01-06T024028"
  },{
    title: "ggg",
    author: "happy",
    has_spoiler: false,
    img_url: "https://images.unsplash.com/photo-1568814176122-2bd797593bcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    comment_size: 3,
    created_at: "2020-01-06T059828"
  },
]