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
import { useTranslation } from "react-i18next";
import { description } from "./utils/pastHelpers";
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
  const { t } = useTranslation();

  return (
    <DivContainer>
      <Container>
        <ImageContainer>
          <Image src={past} fill alt="past" />
        </ImageContainer>
        <Div>
          <FlexContainer>
            <Title>{t("pastrmajlija")}</Title>
            <Text>{t("allergens")}</Text>
            <Price>260 ден - 450 ден</Price>
            <TextBold>{t("freeDelivery")}</TextBold>
            <ChoiseContainer>
              <ButtonContainer>
                <Text>{t("size")}</Text>
                <ButtonFlex>
                  <Button
                    onClick={() => dispatch(size("small"))}
                    value="small"
                    active={selector.size === "small"}
                  >
                    {t("small")}
                  </Button>
                  <Button
                    onClick={() => dispatch(size("large"))}
                    value="large"
                    active={selector.size === "large"}
                  >
                    {t("big")}
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
                    {t("chicken")}
                  </Button>
                  <Button
                    active={selector.type === "pork"}
                    onClick={() => dispatch(type("pork"))}
                    value="pork"
                  >
                    {t("pork")}
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
            <Text>{description(selector)}</Text>
          </FlexContainer>
          <OrderContainer>
            <Price>260 ден</Price>
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
