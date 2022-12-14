import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin: 200px auto;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  font-size: 35px;
  margin: 0;
  font-weight: 600;
`;
export const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
export const Text = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 20px;
  margin-bottom: 10px;
`;
export const TextBold = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const TextSmall = styled.p``;
export const ChoiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonFlex = styled.div`
  margin: 10px 0;
  margin-left: 100px;
`;
export const Button = styled.button<{ active?: boolean }>`
  padding: 8px 17px;
  margin: 5px;
  border-color: transparent;
  border-radius: 4px;
  font-size: 13px;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
  background-color: #737373;
  color: #f1f1f1;
  &:hover {
    background-color: #333333;
    color: white;
  }
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#333333" : "#737373")};
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  margin: 20px 0;
  border: 1px solid #e4fcef;
  color: #e4fcef;
`;
export const Quantity = styled.p`
  margin: auto;
`;
export const CounterButton = styled.div`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #e4fcef;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e4fcef;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #333333;
    color: white;
  }
  /* margin: 0 10px; */
`;
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const Div = styled.div``;

export const ImageContainer = styled.div`
  margin-top: 50px;
  width: 600px;
  height: 600px;
  position: relative;
`;

export const DivContainer = styled.div`
  background-color: #347c4f;
  padding: 30px 0;
  margin-top: 50px;
`;
