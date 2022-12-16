import React, { useState } from "react";
import { CartNumber, Container, LoginModal } from "./styles";
import { Tooltip } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";
import Link from "next/link";
import LoginForm from "../../Login/LoginForm";

//this should be refactored
const RightHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOk = () => setShowModal(false);
  const handleCancel = () => setShowModal(false);
  return (
    <Container>
      <Link href="/" onClick={() => setShowModal(true)}>
        <Logo>
          <Tooltip title="Логирај се" placement="bottom">
            <UserOutlined style={{ fontSize: "20px" }} />
          </Tooltip>
        </Logo>
      </Link>
      <LoginModal
        title="Логирај се"
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Затвори"
        okText="Логирај се"
      >
        <LoginForm />
      </LoginModal>
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
