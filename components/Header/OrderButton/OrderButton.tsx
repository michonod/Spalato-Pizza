import React from "react";
import { ButtonContainer, Telephone, Text } from "./styles";
import { PhoneFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const OrderButton = () => {
  const { t } = useTranslation()
  return (
    <ButtonContainer>
      <Text>{t('orders')}</Text>
      <Telephone href="tel:075274395">
        <PhoneFilled /> 075 274 395
      </Telephone>
    </ButtonContainer>
  );
};

export default OrderButton;
