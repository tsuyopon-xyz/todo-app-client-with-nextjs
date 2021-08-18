import type { Todo, CreateTodoInput, UpdateTodoInput } from 'src/types/Todo';

const API_END_POINT = 'http://localhost:3000/todos';

type HTTP_METHOD_TYPE = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
type BODY_TYPE = CreateTodoInput | UpdateTodoInput;

const createFetchOptions = (
  method: HTTP_METHOD_TYPE,
  body: BODY_TYPE
): RequestInit => {
  return {
    method,
    body: JSON.stringify(body),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const fetchAllTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_END_POINT);
  const todos: Todo[] = await response.json();

  return todos;
};

export const createTodo = async (input: CreateTodoInput): Promise<Todo> => {
  const response = await fetch(
    API_END_POINT,
    createFetchOptions('POST', input)
  );
  const todo: Todo = await response.json();

  return todo;
};
