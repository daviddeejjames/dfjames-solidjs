import type { Component, ParentComponent } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

const Navigation: Component = () => (
  <nav class="Navigation">
    <ul class="nav-list">
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </nav>
)

const Header: Component = () => {
  return(
    <div class="Header">
      <a class="logo-link" href="/">
        <div class="diamond" />
        <div class="name">David James</div>
      </a>
      <Navigation />
    </div>
  );
}

export const PageWrapper: ParentComponent = ({ children }) => {
  return (
    <div class="homepage">
      <Title>David James - Software Developer</Title>
      <Meta name="description" content="David James - Software Developer - Melbourne" />
      <Meta name="keywords" content="David James, Melebounre, Front End Developer, Software Developer, Full Stack Developer, solidjs, solid, blog, frontend, reactjs, react, css, scss, sass" />
      <Header />
      <div class="content-container">{children}</div>
    </div>
  )
}
