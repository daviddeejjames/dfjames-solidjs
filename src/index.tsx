import { lazy } from 'solid-js';
// import { ParentComponent } from 'solid-js';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';

import Home from './pages/Home';
import Blog from './pages/Blog';

import './scss/styles.scss';

const routes = [
  {
    path: '/blog',
    component: lazy(() => import('./pages/Blog')),
  },
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '*404',
    component: lazy(() => import('./pages/404'))
  }
];

render(
  () => (
    <MetaProvider>
      <Router>{routes}</Router>
    </MetaProvider>
  ),
  document.getElementById('root')
);
