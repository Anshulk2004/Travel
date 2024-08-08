"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/src/components/ui/button'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);

  const mainNavItems = ['Home', 'Explore Us', 'About Us', 'Contact Us'];
  const utilityNavItems = ['Dashboard', 'Sign Up', 'Login'];

  useEffect(() => {
    const updateHighlight = () => {
      if (navRef.current) {
        const navItem = navRef.current.children[activeIndex] as HTMLElement;
        setHighlightStyle({
          width: `${navItem.offsetWidth}px`,
          transform: `translateX(${navItem.offsetLeft}px)`,
        });
      }
    };

    updateHighlight();
    window.addEventListener('resize', updateHighlight);
    return () => window.removeEventListener('resize', updateHighlight);
  }, [activeIndex]);

  return (
    <nav className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-700/40 hover:to-blue-700/40 shadow-lg">
      <div className="flex items-center">
        <Image src="/image.svg" alt="Logo" width={40} height={40} className="mr-4" />
        <div className="flex space-x-2 relative" ref={navRef}>
          <div
            className="absolute h-full bg-white/30 rounded-full transition-all duration-300 ease-in-out"
            style={highlightStyle}
          />
          {mainNavItems.map((item, index) => (
            <Button
              key={item}
              variant="ghost"
              className={`text-sm font-medium transition-all duration-300 ease-in-out rounded-full relative z-10
                ${index === activeIndex ? 'text-blue-500' : 'text-white/80 hover:text-blue-500'}`}
              onClick={() => setActiveIndex(index)}
              asChild
            >
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 relative">
        {utilityNavItems.map((item, index) => (
          <Button
            key={item}
            variant="ghost"
            className={`text-sm font-medium transition-all duration-300 ease-in-out rounded-full relative z-10
              ${index === activeIndex ? 'text-blue-500' : 'text-white/80 hover:text-blue-500'}`}
            onClick={() => setActiveIndex(index)} 
          >
            {item}
          </Button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
