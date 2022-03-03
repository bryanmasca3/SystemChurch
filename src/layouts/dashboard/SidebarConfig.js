import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'inicio',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'usuarios',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Departamentos',
    path: '/dashboard/departamentos',
    icon: getIcon(lockFill)
  },
  {
    title: 'servicios',
    path: '/dashboard/servicios',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'miembros',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'aderentes',
    path: '/dashboard/products',
    icon: getIcon(lockFill)
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(lockFill)
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  }
];

export default sidebarConfig;
