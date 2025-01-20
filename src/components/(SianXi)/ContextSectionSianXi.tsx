'use client'
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@nextui-org/button'

interface Fortune {
    number: number;
    prediction: string;
    advice: string;
}

type Props = {}

export const ContextSectionSianXi = (props: Props) => {
    const [isShaking, setIsShaking] = useState(false)
    const [fortune, setFortune] = useState<Fortune | null>(null)

    const predictions: Fortune[] = [
              {
                "number": 1,
                "prediction": "ความสำเร็จและโชคดีจะเข้ามาในชีวิต สิ่งที่หวังไว้จะเป็นจริง",
                "advice": "ให้ตั้งใจและมุ่งมั่นทำความดี โอกาสดี ๆ จะมาถึง"
              },
              {
                "number": 24,
                "prediction": "มีโชคดีในเรื่องความรักหรือการเงิน",
                "advice": "อย่าประมาทในสิ่งที่ทำ และรักษาความสัมพันธ์ที่ดี"
              },
              {
                "number": 25,
                "prediction": "อุปสรรคที่เผชิญอยู่จะค่อย ๆ คลี่คลาย",
                "advice": "ใช้ความพยายามและความอดทนเพื่อผ่านพ้นไป"
              },
              {
                "number": 26,
                "prediction": "มีโอกาสดีในเรื่องการงานหรือธุรกิจ",
                "advice": "ควรหมั่นเรียนรู้และปรับตัวตามสถานการณ์"
              },
              {
                "number": 27,
                "prediction": "ระวังปัญหาเกี่ยวกับสุขภาพหรือคนใกล้ตัว",
                "advice": "ดูแลสุขภาพและหมั่นสร้างความสัมพันธ์ที่ดี"
              },
              {
                "number": 28,
                "prediction": "มีความสำเร็จและความก้าวหน้าในชีวิต",
                "advice": "อย่าหลงระเริงกับความสำเร็จ และแบ่งปันสิ่งดี ๆ ให้ผู้อื่น"
              },
              {
                "number": 29,
                "prediction": "มีความสำเร็จในสิ่งที่ตั้งใจ แต่ต้องใช้เวลา",
                "advice": "ควรจัดการเวลาและทรัพยากรให้เหมาะสม"
              },
              {
                "number": 30,
                "prediction": "มีเกณฑ์เดินทางไกลหรือได้รับโอกาสจากต่างแดน",
                "advice": "เตรียมตัวให้พร้อมสำหรับสิ่งใหม่ ๆ ที่กำลังมาถึง"
              },
              {
                "number": 31,
                "prediction": "เรื่องร้ายจะกลายเป็นดี สุขภาพดีขึ้น มีโชคเข้ามา",
                "advice": "ใช้โอกาสนี้สร้างความมั่นคงในชีวิต"
              },
              {
                "number": 32,
                "prediction": "โชคดีและความสำเร็จจะมาถึงเร็ว ๆ นี้",
                "advice": "หมั่นทำบุญและตั้งใจในสิ่งที่ทำ"
              }          
    ];

    const handleShake = () => {
        setIsShaking(true)
        setFortune(null)

        setTimeout(() => {
            setIsShaking(false)
            const randomFortune = predictions[Math.floor(Math.random() * predictions.length)]
            setFortune(randomFortune)
        }, 3000)
    }

    return (
        <section>
            {/* item  */}
            <motion.img
                className='absolute top-0 left-0 z-0 animate-pulse w-[200px] md:w-[350px]'
                src='/image/image-Photoroom.png'
            />
            <motion.img
                className='absolute -top-8 right-0 z-0 w-[120px] md:w-[200px]'
                src='/image/image-Photoroom02.png'
            />
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='flex flex-col items-center justify-center gap-4 bg-gradient-to-tr from-red-light to-red-dark py-4 md:py-6'
            >
                <motion.h1 className='text-3xl md:text-4xl font-bold text-center text-white'>
                    SianXi
                </motion.h1>
            </motion.header>
            <motion.div className='flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-12 px-4'>
                <div className='flex flex-col items-center'>
                    <motion.img
                        initial={{ x: -100, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            rotate: isShaking ? [
                                0, -20, 20, -20, 20, -15, 15, -15, 15,
                                -10, 10, -10, 10, -5, 5, -5, 5,
                                -2, 2, -2, 2, 0
                            ] : 0
                        }}
                        transition={{
                            duration: isShaking ? 3 : 1,
                            type: "tween",
                            ease: "linear"
                        }}
                        src='/image/image 45.png'
                        className='w-[150px] md:w-[200px]'
                    />
                    <Button
                        className='bg-red-dark text-white mt-4'
                        size='lg'
                        onClick={handleShake}
                        disabled={isShaking}
                    >
                        เขย่าเสี่ยงทาย
                    </Button>
                </div>

                <AnimatePresence mode='wait'>
                    {fortune && (
                        <motion.div
                            className='w-full md:w-auto md:flex-1'
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='flex-col flex gap-4 md:gap-6 backdrop-blur-md bg-white/10 p-4 md:p-8 rounded-2xl shadow-xl'>
                                <motion.h1
                                    className='text-xl md:text-2xl font-bold text-center text-white bg-gradient-to-r from-red-light to-red-dark px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-lg'
                                >
                                    เลขที่ {fortune.number} - {fortune.advice}
                                </motion.h1>
                                <motion.h2
                                    className='text-lg md:text-xl font-bold text-white bg-gradient-to-r from-red-dark to-red-light rounded-xl px-4 md:px-6 py-2 md:py-3 text-center shadow-lg'
                                >
                                    ความหมาย
                                </motion.h2>
                                <motion.div className='h-40 md:h-52 overflow-y-auto rounded-xl bg-white/20 backdrop-blur-sm p-4 md:p-6'>
                                    <motion.p className='text-red-dark leading-relaxed text-sm md:text-base'>
                                        {fortune.prediction}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    )
}