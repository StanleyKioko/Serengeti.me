import React from 'react'

const Animals = () => {
  return (
    <div className="bg-[#000300] min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Serengeti Wildlife</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Explore the diverse wildlife of the Serengeti, home to some of Africa's most magnificent animals.</p>
        </div>
        
        {/* Card Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Lion Card 1 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-yellow-700 flex items-center justify-center">
              {/* Image placeholder - replace with actual image */}
              <span className="text-6xl">🦁</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Lions</h2>
              <p className="text-gray-300 mb-4">Lions are known as the kings of the jungle, and they play a crucial role in the Serengeti ecosystem.</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Lion Card 2 - Changed to Tiger */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-orange-800 flex items-center justify-center">
              {/* Image placeholder - replace with actual image */}
              <span className="text-6xl">🐯</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Cheetahs</h2>
              <p className="text-gray-300 mb-4">Cheetahs are the fastest land animals, capable of reaching speeds up to 70 mph in short bursts.</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Elephant Card */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-gray-700 flex items-center justify-center">
              {/* Image placeholder - replace with actual image */}
              <span className="text-6xl">🐘</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Elephants</h2>
              <p className="text-gray-300 mb-4">Elephants are the largest land animals on Earth, and they are known for their intelligence and strong social bonds.</p>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Zebra Card */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-indigo-900 flex items-center justify-center">
              {/* Image placeholder - replace with actual image */}
              <span className="text-6xl">🦓</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Zebras</h2>
              <p className="text-gray-300 mb-4">Zebras are known for their distinctive black and white stripes, and they are social animals that live in herds.</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Added two more cards for better grid balance */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-green-900 flex items-center justify-center">
              {/* Image placeholder - replace with actual image */}
              <span className="text-6xl">🦏</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Rhinoceros</h2>
              <p className="text-gray-300 mb-4">Rhinos are known for their formidable horns and thick skin. They are among the most endangered species in Africa.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-blue-900 flex items-center justify-center">
              {/* Image placeholder - replace with actual image */}
              <span className="text-6xl">🦬</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Buffalo</h2>
              <p className="text-gray-300 mb-4">African buffalo are powerful and unpredictable, considered one of the most dangerous animals in the Serengeti.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">Want to learn more about Serengeti wildlife conservation efforts?</p>
          <button className="mt-4 bg-transparent hover:bg-white text-white hover:text-[#000300] border border-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            View Conservation Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default Animals