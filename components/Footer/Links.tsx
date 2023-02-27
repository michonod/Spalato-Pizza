import React from "react";
import { Div, Link, LinksContainer } from "./styles";
import { useTranslation } from "react-i18next";
import { LinkData } from "./utils/links";



export const Links = () => {
  const { t } = useTranslation()
  return (
    <Div>
      <LinksContainer>
        {LinkData.map((link) => (
          <Link key={link.key}>{t(link.name)}</Link>
        ))}
      </LinksContainer>
    </Div>
  );
};

