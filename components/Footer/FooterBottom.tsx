import React from "react";
import { BottomContainer, BottomWrapper, Icon, Text } from "./styles";
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";

const socialMedia: { name: string; url: string; icon: JSX.Element }[] = [
  {
    name: "Instagram",
    url: "www.instagram.com",
    icon: <InstagramOutlined />,
  },
  {
    name: "Facebook",
    url: "www.facebook.com",
    icon: <FacebookOutlined />,
  },
];

const FooterBottom = () => {
  return (
    <BottomWrapper>
      <BottomContainer>
        {socialMedia.map((item) => (
          <Icon key={item.name}>{item.icon}</Icon>
        ))}
      </BottomContainer>
      <Text>Пицерија Spalato © 2023 Сите права се задржани!</Text>
    </BottomWrapper>
  );
};

export default FooterBottom;
