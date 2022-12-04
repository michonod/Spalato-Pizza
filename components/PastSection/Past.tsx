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
import {
  increment,
  decrement,
  product,
  size,
  type,
  addon,
} from "../../assets/store/pastrmajlijaReducer";
const Past = () => {
  const selector = useSelector((state: RootState) => {
    return {
      counter: state.pastrmajlija.value,
      addon: state.pastrmajlija.addon,
      size: state.pastrmajlija.size,
      type: state.pastrmajlija.type,
    };
  });
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
                  <Button
                    onClick={() => dispatch(size("small"))}
                    value="small"
                    active={selector.size === "small"}
                  >
                    Малa
                  </Button>
                  <Button
                    onClick={() => dispatch(size("large"))}
                    value="large"
                    active={selector.size === "large"}
                  >
                    Голема
                  </Button>
                </ButtonFlex>
              </ButtonContainer>
              <ButtonContainer>
                <Text>Тип на пастрмајлија</Text>
                <ButtonFlex>
                  <Button
                    active={selector.type === "chicken"}
                    onClick={() => dispatch(type("chicken"))}
                    value="chicken"
                  >
                    Пилешка
                  </Button>
                  <Button
                    active={selector.type === "pork"}
                    onClick={() => dispatch(type("pork"))}
                    value="pork"
                  >
                    Свинска
                  </Button>
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
                  <Button
                    value=""
                    active={selector.addon === ""}
                    onClick={() => dispatch(addon(""))}
                  >
                    Без додаток
                  </Button>
                  <Button
                    value="egg"
                    active={selector.addon === "egg"}
                    onClick={() => dispatch(addon("egg"))}
                  >
                    Јајце
                  </Button>
                  <Button
                    value="cheese 50gr"
                    active={selector.addon === "cheese 50gr"}
                    onClick={() => dispatch(addon("cheese 50gr"))}
                  >
                    Кашкавал 50гр
                  </Button>
                  <Button
                    value="cheese 100gr"
                    active={selector.addon === "cheese 100gr"}
                    onClick={() => dispatch(addon("cheese 100gr"))}
                  >
                    Кашкавал 100гр
                  </Button>
                </ButtonFlex>
              </ButtonContainer>
            </ChoiseContainer>
            <Text>Пилешка мала без додаток: Пилешко месо, феферони</Text>
          </FlexContainer>
          <OrderContainer>
            <Price>260 ден</Price>
            <Text>Бесплатна достава низ цела Битола</Text>
            <Counter>
              <CounterButton onClick={() => dispatch(decrement())}>
                -
              </CounterButton>
              <Quantity>{selector.counter}</Quantity>
              <CounterButton onClick={() => dispatch(increment())}>
                +
              </CounterButton>
            </Counter>
            <Button onClick={() => dispatch(product("Pastrmajlija"))}>
              Нарачај
            </Button>
          </OrderContainer>
        </Div>
      </Container>
    </DivContainer>
  );
};

export default Past;
