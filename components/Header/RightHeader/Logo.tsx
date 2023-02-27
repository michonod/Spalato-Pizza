import React from "react";
import { LogoProps } from "../types";
import { IconWrapper } from "./styles";

const Logo = ({ children, onClick }: LogoProps) => {
  return <IconWrapper onClick={onClick}>{children}</IconWrapper>;
};

export default Logo;
