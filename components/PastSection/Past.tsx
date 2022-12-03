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
  DivContainer,
} from "./styles";
import past from "../../assets/pizzas/stipska.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../assets/store/store";
import { increment, decrement } from "../../assets/store/useCart";
const Past = () => {
  const counter = useSelector((state: RootState) => state.amount.value);
  const dispatch = useDispatch();

  return (
    <DivContainer>
      <Container>
        <ImageContainer>
          <Image src={past} fill alt="past" />
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
              <CounterButton onClick={() => dispatch(decrement())}>
                -
              </CounterButton>
              <Quantity>{counter}</Quantity>
              <CounterButton onClick={() => dispatch(increment())}>
                +
              </CounterButton>
            </Counter>
            <Button>Нарачај</Button>
          </OrderContainer>
        </Div>
      </Container>
    </DivContainer>
  );
};

export default Past;
