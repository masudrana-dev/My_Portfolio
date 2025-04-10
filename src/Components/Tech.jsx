import React from 'react'
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { RiNextjsLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

const Tech = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }

    }
    return (
        <div id='tech' className=' min-h-[70vh] w-full flex flex-col items-center justify-center gap-16 md:gap-32 '>
            <motion.h1

                variants={variants}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                className='text-4xl font-light text-white md:text-6xl '>Technologies</motion.h1>
            <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
                <motion.div
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                >
                    <BiLogoHtml5 className='cursor-pointer text-[80px] text-orange-500 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoCss3 className='cursor-pointer text-[80px] text-yellow-600 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-500 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoMongodb className='cursor-pointer text-[80px] text-green-500 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoReact className='cursor-pointer text-[80px] text-sky-500 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoNodejs className='cursor-pointer text-[80px] text-green-600 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <RiNextjsLine className='cursor-pointer text-[80px] text-white hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: 50
                    }}
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                >
                    <BiLogoPostgresql className='cursor-pointer text-[80px] text-sky-500 hover:-translate-y-5 transition-all duration-300 sm:text-[100px] md:text-[120px] ' />
                </motion.div>
            </div>
        </div>
    )
}

export default Tech