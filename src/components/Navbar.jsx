import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <div className="font-semibold tracking-tight">DevPortfolio</div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 md:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar
