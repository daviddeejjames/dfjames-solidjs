import type { Component } from 'solid-js';
import {
  FaBrandsGithub,
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
    <div class="socials">
      <ul class="social-icons">
        <li>
          <a href={github} target="_blank">
            <FaBrandsGithub />
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