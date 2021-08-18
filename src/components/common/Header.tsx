import { VFC } from 'react';

export const Header: VFC = () => {
  return (
    <div className="fixed w-full bg-black text-white h-14 md:px-10 flex items-center justify-center md:justify-start">
      <span className="font-bold text-2xl">Todoアプリ</span>
    </div>
  );
};
