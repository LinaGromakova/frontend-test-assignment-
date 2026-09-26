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
      onSubmit={(e) => {
        e.preventDefault();
        executeSubmit();
      }}
    >
      <input
        type='text'
        ref={inputRef}
      />
      <button type='submit'>Отправить</button>
    </form>
  );
};
export default SendMessageForm;
