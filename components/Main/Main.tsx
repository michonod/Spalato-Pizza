import React from "react";
import {
  H1,
  H3,
  H1Big,
  MainContainer,
  H1Bold,
  TextContainer,
  AnimationContainer,
} from "./styles";
import Lottie from "lottie-react";
import Chef from "../../public/chef.json";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation()
  return (
    <MainContainer>
      <TextContainer>
        <H1>{t('fastAndFree')}</H1>
        <H1Big>{t('delivery')}</H1Big>
        <H1Bold>{t('wholeCity')}</H1Bold>
        <H3>{t('noLimit')}</H3>
      </TextContainer>
      <AnimationContainer>
        <Lottie animationData={Chef} loop={true} />
      </AnimationContainer>
    </MainContainer>
  );
};

export default Main;
