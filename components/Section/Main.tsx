import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import MainSection from "../Main/Main";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <MainSection />
    </Container>
  );
};

export default Main;
