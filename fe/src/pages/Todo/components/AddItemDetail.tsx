import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodoItem } from 'controllers';
import { STORAGED_TOKEN } from 'utils/constants';

export default function AddItemDetail() {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const currentForm = event.currentTarget as HTMLFormElement;
    const titleInput = (currentForm[0] as HTMLInputElement).value;
    const contentInput = (currentForm[1] as HTMLTextAreaElement).value;
    const queryString = `title=${titleInput}&content=${contentInput}`;
    const createResult = await createTodoItem(STORAGED_TOKEN, queryString);

    if (createResult) {
      alert('저장이 완료됐습니다.');
      navigate('/');
    }
  }

  function handleClick() {
    if (window.confirm('작성을 취소하시겠습니까?')) {
      navigate(-1);
    }
  }

  return (
    <article id="details" className="basis-1/2 ml-[0.5%] shadow-lg p-10">
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목"
          className="w-full h-[10%] px-5 text-6xl bg-transparent"
        />
        <hr className="my-[3%] border border-solid" />
        <section className="h-[80%] py-3">
          <textarea name="content" className="w-full h-full p-3 text-xl" />
        </section>
        <section className="flex justify-end h-[5%] mt-3">
          <button
            type="button"
            className="button-modify w-[70px] ml-5 bg-zinc-400"
            onClick={handleClick}
          >
            취소
          </button>
          <input
            type="submit"
            value="저장"
            className="button-modify w-[70px] ml-5 cursor-pointer"
          />
        </section>
      </form>
    </article>
  );
}
