import React from 'react';

function RegistrationForm() {
    return <div>
      <form action="" className="flex justify-center flex-col self-center shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 font-['Roboto]">
          <h1 className="text-center text-4xl text-gray-500 mb-10">Register</h1>
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label htmlFor="" className="block text-gray-700 text-sm mb-2">First Name</label>
              <input type="text" placeholder="First Name" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex-1">
              <label htmlFor="" className="block text-gray-700 text-sm mb-2">Last Name</label>
              <input type="text" placeholder="Last Name" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email Address</label>
            <input type="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
            <input type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center">
            <button className="text-white w-full rounded-full bg-blue-500 hover:bg-blue-700:text-white font-bold py-2 px-4 round">Register</button>
          </div>
          <div className="mt-14 text-center">
            Already have an account? <a className="text-bold text-blue-500" href="#">Login Here</a>
          </div>
        </form>
  </div>;
}

export default RegistrationForm;
