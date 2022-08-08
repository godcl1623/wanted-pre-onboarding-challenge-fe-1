import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddItemButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/add');
  }

  return (
    <li className="flex-center todo-list-item-base">
      <button type="button" className="todo-list-add" onClick={handleClick}>
        +
      </button>
    </li>
  );
}
