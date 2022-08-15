import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTodoItem } from 'controllers';
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
  const navigate = useNavigate();
  const mutation = useDeleteList();
  const { onSuccessDelete, onError } = useTodoHelpers();
  const { authenticationToken } = useCheckAuthenticationToken();

  async function handleClick() {
    // const deleteResult = await deleteTodoItem(authenticationToken, id);

    // if (deleteResult) {
    //   localStorage.removeItem(title);
    //   alert('삭제되었습니다.');
    //   navigate(Path.Todos);
    // }
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
