import React from 'react'
import { useGetUsersQuery } from '../../store/users/usersApiSlice'

export default function UsersList () {
  const { data, isLoading, isSuccess, isError, error } = useGetUsersQuery()

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    content = <p>Error, {JSON.stringify(error)}</p>
  } else if (isSuccess) {
    content = (
      <div className='h-full w-full flex flex-col justify-center items-center space-y-4'>
        {
          data.map(user => (
            <div key={user.id} className='w-1/3 border-2 border-gray-300 p-4 rounded-lg'>
              <p>Id: {user.id}</p>
              <p>User Id: {user.userId}</p>
              <p>Title: {user.title}</p>
              <p>Body: {user.body}</p>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <div>
      <div className='h-full w-full bg-[url(src/assets/bg-4.jpg)] bg-repeat-y py-8'>
        {content}
      </div>
    </div>
  )
}
