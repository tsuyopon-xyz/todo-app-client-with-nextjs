import { createContext, useState, FC } from 'react';
import type { Todo, CreateTodoInput, UpdateTodoInput } from 'src/types/Todo';
import {
  fetchAllTodos as fetchAllTodosWithService,
  createTodo as createTodoWithService,
  updateTodoById as updateTodoByIdWithService,
} from 'src/services/TodoService';

type TodoContextType = {
  todos: Todo[];
  fetchAllTodos: () => Promise<void>;
  fetchTodoById: (id: number) => Promise<void>;
  createTodo: (data: CreateTodoInput) => Promise<void>;
  updateTodoById: (id: number, data: UpdateTodoInput) => Promise<void>;
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

  const createTodo = async (data: CreateTodoInput) => {
    const todo = await createTodoWithService(data);
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const updateTodoById = async (id: number, data: UpdateTodoInput) => {
    const updatedTodo = await updateTodoByIdWithService(id, data);
    const newTodos = todos.map((todo) => {
      if (updatedTodo.id === todo.id) {
        return updatedTodo;
      }

      return todo;
    });
    setTodos(newTodos);
  };
  const removeTodoById = async (id: number) => {};

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchAllTodos,
        fetchTodoById,
        createTodo,
        updateTodoById,
        removeTodoById,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
