import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-[#0a192f] text-gray-300 flex justify-between items-center px-4">
        <div className="flex justify-between items-center w-full max-w-[1000px] mx-auto">
            <div>
                {/* Logo or Brand Name */}
            </div>
            <div>
                {/*menu*/}
                <ul className="hidden md:flex inline-flex space-x-4">
                    <li>Home</li>
                    <li>Parks</li>
                    <li>Attraction Points</li>
                    <li>Accomodation</li>
                    </ul>

                <div>
                    {/*humburger icon*/}
                    <FaBars />


                    <div>
                        {/* Mobile Menu */}
                        <ul>
                            <li>Home</li>
                            <li>Parks</li>
                            <li>Attraction Points</li>
                            <li>Accomodation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
