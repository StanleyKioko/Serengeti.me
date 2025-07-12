import React from 'react'
import ReactDOM from 'react-dom/client';
import background from '../assets/background.jpg';
const Home = () => {
  return (
    <div>
      <div className="w-full h-96 mb-4 bg-cover bg-center relative" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content positioned over the background */}
  <div className="relative z-10 text-white text-center p-10 flex flex-col h-full justify-center">
    <p className="text-yellow-500">Wildebeests | Explore</p>
    <h2 className="text-2xl font-bold">The Serengeti</h2>
    <h1 className="text-gray-300 text-4xl font-extrabold">Ecosystem</h1>
    <p className="text-gray-400 max-w-2xl mx-auto mt-4">
      The Serengeti ecosystem is one of the most famous in the world, known for its stunning landscapes and diverse wildlife.
    </p>
    <div className="mt-6">
      <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
        Explore
      </button>
    </div>
  </div>
</div>
              <h3>Animals at the Serengeti</h3>
              <ul>
                  <li>Lion</li>
                  <li>Elephants</li>
                  <li>Zebras</li>
              </ul>
            </div>
  )
}

export default Home
