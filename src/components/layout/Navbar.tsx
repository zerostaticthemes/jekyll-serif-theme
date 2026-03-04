import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const NAVBAR_HIDE_THRESHOLD = 200
const NAVBAR_TOP_THRESHOLD = 150

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollUpDistance, setScrollUpDistance] = useState(0)
  const [scrollDownDistance, setScrollDownDistance] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = lastScrollY - currentScrollY

      if (currentScrollY < NAVBAR_TOP_THRESHOLD) {
        setIsVisible(true)
        setScrollUpDistance(0)
        setScrollDownDistance(0)
      } 
      // Scrolling up
      else if (currentScrollY < lastScrollY) {
        const newScrollUpDistance = scrollUpDistance + scrollDifference
        setScrollUpDistance(newScrollUpDistance)
        setScrollDownDistance(0) // Reset down counter when scrolling up
        
        if (newScrollUpDistance >= NAVBAR_HIDE_THRESHOLD) {
          setIsVisible(true)
        }
      }
      // Scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > NAVBAR_TOP_THRESHOLD) {
        const newScrollDownDistance = scrollDownDistance + (currentScrollY - lastScrollY)
        setScrollDownDistance(newScrollDownDistance)
        setScrollUpDistance(0) // Reset up counter when scrolling down
        
        if (newScrollDownDistance >= NAVBAR_HIDE_THRESHOLD) {
          setIsVisible(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY, scrollUpDistance, scrollDownDistance])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-[#001f3f] bg-cover bg-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="absolute inset-0 backdrop-blur-md shadow-md"></div>
      <div className="absolute inset-0 bg-[#FBF6F6]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-stretch h-24">
          <Link
            to="/" 
            tabIndex={-1}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white duration-300 flex items-center px-2 sm:px-4"
          >
            <img src="/images/logo/SEAS_LOGO_Transparent.png" alt="SEAS Logo" className="w-20 h-20 inline-block mr-2" />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            tabIndex={-1}
            className="lg:hidden text-blue-600 p-2 flex items-center"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden lg:flex list-none m-0 p-0 h-full items-stretch">
            <li className="flex items-stretch">
              <Link 
                to="/about" 
                tabIndex={-1}
                className="text-[#2d8bba] no-underline text-lg px-4 flex items-center hover:translate-x-1 hover:text-blue-500 hover:font-semibold hover:bg-blue-100 transition-all duration-300"
              >
                Về Chúng Tôi
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link 
                to="/programs" 
                tabIndex={-1}
                className="text-[#2d8bba] no-underline text-lg px-4 flex items-center hover:translate-x-1 hover:text-blue-500 hover:font-semibold hover:bg-blue-100 transition-all duration-300"
              >
                Chương Trình
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link 
                to="/team" 
                tabIndex={-1}
                className="text-[#2d8bba] no-underline text-lg px-4 flex items-center hover:translate-x-1 hover:text-blue-500 hover:font-semibold hover:bg-blue-100 transition-all duration-300"
              >
                Đội Ngũ
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link 
                to="/apply" 
                tabIndex={-1}
                className="text-[#2d8bba] no-underline text-lg px-4 flex items-center hover:translate-x-1 hover:text-blue-500 hover:font-semibold hover:bg-blue-100 transition-all duration-300"
              >
                Đăng Ký Tham Gia
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link 
                to="/donate" 
                tabIndex={-1}
                className="text-[#2d8bba] no-underline text-lg px-4 flex items-center hover:translate-x-1 hover:text-blue-500 hover:font-semibold hover:bg-blue-100 transition-all duration-300"
              >
                Tài trợ
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link 
                to="/contact" 
                tabIndex={-1}
                className="text-[#2d8bba] no-underline text-lg px-4 flex items-center hover:translate-x-1 hover:text-blue-500 hover:font-semibold hover:bg-blue-100 transition-all duration-300"
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="py-4 space-y-2">
            <li>
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={-1}
                className="block text-blue-400 no-underline text-lg px-4 py-2 rounded hover:text-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                Giới Thiệu
              </Link>
            </li>
            <li>
              <Link 
                to="/programs" 
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={-1}
                className="block text-blue-400 no-underline text-lg px-4 py-2 rounded hover:text-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                Chương Trình
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={-1}
                className="block text-blue-400 no-underline text-lg px-4 py-2 rounded hover:text-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                Đội Ngũ
              </Link>
            </li>
            <li>
              <Link 
                to="/apply" 
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={-1}
                className="block text-blue-400 no-underline text-lg px-4 py-2 rounded hover:text-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                Đăng Ký
              </Link>
            </li>
            <li>
              <Link 
                to="/donate" 
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={-1}
                className="block text-blue-400 no-underline text-lg px-4 py-2 rounded hover:text-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                Tài trợ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={-1}
                className="block text-blue-400 no-underline text-lg px-4 py-2 rounded hover:text-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar