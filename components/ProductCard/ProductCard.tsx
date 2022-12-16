import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
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
import { ProductTypes } from "./types";
import { getPrice } from "../../utils/getPrice";

const ProductCard = ({
  description,
  image,
  priceFrom,
  priceTo,
  title,
  icon,
  currency,
  onCardClick,
  onButtonClick,
}: ProductTypes) => {
  return (
    <>
      <CardContainer onClick={onCardClick} role="button">
        <ImageContainer>
          <Image width={220} height={220} src={image} alt="pizza" />
        </ImageContainer>
        <Flex>
          <Price>{getPrice({ currency, priceFrom, priceTo })}</Price>

          <AbsoluteContainer>
            <Avatar icon={<UserOutlined />} size={50} />
          </AbsoluteContainer>
        </Flex>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Button onClick={onButtonClick}>Нарачај веднаш</Button>
        </TextContainer>
      </CardContainer>
    </>
  );
};

export default ProductCard;
