import React from "react";
import { CartNumber, Container } from "./styles";
import { Tooltip } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";
import Link from "next/link";

//this should be refactored
const RightHeader = () => {
  return (
    <Container>
      <Link href="/login">
        <Logo>
          <Tooltip title="Логирај се" placement="bottom">
            <UserOutlined style={{ fontSize: "20px" }} />
          </Tooltip>
        </Logo>
      </Link>
      <Logo>
        <Tooltip title="Види ја кошничката" placement="bottom">
          <CartNumber>0</CartNumber>
          <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        </Tooltip>
      </Logo>
      <Logo>
        <Tooltip title="Пребарувај" placement="bottom">
          <SearchOutlined style={{ fontSize: "20px" }} />
        </Tooltip>
      </Logo>
    </Container>
  );
};

export default RightHeader;
