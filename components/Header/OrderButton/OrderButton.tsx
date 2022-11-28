import React from "react";
import { ButtonContainer, Telephone, Text } from "./styles";
import { PhoneFilled } from "@ant-design/icons";

const OrderButton = () => {
  return (
    <ButtonContainer>
      <Text>Нарачки онлајн или на</Text>
      <Telephone href="tel:075274395">
        <PhoneFilled /> 075 274 395
      </Telephone>
    </ButtonContainer>
  );
};

export default OrderButton;
