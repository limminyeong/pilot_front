import React from 'react';

const Detail = ({match}: any) => {
  return (
  <div>{match.params.review_id}</div>
  )
}

export default Detail;