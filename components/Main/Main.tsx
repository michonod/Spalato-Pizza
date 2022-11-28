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

const Main = () => {
  return (
    <MainContainer>
      <TextContainer>
        <H1>Брза и бесплатна</H1>
        <H1Big>достава низ</H1Big>
        <H1Bold>цела битола!</H1Bold>
        <H3>без минимум лимит за нарачка!</H3>
      </TextContainer>
      <AnimationContainer>
        <Lottie animationData={Chef} loop={true} />
      </AnimationContainer>
    </MainContainer>
  );
};

export default Main;
