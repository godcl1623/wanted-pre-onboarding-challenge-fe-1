import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exceptions from 'pages/Exceptions';
import Login from 'pages/Login';
import Todo from 'pages/Todo';
import SignUp from 'pages/SignUp';
import TodoDetail from 'pages/Todo/components/TodoDetail';
import Path from './Path';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path={Path.Root} element={<Todo />}>
          <Route path={Path.Detail} element={<TodoDetail />} />
        </Route>
        <Route path={Path.Auth} element={<Login />} />
        <Route path={Path.SignUp} element={<SignUp />} />
        <Route path="*" element={<Exceptions />} />
      </Routes>
    </Router>
  );
}
