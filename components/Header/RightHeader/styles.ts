import { Modal } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 30px;
  background-color: #f7fcffab;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginModal = styled(Modal)`
  .ant-btn-primary,
  .ant-btn-default {
    padding: 6px 25px;
    height: auto;
    font-size: 16px;
  }
  .ant-btn-primary {
    background-color: #347c4f;
    :hover {
      background-color: #48ac6d;
    }
  }
  .ant-btn-default {
    border-color: #347c4f;
    :hover {
      color: #48ac6d;
      border-color: #48ac6d;
    }
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
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
