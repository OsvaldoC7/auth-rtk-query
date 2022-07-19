import React from 'react'
import { Link } from 'react-router-dom'

export default function Public () {
  return (
    <div className='h-screen w-full bg-[url(src/assets/bg.jpg)] bg-cover'>
      <div className="h-full flex flex-col justify-center items-center">
        <Link to='/login' className='px-4 py-2 bg-sky-300 rounded-lg w-min transition duration-300 hover:scale-105'>
          <span>Login</span>
        </Link>
      </div>
    </div>
  )
}
