import type { Component, ParentComponent } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';
import { A } from '@solidjs/router';
const checkActive = (path: string) => path == window.location.pathname;

const Navigation: Component = () => (
  <nav class="Navigation">
    <ul class="nav-list">
      <li>
        <A href="/">Home</A>
      </li>
      <li>
        <A href="/blog">Blog</A>
      </li>
    </ul>
  </nav>
);

const Header: Component = () => {
  return (
    <div class="Header">
      <a class="logo-link" href="/">
        <div class="diamond" />
        <div class="name">David James</div>
      </a>
      <Navigation />
    </div>
  );
};

export const PageWrapper: ParentComponent = ({
  isHomepage = false,
  children,
}) => {
  return (
    <div class={isHomepage ? 'homepage' : ''}>
      <Title>David James - Software Developer</Title>
      <Meta
        name="description"
        content="David James - Software Developer - Melbourne"
      />
      <Meta
        name="keywords"
        content="David James, Melbounre, Narrm, Front End Developer, Software Developer, Full Stack Developer, blog, solidjs, solid, blog, frontend, reactjs, react, css, scss, sass, skateboarder, photographer, creative"
      />
      <Header />
      <div class="content-container">{children}</div>
    </div>
  );
};
