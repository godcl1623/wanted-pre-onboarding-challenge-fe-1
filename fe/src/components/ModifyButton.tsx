import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoItemType } from 'types';

export default function ModifyButton({
  id,
  title,
  content,
  createdAt,
  updatedAt,
}: TodoItemType) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="button-modify"
      onClick={() =>
        navigate(`/${id}/modify`, {
          state: { id, title, content, createdAt, updatedAt },
        })
      }
    >
      수정
    </button>
  );
}
