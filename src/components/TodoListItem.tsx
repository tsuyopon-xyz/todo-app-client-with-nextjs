import { VFC } from 'react';
import type { Todo } from 'src/types/Todo';
import { TodoUpdateInput } from 'src/components/TodoUpdateInput';

type Props = {
  todo: Todo;
};

export const TodoListItem: VFC<Props> = ({ todo }) => {
  return (
    <li className="py-4 flex justify-between">
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{todo.title}</p>
        <p className="text-sm text-gray-500">{todo.body}</p>
      </div>
      <TodoUpdateInput todo={todo} />
    </li>
  );
};
