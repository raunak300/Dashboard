import React from 'react'

const Nav = () => {

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-bold tracking-wide">
          VM <span className="text-blue-400">DASHBOARDS</span>
        </h1>

        {/* Links (optional) */}
        <div className="space-x-6 hidden md:flex">
          
          <a href="https://portfolio-raunak-tomars-projects.vercel.app/" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}



export default Nav