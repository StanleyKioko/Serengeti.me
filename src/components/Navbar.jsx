import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
        <div className="flex justify-between items-center w-full max-w-[1000px] mx-auto">
            <div>
                <h1 className="text-3xl font-bold">Wildlife Explorer</h1>
            </div>
            
            {/*menu*/}
            <ul className="hidden md:flex gap-8">
                <li className="hover:text-yellow-500 cursor-pointer">
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer">
                    <Link to="parks" smooth={true} duration={500}>Parks</Link>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer">
                    <Link to="attraction-points" smooth={true} duration={500}>Attraction Points</Link>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer">
                    <Link to="accommodation" smooth={true} duration={500}>Accommodation</Link>
                </li>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-1 rounded">Subscribe</button>
            </ul>

            <div className="md:hidden z-50">
                {/*hamburger icon*/}
                <div onClick={handleClick} className="cursor-pointer">
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>

                {/* Mobile Menu */}
                {nav && (
                    <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-40">
                        <li className="py-4 text-xl hover:text-yellow-500">
                            <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="py-4 text-xl hover:text-yellow-500">
                            <Link onClick={handleClick} to="parks" smooth={true} duration={500}>Parks</Link>
                        </li>
                        <li className="py-4 text-xl hover:text-yellow-500">
                            <Link onClick={handleClick} to="attraction-points" smooth={true} duration={500}>Attraction Points</Link>
                        </li>
                        <li className="py-4 text-xl hover:text-yellow-500">
                            <Link onClick={handleClick} to="accommodation" smooth={true} duration={500}>Accommodation</Link>
                        </li>
                        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded">Subscribe</button>
                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar