import { useEffect, useRef } from 'react';
import { CircleBtn, greenApiStoreAtom, phoneNumberAtom } from '@/shared';
import { useAtomValue, useSetAtom } from 'jotai';
import { messagesAtom } from '@/entities';
import { handleSubmit } from '../model/handleSubmit';
import useIsEnterClick from '../hooks/useIsEnterClick';
import SendMessageIcon from '../assets/SendMessageIcon.svg?react';

const SendMessageForm = () => {
  const isSend = useIsEnterClick();
  const inputRef = useRef<HTMLInputElement>(null);
  const { idInstance, apiTokenInstance } = useAtomValue(greenApiStoreAtom);
  const phoneNumber = useAtomValue(phoneNumberAtom);
  const setMessage = useSetAtom(messagesAtom);

  const executeSubmit = () => {
    if (inputRef.current) {
      handleSubmit(
        inputRef.current,
        idInstance,
        apiTokenInstance,
        phoneNumber,
        setMessage,
      );
    }
  };

  useEffect(() => {
    if (isSend) {
      executeSubmit();
    }
  }, [isSend]);

  return (
    <form
      action='#'
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='relative flex my-4 justify-center items-center'
    >
      <input
        type='text'
        ref={inputRef}
        placeholder='Сообщение'
        className='w-full bg-main rounded-3xl h-12 px-8 pr-14 placeholder:text-[#a2acb4] text-base focus:outline-0 focus:border-0'
      />
      <CircleBtn
        handlerClick={() => executeSubmit()}
        type='submit'
        icon={<SendMessageIcon></SendMessageIcon>}
        className='w-10 h-10 min-h-10 min-w-10 absolute right-0 mx-2'
      ></CircleBtn>
    </form>
  );
};
export default SendMessageForm;
