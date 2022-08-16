import React from 'react';
import useCheckAuthenticationToken from 'hooks/useCheckAuthenticationToken';
import Path from 'routes/Path';
import useDeleteList from '../hooks/useDeleteList';
import useTodoHelpers from '../hooks/useTodoHelpers';

interface DeleteButtonProps {
  id: string;
  title: string;
  additionalStyle: string;
}

function DeleteButton({ id, title, additionalStyle }: DeleteButtonProps) {
  const mutation = useDeleteList();
  const { onSuccessDelete, onError } = useTodoHelpers();
  const { authenticationToken } = useCheckAuthenticationToken();

  async function handleClick() {
    mutation.mutate(
      { token: authenticationToken, todoId: id },
      {
        onSuccess: () => onSuccessDelete(title, '삭제되었습니다.', Path.Todos),
        onError,
      },
    );
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
