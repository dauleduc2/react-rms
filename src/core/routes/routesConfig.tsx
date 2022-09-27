import { Navigate } from 'react-router-dom';
import Demo from '../../pages/Demo';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFoundPage from '../../pages/NotFoundPage';
import AuthGuard from '../guard/Auth';
import UnAuthGuard from '../guard/UnAuth';
import EmptyLayout from '../layout/EmptyLayout';

export interface SingleRoute {
  path: string;
  component: JSX.Element;
  guard?: JSX.Element;
  children?: SingleRoute[];
}

export const publicRoute: SingleRoute = {
  path: '/',
  component: <EmptyLayout />,
  children: [
    { path: '', component: <Home /> },
    { path: 'demo', component: <Demo />, guard: <AuthGuard /> },
  ],
};

// export const unAuthRoute: SingleRoute = {
//   path: '/',
//   component: <EmptyLayout />,
//   guard: <UnAuthGuard />,
//   children: [
//     {
//       path: 'users',
//       component: <UserList />,
//       children: [{ path: ':id', component: <UserDetail /> }],
//     },
//   ],
// };

export const authRoute: SingleRoute = {
  path: '/',
  component: <EmptyLayout />,
  guard: <AuthGuard />,
  children: [{ path: 'demo', component: <Demo /> }],
};

export const notFoundRoute: SingleRoute = {
  path: '*',
  component: <NotFoundPage />,
};

// export const ROUTES = [unAuthRoute, authRoute, publicRoute, notFoundRoute];
export const ROUTES: SingleRoute[] = [
  { path: '/', component: <Home /> },
  {
    path: '/auth',
    component: <EmptyLayout />,
    guard: <UnAuthGuard />,
    children: [
      { path: '', component: <Navigate to="/404-not-found" /> },
      {
        path: 'login',
        component: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    component: <EmptyLayout />,
    guard: <AuthGuard />,
    children: [{ path: '', component: <Demo /> }],
  },
  { path: '/404-not-found', component: <NotFoundPage /> },
  {
    path: '*',
    component: <Navigate to="/404-not-found" />,
  },
];
