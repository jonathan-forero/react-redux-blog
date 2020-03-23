import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Users from './Users';
import Posts from './Posts';

const Tasks = () => <div>Tasks</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margin">
      <Route exact path='/' component={ Users } />
      <Route exact path='/react-redux-blog' component={ Users } />
      <Route exact path='/react-redux-blog/users' component={ Users } />
      <Route exact path='/react-redux-blog/tasks' component={ Tasks } />
      <Route exact path='/react-redux-blog/posts/:key' component={ Posts } />
    </div>
  </BrowserRouter>
);

export default App;
