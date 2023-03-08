import React, { useState } from 'react'
import IconCart from '../svgs/IconCart'
import IconMinus from '../svgs/IconMinus'
import IconPlus from '../svgs/IconPlus'
import LightBox from './LightBox'
import { data } from '../lib/data'
import { useShoppingCartAndNav } from '../store/CartContext'
import IconPrevious from '../svgs/IconPrevious'
import IconNext from '../svgs/IconNext'

const Product = () => {
    const [amount, setAmount] = useState(0)
    const [activeLargeImage, setActiveLargeImage] = useState(0)
    const [activeProduct, setActiveProduct] = useState(0)
    const [isActiveLightBox, setIsActiveLightBox] = useState(false)
    const { cartItems, setCartItems, activeMobileNav, setActiveMobileNav } =
        useShoppingCartAndNav()
    const handleActiveImage = (idx: number) => {
        setActiveLargeImage(idx)
    }

    const handleAddProduct = () => {
        if (amount === 0) return
        setCartItems({
            id: data[activeProduct].id,
            image: data[activeProduct].image,
            name: data[activeProduct].name,
            price: data[activeProduct].actualPrice,
            amount: amount,
        })
    }
    const nextSlide = (e: Event) => {
        e.stopPropagation()
        if (activeLargeImage !== data[0].images.length - 1) {
            setActiveLargeImage((prev) => prev + 1)
        } else {
            setActiveLargeImage(0)
        }
    }

    const prevSlide = (e: Event) => {
        e.stopPropagation()
        if (activeLargeImage !== 0) {
            setActiveLargeImage((prev) => prev - 1)
        } else {
            setActiveLargeImage(data[0].images.length - 1)
        }
    }

    return (
        <>
            <section
                className={`${
                    activeMobileNav
                        ? 'opacity-20 -z-10 bg-black/60 min-w-screen min-h-screen'
                        : ''
                }max-h-full w-full flex flex-col md:flex-row   items-center p-4 overflow-x-hidden md:overflow-x-visible  sm:p-10 lg:p-20 justify-center gap-10  lg:gap-24`}
            >
                <div className="relative flex p-0 sm:p-4 flex-col gap-6 w-[425px] sm:w-[400px] xl:w-[450px]">
                    <img
                        onClick={() => setIsActiveLightBox(true)}
                        className="cursor-pointer h-[350px]  object-cover rounded-xl"
                        src={
                            data[activeProduct].images[activeLargeImage]
                                .largeImage
                        }
                        alt=""
                    />
                    <div
                        onClick={(e: any) => prevSlide(e)}
                        className="cursor-pointer bg-white/80 hover:bg-white flex sm:hidden items-center justify-center h-12 w-12 rounded-full absolute top-[50%] -translate-y-1/2 sm:left-4 left-8"
                    >
                        <IconPrevious />
                    </div>
                    <div
                        onClick={(e: any) => nextSlide(e)}
                        className="cursor-pointer bg-white/80 hover:bg-white flex sm:hidden items-center justify-center h-12 w-12 rounded-full absolute  top-[50%] -translate-y-1/2 sm:right-4 right-8"
                    >
                        <IconNext />
                    </div>
                    <div className="hidden sm:flex justify-between gap-6">
                        {data[activeProduct].images.map((image, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl w-20  ${
                                    activeLargeImage === idx
                                        ? 'border-[3px] border-orange'
                                        : ''
                                }`}
                            >
                                <img
                                    onClick={() => handleActiveImage(idx)}
                                    className={`${
                                        activeLargeImage === idx
                                            ? 'opacity-40'
                                            : ''
                                    }  rounded-xl cursor-pointer hover:opacity-40 transition-all`}
                                    src={image.smallImage}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="px-4">
                    {data.map((product, idx) => (
                        <div
                            className="flex flex-col gap-6 flex-1 md:w-[300px] lg:w-[350px] xl:w-[450px] mb-6"
                            key={idx}
                        >
                            <p className="text-orange uppercase font-bold text-sm">
                                {product.company}
                            </p>
                            <h2 className="font-bold text-4xl">
                                {product.name}
                            </h2>
                            <p className="text-DarkGrayishBlue">
                                {product.desc}
                            </p>
                            <div className="flex lg:flex-col flex-row justify-between items-center lg:items-start gap-2">
                                <div className="flex items-center gap-4">
                                    <p className="font-bold text-2xl">
                                        ${product.actualPrice.toFixed(2)}
                                    </p>
                                    <span className="text-orange bg-PaleOrange px-1.5 py-0.5 font-bold rounded-md">
                                        50%
                                    </span>
                                </div>
                                <p className="text-GrayishBlue line-through">
                                    ${product.lastPrice.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        <div className="bg-GrayishBlue/10 w-full justify-between lg:justify-center lg:w-max rounded-lg flex items-center gap-5">
                            <span
                                onClick={() =>
                                    setAmount((prev) =>
                                        prev === 0 ? 0 : prev - 1
                                    )
                                }
                                className="cursor-pointer px-5 py-5"
                            >
                                <IconMinus />
                            </span>
                            <p className="font-bold">{amount}</p>
                            <span
                                onClick={() =>
                                    setAmount((prev) =>
                                        prev === 20 ? 20 : prev + 1
                                    )
                                }
                                className="cursor-pointer px-5 py-5"
                            >
                                <IconPlus />
                            </span>
                        </div>
                        <button
                            onClick={() => handleAddProduct()}
                            className="flex w-full lg:w-max hover:bg-orange/60 bg-orange py-3 px-4 rounded-lg flex-1 items-center justify-center gap-3 font-bold text-white"
                        >
                            <span className="text-white">
                                <IconCart />
                            </span>
                            Add to cart
                        </button>
                    </div>
                </div>
            </section>
            {isActiveLightBox && (
                <LightBox
                    activeLargeImage={activeLargeImage}
                    handleActiveImage={handleActiveImage}
                    setIsActiveLightBox={setIsActiveLightBox}
                    setActiveLargeImage={setActiveLargeImage}
                    activeProduct={activeProduct}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                />
            )}
        </>
    )
}

export default Product
