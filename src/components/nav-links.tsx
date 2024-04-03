import { ComponentProps } from "react"

interface NavLinksProps extends ComponentProps<'a'> {
    children: string
}

export function NavLinks(props: NavLinksProps) {
    
    return (
        <a {...props} className='font-medium text-sm'>{props.children}</a>
    )
}