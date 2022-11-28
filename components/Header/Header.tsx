import React from "react";
import Logo from "./Logo/Logo";
import OrderButton from "./OrderButton/OrderButton";
import RightHeader from "./RightHeader/RightHeader";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <OrderButton />
      <Logo />
      <RightHeader />
    </HeaderContainer>
  );
};

export default Header;
