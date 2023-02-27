import { RootState } from "assets/store/store";
import { t } from "i18next";

export const description = (selector: Partial<RootState["pastrmajlija"]>) =>
  `${selector.type === "chicken" ? t("chicken") : t("pork")} ${
    selector.size === "small" ? t("small") : t("big")
  } ${selector.addon === "" ? "без додаток" : t("with")} ${
    selector.addon === "cheese 100gr" ? `100 ${t("gr")}. ${t("cheese")}` : ""
  }${selector.addon === "cheese 50gr" ? `50 ${t("gr")}. ${t("cheese")}` : ""}${
    selector.addon === "egg" ? t("egg") : ""
  }: ${
    selector.type === "chicken"
      ? t("chicken")
      : `${t("pork")} ${t("meat")}, ${t("peppers")}`
  }`;
