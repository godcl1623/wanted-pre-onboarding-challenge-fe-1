import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exceptions from 'pages/Exceptions';
import Login from 'pages/Login';
import Todo from 'pages/Todo';
import Path from './Path';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path={Path.Root} element={<Login />} />
        <Route path={Path.Todo} element={<Todo />} />
        <Route path="*" element={<Exceptions />} />
      </Routes>
    </Router>
  );
}
