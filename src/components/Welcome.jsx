import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCurrentToken, selectCurrentUser } from '../store/auth/authSlice'

export default function Welcome () {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)

  const welcome = user ? `Welcome ${user}!` : 'Welcome!'
  const tokenAbbr = `${token.slice(0, 9)}...`

  return (
    <div className='h-screen w-full bg-[url(src/assets/bg-3.jpg)] bg-cover'>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1>{welcome}</h1>
        <p>Token: {tokenAbbr}</p>
        <Link
          to='/userslist'
          className='px-4 py-2 bg-transparent border-2 self-center rounded-lg w-min whitespace-nowrap transition duration-300 hover:scale-105'
        >
          Users List
        </Link>
      </div>
    </div>
  )
}
