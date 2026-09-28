import { CircleBtn, showCreateChatFormAtom } from '@/shared';
import { useSetAtom } from 'jotai';
import IconAddContact from '../assets/IconAddContact.svg?react';

const SidebarChats = () => {
  const setShowChatForm = useSetAtom(showCreateChatFormAtom);
  return (
    <aside className='bg-main min-w-100 w-100 px-3.25 py-2 rounded-3xl relative'>
      <CircleBtn
        type='button'
        className='absolute min-w-12 min-h-12 w-12 h-12 bottom-4 right-4'
        handlerClick={() => setShowChatForm(true)}
        icon={<IconAddContact></IconAddContact>}
      ></CircleBtn>
    </aside>
  );
};
export default SidebarChats;
