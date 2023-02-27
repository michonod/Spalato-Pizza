export type LogoProps = {
    children: JSX.Element;
    onClick?: () => void
};

export type HeaderType = {
    title?: string;
    icon: JSX.Element;
    link?: string
    id: number
    onClick?: () => void
}[]

export type SingleElementType = {
    title?: string
    icon: JSX.Element
    link?: string
    onClick?: () => void
    isCart: boolean
}