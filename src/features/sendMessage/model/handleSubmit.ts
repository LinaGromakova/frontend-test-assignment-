import sendMessage from '../api/sendMessage';
import type { MessageInterface } from '@/shared';

export const handleSubmit = (
  ref: HTMLInputElement,
  idInstance: string,
  apiTokenInstance: string,
  phoneNumber: string,
  setMessage: React.Dispatch<React.SetStateAction<MessageInterface[]>>,
) => {
  if (ref) {
    const valueIsEmpty = ref.value.trim();
    if (valueIsEmpty) {
      sendMessage(
        idInstance,
        apiTokenInstance,
        ref.value,
        phoneNumber,
        setMessage,
      );
      ref.value = '';
    }
  }
};
