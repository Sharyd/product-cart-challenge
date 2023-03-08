import React, { useEffect, useState } from 'react'
import { useShoppingCartAndNav } from '../store/CartContext'
import IconCart from '../svgs/IconCart'
import IconClose from '../svgs/IconClose'
import IconMenu from '../svgs/IconMenu'
import Cart from './Cart'
import avatar from '/images/image-avatar.png'

const LinkData = ['Collections', 'Men', 'Women', 'About', 'Contact']
const logo = './images/logo.svg'

interface Props {
    activeMobileNav: boolean
    setActiveMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ activeMobileNav, setActiveMobileNav }: Props) => {
    const [activeCart, setActiveCart] = useState(false)
    const [activeLink, setActiveLink] = useState(0)
    const { cartItems } = useShoppingCartAndNav()

    const [width, setWidth] = useState(window.innerWidth)

    const breakpoint = 1024

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        if (width < breakpoint) return setActiveMobileNav(false)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [width, breakpoint])

    return (
        <>
            <nav
                className={`${!activeMobileNav && 'relative'}
                flex justify-between px-6 w-full items-center gap-3 h-14 sm:h-32 sm:customBorderBottom`}
            >
                <div className="flex justify-center items-center gap-6 lg:gap-16">
                    <div
                        onClick={() => setActiveMobileNav(true)}
                        className="cursor-pointer block lg:hidden"
                    >
                        <IconMenu />
                    </div>
                    <img src={logo} alt="logo" />
                    {activeMobileNav ? (
                        <div className="z-10 block lg:hidden absolute h-screen w-[250px] bg-white left-0 top-0 ">
                            <div
                                onClick={() => setActiveMobileNav(false)}
                                className="absolute top-6 left-6 text-DarkGrayishBlue hover:text-black cursor-pointer"
                            >
                                <IconClose />
                            </div>
                            <ul className="absolute top-20 left-6  flex flex-col font-bold text-white lg:hidden  h-1/3 justify-center gap-4">
                                {LinkData.map((link, idx) => (
                                    <li
                                        onClick={() => setActiveLink(idx)}
                                        className={`${
                                            activeLink === idx
                                                ? 'text-black border-b-[5px] border-orange'
                                                : 'text-DarkGrayishBlue'
                                        } text-lg h-16 w-max cursor-pointer flex  items-center  hover:text-black`}
                                        key={link}
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        ''
                    )}
                    <ul className="lg:flex hidden items-end h-32 justify-center gap-8">
                        {LinkData.map((link, idx) => (
                            <li
                                onClick={() => setActiveLink(idx)}
                                className={`${
                                    activeLink === idx
                                        ? 'text-black border-b-[5px] border-orange'
                                        : 'text-DarkGrayishBlue'
                                } text-lg h-32 cursor-pointer flex  items-center  hover:text-black`}
                                key={link}
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative flex items-center justify-center gap-7">
                    <button
                        className="text-DarkGrayishBlue hover:text-black"
                        onClick={() => setActiveCart((prev) => !prev)}
                    >
                        <IconCart />
                        <span className="absolute text-[0.6rem] top-2  text-white bg-orange rounded-md px-1.5">
                            {cartItems?.amount}
                        </span>
                    </button>

                    <img
                        src={avatar}
                        className="cursor-pointer h-8 w-8 sm:w-12 sm:h-12 hover:border hover:border-orange rounded-full"
                        alt="profile image"
                    />
                </div>
            </nav>
            {activeCart && <Cart />}
        </>
    )
}

export default Navbar
