import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";

export const socialMedia: { name: string; url: string; icon: JSX.Element }[] = [
    {
        name: "Instagram",
        url: "www.instagram.com",
        icon: <InstagramOutlined />
    },
    {
        name: "Facebook",
        url: "www.facebook.com",
        icon: <FacebookOutlined />
    },
];