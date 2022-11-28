import React from "react";
import { Li, Nav, Ul, Menu, ImageContainer } from "./styles";
import { v4 } from "uuid";
import Image from "next/image";
import Svg from "../../public/soda.svg";

const NavList = [
  { title: "Пица", id: v4(), image: "/pizzanav.png" },
  { title: "Пастрмајлија", id: v4(), image: "/pastrmnav.png" },
  { title: "Сендвичи", id: v4(), image: "/sandwitchnav.png" },
  { title: "Десерт", id: v4(), image: "/dessertnav.png" },
  { title: "Пијалоци", id: v4(), image: "/soda.svg" },
];

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        {NavList.map((item) => (
          <Menu key={item.id}>
            <ImageContainer>
              <Image src={item.image} width={50} height={50} alt={item.title} />
            </ImageContainer>
            <Li>{item.title}</Li>
          </Menu>
        ))}
      </Ul>
    </Nav>
  );
};

export default Navbar;
