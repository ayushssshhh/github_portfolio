"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import HoverCard from '../AboutMe/HoverCard'

type Props = {}

const Footer = (props: Props) => {
  const [hovered2, setHovered2] = useState<boolean>(false)

  return (
    <div className='footer relative pt-14 break-words '>
      <HoverCard backgroundColor='rgb(193,165,249)' direction='flex-col' left={''}>
        <div className='flex justify-center'>


          <div className='text-[16px] w-[400px] sm:w-[500px] bg-transparent rounded-xl p-10 flex flex-col gap-5'>
            <input className='w-full py-1 px-3 rounded' placeholder='Name' />
            <input className='w-full py-1 px-3 rounded' placeholder='Email' />
            <textarea className='w-full py-1 px-3 rounded h-[100px]' placeholder='Enter your message ....' />
            <div className='flex justify-start'>
              <button onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)} className='bg-[#7649cf] text-white flex items-center bg-white w-full font-bold px-5 py-2 justify-center rounded-md tex-[16px]'>
                Send
                <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered2 ? "translate-x-2 " : "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={`  transition ease-in duration-150 ${hovered2 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              </button>
            </div>
          </div>
          <div className='hidden sm:flex items-center text-6xl md:text-7xl  text-white font-bold'>
            <h1>{`Let's`} <br />Work <br /> Together</h1>
          </div>
        </div>

        <ul className='flex justify-center gap-[40px] text-[18px] pb-[30px] text-zinc-500'>
          <li className='hover:text-white'>
            <Link target='_blank' href="https://www.linkedin.com/in/kumar-ayush-3b8a27240/">LinkedIn</Link>
          </li>
          <li>
            <Link target='_blank' className='hover:text-white' href="mailto:kumar.ayushssshhh@gmail.com?subject=From%20Github%20theme%20portfolio">Mail</Link>
          </li>
          <li>
            <Link className='hover:text-white' href="">Blogs</Link>
          </li>
          <li>
            <Link className='hover:text-white' href="https://github.com/ayushssshhh">Github</Link>
          </li>
        </ul>
      </HoverCard>

      <p className="text-gray-400 text-[12px] text-center mb-2">made by kumar ayush || © {`25'Sept`}</p>
    </div>
  )
}

export default Footer