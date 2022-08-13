import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from 'pages/Landing';
import Exceptions from 'pages/Exceptions';
import Login from 'pages/Login';
import Todo from 'pages/Todo';
import SignUp from 'pages/SignUp';
import TodoDetail from 'pages/Todo/components/TodoDetail';
import ItemAddContainer from 'pages/Todo/components/ItemAddContainer';
import ItemModifyContainer from 'pages/Todo/components/ItemModifyContainer';
import Path from './Path';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path={Path.Root} element={<Landing />} />
        <Route path={Path.Todos} element={<Todo />}>
          <Route path={Path.Detail} element={<TodoDetail />} />
          <Route path={Path.Add} element={<ItemAddContainer />} />
          <Route path={Path.Modify} element={<ItemModifyContainer />} />
        </Route>
        <Route path={Path.Auth} element={<Login />} />
        <Route path={Path.SignUp} element={<SignUp />} />
        <Route path="*" element={<Exceptions />} />
      </Routes>
    </Router>
  );
}

export default React.memo(Routing);
