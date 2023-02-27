import React from "react";
import { BottomContainer, BottomWrapper, Icon, Text } from "./styles";
import { useTranslation } from "react-i18next";
import { socialMedia } from "./utils/socialMedia";

const FooterBottom = () => {
  const { t } = useTranslation()
  return (
    <BottomWrapper>
      <BottomContainer>
        {socialMedia.map((item) => (
          <Icon key={item.name}>{item.icon}</Icon>
        ))}
      </BottomContainer>
      <Text>{t("rightsReserved")}</Text>
    </BottomWrapper>
  );
};

export default FooterBottom;
