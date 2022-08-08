import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { getTodoLists } from 'controllers';
import { TodoItemType } from 'types';

export default function TodoDetail() {
  const [itemInfo, setItemInfo] = React.useState<TodoItemType | any>({
    title: '',
    content: '',
    createdAt: '1900-01-01',
    updatedAt: '1900-01-01',
  });
  const param = useParams();
  const authenticationToken = localStorage.getItem('auth');
  const formatter = (dateString: string) => {
    return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
  };
  React.useEffect(() => {
    getTodoLists(authenticationToken, param.id).then((result) => {
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
  const shortenedTitle =
    itemInfo.title.length <= 5
      ? itemInfo.title
      : itemInfo.title.slice(0, 4).concat('...');
  return (
    <article id="details" className="basis-1/2 ml-[0.5%] shadow-lg p-10">
      <h1 className="h-[10%] px-5 text-6xl">{shortenedTitle}</h1>
      <hr className="my-[3%] border border-solid" />
      <section className="h-[74%] px-5 py-3">
        <h1 className="mb-3 font-bold text-3xl">{shortenedTitle}</h1>
        <p className="flex items-center h-[30px] mb-3 px-3">
          {itemInfo.content}
        </p>
      </section>
      <p className="my-1 text-end text-zinc-400">
        작성일: {formatter(itemInfo.createdAt)}
      </p>
      <p className="my-1 text-end text-zinc-400">
        수정일: {formatter(itemInfo.updatedAt)}
      </p>
      {itemInfo.createdAt !== itemInfo.updatedAt && (
        <p>수정일: {formatter(itemInfo.updatedAt)}</p>
      )}
      <section className="flex justify-end h-[5%] mt-3">
        <button type="button" className="button-modify w-[70px] ml-5">
          수정
        </button>
        <button type="button" className="button-alert w-[70px] ml-5">
          삭제
        </button>
      </section>
    </article>
  );
}
