import { CircleBtn, showChatAtom, showCreateChatFormAtom } from '@/shared';
import { useAtomValue, useSetAtom } from 'jotai';
import IconAddContact from '../assets/IconAddContact.svg?react';
import clsx from 'clsx';

const SidebarChats = () => {
  const setShowChatForm = useSetAtom(showCreateChatFormAtom);
  const isShowChat = useAtomValue(showChatAtom);
  return (
    <aside
      className={clsx(
        `bg-main min-w-100 w-100 px-3.25 py-2 rounded-3xl relative
     max-md:w-full max-md:min-w-full max-md:rounded-none`,
        isShowChat ? 'max-md:hidden' : 'max-md:block',
      )}
    >
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
