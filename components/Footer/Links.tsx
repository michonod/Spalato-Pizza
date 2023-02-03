import React from "react";
import { Div, Link, LinksContainer } from "./styles";
import { v4 } from "uuid";
import { useTranslation } from "react-i18next";

const LinkData: { name: string; link: string; key: string }[] = [
  {
    name: "pizza",
    link: "#pizza",
    key: v4(),
  },
  {
    name: "pastrmajlija",
    link: "#pastrmajlija",
    key: v4(),
  },
  {
    name: "sandwiches",
    link: "#sandwiches",
    key: v4(),
  },
  {
    name: "desert",
    link: "#dessert",
    key: v4(),
  },
  {
    name: "drinks",
    link: "#drinks",
    key: v4(),
  },
];

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

