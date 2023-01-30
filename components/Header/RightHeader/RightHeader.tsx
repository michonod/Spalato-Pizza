import React, { useState } from "react";
import { CartNumber, Container, LoginModal } from "./styles";
import { Button, Tooltip } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";
import Link from "next/link";
import LoginForm from "../../Login/LoginForm";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../../../pages";
import { SingleElement } from "./SingleElement";

// type HeaderType = {
//   text?: string;
//   icon: JSX.Element;
//   link?: string
// }[]

// const headerObject: HeaderType = [{
//   text: 'Логирај се',
//   icon: <UserOutlined />,
//   link: '/'
// },
// {
//   text: 'Види ја кошничката',
//   icon: <ShoppingCartOutlined />,
// },
// {
//   text: 'Пребарувај',
//   icon: <SearchOutlined />
// },
// {
//   text: 'Подесувања',
//   icon: <SettingOutlined />
// }

// ]

const RightHeader = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => setShowModal(false);
  return (
    <Container>

      <LoginModal
        title="Логирај се"
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button form="login" key="submit" type="default" htmlType="submit">
            Логирај се
          </Button>,
        ]}
      >
        <LoginForm
          users={users}
          showModal={(showModal) => setShowModal(showModal)} products={[]} />
      </LoginModal>
      <Link href="/" onClick={() => setShowModal(true)}>
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
      <Logo>
        <Tooltip title="Подесувања" placement="bottom">
          <SettingOutlined style={{ fontSize: "20px" }} />
        </Tooltip>
      </Logo>
    </Container>
  );
};

export default RightHeader;
