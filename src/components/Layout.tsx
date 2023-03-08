import React, { ReactNode, useState } from 'react'
import { useShoppingCartAndNav } from '../store/CartContext'
import Cart from './Cart'
import Navbar from './Navbar'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    const { activeMobileNav, setActiveMobileNav } = useShoppingCartAndNav()
    return (
        <>
            <div
                className={`relative ${
                    activeMobileNav
                        ? ' bg-black/60  w-screen min-h-screen overflow-y-hidden'
                        : 'max-w-[1440px]'
                }  max-h-screen px-0 sm:px-16 xl:px-36 py-4 m-auto`}
            >
                <header>
                    <Navbar
                        setActiveMobileNav={setActiveMobileNav}
                        activeMobileNav={activeMobileNav}
                    />
                </header>

                <main className="flex items-center justify-center w-full h-full">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
