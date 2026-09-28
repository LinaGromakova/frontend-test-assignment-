import { SendMessageForm } from '@/features';

const ChatFooter = () => {
  return (
    <footer className='absolute bottom-0 w-full px-50 max-xl:px-8'>
      <SendMessageForm></SendMessageForm>
    </footer>
  );
};
export default ChatFooter;
