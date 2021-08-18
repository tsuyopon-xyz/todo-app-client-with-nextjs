import { VFC } from 'react';
import type { Todo } from 'src/types/Todo';

type Props = {
  todo: Todo;
};

export const TodoListItem: VFC<Props> = ({ todo }) => {
  return (
    <li className="py-4 flex">
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{todo.title}</p>
        <p className="text-sm text-gray-500">{todo.body}</p>
      </div>
    </li>
  );
};
