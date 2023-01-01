import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import MainSection from "../Main/Main";
import { Container } from "./styles";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../../pages";

const Main = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Header users={users} />
      <Navbar />
      <MainSection />
    </Container>
  );
};

export default Main;
