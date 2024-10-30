import React from 'react'

function Nav() {
    return (
        <div className='fixed top-0 right-0 left-0 z-50 bg-gray-200 shadow-md bg-opacity-60 backdrop-blur-lg px-4 py-2 flex flex-col gap-4 lg:flex-row items-center justify-between ' >
            <h1 className='text-4xl font-titleFont'>Arnav’s Dev Journey</h1>
            <div className='flex gap-4 lg:gap-12 font-bold text-md lg:text-lg'>
                <a className='cursor-pointer'>Blog</a>
                <a className='cursor-pointer'>React Component</a>
                <a className='cursor-pointer'>Get to Know Me</a>    
            </div>
        </div>
    )
}

export default Nav