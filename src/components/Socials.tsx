import type { Component } from 'solid-js';

import styles from './Socials.module.css';

import {
  FaBrandsGithubAlt,
  FaBrandsCodepen,
  FaBrandsItchIo,
  FaBrandsLinkedinIn,
} from 'solid-icons/fa'

export const Socials: Component = () => {
  const github = 'https://github.com/daviddeejjames/'
  const linkedin = 'https://au.linkedin.com/in/david-james-614521106/'
  const codepen = 'https://codepen.io/daviddeejjames/'
  const itchio = 'https://daviddeejjames.itch.io/'

  return (
    <div>
      <ul class={styles.socials}>
        <li>
          <a href={github} target="_blank">
            <FaBrandsGithubAlt />
          </a>
        </li>
        <li>
          <a href={codepen} target="_blank">
            <FaBrandsCodepen />
          </a>
        </li>
        <li>
          <a href={itchio} target="_blank">
            <FaBrandsItchIo />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank">
            <FaBrandsLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
  )
}