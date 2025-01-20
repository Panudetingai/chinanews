'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@nextui-org/react'

type Wish = {
    id: number;
    text: string;
    position: { x: number; y: number };
}

const ContextSectionmail = () => {
    const [wishes, setWishes] = useState<Wish[]>([])
    const [newWish, setNewWish] = useState('')

    // Fetch wishes from API
    useEffect(() => {
        const fetchWishes = async () => {
            try {
                const response = await fetch('/api/wishes')
                const data = await response.json()
                setWishes(data)
            } catch (error) {
                console.error('Error fetching wishes:', error)
            }
        }

        fetchWishes()
        // Set up polling for new wishes every 5 seconds
        const interval = setInterval(fetchWishes, 5000)
        return () => clearInterval(interval)
    }, [])

    const addWish = async () => {
        if (!newWish.trim()) return
        const wish: Wish = {
            id: Date.now(),
            text: newWish,
            position: {
                x: Math.random() * (window.innerWidth - 200),
                y: Math.random() * (window.innerHeight - 100)
            }
        }

        try {
            await fetch('/api/wishes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(wish)
            })
            setWishes([...wishes, wish])
            setNewWish('')
        } catch (error) {
            console.error('Error adding wish:', error)
        }
    }

    return (
        <motion.div className="relative min-h-screen">
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/4 3.png'
                width={200}
                className='absolute top-0 left-0 z-0'
            />
            <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/4 3.png'
                width={200}
                className='absolute top-0 right-0 z-0'
            />
            <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/Remove-bg.ai_1734965696003 2.png'
                width={450}
                className='absolute right-0 z-0 bottom-0'
            />
            <motion.img
                src='/image/image-removebg-preview (1) 1.png'
                width={250}
                className='absolute left-0 z-0 bottom-0'
            />
            <AnimatePresence>
                {wishes.map((wish) => (
                    // eslint-disable-next-line
                    <motion.div
                        key={wish.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0.8, 1, 1, 0.8],
                            y: [wish.position.y, wish.position.y - 200],
                            x: [wish.position.x, wish.position.x + Math.sin(wish.position.y) * 50]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.8, 1]
                        }}
                        className="absolute z-10 bg-red-light/80 p-4 rounded-lg text-white shadow-lg cursor-pointer"
                        style={{ maxWidth: '200px' }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {wish.text}
                    </motion.div>
                ))}
            </AnimatePresence>

            <motion.header className='flex flex-col items-center justify-center'>
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src='/image/image 57.png'
                    width={450}
                />
            </motion.header>
            <motion.div className='flex flex-col justify-center items-center'>
                <motion.img
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src='/image/image-Photoroom (2) 3.png'
                    width={450}
                />
                <div className='flex flex-row gap-4'>
                    <motion.input
                        type='text'
                        placeholder='คำอวยพร'
                        value={newWish}
                        onChange={(e) => setNewWish(e.target.value)}
                        className='border-none w-80 rounded-md bg-red-light text-white placeholder:text-white/80 focus:border-none outline-none px-4 py-2'
                    />
                    <Button
                        className='bg-red-light text-white'
                        onClick={addWish}
                    >
                        ส่ง
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ContextSectionmail