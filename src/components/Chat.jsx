import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
// import { RiSendPlane2Fill } from 'react-icons/ri';
import { MessageBox , Input } from 'react-chat-elements'

const Chat = () => {

  const { currentColor, handleClick } = useStateContext();

  const inputReferance = React.createRef()

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-200  rounded-3xl dark:bg-secondary-dark-bg drop-shadow-sm' id='chat-main'>
      <button
        onClick={() => handleClick(false)}
        className='float-right align-top -m-5  hover:bg-light-gray
        dark:hover:bg-gray-600 rounded-full p-2'
      >
        <MdOutlineCancel
          style={{color: currentColor}}
        />
      </button>
      <div className='m-2 md:10 mt-30 p-2 md:10 rounded-xl dark:bg-slate-400 bg-white grid-rows-2'>
        <Input
          referance={inputReferance}          
        />
      </div>
    </div>
  )
}

export default Chat