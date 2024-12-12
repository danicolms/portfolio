import { Fragment } from "react";
import {
  PiCalculatorDuotone,
  PiCubeDuotone,
  PiFlowerDuotone,
  PiWatchDuotone,
} from "react-icons/pi";

import { List, Title } from "../../components";

const projects = [
  {
    key: "uc",
    value: "UNICAN - Master en tributación",
    url: "https://www.tributacion.unican.es/",
    icon: <PiCalculatorDuotone />,
  },
  {
    key: "girih",
    value: "Girih",
    url: "https://danicolms.github.io/girih/",
    icon: <PiFlowerDuotone />,
  },
  {
    key: "word-clock",
    value: "Word clock",
    url: "https://danicolms.github.io/word-clock/",
    icon: <PiWatchDuotone />,
  },
  {
    key: "cube",
    value: "Cube",
    url: "https://danicolms.github.io/rotating-box/",
    icon: <PiCubeDuotone />,
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
