import { useEffect, useRef } from 'react';
import { greenApiStoreAtom, phoneNumberAtom } from '@/shared';
import { useAtomValue, useSetAtom } from 'jotai';
import { messagesAtom } from '@/entities';
import { handleSubmit } from '../model/handleSubmit';
import useIsEnterClick from '../hooks/useIsEnterClick';

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
        executeSubmit();
      }}
      className='relative flex my-4 justify-center items-center'
    >
      <input
        type='text'
        ref={inputRef}
        placeholder='Сообщение'
        className='w-full bg-main rounded-3xl h-12 px-8 pr-14 placeholder:text-[#a2acb4] text-base focus:outline-0 focus:border-0'
      />
      <button
        type='submit'
        className='w-10 h-10 min-h-10 min-w-10 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center absolute right-0 mx-2 cursor-pointer transition-colors focus:outline-0 focus:border-0 '
      >
        <svg
          viewBox='0 0 24 24'
          fill='#fff'
          width={28}
          height={28}
        >
          <path d='M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z'></path>
        </svg>
      </button>
    </form>
  );
};
export default SendMessageForm;
