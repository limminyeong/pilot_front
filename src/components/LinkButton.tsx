import React from 'react';

import "./LinkButton.scss";
import { Link } from 'react-router-dom';

const LinkButton = (props: {content:string, link:string, light: boolean}) => {
  const {content, link, light} = props;
  return (
    <div className="LinkButton">
      <Link to={link}>
        <button className={light? "LinkButton__button light" : "LinkButton__button"}>
          {content}
        </button>
      </Link>
    </div>
  )
}

export { LinkButton };