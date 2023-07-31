import React, { Fragment } from "react";
import {
  PiEnvelopeFill,
  PiGithubLogoFill,
  PiInstagramLogoFill,
} from "react-icons/pi";

import { List, Title } from "../../components";

const contactMethods = [
  {
    key: "git",
    value: "danicolms",
    url: "https://github.com/danicolms",
    icon: <PiGithubLogoFill />,
  },
  {
    key: "instagram",
    value: "danicolms_art",
    url: "https://www.instagram.com/danicolms_art/",
    icon: <PiInstagramLogoFill />,
  },
  {
    key: "email",
    value: "danicolms@icloud.com",
    url: "mailto:danicolms@icloud.com",
    icon: <PiEnvelopeFill />,
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
