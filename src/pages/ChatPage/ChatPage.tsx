import { showChatAtom } from '@/shared';
import { ChatFooter, ChatHeader, MessageList } from '@/widgets';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';

const ChatPage = () => {
  const isShowChat = useAtomValue(showChatAtom);
  return (
    <div
      className={clsx(
        'flex flex-col w-full relative z-200',
        isShowChat ? 'max-md:fixed max-md:inset-0' : 'max-md:hidden',
      )}
    >
      <ChatHeader></ChatHeader>
      <MessageList></MessageList>
      <ChatFooter></ChatFooter>
    </div>
  );
};
export default ChatPage;
