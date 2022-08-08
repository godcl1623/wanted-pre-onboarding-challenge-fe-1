import React from 'react';

// interface DetailBaseFormProps {
//   id: string;
//   title: string;
//   content: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export default function DetailBaseForm({
//   id,
//   title,
//   content,
//   createdAt,
//   updatedAt,
// }: DetailBaseFormProps) {
//   return (
//     <article id="details" className="basis-1/2 ml-[0.5%] shadow-lg p-10">
//       <h1 className="h-[10%] px-5 text-6xl">{title}</h1>
//       <hr className="my-[3%] border border-solid" />
//       <section className="h-[74%] px-5 py-3">
//         <h1 className="mb-3 font-bold text-3xl">{title}</h1>
//         <p className="flex items-center h-[30px] mb-3 px-3">{content}</p>
//       </section>
//       <p className="my-1 text-end text-zinc-400">작성일: {createdAt}</p>
//       <p className="my-1 text-end text-zinc-400">수정일: {updatedAt}</p>
//       {createdAt !== updatedAt && <p>수정일: {updatedAt}</p>}
//       <section className="flex justify-end h-[5%] mt-3">
//         <ModifyButton
//           id={id}
//           title={title}
//           content={content}
//           createdAt={createdAt}
//           updatedAt={updatedAt}
//         />
//         <button type="button" className="button-alert w-[70px] ml-5">
//           삭제
//         </button>
//       </section>
//     </article>
//   );
// }
