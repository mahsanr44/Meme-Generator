import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex py-8 justify-center '>
        <input placeholder='Shut up' type="text" className='border-[1px] md:mx-1   border-gray-500 py-2 md:px-4 pl-2 rounded-md'/>
        <input placeholder='and take my money' type="text" className='border-[1px] md:mx-1 pl-2 border-gray-500 md:px-4 py-2 rounded-md' />
      </div>
      <div className='flex text-white font-semibold bg-[#A818DA] mx-12 md:mx-48 lg:mx-96 p-3 rounded-sm justify-center'>
        <button>Get a new meme image  🖼</button>
      </div>
    </div>
  )
}

export default Hero
