import type { Todo } from 'src/types/Todo';

const API_END_POINT = 'http://localhost:3000/todos';

export const fetchAllTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_END_POINT);
  const todos: Todo[] = await response.json();

  return todos;
};
