import { CreateChatForm, SidebarChats } from '@/widgets';
import { Outlet } from 'react-router';

const HomePage = () => {
  return (
    <div className='relative p-4 flex min-h-screen'>
      <SidebarChats></SidebarChats>
      {/* <CreateChatForm></CreateChatForm> */}
      <Outlet></Outlet>
    </div>
  );
};
export default HomePage;
