import { ParentComponent } from 'solid-js';
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';

import Home from './pages/Home';
import Blog from './pages/Blog';

import './scss/styles.scss';

const App: ParentComponent = ({ children }) => <>{children}</>;

const root = document.getElementById('root') as unknown as HTMLElement;

render(
  () => (
    <MetaProvider>
      <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Router>
    </MetaProvider>
  ),
  root
);
