import React, { ReactNode, useState } from "react";
import { CartNumber, Container, LoginModal } from "./styles";
import { Button, Drawer, Tooltip } from "antd";
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
import { LanguageSwitch } from "../Switch/Switch";

type HeaderType = {
  title?: string;
  icon: JSX.Element;
  link?: string
  id: number
  onClick?: () => void
}[]


const RightHeader = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false)

  const modalOpenHandler = () => setShowModal(true)
  const modalCloseHandler = () => setShowModal(false);
  const drawerOpenHandler = () => setShowDrawer(true)
  const drawerCloseHandler = () => setShowDrawer(false);


  const headerObject: HeaderType = [{
    title: 'Логирај се',
    icon: <UserOutlined />,
    link: '/',
    id: 1,
    onClick: modalOpenHandler
  },
  {
    title: 'Види ја кошничката',
    icon: <ShoppingCartOutlined />,
    id: 2

  },
  {
    title: 'Пребарувај',
    icon: <SearchOutlined />,
    id: 3

  },
  {
    title: 'Подесувања',
    icon: <SettingOutlined />,
    id: 4
    ,
    onClick: drawerOpenHandler
  }
  ]


  return (
    <Container>
      <LoginModal
        title="Логирај се"
        open={showModal}
        onCancel={modalCloseHandler}
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
      <Drawer title="Подесувања" placement="right" open={showDrawer} onClose={drawerCloseHandler} extra={<>
        <Button type="primary" >
          Зачувај
        </Button></>}>
        <div style={{ display: 'flex', marginTop: "30px", justifyContent: 'space-between' }}>
          <p>Промени јазик</p>
          <LanguageSwitch />
        </div>
      </Drawer>
      {
        headerObject.map((item) => {
          return <SingleElement icon={item.icon} title={item.title} onClick={item.onClick} />
        })
      }
    </Container >
  );
};

export default RightHeader;
