import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import React, { useState } from 'react'
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuOpen = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='fixed top-0 z-10 w-full flex items-center  justify-between border-b border-b-gray-700 bg-black/70 px-16 py-10 text-white backdrop-blur-md md:justify-evenly'>
            <a href="#" className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300  hover:opacity-100'>Masud Rana</a>

            <ul className='hidden md:flex  gap-10'>
                <a href="#home" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Home</li></a>
                <a href="#tech" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Tech</li></a>
                <a href="#projects" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Projects</li></a>
                <a href="#contact" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Contact</li></a>
            </ul>
            <ul className='hidden md:flex gap-5'>
                <li className='cursor-pointer text-2xl opacity-80 hover:text-red-500 transition-all duration-300 hover:opacity-100'>
                    <AiFillYoutube />
                </li>
                <li className='cursor-pointer text-2xl opacity-80 hover:text-blue-500 transition-all duration-300 hover:opacity-100'>
                    <BsFacebook />
                </li>
                <li className='cursor-pointer text-2xl opacity-80 hover:text-blue-500 transition-all duration-300 hover:opacity-100'>
                    <AiFillLinkedin />
                </li>
                <li className='cursor-pointer text-2xl opacity-80 hover:text-orange-500 transition-all duration-300 hover:opacity-100'>
                    <AiFillGithub />
                </li>
            </ul>
            {
                isOpen ? (<BiX className="block md:hidden text-4xl" onClick={menuOpen} />) : (<BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />)
            }
            {
                isOpen && (
                    <div className={`fixed right-0 top-[84px] h-screen w-1/2 flex flex-col items-start justify-start  gap-10  bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
                        <ul className='flex flex-col gap-8'>
                            <a href="#home" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Home</li></a>
                            <a href="#tech" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Tech</li></a>
                            <a href="#projects" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Projects</li></a>
                            <a href="#contact" className=' cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'><li>Contact</li></a>
                        </ul>
                        <ul className=' flex gap-5'>
                            <li className='cursor-pointer text-2xl opacity-80 hover:text-red-500 transition-all duration-300 hover:opacity-100'>
                                <a href=""><AiFillYoutube /></a>
                            </li>
                            <li className='cursor-pointer text-2xl opacity-80 hover:text-blue-500 transition-all duration-300 hover:opacity-100'>
                                <a href="https://www.facebook.com/masudrana.cphd/"><BsFacebook /></a>
                            </li>
                            <li className='cursor-pointer text-2xl opacity-80 hover:text-blue-500 transition-all duration-300 hover:opacity-100'>
                                <a href="https://www.linkedin.com/in/masud-rana-ba5a8818b/"><AiFillLinkedin /></a>
                            </li>
                            <li className='cursor-pointer text-2xl opacity-80 hover:text-orange-500 transition-all duration-300 hover:opacity-100'>
                                <a href="https://github.com/masudrana-dev"><AiFillGithub /></a>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar