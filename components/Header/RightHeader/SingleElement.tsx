import { Tooltip } from "antd"
import Link from "next/link"
import Logo from "./Logo"
import { CartNumber } from "./styles"

type SingleElement = {
    title?: string
    icon: JSX.Element
    link?: string
    onClick?: () => void
}

export const SingleElement = ({ icon, link, title, onClick }: SingleElement) => {
    return <Logo>
        <Tooltip title={title} placement="bottom">
            {icon}
        </Tooltip>
    </Logo>
}


