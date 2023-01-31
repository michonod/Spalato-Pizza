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
    return <Logo onClick={onClick} >
        <Tooltip title={title} placement="bottom">
            <div style={{ fontSize: '20px', borderRadius: '50%', height: '20px', width: '20px', cursor: 'pointer' }}>
                {icon}
            </div>
        </Tooltip>
    </Logo>
}


