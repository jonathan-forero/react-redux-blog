import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => (
    <nav id="menu">
        <Link to="/react-redux-blog/users">Users</Link>
        <Link to="/react-redux-blog/tasks">Tasks</Link>
    </nav>
);

export default Menu;
