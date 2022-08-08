import React from 'react';
import { format } from 'date-fns';
import { NavLink, useParams } from 'react-router-dom';
import { TodoItemType } from 'types';
import ModifyButton from 'components/ModifyButton';

export default function ListItem({
  id,
  title,
  content,
  createdAt,
  updatedAt,
}: TodoItemType) {
  const params = useParams();
  const dateString =
    createdAt === updatedAt
      ? format(new Date(createdAt), 'yyyy-MM-dd')
      : format(new Date(updatedAt), 'yyyy-MM-dd');
  return (
    <li className={`todo-list-item ${params.id === id ? 'active' : ''}`}>
      <NavLink to={`/${id}/detail`} className="flex w-full h-full">
        <label
          htmlFor="checkbox"
          className="inline-block w-[40px] h-[40px] border border-solid border-zinc-300 p-[2px] cursor-pointer"
        >
          <div className="w-full h-full bg-zinc-500" />
          <input type="checkbox" name="checkbox" className="hidden" />
        </label>
        <section className="w-[60%] h-full">
          <h1 className="h-1/2 py-2 px-3 text-3xl">{title}</h1>
          <p className="h-1/2 py-2 px-3 text-zinc-400">{content}</p>
        </section>
        <section className="w-[30%] h-full">
          <p className="flex-center h-1/2 pb-1 text-zinc-400">{dateString}</p>
          <div className="flex-center justify-evenly h-1/2">
            <ModifyButton
              id={id}
              title={title}
              content={content}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
            <button type="button" className="button-alert">
              삭제
            </button>
          </div>
        </section>
      </NavLink>
    </li>
  );
}
