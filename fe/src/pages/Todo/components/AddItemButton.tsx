import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddItemButton() {
  const navigate = useNavigate();
  return (
    <li className="flex-center todo-list-item-base">
      <button
        type="button"
        className="todo-list-add"
        onClick={() => navigate('/add')}
      >
        +
      </button>
    </li>
  );
}
