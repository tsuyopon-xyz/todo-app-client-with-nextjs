import { MouseEventHandler, VFC } from 'react';

type Props = {
  text: string;
  onClick?: MouseEventHandler;
  size: 'sm' | 'md' | 'lg' | 'xlg';
  type: 'primary' | 'secondary';
};

export const Button: VFC<Props> = ({ onClick, text, size, type }) => {
  let baseClassNameValue = '';
  switch (size) {
    case 'sm':
      baseClassNameValue =
        'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
      break;
    case 'md':
      baseClassNameValue =
        'inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
      break;
    case 'lg':
      baseClassNameValue =
        'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
      break;
    case 'xlg':
      baseClassNameValue =
        'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
      break;
  }

  const colorValue =
    type === 'primary'
      ? 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
      : 'text-black bg-gray-100 hover:bg-gray-200 focus:ring-gray-50 border-black';
  const classNameValue = `${baseClassNameValue} ${colorValue}`;

  return (
    <button
      type="button"
      onClick={onClick ? onClick : () => {}}
      className={classNameValue}
    >
      {text}
    </button>
  );
};
