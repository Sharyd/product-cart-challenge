import { createContext, useContext, ReactNode, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    image: string
    name: string
    price: number
    amount: number
}

type ShoppingCartAndNavContext = {
    handleDelete: () => void
    setCartItems: React.Dispatch<React.SetStateAction<CartItem | null>>
    cartItems: CartItem | null
    setActiveMobileNav: React.Dispatch<React.SetStateAction<boolean>>
    activeMobileNav: boolean
}

const ShoppingCartAndNavContext = createContext({} as ShoppingCartAndNavContext)

export const useShoppingCartAndNav = () => {
    return useContext(ShoppingCartAndNavContext)
}

export const ShoppingCartAndNavProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem | null>(
        'shopping-cart',
        null
    )
    const [activeMobileNav, setActiveMobileNav] = useState(false)

    const handleDelete = () => {
        setCartItems(null)
    }
    return (
        <ShoppingCartAndNavContext.Provider
            value={{
                cartItems,
                setCartItems,
                handleDelete,
                setActiveMobileNav,
                activeMobileNav,
            }}
        >
            {children}
        </ShoppingCartAndNavContext.Provider>
    )
}
