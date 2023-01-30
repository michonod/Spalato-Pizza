import React from "react";
import FooterBottom from "./FooterBottom";
import { Links } from './Links';
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Links />
      <FooterBottom />
    </FooterContainer>
  );
};

export default Footer;
