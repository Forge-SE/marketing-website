import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center  text-white bg-transparent h-[10vh]'>
      {/* Logo */}
      <div>
        <Image src="/Logo.svg" alt="Logo" width={220} height={100} />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar

