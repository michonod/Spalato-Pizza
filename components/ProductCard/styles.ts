import styled, { css } from "styled-components";
import { Avatar } from "antd";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: honeydew;
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
  padding: 5px 12px;
  font-weight: 600;
  background-color: #333333;
  color: #ffffff;
  border: none;
  font-size: 13px;
`;
export const Text = styled.p`
  text-align: center;
`;
export const Title = styled.h5`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  margin-bottom: 0;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;
