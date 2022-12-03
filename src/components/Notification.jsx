import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import './css/Notification.css';
import { MdOutlineCancel } from 'react-icons/md';


const Notification = () => {

  const { currentColor, handleClick } = useStateContext();


  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-200  rounded-3xl dark:bg-secondary-dark-bg drop-shadow-sm' id='main'>
      <button
        onClick={() => handleClick(false)}
        className='float-right align-top -m-5  hover:bg-light-gray
        dark:hover:bg-gray-600 rounded-full p-2'
      >
        <MdOutlineCancel
          style={{color: currentColor}}
        />
      </button>
      <div id='notif-container'
        className='align-center m-5 rounded-sm'
      >
        <div id='1' className='rounded-full align-center shadow-md p-3 m-2 dark:bg-slate-400 bg-white'>
          <h1 className='font-bold cursor-pointer hover:decoration-2' id='notif-title1'
            style={{color: currentColor}}
          >
            You've been selected!
          </h1>
        </div>
        <div id='2' className='rounded-full align-center shadow-md p-3 m-2 dark:bg-slate-400 bg-white'>
          <h1 className='font-bold cursor-pointer hover:decoration-2' id='notif-title2'
            style={{color: currentColor}}
          >
            Hey there!
          </h1>
        </div>
        <div id='3' className='rounded-full align-center shadow-md p-3 m-2 dark:bg-slate-400 bg-white'>
          <h1 className='font-bold cursor-pointer hover:decoration-2' id='notif-title3'
            style={{color: currentColor}}
          >
            IT'S TIME...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Notification;