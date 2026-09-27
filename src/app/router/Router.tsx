import { ChatPage, HomePage, LoginPage } from '@/pages';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/chat',
        element: <ChatPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
export default router;
