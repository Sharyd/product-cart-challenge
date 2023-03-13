import React from 'react'
import { data } from '../lib/data'
import IconClose from '../svgs/IconClose'
import IconNext from '../svgs/IconNext'
import IconPrevious from '../svgs/IconPrevious'

interface Props {
    activeLargeImage: number
    handleActiveImage: (idx: number) => void
    setIsActiveLightBox: React.Dispatch<React.SetStateAction<boolean>>
    setActiveLargeImage: React.Dispatch<React.SetStateAction<number>>
    activeProduct: number
    prevSlide: (e: Event) => void
    nextSlide: (e: Event) => void
}

const LightBox = ({
    activeLargeImage,
    handleActiveImage,
    setIsActiveLightBox,
    setActiveLargeImage,
    activeProduct,
    prevSlide,
    nextSlide,
}: Props) => {
    return (
        <div
            onClick={() => setIsActiveLightBox(false)}
            className="flex z-[9999] items-center justify-center  absolute min-h-screen w-full md:w-screen top-0 bg-black/60 overflow-y-hidden overflow-x-hidden"
        >
            <div className="relative flex flex-col gap-6 max-w-[315px] sm:max-w-[485px] lg:max-w-[650px] ">
                <div className=" cursor-pointer absolute -top-7 right-0 text-orange">
                    <IconClose />
                </div>
                <img
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-xl "
                    src={
                        data[activeProduct].images[activeLargeImage].largeImage
                    }
                    alt=""
                />

                <div
                    onClick={(e: any) => prevSlide(e)}
                    className="cursor-pointer bg-white flex items-center justify-center h-12 w-12 rounded-full absolute text-orange top-[50%] -translate-x-1/2 -translate-y-1/2 left-0"
                >
                    <IconPrevious />
                </div>
                <div
                    onClick={(e: any) => nextSlide(e)}
                    className="cursor-pointer bg-white flex items-center justify-center h-12 w-12 rounded-full absolute text-orange top-[50%] translate-x-1/2 -translate-y-1/2 right-0"
                >
                    <IconNext />
                </div>

                <div className="flex justify-center gap-6">
                    {data[activeProduct].images.map((image, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl w-max h-full bg-white ${
                                activeLargeImage === idx
                                    ? 'border-[3px] border-orange'
                                    : ''
                            }`}
                        >
                            <img
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleActiveImage(idx)
                                }}
                                className={`${
                                    activeLargeImage === idx ? 'opacity-40' : ''
                                } w-16 h-16 md:w-24 md:h-24 rounded-xl  cursor-pointer hover:opacity-40 transition-all`}
                                src={image.smallImage}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LightBox
