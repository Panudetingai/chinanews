'use client'
import { Button, Card, CardBody, Chip, image } from '@nextui-org/react'
import React from 'react'
import { motion } from "framer-motion"
import { ButtonCard } from './ButtonCard'

const Image = [
    {
        image: '/image/1.png',
        button: "absolute top-[13.5rem] right-14 bg-red-dark text-white",
        link: "/SianXi"
    },
    {
        image: '/image/2.png',
        button: "absolute top-[13.5rem] right-14 bg-red-dark text-white",
        link: "/zodiac"
    },
    {
        image: '/image/3.png',
        button: "absolute top-[13.5rem] right-14 bg-red-dark text-white",
        link: "/mail"
    }
]

export default function ContextSection01() {
    return (
        <section className="flex flex-col items-center justify-center py-12 gap-4 overflow-hidden px-4">
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/image 42@2x.png'
                width={450}
                height={100}
                className='absolute left-0 top-0 -z-10 w-[200px] md:w-[350px] lg:w-[450px]' />
            <motion.img
                initial={{ x: 100, scaleX: -1, opacity: 0 }}
                animate={{ x: 0, scaleX: -1, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/image 42@2x.png'
                width={450}
                height={100}
                style={{ transform: 'scaleX(-1)' }}
                className='absolute right-0 top-0 -z-10 w-[200px] md:w-[350px] lg:w-[450px]' />
            
            {/* Hide decorative images on mobile */}
            <motion.img
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/item01.png'
                width={200}
                className='hidden md:block absolute top-40 left-72 -z-30 w-[100px] md:w-[150px] lg:w-[200px]'
            />
            <motion.img
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/item01.png'
                width={200}
                className='hidden md:block absolute top-[16rem] left-92 -z-30 w-[100px] md:w-[150px] lg:w-[200px]'
            />
            <motion.img
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/item01.png'
                width={200}
                className='hidden md:block absolute top-[8rem] left-[62rem] -z-30 w-[100px] md:w-[150px] lg:w-[200px]'
            />
            
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className='relative'>
                <h1 className='text-bold text-center text-2xl md:text-3xl lg:text-4xl bg-red-dark px-4 md:px-6 py-2 md:py-4 rounded-md text-white w-auto md:w-72'>
                    新年快乐语言
                </h1>
            </motion.header>
            
            <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-tr -z-20 from-red-light to-red-dark bg-clip-text text-transparent leading-normal text-center'
            >
                Happy Chinese New Year
            </motion.h2>
            
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'
            >
                {Image.map((item, index) => (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay : index * 0.5 }}
                        key={index}
                    >
                        <Card key={index} classNames={{
                            base: "bg-transparent shadow-none",
                        }}>
                            <CardBody className='p-none'>
                                <motion.img
                                    src={item.image}
                                    className='w-full max-w-[400px] mx-auto'
                                />
                                <ButtonCard data={{
                                    link: item.link,
                                    button: `${item.button} text-sm md:text-base`
                                }} />
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
