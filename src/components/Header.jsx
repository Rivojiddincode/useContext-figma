import React from 'react'
import Search from "../assets/svg/search-normal.svg"
import { useTheme } from '../themContext/ThemeContext';
function Header() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div  style={{background: theme === "dark" ? "#1A1D1F": "#ccc"}} className='flex w-full h-28 bg-[#1A1D1F] items-center justify-between px-6 sticky top-0 z-10'>
        {/* Qidiruv qismi */}
        <div  style={{background: theme === "dark"? "#111315":"#ccc", border:"1px solid #FFF"}}  className='w-80 h-12 bg-[#111315] rounded-lg flex items-center justify-start px-4'>
            <img src={Search} alt="search-icon" className="w-5 h-5 text-gray-400" />
            <input  style={{background: theme === "dark"? "#111315":"#ccc"}}
              type="search"  
              placeholder="Search" 
              className="border-none outline-none w-full cursor-pointer bg-transparent pl-3 text-white placeholder-gray-400"
            />
        </div>

        {/* Dark/Light rejim tugmasi (Hech qanday kutubxonasiz) */}
    <button 
  onClick={toggleTheme} 
  className={`relative inline-flex h-10 w-20 items-center justify-between rounded-full p-1 transition-colors duration-500 border border-slate-600 ${
    theme === "light" ? "bg-slate-200" : "bg-black"
  }`}
>
  {/* Quyosh ikonka (SVG) */}
  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-500 z-10 ml-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.66 6.34l1.58-1.58M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
  
  {/* Harakatlanuvchi doira (Endi aniq harakatlanadi) */}
  <span 
    className={`absolute h-8 w-8 transform rounded-full shadow-md transition-transform duration-500 ${
      theme === "light" 
        ? "translate-x-0 bg-white" 
        : "translate-x-10 bg-slate-700"
    }`} 
  />
  
  {/* Oy ikonka (SVG) */}
  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-400 z-10 mr-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
</button>

    </div>
  )
}

export default Header
