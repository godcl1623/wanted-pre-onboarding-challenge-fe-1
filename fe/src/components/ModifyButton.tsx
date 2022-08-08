import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from 'types';

function ModifyButton({
  id,
  title,
  content,
  createdAt,
  updatedAt,
  additionalStyle,
}: ButtonProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${id}/modify`, {
      state: { id, title, content, createdAt, updatedAt },
    });
  }

  return (
    <button
      type="button"
      className={`button-modify ${additionalStyle}`}
      onClick={handleClick}
    >
      수정
    </button>
  );
}

export default React.memo(ModifyButton);
