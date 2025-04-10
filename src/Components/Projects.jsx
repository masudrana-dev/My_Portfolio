import React from 'react'
import image1 from '../../public/1.png'
import image2 from '../../public/2.png'
import image3 from '../../public/3.png'
import image4 from '../../public/4.png'
import image5 from '../../public/5.png'
import { motion } from 'framer-motion'

const projectsData = [
    {
        image: image1,
        name: 'Spotify',
        description: " Frontend is designed by React , Tailwind CSS , React Router .Using Context API to managed all states.MongoDB , Node Js , Express Js .Using Cloudinary to upload musics and images .Dashboard admin pannel to upload or delete songs .Responsive for all devices .Well managed components",
        technoligies: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React', 'Node', 'Express']
    },
    {
        image: image2,
        name: 'Ema Jhon',
        description: "Implemented useState , useEffect HooksJs map method.Using React Router DomWell managed components Firebase Authentication",
        technoligies: ['HTML', 'CSS', 'Javascript', 'React', '']
    },
    {
        image: image3,
        name: 'Z-Book ',
        description: "Implemented useState , useEffect HooksJs map method , Form Validation ,Using React Router Dom and React-ReduxWell managed components Firebase Authentication , React Tostify , React cropper",
        technoligies: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React', 'Node', 'Express']
    },
    {
        image: image4,
        name: 'Crypto Cafe',
        description: "Implemented useState , useEffect HooksJs map method.Using React Router DomWell managed components Firebase Authentication",
        technoligies: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React',]
    },
    {
        image: image5,
        name: 'Habit Tracker',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id animi maxime veritatis nam, amet, beatae soluta exercitationem ex porro fugit recusandae atque vitae! Aut, neque velit optio iure inventore ex?",
        technoligies: ['HTML', 'CSS', 'Javascript']
    }
]

const ScrollReveal = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    )
}
const ProjectCard = ({ project }) => {
    return (
        <ScrollReveal>
            <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
                <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] ' />
                <div className='flex flex-col gap-5' >
                    <div className='flex flex-col  gap-3'>
                        <div className='text-xl font-semibold'>{project.name}</div>
                        <p className='text-gray-400'>{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-5 ">
                        {
                            project.technoligies.map((tech, index) => (
                                <span key={index} className='rounded-lg bg-black p-3'>
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </ScrollReveal>

    )
}
const Projects = () => {

    return (

        <div id="projects" className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            <ScrollReveal>
                <h1 className='text-4xl font-light text-white md:text-6xl'>My projects</h1>
            </ScrollReveal>
            <div className='w-full max-w-[1000px] flex-col gap-32 text-white'>
                {
                    projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
        </div>

    )
}

export default Projects