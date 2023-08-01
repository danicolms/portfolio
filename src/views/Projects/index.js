import { Fragment } from "react";
import { PiCalculatorFill, PiCubeFill, PiWatchFill } from "react-icons/pi";

import { List, Title } from "../../components";

const projects = [
  {
    key: "uc",
    value: "UNICAN - Master en tributación",
    url: "https://www.tributacion.unican.es/2023/",
    icon: <PiCalculatorFill />,
  },
  {
    key: "word-clock",
    value: "Word clock",
    url: "https://danicolms.github.io/word-clock/",
    icon: <PiWatchFill />,
  },
  // {
  //   key: "girih",
  //   value: "Girih",
  //   url: "https://danicolms.github.io/girih/",
  //   icon: girihIcon,
  // },
  {
    key: "cube",
    value: "Cube",
    url: "https://danicolms.github.io/rotating-box/",
    icon: <PiCubeFill />,
  },
];

const Projects = () => {
  return (
    <Fragment>
      <Title> Projects </Title>
      <List items={projects} />
    </Fragment>
  );
};

export default Projects;
