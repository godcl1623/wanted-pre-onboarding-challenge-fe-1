import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import format from 'date-fns/format';
import { TodoItemType } from 'types';
import { DATE_FORMAT_WITHOUT_TIME } from 'utils/constants';
import { isEqual } from 'utils/capsuledConditions';
import { shortenString } from 'utils/helpers';

function ListItem({ id, title, content, createdAt, updatedAt }: TodoItemType) {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const params = useParams();

  const dateString = isEqual(createdAt, updatedAt)
    ? format(new Date(createdAt), DATE_FORMAT_WITHOUT_TIME)
    : format(new Date(updatedAt), DATE_FORMAT_WITHOUT_TIME);

  const checkedStringStyle = isChecked ? 'line-through text-zinc-300' : '';

  const storagedCheckedState = localStorage.getItem(title);

  function handleClick() {
    setIsChecked(!isChecked);
    localStorage.setItem(title, JSON.stringify({ checked: !isChecked }));
  }

  React.useEffect(() => {
    if (storagedCheckedState) {
      const parsedState = JSON.parse(storagedCheckedState);
      if (parsedState.checked) setIsChecked(parsedState.checked);
    }
  }, [storagedCheckedState]);

  return (
    <li className={`todo-list-item ${isEqual(params.id, id) ? 'active' : ''}`}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <label
        htmlFor="checkbox"
        className="inline-block w-[40px] h-[40px] border border-solid border-zinc-300 p-[2px] cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`w-full h-full ${
            isChecked ? 'bg-zinc-500' : 'bg-transparent'
          }`}
        />
        <input
          type="checkbox"
          name="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={() => undefined}
        />
      </label>
      <NavLink to={`${id}`} className="flex items-center w-full h-full">
        <section className="w-[65%] h-full">
          <h1 className={`h-1/2 py-2 px-3 text-3xl ${checkedStringStyle}`}>
            {shortenString(title)}
          </h1>
          <p className={`h-1/2 py-2 px-3 text-zinc-400 ${checkedStringStyle}`}>
            {shortenString(content)}
          </p>
        </section>
        <section className="flex items-end w-[35%] h-full">
          <p
            className={`flex-center w-full h-1/2 pb-1 text-zinc-400 ${checkedStringStyle}`}
          >
            {dateString}
          </p>
        </section>
      </NavLink>
    </li>
  );
}

export default React.memo(ListItem);
