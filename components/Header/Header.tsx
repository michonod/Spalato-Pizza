import { InferGetStaticPropsType } from "next";
import React from "react";
import { getStaticProps } from "../../pages";
import Logo from "./Logo/Logo";
import OrderButton from "./OrderButton/OrderButton";
import RightHeader from "./RightHeader/RightHeader";
import { HeaderContainer } from "./styles";
import { LanguageSwitch } from "./Switch/Switch";

const Header = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <HeaderContainer>
      <OrderButton />
      <Logo />
      <RightHeader users={users} />
    </HeaderContainer>
  );
};

export default Header;
