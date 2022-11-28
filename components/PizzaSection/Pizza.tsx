import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Heading } from "./styles";

const Pizza = () => {
  return (
    <Container>
      <Heading>Пица</Heading>
      <>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </>
    </Container>
  );
};

export default Pizza;
