import React, { ReactNode } from "react";
import { IconWrapper } from "./styles";

type LogoProps = {
  children: JSX.Element;
  onClick?: () => void
};

const Logo = ({ children, onClick }: LogoProps) => {
  return <IconWrapper onClick={onClick}>{children}</IconWrapper>;
};

export default Logo;
