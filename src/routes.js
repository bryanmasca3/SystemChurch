import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Departamentos from './pages/Departamentos';
import Servicios from './pages/Servicios';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Miembro from './pages/Miembro';
import Aderente from './pages/Aderente';
import Assistance from './pages/Assistance';
import Report from './pages/Report';
import Inventary from './pages/Inventary';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'departamentos', element: <Departamentos /> },
        { path: 'servicios', element: <Servicios /> },
        { path: 'blog', element: <Blog /> },
        { path: 'miembro', element: <Miembro /> },
        { path: 'aderente', element: <Aderente /> },
        { path: 'assistance', element: <Assistance /> },
        { path: 'inventary', element: <Inventary /> },
        { path: 'report', element: <Report /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
