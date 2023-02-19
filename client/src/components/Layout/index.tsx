import React, { PropsWithChildren } from 'react'
import NavbarComponent from './navbar'

const LayoutWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
        <NavbarComponent/>
        {children}
        </>
    )
}

export default LayoutWrapper