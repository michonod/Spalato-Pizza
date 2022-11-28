import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import {
  CardContainer,
  Price,
  Title,
  Text,
  Button,
  Flex,
  AbsoluteContainer,
} from "./styles";

const ProductCard = () => {
  return (
    <CardContainer>
      <Flex>
        <Price>460ден-550ден</Price>
        <AbsoluteContainer>
          <Avatar icon={<UserOutlined />} size={50} />
        </AbsoluteContainer>
      </Flex>

      <Title>Костарика Пица</Title>
      <Text>
        доматен сос, кашкавал, печурки, шунка, маслинки, свински врат, кулен,
        павлака, оригано, сусам
      </Text>
      <Button>Нарачај веднаш</Button>
    </CardContainer>
  );
};

export default ProductCard;
