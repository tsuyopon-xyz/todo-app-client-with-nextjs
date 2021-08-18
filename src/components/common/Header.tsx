import { VFC } from 'react';
import { TodoCreateInput } from 'src/components/TodoCreateInput';

export const Header: VFC = () => {
  return (
    <div className="fixed w-full bg-black text-white h-14 px-2 md:px-10 flex items-center justify-between">
      <span className="font-bold text-2xl">Todoアプリ</span>
      <TodoCreateInput />
    </div>
  );
};
