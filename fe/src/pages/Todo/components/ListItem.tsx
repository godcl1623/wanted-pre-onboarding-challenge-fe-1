import React from 'react';

export default function ListItem() {
  return (
    <li className="todo-list-item">
      <label
        htmlFor="checkbox"
        className="inline-block w-[40px] h-[40px] border border-solid border-zinc-300 p-[2px] cursor-pointer"
      >
        <div className="w-full h-full bg-zinc-500" />
        <input type="checkbox" name="checkbox" className="hidden" />
      </label>
      <section className="w-[60%] h-full">
        <h1 className="h-1/2 py-2 px-3 text-3xl">제목</h1>
        <p className="h-1/2 py-2 px-3 text-zinc-400">내용</p>
      </section>
      <section className="w-[30%] h-full">
        <p className="flex-center h-1/2 pb-1 text-zinc-400">2022-08-07</p>
        <div className="flex-center justify-evenly h-1/2">
          <button type="button" className="button-modify">
            수정
          </button>
          <button type="button" className="button-alert">
            삭제
          </button>
        </div>
      </section>
    </li>
  );
}
