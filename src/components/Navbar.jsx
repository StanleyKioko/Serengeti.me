import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link } from 'react-scroll'
import { FaPaw } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    const handleClick = () => setNav(!nav)
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        
        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#000300]/95 shadow-lg' : 'bg-transparent'}`}>
            <div className={`flex justify-between items-center w-full max-w-7xl mx-auto px-6 lg:px-8 py-4 transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
                {/* Logo */}
                <div className="flex items-center">
                    <FaPaw className="text-yellow-500 mr-2 text-2xl" />
                    <h1 className={`font-bold transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-3xl'}`}>
                        <span className="text-white">Wildlife</span>
                        <span className="text-yellow-500">Explorer</span>
                    </h1>
                </div>
                
                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-1">
                    <li>
                        <Link to="home" smooth={true} duration={500} 
                              className="text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all cursor-pointer block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="parks" smooth={true} duration={500} 
                              className="text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all cursor-pointer block">
                            Parks
                        </Link>
                    </li>
                    <li>
                        <Link to="attraction-points" smooth={true} duration={500} 
                              className="text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all cursor-pointer block">
                            Attractions
                        </Link>
                    </li>
                    <li>
                        <Link to="accommodation" smooth={true} duration={500} 
                              className="text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all cursor-pointer block">
                            Accommodation
                        </Link>
                    </li>
                    <li className="ml-4">
                        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                            Subscribe
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button 
                        onClick={handleClick} 
                        className={`text-white p-2 rounded-full transition-all ${nav ? 'bg-gray-700' : 'hover:bg-white/10'}`}
                        aria-label="Toggle Menu"
                    >
                        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 z-40 transition-all duration-300 lg:hidden ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`h-full flex flex-col justify-center items-center transition-all duration-300 ${nav ? 'translate-y-0' : '-translate-y-10'}`}>
                    <ul className="flex flex-col items-center space-y-8">
                        <li>
                            <Link 
                                onClick={handleClick} 
                                to="home" 
                                smooth={true} 
                                duration={500}
                                className="text-white text-2xl font-medium hover:text-yellow-500 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={handleClick} 
                                to="parks" 
                                smooth={true} 
                                duration={500}
                                className="text-white text-2xl font-medium hover:text-yellow-500 transition-colors"
                            >
                                Parks
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={handleClick} 
                                to="attraction-points" 
                                smooth={true} 
                                duration={500}
                                className="text-white text-2xl font-medium hover:text-yellow-500 transition-colors"
                            >
                                Attractions
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={handleClick} 
                                to="accommodation" 
                                smooth={true} 
                                duration={500}
                                className="text-white text-2xl font-medium hover:text-yellow-500 transition-colors"
                            >
                                Accommodation
                            </Link>
                        </li>
                        <li className="mt-8">
                            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Subscribe
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar