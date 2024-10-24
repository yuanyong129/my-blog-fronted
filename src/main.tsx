import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import '@/styles/index.scss';
import Layout from '@/layout';
import Post from '@/pages/Post';
import Novel from '@/pages/Novel';
import Home from '@/pages/Home';
import About from '@/pages/About';
import PostDetails from '@/pages/Post/PostDetails';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        path: '',
        element: <Home />,
      },
      {
        path: 'post',
        element: <Post />,
      },
      {
        path: 'post-details',
        element: <PostDetails />
      },
      {
        path: 'novel',
        element: <Novel />,
      },
      {
        path: 'about',
        element: <About />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
