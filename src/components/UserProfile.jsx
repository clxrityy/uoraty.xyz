import React from 'react';
import './css/Profile.css';
import icon from '../data/uoraty_icon.png';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';

const UserProfile = () => {

  const { currentColor, handleClick } = useStateContext();



  return (

    <div
      
      className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-200  rounded-3xl dark:bg-secondary-dark-bg flex-wrap'>
      <div className='flex-row'>
        <button
          onClick={() => handleClick(false)}
          className='float-right align-top -m-5  hover:bg-light-gray rounded-full dark:hover:bg-gray-600 '>
          <MdOutlineCancel
            style={{color: currentColor}}
          />
        </button>
        {/* <p className='float-right -mt-4 font-thin text-sm text-gray-500'>Profile</p> */}
      </div>
      <div id='avatar-div' className='object-right-top md:w-auto mt-3 align-middle'>
        <img
          src={icon}
          height='50px'
          width='50px'
          id='avatar'
          alt='avatar'
        />
        <header className='ml-3 font-bold text-3xl' id='header' style={{ color: currentColor }}>
          uoraty
        </header>

      </div>
    </div>
  )
}

export default UserProfile