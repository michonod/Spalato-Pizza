import styled, { css } from "styled-components";
import { Avatar } from "antd";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #f7fcffab;
  position: relative;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  margin: 10px;
  box-shadow: 10px 10px 10px 1px rgba(227, 227, 221);
  cursor: pointer;
  :hover {
    background-color: rgb(233 233 233 / 71%);
    transform: translateY(2px);
    transition: 0.3s box-shadow ease-in, 0.2s transform ease-in;
    box-shadow: 10px 10px 4px 0px rgba(217, 217, 217, 0.71);
  }
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
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: #333333cf;
  color: #ffffff;
  border: none;
  font-size: 13px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  :hover {
    transition: 0.2s background ease-in, 0.2s transform ease-in;
    background: #333333;
    transform: translateY(-2px);
  }
  :active {
    transform: translateY(1px);
  }
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
