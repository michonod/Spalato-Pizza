import React, { ReactNode } from "react";
import { IconWrapper } from "./styles";

type LogoProps = {
  children: JSX.Element;
};

const Logo = ({ children }: LogoProps) => {
  return <IconWrapper>{children}</IconWrapper>;
};

export default Logo;
