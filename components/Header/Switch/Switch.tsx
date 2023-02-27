import { Switch } from "antd";

export const LanguageSwitch = ({
  setLanguage,
}: {
  setLanguage: (state: boolean) => void;
}) => (
  <Switch
    checkedChildren="МК"
    unCheckedChildren="ЕN"
    defaultChecked
    onChange={(e) => setLanguage(e)}
  />
);
