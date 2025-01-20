'use client'
import React from 'react'
import { motion } from 'framer-motion'

const zodiac_animals = [
    {
        "name": "ชวด (หนู)",
        "traits": "ฉลาด มีไหวพริบ ว่องไว ประหยัด",
        "meaning": "หนูสื่อถึงความเจริญรุ่งเรือง ความอุดมสมบูรณ์ และความสามารถในการแก้ปัญหา",
        "years": [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020]
    },
    {
        "name": "ฉลู (วัว)",
        "traits": "ขยัน ซื่อสัตย์ อดทน",
        "meaning": "วัวสื่อถึงความมั่นคง ความพากเพียร และความมุ่งมั่น",
        "years": [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021]
    },
    {
        "name": "ปีขาล (เสือ)",
        "traits": "กล้าหาญ มีพลัง มีความเป็นผู้นำ",
        "meaning": "เสือสื่อถึงความแข็งแกร่ง อำนาจ และความเชื่อมั่น",
        "years": [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022]
    },
    {
        "name": "เถาะ (กระต่าย)",
        "traits": "สุภาพ อ่อนโยน รอบคอบ",
        "meaning": "กระต่ายสื่อถึงความสงบ ความมีมารยาท และความโชคดี",
        "years": [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023]
    },
    {
        "name": "ปีมะโรง (มังกร)",
        "traits": "ทะเยอทะยาน มีพลังงานสูง มั่นใจ",
        "meaning": "มังกรเป็นสัญลักษณ์แห่งอำนาจ โชคลาภ และความสำเร็จ",
        "years": [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024]
    },
    {
        "name": "ปีกุน (หมู)",
        "traits": "ใจกว้าง ใจดี รักสงบ",
        "meaning": "หมูสื่อถึงความอุดมสมบูรณ์ ความเมตตา และโชคลาภ",
        "years": [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031]
    }
]

export default function Zodiac() {
    const [selected, setSelected] = React.useState<typeof zodiac_animals[0] | null>(null);

    return (
        <div>
            {/* item icon */}
            <motion.img 
                src='/image/image 67.png'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mx-auto absolute bottom-0"
                width={300}
            />
            <motion.img 
                src='/image/image-Photoroom.png'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mx-auto absolute right-0"
                style={{ transform: 'scaleX(-1)' }}
                width={300}
            />
            <motion.img 
                src='/image/pngtree-happy-chinese-new-year-border-png-image_6289390.png'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mx-auto absolute top-0"
                width={400}
            />
            <motion.img 
                src='/image/chinese-new-year-lion-dance-ai-generative-free-png.webp'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mx-auto absolute bottom-0 right-0"
                width={400}
            />
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold text-center mb-4 bg-red-light text-gold p-6"
            >
                十二生肖语言
            </motion.header>
        </div>
    );
}
