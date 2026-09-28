import { ArrowBackIcon, CircleBtn, showChatAtom } from '@/shared';
import { useSetAtom } from 'jotai';

const ChatHeader = () => {
  const setShowChat = useSetAtom(showChatAtom);
  return (
    <header className='bg-main rounded-3xl h-10.5 mx-50 max-xl:mx-8 mt-4'>
      <CircleBtn
        type='button'
        handlerClick={() => setShowChat(false)}
        className='md:hidden w-10 h-10 min-h-10 min-w-10 bg-transparent hover:bg-transparent ml-2'
        icon={<ArrowBackIcon />}
      ></CircleBtn>
    </header>
  );
};
export default ChatHeader;
