import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { getTodoLists } from 'controllers';
import { TodoItemType } from 'types';
import DetailBaseForm from './DetailBaseForm';

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
  const shortenedTitle =
    itemInfo.title.length <= 5
      ? itemInfo.title
      : itemInfo.title.slice(0, 4).concat('...');
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

  return (
    <DetailBaseForm
      title={shortenedTitle}
      content={itemInfo.content}
      createdAt={formatter(itemInfo.createdAt)}
      updatedAt={formatter(itemInfo.updatedAt)}
    />
  );
}
