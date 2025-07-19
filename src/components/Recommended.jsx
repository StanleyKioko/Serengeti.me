import React, { useState } from 'react'
import { FaChevronRight, FaEnvelope, FaCheck } from 'react-icons/fa'
import cheetah from '../assets/Cheetahs.jpg'
import elephant from '../assets/Elephants.jpg'
import giraffe from '../assets/Giraffe.jpg'
import humpbackWhale from '../assets/Humpback Whale.jpg'

const Recommended = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      // Here you would normally handle the subscription with an API call
    }
  };

  // Define URLs for the "Learn More" buttons
  const learnMoreUrls = {
    cheetah: "https://www.worldwildlife.org/species/cheetah",
    elephant: "https://www.worldwildlife.org/species/elephant",
    giraffe: "https://www.worldwildlife.org/species/giraffe",
    humpbackWhale: "https://www.worldwildlife.org/species/humpback-whale"
  };

  return (
    <div id="recommended" className="bg-[#000300] min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">
            FEATURED WILDLIFE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recommended Species
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover more about these amazing animals that make the Serengeti ecosystem one of the most diverse in the world.
          </p>
        </div>

        {/* Featured Cards - Using flex-row with scroll for horizontal scrolling on mobile */}
        <div className="mb-20">
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x snap-mandatory scrollbar-hide">
            {/* Cheetah Card */}
            <div className="min-w-[300px] max-w-[350px] snap-center bg-gradient-to-br from-yellow-900/40 to-yellow-700/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-900/30 shadow-xl">
              <div className="h-64 bg-yellow-800/30 relative overflow-hidden">
                <img src={cheetah} alt="Cheetah" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-yellow-500 text-black py-1 px-4 rounded-bl-lg font-semibold text-sm">
                  FASTEST
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Cheetah</h2>
                <p className="text-gray-300 mb-6">
                  The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph in short bursts for hunting prey on the savanna.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2"></span>
                    <span className="text-sm text-green-400">Conservation: Vulnerable</span>
                  </div>
                  <a 
                    href={learnMoreUrls.cheetah}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition-all"
                  >
                    Learn More <FaChevronRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Elephant Card */}
            <div className="min-w-[300px] max-w-[350px] snap-center bg-gradient-to-br from-gray-900/40 to-gray-700/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 shadow-xl">
              <div className="h-64 bg-gray-800/30 relative overflow-hidden">
                <img src={elephant} alt="Elephant" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-gray-600 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm">
                  LARGEST
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Elephant</h2>
                <p className="text-gray-300 mb-6">
                  Elephants are the largest land mammals on Earth and are known for their intelligence, complex social structures and remarkable memory.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></span>
                    <span className="text-sm text-yellow-400">Conservation: Vulnerable</span>
                  </div>
                  <a 
                    href={learnMoreUrls.elephant}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition-all"
                  >
                    Learn More <FaChevronRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Giraffe Card */}
            <div className="min-w-[300px] max-w-[350px] snap-center bg-gradient-to-br from-orange-900/40 to-orange-700/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-900/30 shadow-xl">
              <div className="h-64 bg-orange-800/30 relative overflow-hidden">
                <img src={giraffe} alt="Giraffe" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-orange-500 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm">
                  TALLEST
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Giraffe</h2>
                <p className="text-gray-300 mb-6">
                  Giraffes are the tallest mammals, with long necks that help them reach high leaves in trees that other herbivores cannot access.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                    <span className="text-sm text-red-400">Conservation: Endangered</span>
                  </div>
                  <a 
                    href={learnMoreUrls.giraffe}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition-all"
                  >
                    Learn More <FaChevronRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Humpback Whale Card */}
            <div className="min-w-[300px] max-w-[350px] snap-center bg-gradient-to-br from-blue-900/40 to-blue-700/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-900/30 shadow-xl">
              <div className="h-64 bg-blue-800/30 relative overflow-hidden">
                <img src={humpbackWhale} alt="Humpback Whale" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm">
                  AQUATIC
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Humpback Whale</h2>
                <p className="text-gray-300 mb-6">
                  Humpback whales are known for their acrobatic breaches and complex songs that can travel for miles through ocean waters.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2"></span>
                    <span className="text-sm text-green-400">Conservation: Least Concern</span>
                  </div>
                  <a 
                    href={learnMoreUrls.humpbackWhale}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition-all"
                  >
                    Learn More <FaChevronRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scrolling Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-700/10 rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-900/20">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="text-yellow-400 mb-2 flex items-center">
                <FaEnvelope className="mr-2" />
                <span className="font-semibold">STAY CONNECTED</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-300">
                Stay updated on the latest news, conservation efforts, and wildlife sightings in the Serengeti. We send monthly updates with exclusive content.
              </p>
            </div>
            
            <div className="md:w-1/2 md:ml-8">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full bg-white/10 border border-yellow-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    Subscribe
                  </button>
                  <p className="text-xs text-gray-400">
                    We respect your privacy. You can unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 text-green-400 mb-4">
                    <FaCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You for Subscribing!</h3>
                  <p className="text-gray-300">
                    You've been added to our newsletter. Look out for exciting updates in your inbox soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommended