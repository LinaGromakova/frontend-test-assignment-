import { useLayoutEffect } from 'react';
import type { MessageInterface } from '@/shared';

const useScrollToBottom = (
  ref: React.RefObject<HTMLDivElement | null>,
  messages: MessageInterface[],
) => {
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages]);
};
export default useScrollToBottom;
