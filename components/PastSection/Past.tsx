import Image from "next/image";
import React from "react";
import {
  Button,
  ButtonContainer,
  ChoiseContainer,
  Container,
  Counter,
  CounterButton,
  FlexContainer,
  OrderContainer,
  Price,
  Text,
  TextBold,
  Title,
  Div,
  ButtonFlex,
  ImageContainer,
  Quantity,
} from "./styles";
import past from "../../assets/pizzas/stipska.jpg";

const Past = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={past} width={500} height={500} alt="past" />
      </ImageContainer>
      <Div>
        <FlexContainer>
          <Title>Пастрмајлија</Title>
          <Text>Алергени- млеко, јајца, житни култури</Text>
          <Price>260 ден - 450 ден</Price>
          <TextBold>Бесплатна достава низ цела Битола</TextBold>
          <ChoiseContainer>
            <ButtonContainer>
              <Text>Големина</Text>
              <ButtonFlex>
                <Button>Малa</Button>
                <Button>Голема</Button>
              </ButtonFlex>
            </ButtonContainer>
            <ButtonContainer>
              <Text>Тип на пастрмајлија</Text>
              <ButtonFlex>
                <Button>Пилешка</Button>
                <Button>Свинска</Button>
              </ButtonFlex>
            </ButtonContainer>
            <ButtonContainer>
              <Text>Додаток на пастрмајлија</Text>
              <ButtonFlex
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button>Без додаток</Button>
                <Button>Јајце</Button>
                <Button>Кашкавал 50гр</Button>
                <Button>Кашкавал 100гр</Button>
              </ButtonFlex>
            </ButtonContainer>
          </ChoiseContainer>
          <Text>Пилешка мала без додаток: Пилешко месо, феферони</Text>
        </FlexContainer>
        <OrderContainer>
          <Price>260 ден</Price>
          <Text>Бесплатна достава низ цело Скопје</Text>
          <Counter>
            <CounterButton>-</CounterButton>
            <Quantity>1</Quantity>
            <CounterButton>+</CounterButton>
          </Counter>
          <Button>Нарачај</Button>
        </OrderContainer>
      </Div>
    </Container>
  );
};

export default Past;
