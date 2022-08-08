import React from 'react';
import { useParams } from 'react-router-dom';
import { getTodoLists } from 'controllers';
import { TodoItemType } from 'types';
import ModifyButton from 'components/ModifyButton';
import DeleteButton from 'components/DeleteButton';
import { STORAGED_TOKEN } from 'utils/constants';
import { formatDate, shortenString } from 'utils/helpers';
import { isEqual } from 'utils/capsuledConditions';

interface BasicType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function TodoDetail() {
  const [itemInfo, setItemInfo] = React.useState<TodoItemType | BasicType>({
    id: '',
    title: '',
    content: '',
    createdAt: '1900-01-01',
    updatedAt: '1900-01-01',
  });

  const param = useParams();

  const shortenedTitle = shortenString(itemInfo.title);

  const contents = itemInfo.content
    .split('\n')
    .map((content: string, index: number) => {
      return (
        <p key={`${content[0]}_${index}`} className="flex items-center mb-3">
          {content}
        </p>
      );
    });

  React.useEffect(() => {
    getTodoLists(STORAGED_TOKEN, param.id).then((result) => {
      setItemInfo((previousInfo: TodoItemType) => ({
        ...previousInfo,
        id: result.id,
        title: result.title,
        content: result.content,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      }));
    });
  }, [param]);

  return (
    <article id="details" className="basis-1/2 ml-[0.5%] shadow-lg p-10">
      <h1 className="h-[10%] px-5 text-6xl">{shortenedTitle}</h1>
      <hr className="my-[3%] border border-solid" />
      <section className="h-[74%] px-5 py-3">
        <h1 className="mb-5 font-bold text-3xl">{itemInfo.title}</h1>
        {contents}
      </section>
      <p className="my-1 text-end text-zinc-400">
        작성일: {formatDate(itemInfo.createdAt, true)}
      </p>
      {!isEqual(itemInfo.createdAt, itemInfo.updatedAt) && (
        <p>수정일: {formatDate(itemInfo.updatedAt, true)}</p>
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
