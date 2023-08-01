import { Fragment } from "react";
import {
  PiEnvelopeDuotone,
  PiGithubLogoDuotone,
  PiInstagramLogoDuotone,
} from "react-icons/pi";

import { List, Title } from "../../components";

const contactMethods = [
  {
    key: "git",
    value: "danicolms",
    url: "https://github.com/danicolms",
    icon: <PiGithubLogoDuotone />,
  },
  {
    key: "instagram",
    value: "danicolms_art",
    url: "https://www.instagram.com/danicolms_art/",
    icon: <PiInstagramLogoDuotone />,
  },
  {
    key: "email",
    value: "danicolms@icloud.com",
    url: "mailto:danicolms@icloud.com",
    icon: <PiEnvelopeDuotone />,
  },
];

const Contact = () => {
  return (
    <Fragment>
      <Title> Contact me </Title>
      <List items={contactMethods} />
    </Fragment>
  );
};

export default Contact;
