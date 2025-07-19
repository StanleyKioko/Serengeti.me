import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPaw } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer id='footer' className="bg-[#000300] text-gray-400">
      {/* Top section with links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <FaPaw className="text-yellow-500 mr-2 text-2xl" />
              <h2 className="text-xl font-bold text-white">Wildlife Explorer</h2>
            </div>
            <p className="mb-4">
              Discover the wonders of the Serengeti ecosystem and learn about the diverse wildlife that calls it home.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="home" className="hover:text-yellow-500 cursor-pointer transition-colors">Home</Link>
              </li>
              <li>
                <Link to="parks" className="hover:text-yellow-500 cursor-pointer transition-colors">Parks</Link>
              </li>
              <li>
                <Link to="animals" className="hover:text-yellow-500 cursor-pointer transition-colors">Animals</Link>
              </li>
              <li>
                <Link to="endangered" className="hover:text-yellow-500 cursor-pointer transition-colors">Endangered Species</Link>
              </li>
              <li>
                <Link to="recommended" className="hover:text-yellow-500 cursor-pointer transition-colors">Recommended</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">Conservation</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">Research</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">Support Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates on wildlife conservation.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 text-white"
              />
              <button type="submit" className="px-4 py-2 bg-yellow-500 text-gray-900 font-medium rounded hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and legal links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} Wildlife Explorer by Stanley Mwange. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer