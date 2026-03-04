import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white mt-auto">
      {/* First Bar - Navigation Links */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#62B3D1] px-4 sm:px-6 lg:px-8">
        <div className="text-white text-sm sm:text-base lg:text-lg roboto-slab text-center sm:text-left">
          SEAS - Summer in Engineering and Applied Sciences
        </div>
        <div className='gap-3 sm:gap-4 lg:gap-5 flex items-center flex-wrap justify-center sm:justify-end'>
          <Link
            to="/"
            className="text-white no-underline text-sm sm:text-base font-medium transition-colors duration-300 hover:text-[#4a9eff]"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white no-underline text-sm sm:text-base font-medium transition-colors duration-300 hover:text-[#4a9eff]"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Second Bar - Social Links and Copyright */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#3BA0C5] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 sm:gap-5 items-center justify-center sm:justify-start">
          <a 
            href="https://github.com/SEAS-CVN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#4a9eff]"
            aria-label="GitHub"
          >
            <img src="/images/icons/github.svg" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://www.facebook.com/seas.cvn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#4a9eff]"
            aria-label="Facebook"
          >
            <img src="/images/icons/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="mailto:seas.cvn@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#4a9eff]"
            aria-label="Email"
          >
            <img src="/images/icons/email.svg" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
        <div className="text-xs sm:text-sm text-white text-center sm:text-right">
          © 2025 SEAS. All rights reserved. 
        </div>
      </div>
    </footer>
  )
}

export default Footer
