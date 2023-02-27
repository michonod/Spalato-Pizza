import { UserOutlined, ShoppingCartOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { HeaderType } from "../types";

export const headerObject: HeaderType = [{
    title: "login",
    icon: <UserOutlined />,
    link: '/',
    id: 1,
    // onClick: modalOpenHandler
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
    // onClick: drawerOpenHandler
}
]