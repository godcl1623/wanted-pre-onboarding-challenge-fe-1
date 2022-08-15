import React from 'react';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';
import { AxiosResponse } from 'axios';
import { getTodoLists } from 'controllers';
import { TodoItemType } from 'types';
import { DATE_FORMAT_WITH_TIME } from 'utils/constants';
import { isEqual } from 'utils/capsuledConditions';
import useCheckAuthenticationToken from 'hooks/useCheckAuthenticationToken';
import { shortenString } from 'utils/helpers';
import ModifyButton from './ModifyButton';
import DeleteButton from './DeleteButton';
import useGetLists from '../hooks/useGetLists';
import useTodoHelpers from '../hooks/useTodoHelpers';

function TodoDetail() {
  const [itemInfo, setItemInfo] = React.useState<TodoItemType>({
    id: '',
    title: '',
    content: '',
    createdAt: '1900-01-01',
    updatedAt: '1900-01-01',
  });

  const param = useParams();
  const mutation = useGetLists();
  const { onSuccessGet, onError } = useTodoHelpers();
  const { authenticationToken } = useCheckAuthenticationToken();

  const shortenedTitle = shortenString(itemInfo.title);

  const processedContents = itemInfo.content
    .split('\n')
    .map((content: string, index: number) => {
      return (
        <p key={`${content[0]}_${index}`} className="flex items-center mb-3">
          {content}
        </p>
      );
    });

  React.useEffect(() => {
    // const setGetResultToList = async () => {
    //   try {
    //     const getResult = await getTodoLists(authenticationToken, param.id);
    //     setItemInfo((previousInfo: TodoItemType) => ({
    //       ...previousInfo,
    //       id: getResult.id,
    //       title: getResult.title,
    //       content: getResult.content,
    //       createdAt: getResult.createdAt,
    //       updatedAt: getResult.updatedAt,
    //     }));
    //   } catch (error) {
    //     if (error instanceof Error) throw new Error(error.message);
    //   }
    // };
    // setGetResultToList();
    const updateGetResult = (getResult: TodoItemType) =>
      setItemInfo((previousInfo: TodoItemType) => ({
        ...previousInfo,
        id: getResult.id,
        title: getResult.title,
        content: getResult.content,
        createdAt: getResult.createdAt,
        updatedAt: getResult.updatedAt,
      }));
    mutation.mutate(
      { token: authenticationToken, todoId: param.id },
      {
        onSuccess: (data: AxiosResponse) => onSuccessGet(data, updateGetResult),
      },
    );
  }, [param, authenticationToken]);

  return (
    <article id="details" className="basis-1/2 ml-[0.5%] shadow-lg p-10">
      <h1 className="h-[10%] px-5 text-6xl">{shortenedTitle}</h1>
      <hr className="my-[3%] border border-solid" />
      <section className="h-[74%] px-5 py-3">
        <h1 className="mb-5 font-bold text-3xl">{itemInfo.title}</h1>
        {processedContents}
      </section>
      <p className="my-1 text-end text-zinc-400">
        작성일: {format(new Date(itemInfo.createdAt), DATE_FORMAT_WITH_TIME)}
      </p>
      {!isEqual(itemInfo.createdAt, itemInfo.updatedAt) && (
        <p>
          수정일: {format(new Date(itemInfo.updatedAt), DATE_FORMAT_WITH_TIME)}
        </p>
      )}
      <section className="flex justify-end h-[5%] mt-3">
        <ModifyButton
          id={itemInfo.id}
          title={itemInfo.title}
          content={itemInfo.content}
          createdAt={itemInfo.createdAt}
          updatedAt={itemInfo.updatedAt}
          additionalStyle="w-[70px] ml-5"
        />
        <DeleteButton
          id={itemInfo.id}
          title={itemInfo.title}
          additionalStyle="w-[70px] ml-5"
        />
      </section>
    </article>
  );
}

export default React.memo(TodoDetail);
