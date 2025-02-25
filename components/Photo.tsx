'use client';
import React from 'react'
import Image from 'next/image'
import { images } from '@/assets/assets';
import {motion} from 'motion/react'
const Photo = () => {
  return (
    <div className='h-full w-full relative'>
        <motion.div 
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{
                        delay:2.4,duration:.4,ease:'easeInOut'
                    },
                }}>
            {/* image */}
            <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{
                    delay:2,duration:.4,ease:'easeIn'
                },
            }}
            className='mix-blend-plus-lighter w-[320px] h-[600px]
            xl:h-[498px] xl:w-[498px] absolute '>
                <Image
                src={images.gio}
                alt='gio'
                priority 
                quality={100}
                className='object-contain rounded-full justify-center items-center mt-4 ml-[-6px]'/>
            </motion.div>
            {/* circles  */}
            <motion.svg 
                className='w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]'
                fill='transparent'
                viewBox={'0 0 506 506'}
                xmlns='http://www.w3.org/2000/svg'
            >
                <motion.circle 
                cx='253' cy='253' r='250' 
                stroke='#00ff99' strokeWidth='4'
                strokeLinecap='round' strokeLinejoin='round' 
                initial={{strokeDasharray:'24 10 0 0 '}}
                animate={{
                    strokeDasharray:['15 120 25 25' , '16 25 92 72', '4 250 22 22'],
                    rotate:[120,360],
                }}
                transition={{
                    duration:20,
                    repeat:Infinity,
                    repeatType:'reverse'
                }}
                />
            </motion.svg >
        </motion.div>
    </div>
  )
}

export default Photo