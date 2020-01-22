import React from 'react';

import "./WriteButton.scss";
import { Link } from 'react-router-dom';

const WriteButton = () => {
  return (
    <div className="WriteButton">
      <Link to="/review/new">
        <button className="WriteButton__button">
          글쓰기
        </button>
      </Link>
    </div>
  )
}

export { WriteButton };