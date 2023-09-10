"use client"
import {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion";
import {fadeIn} from "../../variants";
import {ChevronLeft, ChevronRight} from "lucide-react";


const slides = [
    {
        path: "/images/slider-1.jpg",
        title: "Transformez Vos Rêves en Réalité"
    },
    {
        path: "/images/slider-2.jpg",
        title: "Transformez Vos Espaces, Votre Style.",

    },
    {
        path: "/images/slider-3.jpg",
        title: "Un Suivi Personnalisé Tout au Long de Votre Projet",

    }


]
// @ts-ignore
export default function Carousel({
                                     autoSlide = true,
                                     autoSlideInterval = 5000,
                                 }) {
    const [curr, setCurr] = useState(0)

    // const prev = () =>
    //     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    const slideToShow = slides[curr].path;
    const slideTitle = slides[curr].title;

    // @ts-ignore
    const smallButton = slides.map((_, i) => (
        <div
            onClick={() => setCurr(i)}
            key={i}
            className={`
              transition-all w-2 h-2 bg-black border rounded-full cursor-pointer duration-200 transform
              ${curr === i ? "p-[6px]" : "bg-opacity-50"}
            `}
        />
    ))
    useEffect(() => {
        // @ts-ignore
        let slideInterval;

        if (autoSlide) {
            slideInterval = setInterval(() => {
                next();
            }, autoSlideInterval);
        }

        // @ts-ignore
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, curr]);
    // @ts-ignore
    return (
        <div className="overflow-hidden object-cover z-10 h-[500px] relative">
            <div className={"h-auto"}>
                <div className={"inset-0 h-auto"}>


                    <AnimatePresence initial={false} custom={curr}>

                        <motion.div
                            key={curr}
                            className="flex h-screen"
                            initial={{opacity: 0, x: 1}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -5}}
                            transition={{ease: "easeInOut", duration: 0.8}}
                        >

                            <motion.img
                                src={slideToShow}
                                className={"h-full w-full object-cover "}
                                key={curr}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/*Degradé*/}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent bg-opacity-10 ">

                    </div>
                    <div
                        className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent bg-opacity-10 ">

                    </div>


                    <div
                        className="absolute left-0 right-0 mx-auto w-[100%] inset-0 flex items-center justify-center text-white duration-200 transform transition-all ">
                        <AnimatePresence>
                            <div
                                className={"bg-transparent absolute top-4 flex flex-col items-center uppercase "}>
                                <motion.div
                                    key={curr + 1}
                                    variants={fadeIn("left", 0.8)}
                                    initial={{opacity: 0, x: 100}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -100}}
                                    transition={{ease: "easeInOut", duration: 1}}
                                >
                                    <span className={"text-6xl font-bold"}>{slideTitle}</span>
                                </motion.div>

                            </div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div
                className="absolute top-[50%] w-full px-4">
                <div
                    className="flex items-center justify-between gap-2 text-6xl text-black z-40 w-full">
                    <span className={"px-4 py-3 bg-white rounded"}><ChevronLeft/></span>
                    <span className={"px-4 py-3 bg-white rounded"}><ChevronRight/></span>
                </div>
            </div>

            <div
                className="absolute bottom-10 rounded-b-3xl right-0 left-0 z-40   mx-auto ">
                <div
                    className="flex items-center justify-center gap-2 ">
                    {smallButton}
                </div>
            </div>
        </div>
    )
}