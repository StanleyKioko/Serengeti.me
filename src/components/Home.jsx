import React from 'react'
import background from '../assets/background.jpg';
import lions from '../assets/lions.jpg'
import Cheetahs from '../assets/Cheetahs.jpg'
import elephants from '../assets/Elephants.jpg'
import zebras from '../assets/Zebras.jpg'
import { Link } from 'react-scroll'

const Home = () => {
  // Define URLs for animal info links
  const animalUrls = {
    lion: "https://www.worldwildlife.org/species/lion",
    elephant: "https://www.worldwildlife.org/species/elephant",
    zebra: "https://www.worldwildlife.org/species/zebra"
  };

  return (
    <div id="home" className="min-h-screen bg-[#000300]">
      {/* Hero Section with Full-Height Background */}
      <div 
        className="w-full h-screen bg-cover bg-center bg-fixed relative" 
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay with gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-white h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-lg tracking-widest uppercase mb-2 font-medium">Wildebeests | Explore</p>
            
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">The Serengeti</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                Ecosystem
              </h1>
            </div>
            
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              The Serengeti ecosystem is one of the most famous in the world, known for its stunning landscapes and diverse wildlife.
            </p>
            
            <div className="mt-10">
              <Link
                to="animals"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block cursor-pointer"
              >
                Explore The Wilderness
              </Link>
            </div>
            
            {/* Scroll indicator */}
            <Link
              to="featured-animals"
              smooth={true}
              duration={800}
              offset={-80}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            >
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Animals Section */}
      <div id="featured-animals" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#000300]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Animals of the Serengeti</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Home to some of Africa's most magnificent wildlife, the Serengeti hosts an incredible variety of species.
            </p>
          </div>
          
          {/* Animal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lion Card */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <img src={lions} alt="Lions" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Lions</h4>
                <p className="text-gray-400">The kings of the Serengeti, ruling the savannah with their majestic presence.</p>
                <a 
                  href={animalUrls.lion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-yellow-400 hover:text-yellow-300 font-medium flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Elephant Card */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <img src={elephants} alt="Elephants" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Elephants</h4>
                <p className="text-gray-400">Intelligent gentle giants known for their remarkable memory and social bonds.</p>
                <a
                  href={animalUrls.elephant}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-yellow-400 hover:text-yellow-300 font-medium flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Zebra Card */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <img src={zebras} alt="Zebras" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Zebras</h4>
                <p className="text-gray-400">Known for their distinctive stripes and social herds that roam the plains.</p>
                <a
                  href={animalUrls.zebra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-yellow-400 hover:text-yellow-300 font-medium flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* View all animals button */}
          <div className="text-center mt-12">
            <Link
              to="animals"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 inline-block cursor-pointer"
            >
              Discover All Wildlife
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home