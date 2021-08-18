import { Fragment, VFC, useContext, useState, MouseEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { TodoContext } from 'src/contexts/TodoContext';
import { Button } from 'src/components/common/Button';
import type { Todo } from 'src/types/Todo';

type Props = {
  todo: Todo;
};

export const TodoUpdateInput: VFC<Props> = ({ todo }) => {
  const { updateTodoById } = useContext(TodoContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(todo.title);
  const [body, setBody] = useState<string>(todo.body);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTitle(todo.title);
    setBody(todo.body);
    setIsOpen(false);
  };

  const updateTodoHandler = async (event: MouseEvent) => {
    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();

    if (!trimmedTitle || !trimmedBody) {
      alert('「タイトル」と「本文」は両方必須です');
      return;
    }

    try {
      await updateTodoById(todo.id, {
        title: trimmedTitle,
        body: trimmedBody,
      });
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button text="編集" onClick={openModal} size="lg" type="primary" />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div
            className="min-h-screen px-4 text-center border-2 bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform border border-gray-300 shadow-xl bg-gray-50 rounded-xl"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-center text-gray-900"
                >
                  Todoを更新する
                </Dialog.Title>
                <div className="grid grid-cols-4 gap-2 mt-8 items-center">
                  <div className="col-span-1 text-xl text-center">タイトル</div>
                  <input
                    className="w-full h-10 col-span-3 p-2 bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-700"
                    value={title}
                    onChange={(e) => {
                      return setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 mt-4 items-center">
                  <div className="col-span-1 text-xl text-center">詳細</div>
                  <input
                    className="w-full h-10 col-span-3 p-2 bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-700"
                    value={body}
                    onChange={(e) => {
                      return setBody(e.target.value);
                    }}
                  />
                </div>
                <div className="flex justify-end gap-4 mt-8">
                  <Button
                    text="キャンセル"
                    onClick={closeModal}
                    size="lg"
                    type="secondary"
                  />
                  <Button
                    text="更新"
                    onClick={updateTodoHandler}
                    size="lg"
                    type="primary"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
