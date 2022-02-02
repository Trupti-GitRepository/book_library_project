import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function LoginForm() {
    return <div>
      <form action="" className="w-96 flex justify-center flex-col self-center shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 font-['Roboto]">
          <h1 className="text-center text-4xl text-gray-500 mb-10">Login</h1>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email Address</label>
            <input type="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
            <input type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center">
            <button className="text-white w-full rounded-full bg-blue-500 hover:bg-blue-700:text-white font-bold py-2 px-4 round">Login</button>
          </div>
          <div className="mt-14 text-center">
            Are you new? <Link to="/register" className="text-bold text-blue-500">Register</Link>
          </div>
        </form>
  </div>;
}

export default LoginForm;
