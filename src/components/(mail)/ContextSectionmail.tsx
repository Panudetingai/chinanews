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
        
        // Calculate safe positions within viewport
        const safeWidth = Math.max(window.innerWidth * 0.8, 320) // 80% of viewport width
        const safeHeight = Math.max(window.innerHeight * 0.6, 240) // 60% of viewport height
        
        const wish: Wish = {
            id: Date.now(),
            text: newWish,
            position: {
                x: 100 + Math.random() * (safeWidth - 300), // Keeping distance from edges
                y: 100 + Math.random() * (safeHeight - 200)  // Keeping distance from edges
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

    // Add handler for Enter key
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            addWish();
        }
    }

    return (
        <motion.div className="relative min-h-screen w-full overflow-x-hidden px-4">
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/4 3.png'
                width={200}
                className='absolute top-0 left-0 z-0 w-[100px] md:w-[150px] lg:w-[200px]'
            />
            <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/4 3.png'
                width={200}
                className='absolute top-0 right-0 z-0 w-[100px] md:w-[150px] lg:w-[200px]'
            />
            <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src='/image/Remove-bg.ai_1734965696003 2.png'
                width={450}
                className='absolute right-0 z-0 bottom-0 w-[250px] md:w-[350px] lg:w-[450px]'
            />
            <motion.img
                src='/image/image-removebg-preview (1) 1.png'
                width={250}
                className='absolute left-0 z-0 bottom-0 w-[150px] md:w-[200px] lg:w-[250px]'
            />
            <AnimatePresence>
                {wishes.map((wish) => (
                    <motion.div
                        key={wish.id}
                        initial={{ 
                            opacity: 0, 
                            scale: 0.8,
                            y: wish.position.y + 100 // Start below initial position
                        }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0.8, 1, 1, 0.8],
                            y: [
                                wish.position.y + 100, // Start
                                wish.position.y, // Rise to position
                                wish.position.y - 300, // Float up
                                wish.position.y - 400 // Disappear
                            ],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.8, 1]
                        }}
                        className="absolute z-10 bg-red-light/80 p-2 md:p-4 rounded-lg text-white 
                                 shadow-lg cursor-pointer text-sm md:text-base backdrop-blur-sm"
                        style={{ 
                            maxWidth: '200px',
                            left: `${wish.position.x}px`,
                            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                        }}
                        whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.3 }
                        }}
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
                    className='w-[250px] md:w-[350px] lg:w-[450px]'
                />
            </motion.header>
            <motion.div className='flex flex-col justify-center items-center'>
                <motion.img
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src='/image/image-Photoroom (2) 3.png'
                    className='w-[250px] md:w-[350px] lg:w-[450px]'
                />
                <div className='flex flex-col md:flex-row gap-4 w-full max-w-[500px] px-4'>
                    <motion.input
                        type='text'
                        placeholder='คำอวยพร'
                        value={newWish}
                        onChange={(e) => setNewWish(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className='border-none w-full md:w-80 rounded-md bg-red-light text-white placeholder:text-white/80 focus:border-none outline-none px-4 py-2'
                    />
                    <Button
                        className='bg-red-light text-white w-full md:w-auto'
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