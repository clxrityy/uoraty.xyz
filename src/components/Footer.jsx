import React, { useState } from 'react';
import './css/Footer.css';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useStateContext } from '../contexts/ContextProvider';
import ship from '../data/alien-ship.png';

const Footer = () => {

  const [isShown, setIsShown] = useState(false);

  const { currentColor } = useStateContext();

  return (
    <div className='p-6 w-full flex' id='main'>
      <div id='left'>
        <p className='text-sm font-semibold text-black dark:text-white pl-10'>© clxrity 2022</p>
        <div className='rounded-lg w-fit drop-shadow-2xl p-1 mt-5 border-1 border-gray-400 border-opacity-10 hover:text-white'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          style={{ backgroundColor: currentColor }}>
          <h1 className='items-center gap-3 text-3xl flex font-extrabold text-slate-900' id='foot-head'>
            <HiOutlineDotsVertical /> uoraty
          </h1>
          {isShown && (
            <div>
              <p className='font-medium text-sm text-black'>the best company i guess</p>
            </div>
          )}
        </div>
      </div>
      <div id='right' className='float-right'>
        <div className='justify-center bg-blend-darken main-dark-bg mb-5 ml-6'>
          <a href='https://clxrity.xyz' target='_blank' rel='noreferrer'>
            <img src={ship}
              className='animate-pulse bg-blend-darken hover:animate-none'
              height='50px'
              width='50px'
              alt='spaceship'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer