import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import custom from "../../assets/pizzas/custom.jpg";
import Image from "next/image";
import React from "react";
import {
  CardContainer,
  Price,
  Title,
  Text,
  Button,
  Flex,
  AbsoluteContainer,
  ImageContainer,
  TextContainer,
} from "./styles";

const ProductCard = () => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image width={220} height={220} src={custom} alt="pizza" />
        </ImageContainer>
        <Flex>
          <Price>460ден-550ден</Price>

          <AbsoluteContainer>
            <Avatar icon={<UserOutlined />} size={50} />
          </AbsoluteContainer>
        </Flex>
        <TextContainer>
          <Title>Костарика Пица</Title>
          <Text>
            доматен сос, кашкавал, печурки, шунка, маслинки, свински врат,
            кулен, павлака, оригано, сусам
          </Text>
          <Button>Нарачај веднаш</Button>
        </TextContainer>
      </CardContainer>
    </>
  );
};

export default ProductCard;
