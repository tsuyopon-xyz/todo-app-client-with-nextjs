import { VFC, useContext } from 'react';
import type { Todo } from 'src/types/Todo';
import { TodoUpdateInput } from 'src/components/TodoUpdateInput';
import { Button } from 'src/components/common/Button';
import { TodoContext } from 'src/contexts/TodoContext';

type Props = {
  todo: Todo;
};

export const TodoListItem: VFC<Props> = ({ todo }) => {
  const { removeTodoById } = useContext(TodoContext);

  return (
    <li className="py-4 flex justify-between">
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          {todo.title}（id: {todo.id}）
        </p>
        <p className="text-sm text-gray-500">{todo.body}</p>
      </div>
      <div className="flex gap-2 mr-2 md:mr-0">
        <TodoUpdateInput todo={todo} />
        <Button
          text="削除"
          onClick={() => {
            const isOK = confirm(`「${todo.title}」を本当にしますか？`);
            if (isOK) {
              removeTodoById(todo.id);
            }
          }}
          size="lg"
          type="secondary"
        />
      </div>
    </li>
  );
};
