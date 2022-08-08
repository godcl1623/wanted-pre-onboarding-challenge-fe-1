import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddItemButton() {
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

export default React.memo(AddItemButton);
