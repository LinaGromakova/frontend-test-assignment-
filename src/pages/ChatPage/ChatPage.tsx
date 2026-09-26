import { ChatFooter, MessageList } from '@/widgets';
const ChatPage = () => {
 
  return (
    <div className='h-screen items-stretch'>
      <MessageList></MessageList>
      <ChatFooter></ChatFooter>
    </div>
  );
};
export default ChatPage;
