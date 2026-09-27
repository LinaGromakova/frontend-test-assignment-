import { showCreateChatFormAtom } from '@/shared';
import { CreateChatForm, SidebarChats } from '@/widgets';
import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router';

const HomePage = () => {
  const isShowChatForm = useAtomValue(showCreateChatFormAtom);

  return (
    <div className='relative p-4 flex min-h-screen'>
      <SidebarChats></SidebarChats>
      {isShowChatForm && <CreateChatForm></CreateChatForm>}
      <Outlet></Outlet>
    </div>
  );
};
export default HomePage;
