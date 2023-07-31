# My Portfolio

[![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/danicolms/portfolio/blob/main/LICENSE)

Welcome to my portfolio repository! This project showcases various open source projects I have worked on and serves as a central hub for exploring my GitHub repositories (as well as some professional projects, too). The portfolio is built using React and bundled with Parcel, making it easy to use and deploy.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

My portfolio is designed to provide a quick overview of my open source / professional projects available on GitHub. It showcases each project with a live link, which can then be traced back to my GitHub repositories with the same name (https://danicolms.github.io/portfolio => https://github.com/danicolms/portfolio). By using functional components in React and plain CSS for styling, the portfolio maintains a clean and responsive layout.

## Features

- Display of open source projects hosted on GitHub, as well as some professional projects
- Responsive design to ensure compatibility with all devices
- Typechecking with PropTypes for better code reliability
- Parcel bundler for no-setup bundling

## Getting Started

Follow the instructions below to set up and run the portfolio project on your local machine.

### Prerequisites

- Node.js and yarn installed on your computer.

### Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/danicolms/portfolio
```

Navigate to the project directory:

```bash
cd portfolio
```

Install the required dependencies:

```bash
yarn install
```

### Development

To run the portfolio in development mode, use the following command:

```bash
yarn start
```

This will start a local development server and open the portfolio in your default web browser (defaults to http://localhost:1234). Any changes you make to the source code will automatically be reflected in the browser.

### Build

To create a production-ready build of the portfolio, use the following command:

```bash
yarn build
```

This will generate an optimized build in the `dist` directory, which can be deployed to a web server or hosting platform.

## Usage

Simply visit the live version of [the portfolio](https://danicolms.github.io/portfolio/) hosted on my website to explore my open source projects and get more information about each one.

## Project Structure

The project structure is organized as follows:

```
portfolio/
  ├── src/
  │   ├── components/     # React components used in the portfolio
  │   ├── views/          # Th different screens / sections in the portfolio
  │   ├── App.js          # Main application component
  │   ├── index.js        # Entry point of the application
  │   ├── index.html      # Entry point for Parcel bundler
  │   ├── styles.css      # Boilerplate styles for the projects
  ├── .gitignore          # List of files and directories ignored by Git
  ├── package.json        # Project dependencies and scripts
  ├── yarn.lock           # Auto-generated file for npm package versioning
  ├── LICENSE             # Rules on what you can do with this project
  └── README.md           # The file you're reading right now
```

## Technologies

The following technologies and tools are used in this portfolio:

- React - JavaScript library for building user interfaces
- Parcel - Web application bundler
- CSS - Styling language for the presentation of the portfolio
- PropTypes - Runtime typechecking for React props

## Contributing

Thank you for considering contributing to my portfolio! If you find any issues or have suggestions for improvement, feel free to create a pull request or open an issue.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or want to get in touch, you can reach me at:

Daniel Colmenares Salamanca\
danicolms@icloud.com\
https://github.com/danicolms
