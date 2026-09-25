import { ChatPage, HomePage, LoginPage } from '@/pages';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    children: [
      {
        path: '/chat',
        element: <ChatPage />,
      },
    ],
  },
]);
export default router;
