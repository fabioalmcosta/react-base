import Login from './containers/login';
import RecoverPassword from './containers/recoverPassword';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'recoverPassword',
    path: '/recover',
    component: RecoverPassword,
  },
];

export default routes;
