import React from 'react'

export const Login = () => {
  return (
    <div className="flex items-center min-h-screen px-4 sm:px-6 lg:px-8 ">
    <div className="w-full max-w-md mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="  Type here" type="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <input id="password" placeholder='  Type here' type="password" />
        </div>
        <button className="w-full btn">Login</button>
        <button className="w-full btn" variant="outline">
          Sign up
        </button>
      </div>
    </div>
  </div>
  )
}
