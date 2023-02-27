import React from "react";
import { Li, Nav, Ul, Menu, ImageContainer } from "./styles";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { NavList } from "./utils/navbarHelpers";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Nav>
      <Ul>
        {NavList.map((item) => (
          <Menu key={item.id}>
            <ImageContainer>
              <Image src={item.image} width={40} height={40} alt={item.title} />
            </ImageContainer>
            <Li>{t(item.title)}</Li>
          </Menu>
        ))}
      </Ul>
    </Nav>
  );
};

export default Navbar;
