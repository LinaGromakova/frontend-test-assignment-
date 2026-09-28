import { showCreateChatFormAtom, useIsLogin } from '@/shared';
import { CreateChatOverlay, SidebarChats } from '@/widgets';
import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router';

const HomePage = () => {
  const isShowChatForm = useAtomValue(showCreateChatFormAtom);
  useIsLogin();
  return (
    <div className='relative p-4 flex min-h-screen'>
      <SidebarChats></SidebarChats>
      {isShowChatForm && <CreateChatOverlay></CreateChatOverlay>}
      <Outlet></Outlet>
    </div>
  );
};
export default HomePage;
