import React from "react";
import { Div, Link, LinksContainer } from "./styles";
import { v4 } from "uuid";

const LinkData: { name: string; link: string; key: string }[] = [
  {
    name: "Пица",
    link: "#pizza",
    key: v4(),
  },
  {
    name: "Пастрмајлија",
    link: "#pastrmajlija",
    key: v4(),
  },
  {
    name: "Сендвичи",
    link: "#sandwiches",
    key: v4(),
  },
  {
    name: "Десерт",
    link: "#dessert",
    key: v4(),
  },
  {
    name: "Пијалоци",
    link: "#drinks",
    key: v4(),
  },
];

const Links = () => {
  return (
    <Div>
      <LinksContainer>
        {LinkData.map((link) => (
          <Link key={link.key}>{link.name}</Link>
        ))}
      </LinksContainer>
    </Div>
  );
};

export default Links;
