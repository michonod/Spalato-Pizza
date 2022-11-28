import styled from "styled-components";

export const Container = styled.div`
  border-radius: 30px;
  background-color: #f7fcffab;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  &:hover {
    background-color: #ffffff;
  }
  transition: background-color 0.3s ease-in;
`;

export const CartNumber = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: red;
  color: white;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
`;
