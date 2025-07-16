import React from 'react'
import { FaInfoCircle, FaArrowRight } from 'react-icons/fa'
import blackrhino from '../assets/Black Rhino.jpg'
import africanwilddog from '../assets/African Wild Dog.jpg'
import grevyszebra from '../assets/Grevys Zebra.jpg'


const Endangered = () => {
  return (
    <div className="bg-gradient-to-b from-[#000300] to-[#0a192f] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold mb-4">
            CRITICAL CONSERVATION
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Endangered Species
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about the endangered species of the Serengeti and how conservation efforts are working to protect these vulnerable animals from extinction.
          </p>
          
          {/* Conservation Status Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
              <span className="text-gray-300">Critically Endangered</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
              <span className="text-gray-300">Endangered</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-gray-300">Vulnerable</span>
            </div>
          </div>
        </div>
        
        {/* Card Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Black Rhino Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-red-900/20 hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 bg-gray-800 overflow-hidden relative">
              <img src={blackrhino} alt="Black Rhino" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  CRITICALLY ENDANGERED
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-white">Black Rhino</h2>
                <span className="text-red-500">
                  <FaInfoCircle />
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                The black rhinoceros is critically endangered, with fewer than 5,500 remaining in the wild. Poaching for their horns remains the biggest threat to their survival.
              </p>
              <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500">Population</span>
                  <p className="text-red-400 font-bold">~5,500 left</p>
                </div>
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all">
                  Learn More
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
          
          {/* African Wild Dog Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-orange-900/20 hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 bg-gray-800 overflow-hidden relative">
              <img src={africanwilddog} alt="African Wild Dog" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ENDANGERED
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-white">African Wild Dog</h2>
                <span className="text-orange-500">
                  <FaInfoCircle />
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                These social animals are endangered due to habitat loss, human-wildlife conflict, and diseases spread from domestic animals. Fewer than 6,600 remain in fragmented populations.
              </p>
              <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500">Population</span>
                  <p className="text-orange-400 font-bold">~6,600 left</p>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all">
                  Learn More
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Grevy's Zebra Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-900/20 hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 bg-gray-800 overflow-hidden relative">
              <img src={grevyszebra} alt="Grevy's Zebra" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  VULNERABLE
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-white">Grevy's Zebra</h2>
                <span className="text-yellow-500">
                  <FaInfoCircle />
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                With fewer than 2,000 individuals remaining, Grevy's zebra is the most endangered zebra species. They face threats from hunting, habitat loss, and competition with livestock.
              </p>
              <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500">Population</span>
                  <p className="text-yellow-400 font-bold">~2,000 left</p>
                </div>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 px-5 py-2 rounded-lg flex items-center gap-2 transition-all">
                  Learn More
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Help Protect These Species</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Conservation efforts need your support. Every contribution helps protect these endangered animals and their habitats for future generations.
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Donate to Conservation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Endangered