import React from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">NO SPOILER ALLOWED</Link>
    </div>
  )
}

export { Header };