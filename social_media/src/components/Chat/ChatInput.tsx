import React from 'react'
import { AiOutlineSmile, AiOutlineSend } from 'react-icons/ai'
import { TiAttachment } from 'react-icons/ti'
const ChatInput = () => {
  return (
    <form className=' flex items-center border-t-2 border-gray-200 fixed bottom-0 p-2 h-auto space-x-3 bg-white z-1000 ' style={{ width: "60%" }} >
      <AiOutlineSmile className='h-5 w-5' />
      <input
        type="text"
        className='flex-1 rounded border border-gary-300 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
      />
      <TiAttachment className='h-5 w-5' />
      <div className='bg-blue-500 rounded-lg h-8 w-8 flex justify-center items-center hover:bg-blue-400'>
        <AiOutlineSend color='white' className='h-5 w-5' />
      </div>
    </form>

  )
}

export default ChatInput