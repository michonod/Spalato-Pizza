import styled from "styled-components";
import { CloseCircleOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 60px 20px;
  position: relative;
`;
export const Input = styled.input`
  width: 400px;
  height: 35px;
  padding: 5px;
  border-radius: 4px;
`;
export const Label = styled.label`
  margin: 20px 0;
  font-size: 14px;
`;
export const Button = styled.button`
  padding: 8px 15px;
  font-size: 14px;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
`;
export const CheckboxLabel = styled.label``;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: 20px;
  &:hover {
    color: #333373;
  }
`;

export const Close = styled(CloseCircleOutlined)`
  font-size: 30px;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  :hover {
    color: #333333;
  }
`;

export const RegisterBtn = styled(Button)`
  border-radius: 8px;
  margin-top: 10px;
  padding: 8px 30px;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  background: white;
  transition: 0.3s all ease-in;
  :hover {
    background-color: #e2e2e2;
    border: 1px solid black;
  }
`;
