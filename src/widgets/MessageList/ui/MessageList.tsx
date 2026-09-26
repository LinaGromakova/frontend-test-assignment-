import { MessageItem, messagesAtom } from '@/entities';
import { useSubscribeMessage } from '@/features';
import { useAtomValue } from 'jotai';

const MessageList = () => {
  const messages = useAtomValue(messagesAtom);
  useSubscribeMessage();
  console.log(messages);
  return (
    <div className='p-4'>
      {messages.map((message) => {
        return (
          <MessageItem
            key={message.messageId}
            dataMessage={message}
          ></MessageItem>
        );
      })}
    </div>
  );
};
export default MessageList;
