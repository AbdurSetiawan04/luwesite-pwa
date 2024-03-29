import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
