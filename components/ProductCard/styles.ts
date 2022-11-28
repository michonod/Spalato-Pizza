import styled, { css } from "styled-components";
import { Avatar } from "antd";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: honeydew;
  padding: 20px;
  position: relative;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 10px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Price = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  background-color: #333333;
  text-align: center;
  opacity: 0.8;
  border-radius: 4px;
  font-weight: 600;
  padding: 8px 10px;
  color: white;
  font-size: 14px;
`;
export const Badge = styled(Avatar)``;

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
export const Button = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 5px 20px;
  font-weight: 600;
  background-color: #333333;
  color: #ffffff;
  border: none;
  margin: 0 30px;
`;
export const Text = styled.p``;
export const Title = styled.h5`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
`;
