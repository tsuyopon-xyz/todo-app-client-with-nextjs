export type Todo = {
  id: number;
  title: string;
  body: string;
};

export type CreateTodoInput = {
  title: string;
  body: string;
};

export type UpdateTodoInput = Partial<CreateTodoInput>;
