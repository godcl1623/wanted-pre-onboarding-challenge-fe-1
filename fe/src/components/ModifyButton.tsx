import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from 'types';

export default function ModifyButton({
  id,
  title,
  content,
  createdAt,
  updatedAt,
  additionalStyle,
}: ButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`button-modify ${additionalStyle}`}
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
