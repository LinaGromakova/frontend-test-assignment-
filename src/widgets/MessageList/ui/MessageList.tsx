import { MessageItem, messagesAtom } from '@/entities';
import { useSubscribeMessage } from '@/features';
import { useAtomValue } from 'jotai';
import useScrollToBottom from '../hooks/useScrollToBottom';
import { useRef } from 'react';

const MessageList = () => {
  const messages = useAtomValue(messagesAtom);
  const bottomElRef = useRef<HTMLDivElement | null>(null);
  useSubscribeMessage();
  useScrollToBottom(bottomElRef, messages);
  return (
    <div className='px-50 w-full max-h-[80dvh] overflow-y-auto my-4 [-ms-overflow-style:none] scrollbar-width:none [&::-webkit-scrollbar]:hidden'>
      {messages.map((message) => {
        return (
          <MessageItem
            key={message.messageId}
            dataMessage={message}
          ></MessageItem>
        );
      })}
      <div
        className='h-10'
        ref={bottomElRef}
      ></div>
    </div>
  );
};
export default MessageList;
