import React from 'react'
import { LogoC, LogoT } from './graphics/Logo';

function Header() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  return (
    <div className="fixed w-screen py-4 px-4 flex justify-between items-center border-b">
      <div id="logo_container" className="w-12 h-6 relative flex flex-col justify-end">
        <LogoT />
        <LogoC className=' translate-x-[0.4rem] scale-x-90'/>
        
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Header