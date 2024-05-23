import type { Component } from 'solid-js';

import { Socials } from './components/Socials';

import logo from './logo.svg';


const App: Component = () => {
  return (
    <div class="app">
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <Socials />
    </div>
  );
};

export default App;
