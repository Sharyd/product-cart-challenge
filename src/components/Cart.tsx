import React from 'react'
import { useShoppingCartAndNav } from '../store/CartContext'
import IconDelete from '../svgs/IconDelete'

const Cart = () => {
    const { cartItems, handleDelete } = useShoppingCartAndNav()

    const totalPrice = cartItems && cartItems.price * cartItems.amount

    return (
        <>
            <div className="absolute top-24 z-20 rounded-lg bg-white right-[4%] md:right-16 md:top-32 shadow-2xl w-[350px] h-[250px]">
                <p className="p-5 font-bold border-b border-GrayishBlue">
                    Cart
                </p>
                {cartItems === null ? (
                    <>
                        <div className="flex items-center justify-center h-[75%]">
                            <p className="font-bold text-DarkGrayishBlue">
                                Your cart is empty
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="p-5 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <img
                                className="w-12 h-12 rounded-md"
                                src={cartItems.image}
                                alt=""
                            />
                            <div>
                                <p className="text-DarkGrayishBlue">
                                    {cartItems.name}
                                </p>
                                <div className="flex gap-3">
                                    <span className="text-DarkGrayishBlue">
                                        ${cartItems.price.toFixed(2)} x{' '}
                                        {cartItems.amount}
                                    </span>
                                    <span className="font-bold text-black">
                                        ${totalPrice?.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={handleDelete}
                                className="cursor-pointer text-GrayishBlue hover:text-black"
                            >
                                <IconDelete />
                            </div>
                        </div>
                        <button className="w-full text-white font-bold bg-orange py-4 px-6 rounded-lg">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart
