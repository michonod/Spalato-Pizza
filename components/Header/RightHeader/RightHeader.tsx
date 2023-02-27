import { useState } from "react";
import { Container, Div, LoginModal } from "./styles";
import { Button, Drawer } from "antd";
import LoginForm from "../../Login/LoginForm";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../../../pages";
import { SingleElement } from "./SingleElement";
import { LanguageSwitch } from "../Switch/Switch";
import { useTranslation } from "react-i18next";
import { headerObject } from "../utils/headerHelpers";

const RightHeader = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const modalOpenHandler = () => setShowModal(true);
  const modalCloseHandler = () => setShowModal(false);
  const drawerOpenHandler = () => setShowDrawer(true);
  const drawerCloseHandler = () => setShowDrawer(false);
  const [language, setLanguage] = useState<"mk" | "en">();

  const { t, i18n } = useTranslation();

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
          showModal={(showModal) => setShowModal(showModal)}
          products={[]}
        />
      </LoginModal>
      <Drawer
        title={t("settings")}
        placement="right"
        open={showDrawer}
        onClose={drawerCloseHandler}
        extra={
          <>
            <Button
              type="primary"
              onClick={() => {
                i18n.changeLanguage(language);
                setShowDrawer(false);
              }}
            >
              {t("save")}
            </Button>
          </>
        }
      >
        <Div>
          <p>{t("changeLanguage")}</p>
          <LanguageSwitch
            setLanguage={(state) => setLanguage(state ? "mk" : "en")}
          />
        </Div>
      </Drawer>
      {headerObject.map((item) => {
        const title = t(item.title as string);
        const handlersMap = new Map<string, () => void>([
          ["login", modalOpenHandler],
          ["settings", drawerOpenHandler],
        ]);
        return (
          <SingleElement
            icon={item.icon}
            title={title}
            onClick={handlersMap.get(item.title || "")}
            isCart={item.title === "cart"}
            key={item.id}
          />
        );
      })}
    </Container>
  );
};

export default RightHeader;
