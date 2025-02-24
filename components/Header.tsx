import Link from 'next/link'
import React from 'react'
// Components
import NavBar from './NavBar'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 lg:py-12 text-white bg-primary'>
        <div className='container mx-auto flex justify-between items-center '>
            <Link href='/'>
            <h1 className='font-semibold text-4xl'>
                Gio <span className='text-accent'>.</span>
            </h1>
            </Link>
             {/* Desktop nav & Hire ME*/}
             <div className='hidden xl:flex items-center gap-8 '>
                <NavBar/>
                <Link href='/contact'>
                <Button> Hire Me</Button>
                </Link>
             </div>
             {/* Mobile Nav */}
             <div className="xl:hidden">
                <MobileNav/>
             </div>
        </div>
    </header>
  )
}

export default Header