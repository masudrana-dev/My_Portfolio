import React from 'react'
import { motion } from "framer-motion"

const s = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <motion.div
            variants={variants}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            className='min-h-[70vh] min-w-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
                <h1 className='text-center text-5xl md:text-7xl'>
                    <span className='text-5xl bg-gradient-to-r  from-indigo-500 to-blue-500 bg-clip-text text-transparent '>
                        Get in Touch
                    </span>
                </h1>
                <p className=' text-center text-semibold text-gray-500  text-lg'>
                    Want to chat? Send me an Email through this button and i will respond whenever i can .
                </p>
                <a href="mailto:masud.cphd@gmail.com" className='text-nowrap ronded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg  shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>
                    Contact Me
                </a>
            </div>
        </motion.div>
    )
}

export default s