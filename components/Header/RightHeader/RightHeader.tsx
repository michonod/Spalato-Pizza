import React, { ReactNode, useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";

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
  const [language, setLanguage] = useState<'mk' | 'en'>()

  console.log(language)

  const { t, i18n } = useTranslation()

  const headerObject: HeaderType = [{
    title: "login",
    icon: <UserOutlined />,
    link: '/',
    id: 1,
    onClick: modalOpenHandler
  },
  {
    title: 'cart',
    icon: <ShoppingCartOutlined />,
    id: 2

  },
  {
    title: 'search',
    icon: <SearchOutlined />,
    id: 3

  },
  {
    title: 'settings',
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
            {t("title")}
          </Button>,
        ]}
      >
        <LoginForm
          users={users}
          showModal={(showModal) => setShowModal(showModal)} products={[]} />
      </LoginModal>
      <Drawer title={t('settings')} placement="right" open={showDrawer} onClose={drawerCloseHandler} extra={<>
        <Button type="primary" onClick={() => {
          i18n.changeLanguage(language)
          setShowDrawer(false)
        }} >
          {t('save')}
        </Button></>}>
        <div style={{ display: 'flex', marginTop: "30px", justifyContent: 'space-between' }}>
          <p>{t('changeLanguage')}</p>
          <LanguageSwitch setLanguage={(state) => setLanguage(state ? 'mk' : 'en')} />
        </div>
      </Drawer>
      {
        headerObject.map((item) => {
          console.log(item)
          const title = t(item.title as string)
          return <SingleElement icon={item.icon} title={title} onClick={item.onClick} isCart={item.title === 'cart'} />
        })
      }
    </Container >
  );
};

export default RightHeader;
