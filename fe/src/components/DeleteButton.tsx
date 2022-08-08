import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTodoItem } from 'controllers';

export default function DeleteButton({
  id,
  additionalStyle,
}: {
  id: string;
  additionalStyle: string;
}) {
  const navigate = useNavigate();
  const authenticationToken = localStorage.getItem('auth');
  return (
    <button
      type="button"
      className={`button-alert ${additionalStyle}`}
      onClick={() => {
        deleteTodoItem(authenticationToken, id).then((result) => {
          if (result) {
            alert('삭제되었습니다.');
            navigate('/');
          }
        });
      }}
    >
      삭제
    </button>
  );
}
