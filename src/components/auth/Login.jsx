import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../store/auth/authApiSlice'
import { setCredentials } from '../../store/auth/authSlice'

export default function Login () {
  const userRef = useRef()
  const errRef = useRef()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, password])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const userData = await login({ email: user, password }).unwrap()
      dispatch(setCredentials({ ...userData, user }))
      setUser('')
      setPassword('')
      navigate('/welcome')
    } catch (error) {
      console.log(error)
      if (!error?.originalStatus) {
        setErrMsg('No server response')
      } else if (error.originalStatus === 400) {
        setErrMsg('Missing username or password')
      } else if (error.originalStatus === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login failed')
      }
      errRef.current.focus()
    }
  }

  const content = isLoading
    ? <h1>Loading...</h1>
    : (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <p ref={errRef}>{errMsg}</p>
        <h1 className='text-xl'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id='username'
              ref={userRef}
              value={user}
              className='px-2 py-1 rounded-lg bg-transparent border'
              onChange={e => setUser(e.target.value)}
              required
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id='password'
              value={password}
              className='px-2 py-1 rounded-lg bg-transparent border'
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button className='px-4 py-2 bg-gray-300 self-center rounded-lg w-min whitespace-nowrap transition duration-300 hover:scale-105'>
            Sign In
          </button>
        </form>
      </div>
      )

  return (
    <div className='h-screen w-full bg-[url(src/assets/bg-2.jpg)] bg-cover'>
      <div className="h-full w-full flex flex-col justify-center items-center">
        {content}
      </div>
    </div>
  )
}
