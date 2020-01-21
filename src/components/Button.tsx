import React from 'react';

import "./Button.scss";

const Button = (props: { content: string, func: any }) => {
  const { content, func } = props;
  return (
    <div className="Button">
      <button onClick={func}>
        {content}
      </button>
    </div>
  )
}

export { Button };