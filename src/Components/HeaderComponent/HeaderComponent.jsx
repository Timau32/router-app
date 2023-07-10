import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">Here is logo</Link>
        </h1>
        <ul className="navbar">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
