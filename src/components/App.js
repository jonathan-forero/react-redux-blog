import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Users from './Users';

const Tasks = () => <div>Tasks</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margin">
      <Route exact path='/' component={ Users } />
      <Route exact path='/users' component={ Users } />
      <Route exact path='/tasks' component={ Tasks } />
    </div>
  </BrowserRouter>
);

export default App;
