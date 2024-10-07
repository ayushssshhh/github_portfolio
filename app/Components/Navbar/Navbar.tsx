"use client"

import Container from "@/app/Container"
import { useState } from "react"
import ProductNav from "./ProductNav"
import SolutionNav from "./SolutionNav"


const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <Container>
            <div className="text-white bg-transparent py-5"></div>
            <div className='flex items-center max-lg:justify-between max-lg:flex-row-reverse'>
                <div className='flex justify-between items-center max-lg:w-full'>
                    <div className='lg:hidden'>

                    </div>

                    <button type='button' onClick={() => setShowNav(!showNav)} className='lg:hidden cursor-pointer'>
                        <div className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${showNav ? "rotate-45 mb-0  translate-y-[1px]" : "rotate-0 mb-1"} `}></div>
                        <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${showNav ? "hidden mb-0" : "mb-1"} `}></div>
                        <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${showNav ? "-rotate-45 mb-0" : "rotate-0"}`}></div>
                    </button>
                </div>

                <div className={` flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${showNav ? "max-lg:translate-x-0 max-lg:scale-100" : " max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"}`}>
                    <div className='flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:translate-x-[50px] max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg'>
                        <nav className='mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5'>
                            <ul className='flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto'>
                                <li className='max-lg:font-semibold  flex items-center p-1 lg:text-white hover:text-neutral-300'>
                                    <a href="#aboutme">
                                        About Me
                                    </a>
                                </li>
                                <li className='max-lg:font-semibold  flex items-center p-1 lg:text-white hover:text-neutral-300'>
                                    <a href="#project">
                                        Portfolio
                                    </a>
                                </li>
                                <li className='max-lg:font-semibold  flex items-center p-1 lg:text-white hover:text-neutral-300'>
                                    <a href="#skills">
                                        Skills
                                    </a>
                                </li>
                                {/* <span className='max-lg:font-semibold  flex items-center p-1 lg:text-white hover:text-neutral-900'>
                                    <ProductNav />
                                </span> */}
                                <span className='max-lg:font-semibold  flex items-center p-1 lg:text-white hover:text-neutral-900'>
                                    <SolutionNav />
                                </span>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar