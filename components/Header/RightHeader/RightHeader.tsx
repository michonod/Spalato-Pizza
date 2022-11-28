import React from "react";
import { CartNumber, Container } from "./styles";
import { Tooltip } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";
import { motion } from "framer-motion";

//this should be refactored
const RightHeader = () => {
  return (
    <Container>
      <Logo>
        <UserOutlined style={{ fontSize: "20px" }} />
      </Logo>
      <Logo>
        <Tooltip title="Види ја кошничката" placement="bottom">
          <CartNumber>0</CartNumber>
          <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        </Tooltip>
      </Logo>
      <Logo>
        <SearchOutlined style={{ fontSize: "20px" }} />
      </Logo>
    </Container>
  );
};

export default RightHeader;
