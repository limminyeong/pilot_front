import React from 'react';

import "./Landing.scss";
import { WriteButton } from '../components/WriteButton';
import { CardArray } from '../components/CardArray';
const Landing = () => {

  return (
    <div className="Landing">
      <WriteButton />
      <CardArray />
    </div>
  )
}

export { Landing };