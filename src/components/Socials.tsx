import type { Component } from 'solid-js';
import {
  FaBrandsGithub,
  FaBrandsCodepen,
  FaBrandsItchIo,
  FaBrandsYoutube,
  FaBrandsInstagram
} from 'solid-icons/fa';

export const Socials: Component = () => {
  const github = 'https://github.com/daviddeejjames/';
  const codepen = 'https://codepen.io/daviddeejjames/';
  const itchio = 'https://daviddeejjames.itch.io/';
  const instagram = 'https://www.instagram.com/daviddeejjames'
  const youtube = 'https://www.youtube.com/davidj288';

  return (
    <div class="Socials">
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
          <a href={instagram} target="_blank">
            <FaBrandsInstagram />
          </a>
        </li>
        <li>
          <a href={youtube} target="_blank">
            <FaBrandsYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};
