import React, { Fragment } from "react";

import { Title } from "../../components";

import "./styles.css";

const ucIcon = (
  <svg
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
  >
    <rect
      x="112"
      y="48"
      width="288"
      height="416"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M160.01 112H352v64H160.01z"
    />
    <circle cx="168" cy="248" r="24" />
    <circle cx="256" cy="248" r="24" />
    <circle cx="344" cy="248" r="24" />
    <circle cx="168" cy="328" r="24" />
    <circle cx="256" cy="328" r="24" />
    <circle cx="168" cy="408" r="24" />
    <circle cx="256" cy="408" r="24" />
    <rect x="320" y="304" width="48" height="128" rx="24" ry="24" />
  </svg>
);

const wordClockIcon = (
  <svg
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      d="M416.07 272a160 160 0 10-160 160 160 160 0 00160-160zM142.12 91.21A46.67 46.67 0 00112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 003.24 1.77h.88a3.23 3.23 0 002.54-1.31L142.38 99a5.38 5.38 0 001.55-4 5.26 5.26 0 00-1.81-3.79zM369.88 91.21A46.67 46.67 0 01400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 01-3.24 1.76h-.88a3.23 3.23 0 01-2.54-1.31L369.62 99a5.38 5.38 0 01-1.55-4 5.26 5.26 0 011.81-3.79z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M256.07 160v112h-80M416.07 432l-40-40M96.07 432l40-40"
    />
  </svg>
);

const girihIcon = (
  <svg
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 01256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23M215.08 355.08c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 00256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23M355.08 215.08c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 01480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77M156.92 215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0032 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0173.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37M156.92 296.92c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 000 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31M355.08 296.92c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 010 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31M215.08 156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 00-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <circle
      cx="256"
      cy="256"
      r="64"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  </svg>
);

const cubeIcon = (
  <svg
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M69 153.99l187 110 187-110M256 463.99v-200"
    />
  </svg>
);

const projects = [
  {
    key: "uc",
    value: "UNICAN",
    url: "https://www.tributacion.unican.es/2023/",
    icon: ucIcon,
  },
  {
    key: "word-clock",
    value: "Word clock",
    url: "https://danicolms.github.io/word-clock/",
    icon: wordClockIcon,
  },
  {
    key: "girih",
    value: "Girih",
    url: "https://danicolms.github.io/girih/",
    icon: girihIcon,
  },
  {
    key: "cube",
    value: "Cube",
    url: "https://danicolms.github.io/rotating-box/",
    icon: cubeIcon,
  },
];

const Projects = () => {
  return (
    <Fragment>
      <Title> Projects </Title>
      <section className="projects">
        {projects.map((project) => (
          <a className="project__item" target="_blank" href={project.url}>
            <i className="project__icon">{project.icon}</i>
            <span className="project__value"> {project.value}</span>
          </a>
        ))}
      </section>
    </Fragment>
  );
};

export default Projects;
