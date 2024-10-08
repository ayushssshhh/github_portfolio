'use client'
import React, { useState } from 'react'
import HoverCard from '../AboutMe/HoverCard'
import { motion } from "framer-motion"

import ReactLogo from '@/public/skills/react.png'
import NextLogo from '@/public/skills/nextjs-icon-svgrepo-com.png'
import SqlLogo from '@/public/skills/sql.png'
import Cucumber from '@/public/skills/Cucumber.png'
import Junit from '@/public/skills/JUnit.png'
import Spring from '@/public/skills/icons8-spring-boot-144.png'
import Gsap from '@/public/skills/GreenSock (GSAP).png'
import OpenAi from '@/public/skills/icons8-chatgpt-150.png'
import ExpressJs from '@/public/skills/express.png'
import NodeJS from '@/public/skills/Node.js.png'
import Selenium from '@/public/skills/icons8-selenium-100.png'
import Image from 'next/image'
import TailwindLogo from '@/public/skills/tailwind-css-icon.png'
import Shadcn from '@/public/skills/shadcn-uilogo.png'
import Hibernate from '@/public/skills/hibernate.png'
import Prisma from '@/public/skills/Prisma.png'

type Props = {}

const Skills = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: .1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='flex md:pl-7 space-x-3 md:space-x-10'>
                <div className='flex flex-col items-center'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className='relative'>
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase text-white">
                            <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
                        </svg>

                        <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3"></span>
                    </motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ delay: 0.8 }} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent" ></motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: 'tween' }} className='md:w-10/12 mb-24'>
                    <h2 className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '200ms' }}>My TechStack</h2>
                    <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
                        Harnessing expertise in
                        <span className="text-[#ffa28b]"> C++ , Sql , Java, and ReactJs </span>
                        to build innovative web solutions. Continuously evolving with hands-on experience and collaborative projects
                    </h3>
                </motion.div>
            </div>
            <HoverCard backgroundColor='#ffa28b' direction='' left=''>
                <div className='md:flex flex-col md:space-y-20 flex-1 py-20 p-10  justify-between'>
                    <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">Presenting a curated selection of <span className='text-white font-medium'>Technologies</span> that have shaped my journey over the past few years.</p>
                    <div>
                        <a target='blank' onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)} href="https://docs.google.com/document/d/1TCC6aBDTmzMwPqMwJznKbp0hQBL78ofP/edit?usp=sharing&ouid=104012999880515343774&rtpof=true&sd=true" className='py-1 inline-block text-xl text-white font-semibold'>
                            Check out my Resume
                            <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${hovered2 ? "translate-x-0 " : "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered2 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                            <div className={` ${hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                        </a>
                    </div>
                </div>
                <div className='overflow-hidden rounded-s-lg z-[1] flex-1'>
                    <motion.div variants={container} initial='hidden' whileInView='show' className='flex flex-wrap w-full relative -top-[120px] -rotate-12 -right-6 -mt-6  p-6 max-h-[480px]'>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={ReactLogo} />
                                <div className="text-[#7d8590] mt-2">ReactJs</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={ExpressJs} />
                                <div className="text-[#7d8590] mt-2">ExpressJs</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={SqlLogo} />
                                <div className="text-[#7d8590] mt-2">Sql</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={ReactLogo} />
                                <div className="text-[#7d8590] mt-2">React</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Selenium} />
                                <div className="text-[#7d8590] mt-2">Selenium</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Shadcn} />
                                <div className="text-[#7d8590] mt-2">ShadCn UI</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Cucumber} />
                                <div className="text-[#7d8590] mt-2">Cucmber</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={NextLogo} />
                                <div className="text-[#7d8590] mt-2">NextJs</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={OpenAi} />
                                <div className="text-[#7d8590] mt-2">OpenAi</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Junit} />
                                <div className="text-[#7d8590] mt-2">Junit</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={NodeJS} />
                                <div className="text-[#7d8590] mt-2">NodeJs</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Spring} />
                                <div className="text-[#7d8590] mt-2">Springboot</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Spring} />
                                <div className="text-[#7d8590] mt-2">Springboot</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Prisma} />
                                <div className="text-[#7d8590] mt-2">Prisma</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={TailwindLogo} />
                                <div className="text-[#7d8590] mt-2">TailWind CSS</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} transition={{ type: 'tween' }}>
                            <div className='rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-3'>
                                <Image alt="Homebrew avatar" width="96" height="96" className=" rounded-md" loading="lazy" decoding="async" src={Hibernate} />
                                <div className="text-[#7d8590] mt-2">Hibernate</div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </HoverCard> 
        </div>
    )
}

export default Skills