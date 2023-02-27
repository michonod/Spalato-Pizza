import { Tooltip } from "antd";
import Logo from "./Logo";
import { CartNumber, IconDiv } from "./styles";
import { SingleElementType } from "../types";

export const SingleElement = ({
  icon,
  link,
  title,
  onClick,
  isCart,
}: SingleElementType) => {
  return (
    <Logo onClick={onClick}>
      <Tooltip title={title} placement="bottom">
        {isCart && <CartNumber>1</CartNumber>}
        <IconDiv>{icon}</IconDiv>
      </Tooltip>
    </Logo>
  );
};
