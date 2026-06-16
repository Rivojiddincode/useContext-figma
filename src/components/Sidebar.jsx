import React from 'react'
import { useTheme } from '../themContext/ThemeContext';
function Sidebar() {
  const { theme, toggleTheme } = useTheme()
  
  const iconClass = "w-6 h-6 text-[#6F767E] transition-colors duration-200 group-hover:text-[#499BFC] ";
  const logoutIconClass = "w-6 h-6 text-[#6F767E] transition-colors duration-200 group-hover:text-red-500";

  return (
    <div style={{background: theme === "dark" ? "#1A1D1F": "#ccc"}}  className='w-[230px] h-screen bg-[#1A1D1F] pt-[41px] pl-[33px] pb-10 flex flex-col justify-between ' >
        
        <div>
            <div className='w-[196px] h-19 border-b-[#272B30] border-b-2 mb-7'>
              <p style={{color: theme === "dark"? "#FFFFFF": "black"}} className='text-[#FFFFFF] text-[18px] font-sans font-bold'>Blackmagicdesign</p>
            </div>

            <div className="flex flex-col gap-6">
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                  <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />
                </svg>
                <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-[#499BFC]'>Dashboard</p>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                  <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
                </svg>
                <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-[#499BFC]'>Property</p>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-[#499BFC]'>Agent</p>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-[#499BFC]'>Review</p>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-[#499BFC]'>Message</p>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
                <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-[#499BFC]'>Settings</p>
              </div>

            </div>
        </div>

        <div className="flex flex-col gap-6">
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
            </svg>
            <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-[#499BFC]'>Help</p>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className={logoutIconClass}>
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
            <p className='text-[#6F767E] text-[16px] transition-colors duration-200 group-hover:text-red-500'>Logout</p>
          </div>

        </div>

    </div>
  )
}

export default Sidebar
