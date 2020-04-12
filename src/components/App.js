import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Users from './Users';
import Posts from './Posts';
import { TasksConnect, SaveConnect } from './Tasks';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margin">
      <Route exact path='/' component={ Users } />
      <Route exact path='/react-redux-blog' component={ Users } />
      <Route exact path='/react-redux-blog/users' component={ Users } />
      <Route exact path='/react-redux-blog/tasks' component={ TasksConnect } />
      <Route exact path='/react-redux-blog/posts/:key' component={ Posts } />
      <Route exact path='/react-redux-blog/tasks/save' component={ SaveConnect } />
    </div>
  </BrowserRouter>
);

export default App;
