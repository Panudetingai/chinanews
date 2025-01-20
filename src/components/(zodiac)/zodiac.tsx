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
        "name": "ปีมะเส็ง (งู)",
        "traits": "ลึกลับ มีเสน่ห์ ปราดเปรื่อง",
        "meaning": "งูสื่อถึงปัญญา ความรู้ลึกซึ้ง และความสงบเสงี่ยม",
        "years": [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025]
    },
    {
        "name": "ปีมะเมีย (ม้า)",
        "traits": "รักอิสระ คล่องแคล่ว เข้มแข็ง",
        "meaning": "ม้าสื่อถึงความก้าวหน้า ความมีชีวิตชีวา และความกระตือรือร้น",
        "years": [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026]
    },
    {
        "name": "ปีมะแม (แพะ)",
        "traits": "ใจดี เมตตา มีความคิดสร้างสรรค์",
        "meaning": "แพะสื่อถึงความอ่อนโยน ความอดทน และความสง่างาม",
        "years": [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027]
    },
    {
        "name": "วอก (ลิง)",
        "traits": "ฉลาด รักสนุก แก้ปัญหาเก่ง",
        "meaning": "ลิงสื่อถึงความเฉลียวฉลาด ความยืดหยุ่น และความขี้เล่น",
        "years": [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028]
    },
    {
        "name": "ปีระกา (ไก่)",
        "traits": "ตรงไปตรงมา ขยัน มีวินัย",
        "meaning": "ไก่สื่อถึงความกระตือรือร้น ความมั่นใจ และความสง่างาม",
        "years": [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029]
    },
    {
        "name": "ปีจอ (หมา)",
        "traits": "ซื่อสัตย์ ภักดี รักความยุติธรรม",
        "meaning": "สุนัขสื่อถึงความซื่อสัตย์ ความภักดี และความเป็นมิตร",
        "years": [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030]
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
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-red-800/10 via-red-700/5 to-transparent">
            {/* Decorative images */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.img
                    src='/image/image 67.png'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-0 left-0 opacity-40 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
                />
                <motion.img
                    src='/image/image-Photoroom.png'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute right-0 z-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
                    style={{ transform: 'scaleX(-1)' }}
                />
                <motion.img
                    src='/image/pngtree-happy-chinese-new-year-border-png-image_6289390.png'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 z-0 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
                />
                <motion.img
                    src='/image/chinese-new-year-lion-dance-ai-generative-free-png.webp'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-0 right-0 z-0 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10">
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-gold p-4 sm:p-6 md:p-8 shadow-lg border-y-2 border-gold/30"
                >
                    <span className="text-gold drop-shadow-lg tracking-wider">十二生肖语言</span>
                </motion.header>

                <div className="container mx-auto px-2 sm:px-4 max-w-7xl pb-20 sm:pb-24 md:pb-32">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
                        {zodiac_animals.map((animal, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ 
                                    scale: 1.03,
                                    y: -5
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelected(animal)}
                                className="relative group cursor-pointer w-full max-w-[200px]"
                            >
                                <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-b from-red-900/80 to-red-950/80 backdrop-blur-sm 
                                    transition-all duration-300 group-hover:from-red-800/90 group-hover:to-red-900/90
                                    border border-gold/20 group-hover:border-gold/40 shadow-lg group-hover:shadow-gold/20">
                                    <motion.img
                                        src={`/image/ปี/${i+1}.png`}
                                        alt={animal.name}
                                        className="w-full h-auto rounded-xl sm:rounded-2xl transform transition-all duration-300 
                                        group-hover:scale-110 p-2 sm:p-3 md:p-4 group-hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                        opacity-0 group-hover:opacity-100 transition-all duration-300 
                                        rounded-xl sm:rounded-2xl flex items-end justify-center">
                                        <div className="text-gold text-sm sm:text-base md:text-lg lg:text-xl font-bold pb-3 sm:pb-4 md:pb-6 drop-shadow-lg px-2 text-center">
                                            {animal.name}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {selected && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-x-0 bottom-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900
                            text-white p-4 sm:p-6 md:p-8 rounded-t-xl sm:rounded-t-2xl shadow-2xl cursor-pointer mx-auto max-w-3xl
                            backdrop-blur-md border-t-2 border-gold/30 z-50"
                            onClick={() => setSelected(null)}
                        >
                            <div className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-6 text-gold tracking-wide">
                                {selected.name}
                            </div>
                            <div className="text-center text-base sm:text-lg md:text-xl font-light mb-2 sm:mb-3 text-gold/90">
                                {selected.traits}
                            </div>
                            <div className="text-center text-sm sm:text-base md:text-lg font-light mb-2 sm:mb-3 text-white/90">
                                {selected.meaning}
                            </div>
                            <div className="text-center text-sm sm:text-base md:text-lg font-light text-gold/80 bg-black/20 py-2 rounded-lg">
                                ปีที่เกิด: {selected.years.join(', ')}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
