import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTodoItem } from 'controllers';
import { STORAGED_TOKEN } from 'utils/constants';

function DeleteButton({
  id,
  additionalStyle,
}: {
  id: string;
  additionalStyle: string;
}) {
  const navigate = useNavigate();

  function handleClick() {
    deleteTodoItem(STORAGED_TOKEN, id).then((result) => {
      if (result) {
        alert('삭제되었습니다.');
        navigate('/');
      }
    });
  }

  return (
    <button
      type="button"
      className={`button-alert ${additionalStyle}`}
      onClick={handleClick}
    >
      삭제
    </button>
  );
}

export default React.memo(DeleteButton);
