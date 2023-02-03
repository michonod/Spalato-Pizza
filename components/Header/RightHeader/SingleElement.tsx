import { Tooltip } from "antd"
import Link from "next/link"
import Logo from "./Logo"
import { CartNumber } from "./styles"

type SingleElement = {
    title?: string
    icon: JSX.Element
    link?: string
    onClick?: () => void
    isCart: boolean
}

export const SingleElement = ({ icon, link, title, onClick, isCart }: SingleElement) => {
    console.log(title)

    return <Logo onClick={onClick} >
        <Tooltip title={title} placement="bottom">
            {isCart && <CartNumber>1</CartNumber>}
            <div style={{ fontSize: '20px', borderRadius: '50%', height: '20px', width: '20px', cursor: 'pointer' }}>
                {icon}
            </div>
        </Tooltip>
    </Logo>
}


