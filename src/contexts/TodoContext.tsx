import { createContext, useState, FC } from 'react';
import type { Todo } from 'src/types/Todo';
import { fetchAllTodos as fetchAllTodosWithService } from 'src/services/TodoService';

type TodoContextType = {
  todos: Todo[];
  fetchAllTodos: () => Promise<void>;
  fetchTodoById: (id: number) => Promise<void>;
  updateTodoById: (id: number, data: Partial<Todo>) => Promise<void>;
  removeTodoById: (id: number) => Promise<void>;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export const TodoContextProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchAllTodos = async () => {
    const todos = await fetchAllTodosWithService();
    setTodos(todos);
  };

  const fetchTodoById = async (id: number) => {};
  const updateTodoById = async (id: number, data: Partial<Todo>) => {};
  const removeTodoById = async (id: number) => {};

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchAllTodos,
        fetchTodoById,
        updateTodoById,
        removeTodoById,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
