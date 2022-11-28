import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import Pizza from "../../../public/pizza.json";
import { Container } from "./styles";

const Logo = () => {
  return (
    <Container>
      <Lottie animationData={Pizza} loop={false} />
    </Container>
  );
};

export default Logo;
