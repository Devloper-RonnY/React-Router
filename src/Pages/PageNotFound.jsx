import React from 'react'
import { NavLink } from 'react-router'

const PageNotFound = () => {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen bg-gray-100 text-center'>
      <h1 className='text-3xl font-bold mb-6'>Page Not Found</h1>
      <NavLink className='text-2xl font-semibold mb-3' to='/'>Go to home</NavLink>
      <img
        className='w-full max-w-2xl rounded-lg shadow-lg'
        src="https://static.vecteezy.com/system/resources/previews/008/568/878/non_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
        alt="Page not found illustration"
      />
    </div>
  )
}

export default PageNotFound
