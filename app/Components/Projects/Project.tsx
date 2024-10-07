import { motion } from "framer-motion"
import HoverCard from "../AboutMe/HoverCard"
import Slider from "./Slider"
import { useState } from "react"

const Project = () => {
    const [hovered1, setHovered1] = useState<boolean>(false)
    return (
        <>
                        <motion.div initial={{ height: 0 }} whileInView={{ height: '160px' }} transition={{ delay: 0.2 }} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#7ee787] to-[#062e0a]" ></motion.div>

            <div className='relative top-[-40px] z-[1]'>
                <h3 className="flex justify-end text-[#7ee787] m-3 lg:text-8xl md:text-7xl text-5xl font-medium"> <span className="flex items-end pb-1 text-white text-4xl">Other</span> Works</h3>
                <Slider />
                <p className="text-center relative z-1 mx-auto mt-10 text-[16px] md:text-[20px]  lg:text-[24px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-4 md:w-10/12  lg:w-9/12 text-[#7d8590]">
                    Explore more of my innovative projects and see what else I’ve been working on!
                </p>

                <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="" className='flex w-[200px] sm:w-[400px] mx-auto items-center  justify-center text-[16px] py-3 px-5 rounded-md border-[#ae88f9] border-[1.5px] text-white'>
                    visit my Blogs
                    <svg xmlns="http://www.w3.org/2000/svg" className={` arrow-symbol-mktg text-white ml-3 transition ease-in duration-150 ${hovered1 ? "translate-x-0 " : "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                </a>
            </div >
        </>
    )
}

export default Project