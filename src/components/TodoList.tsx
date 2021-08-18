import { VFC } from 'react';
import type { Todo } from 'src/types/Todo';
import { TodoListItem } from 'src/components/TodoListItem';

type Props = {
  todos: Todo[];
};

export const TodoList: VFC<Props> = ({ todos }) => {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
