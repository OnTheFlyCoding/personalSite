'use client';
import { AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stairs from './ui/Stairs';

const StairTransition = () => {

const pathname = usePathname();
  return (
    <>
        <AnimatePresence mode='wait'>
            <div key={pathname}>
                <div className='w-screen h-screen fixed top-0
                left-0 right-0 pointer-events-none z-40 flex'>
                    <Stairs/>
                </div>
            </div>
        </AnimatePresence>    
    </>

  )
}

export default StairTransition