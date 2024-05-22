import type { Component } from 'solid-js';

import { Socials } from './components/Socials';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <Socials />
    </div>
  );
};

export default App;
