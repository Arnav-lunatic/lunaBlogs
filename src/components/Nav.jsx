import React from 'react'

function Nav() {
    return (
        <div className='fixed top-0 right-0 left-0 z-50 bg-gray-200 shadow-md bg-opacity-40 backdrop-blur-md px-4 py-2 flex flex-col gap-4 lg:flex-row items-center justify-between ' >
            <h1 className='text-4xl font-titleFont'>Arnav’s Dev Journey</h1>
            <div className='flex gap-4 lg:gap-12 font-bold text-md lg:text-lg'>
                {/* <a className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-lg'>Blog</a>
                <a className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-lg'>React Component</a> */}
                <a className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-lg' href='https://discoverarnav.vercel.app' target='_blank'>Get to Know Me</a>    
            </div>
        </div>
    )
}

export default Nav