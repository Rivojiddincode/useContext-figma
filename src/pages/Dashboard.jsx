import React from 'react'
import bg from '../assets/svg/bg.svg'
import lg from '../assets/svg/lg.svg'
import op from '../assets/png/op.png'
import rs from '../assets/png/rs.png'
import ls from '../assets/png/ls.png'
import sz from '../assets/png/sz.png'
import ks from '../assets/png/ks.png'
function Dashboard() {
  return (
    <div className='flex flex-col bg-[#111315] p-10 w-full  gap-8'>
    <div className='flex flex-col gap-8'>
      <p className='text-[#FFFFFF] text-[24px] font-semibold '>My Profile</p>
      <div className='flex  flex-col'>
<div  style={{ backgroundImage: `url(${bg})` }} className="flex w-full h-45 bg-cover bg-center rounded-tr-[10px] rounded-tl-[10px] ">
<button className="block mx-auto w-26.25 h-10 rounded-full border border-white/10 bg-white/1 text-white text-sm font-medium backdrop-blur-sm ml-270 mt-30 cursor-pointer">
  Edit Cover
</button>


</div>

      <div className='flex w-full h-30.25 bg-[#1A1D1F]  rounded-br-[10px] rounded-bl-[10px] items-center gap-4 justify-between p-3 '>
        <div className='flex items-center gap-4'>
<div className='flex gap-8  '>
<img className='w-35 h-35 ml-10 -mt-10' src={op} alt="" />
</div>
<div className='flex flex-col'>
    <p className='text-[20px] text-[#ffff] font-medium'>Jane Daniel</p>
    <span className='text-[14px] text-[#FFFFFF] font-light'>Agent</span>
</div>
</div>
<button className='w-30.5 h-11.5 bg-[#499BFC] rounded-md text-[16px] text-[#FFFFFF] font-normal cursor-pointer'>Edit Profile</button>
      </div>
      
      </div>
    </div>
    {/* pas */}
    <div className='flex flex-col gap-8 w-full p-8 h-140.25 bg-[#1A1D1F] rounded-[10px]'>
        <div className='flex gap-5 '>
            <button className='w-25.5 h-13 rounded-md bg-[#499BFC] text-[16px] text-[#FFFFFF] font-normal cursor-pointer'>Popular</button>
              <button className='w-28.5 h-13 rounded-md bg-[#111315] text-[16px] text-[#FFFFFF] font-normal  hover:bg-[#499BFC] cursor-pointer'>Recommended</button>
                <button className='w-25.5 h-13 rounded-md bg-[#111315] text-[16px] text-[#FFFFFF] font-normal  hover:bg-[#499BFC] cursor-pointer'>Newest</button>

        </div>
        <div className='flex gap-7.5 '>
   <div className=' flex flex-col w-62 h-96.25 bg-[#111315] rounded-md p-3 gap-4'>
    <img src={sz} alt="" />
    <p className='text-[#FFFFFF] text-[18px] font-medium'>President Apart</p>
    <div className='flex items-center gap-2'>
        <img src={lg} alt="" />
        <p className='tex-[14px] text-[#ffff] font-light'>Mokondo Street No.198</p>
    </div>
    <span className='text-[20px] text-[#499BFC] font-medium'>$20<small className='text-[14px] text-[#ffff] font-light'>/night</small></span>
    <button className='w-full border-2 border-[#1A1D1F] h-15 text-[14px] text-[#499BFC] font-light hover:bg-[#499BFC] text-[#ffff]'>View Detail</button>


   </div>
    <div className=' flex flex-col w-62 h-96.25 bg-[#111315] rounded-md p-3 gap-4'>
    <img src={rs} alt="" />
    <p className='text-[#FFFFFF] text-[18px] font-medium'>President Apart</p>
    <div className='flex items-center gap-2'>
        <img src={lg} alt="" />
        <p className='tex-[14px] text-[#ffff] font-light'>Mokondo Street No.198</p>
    </div>
    <span className='text-[20px] text-[#499BFC] font-medium'>$20<small className='text-[14px] text-[#ffff] font-light'>/night</small></span>
    <button className='w-full border-2 border-[#1A1D1F] h-15 text-[14px] text-[#499BFC] font-light hover:bg-[#499BFC] text-[#ffff]'>View Detail</button>


   </div>
    <div className=' flex flex-col w-62 h-96.25 bg-[#111315] rounded-md p-3 gap-4'>
    <img src={ks} alt="" />
    <p className='text-[#FFFFFF] text-[18px] font-medium'>President Apart</p>
    <div className='flex items-center gap-2'>
        <img src={lg} alt="" />
        <p className='tex-[14px] text-[#ffff] font-light'>Mokondo Street No.198</p>
    </div>
    <span className='text-[20px] text-[#499BFC] font-medium'>$20<small className='text-[14px] text-[#ffff] font-light'>/night</small></span>
    <button className='w-full border-2 border-[#1A1D1F] h-15 text-[14px] text-[#499BFC] font-light hover:bg-[#499BFC] text-[#ffff]'>View Detail</button>


   </div>
    <div className=' flex flex-col w-62 h-96.25 bg-[#111315] rounded-md p-3 gap-4'>
    <img src={ls} alt="" />
    <p className='text-[#FFFFFF] text-[18px] font-medium'>President Apart</p>
    <div className='flex items-center gap-2'>
        <img src={lg} alt="" />
        <p className='tex-[14px] text-[#ffff] font-light'>Mokondo Street No.198</p>
    </div>
    <span className='text-[20px] text-[#499BFC] font-medium'>$20<small className='text-[14px] text-[#ffff] font-light'>/night</small></span>
    <button className='w-full border-2 border-[#1A1D1F] h-15 text-[14px] text-[#499BFC] font-light hover:bg-[#499BFC] text-[#ffff]'>View Detail</button>


   </div>
        </div>

    </div>
    </div>
  )
}

export default Dashboard