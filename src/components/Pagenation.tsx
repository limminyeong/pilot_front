import React from 'react';

import './Pagenation.scss';

const Pagenation = (props: {pages:number[], thisPage:number, handlePage: any }) => {
  const {pages, handlePage, thisPage} = props;
  return (
    <div className="Pagenation">
      {pages.map((page: number) => (
        <span key={page} className="Pagenation__button">
          <button 
          onClick={() => handlePage(page)} 
          className={page === thisPage? "active": "normal"}>
          {page}
          </button>
        </span>
      ))}
    </div>
  )
}

export { Pagenation };