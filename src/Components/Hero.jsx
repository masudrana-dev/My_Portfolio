import React from 'react'
import portfolio from '../../public/0.jpg'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div id='home' className='px-16 min-h-screen w-full flex items-center justify-center py-28 md:px-32'>
            <div className='flex flex-col items-center justify-center gap-10 text-white'>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={portfolio} alt="" className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-500 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]' />
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}

                    className='max-w-[600px] flex flex-col items-center justify-center gap-3 text-center'>
                    <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-7xl'>Masud Rana</h1>
                    <h3 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-2xl font-light md:text-3xl'>MERN Stack Developer</h3>
                    <p className='md:text-base text-pretty text-sm text-gray-400'>
                        I am a MERN stack developer skilled in react , next.js and Tailwind . Focused on building clean scalable applications . from frontend design to seamless Database integration with MongoDB. I create efficient solutions for dynamic experience . let's build something great together!
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero