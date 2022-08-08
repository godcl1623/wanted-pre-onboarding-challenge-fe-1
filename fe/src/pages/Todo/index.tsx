import React from 'react';
import axios from 'axios';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from 'controllers/todoControllers';
import ListItem from './components/ListItem';
import useCheckLogin from './hooks/useCheckLogin';

export default function Todo() {
  const [todoList, setTodoList] = React.useState<any>([]);
  const { authenticationToken } = useCheckLogin();

  async function getFoo() {
    const bar = await getTodos(authenticationToken);
    return bar.data;
  }

  async function createFoo() {
    const bar = await createTodo(
      authenticationToken,
      'title=잘있어요&content=다시만나요',
    );
    console.log(bar);
  }

  async function updateFoo() {
    const bar = await updateTodo(
      authenticationToken,
      'qwerty',
      'title=bar&content=foo',
    );
    console.log(bar);
  }

  async function deleteFoo() {
    const bar = await deleteTodo(authenticationToken, 'qwerty');
    console.log(bar);
  }

  React.useEffect(() => {
    getFoo().then((res) => setTodoList(res));
  }, []);

  React.useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  if (!authenticationToken) return <div />;

  const doh = todoList.map((todoItem: any, index: number) => {
    return (
      <ListItem
        id={todoItem.id}
        title={todoItem.title}
        content={todoItem.content}
        created={todoItem.createdAt}
        updated={todoItem.updatedAt}
        key={index}
      />
    );
  });

  return (
    <main className="main-base">
      <article
        id="todo_container"
        className="flex w-[60%] h-[75%] rounded-2xl bg-slate-50"
      >
        <article
          id="simple_lists"
          className="basis-1/2 shadow-lg p-10 overflow-y-auto"
        >
          <ul>
            {doh}
            <li className="flex-center todo-list-item-base">
              <span className="todo-list-add">+</span>
            </li>
          </ul>
        </article>
        <article id="details" className="basis-1/2 ml-[0.5%] shadow-lg p-10">
          <h1 className="h-[10%] px-5 text-7xl">제목</h1>
          <hr className="my-[5%] border border-solid" />
          <section className="h-[75%] p-5">
            <p className="flex items-center h-[30px] mb-3 px-3">내용1</p>
            <p className="flex items-center h-[30px] mb-3 px-3">내용2</p>
            <p className="flex items-center h-[30px] mb-3 px-3">내용3</p>
            <p className="flex items-center h-[30px] mb-3 px-3">내용4</p>
            <p className="flex items-center h-[30px] mb-3 px-3">내용5</p>
          </section>
          <section className="flex justify-end h-[5%] px-5">
            <button type="button" className="button-modify w-[70px] ml-5">
              수정
            </button>
            <button type="button" className="button-alert w-[70px] ml-5">
              삭제
            </button>
          </section>
        </article>
      </article>
    </main>
  );
}
