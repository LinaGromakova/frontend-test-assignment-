import { ChatFooter, ChatHeader, MessageList } from '@/widgets';

const ChatPage = () => {
  return (
    <div className='flex flex-col w-full relative'>
      <ChatHeader></ChatHeader>
      <MessageList></MessageList>
      <ChatFooter></ChatFooter>
    </div>
  );
};
export default ChatPage;
