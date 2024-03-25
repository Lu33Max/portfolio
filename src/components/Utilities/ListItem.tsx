import React, { type ReactNode } from 'react'

type ItemProps = {
    children: ReactNode,
    style?: string
}

const ListItem = ({children, style}: ItemProps) => {
  return (
    <li className={`relative after:content-[" "] after:w-2 after:h-2 after:bg-[#6751b9] after:rounded-lg after:absolute after:left-[-1.3rem] after:top-[0.50rem] ${style}`}>
        {children}
    </li>
  )
}

export default ListItem
