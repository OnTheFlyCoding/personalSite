'use client';
import {motion} from 'motion/react'
import {Swiper, SwiperClass, SwiperProps, SwiperRef, SwiperSlide} from 'swiper/react'
import React, { useState } from 'react';
import 'swiper/css'
import {BsArrowUpRight,BsGithub} from 'react-icons/bs'
import {
  Tooltip, TooltipTrigger, TooltipProvider, TooltipContent
} from '@/components/ui/tooltip';
import Link from 'next/link'; 
import Image from 'next/image';
import { images } from '@/assets/assets';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num:'01',
    category:'Frontend',
    description:'Landing page dedicated to gaining new members for a non-profit organization dedicated to raising politcal awareness of the DSA of Connecticut.',
    stack:[{name:'React'},{name:'Javascript'}, {name:'Css 3'},{name:'HTML 5'}],
    image: images.truct,
    live:'https://truct.net',
    github:'https://github.com/OnTheFlyCoding/truCTWebsite'
  },{
    num:'02',
    category:'Frontend',
    description:'Dynamic replica of the apple home page in 2024. Showcasing my ability to control the flow of a website and use advanced programming to create an elegant and fluid user experience.',
    stack:[{name : 'Next.js'},{name:'React'},{name:'Typescript'}, {name:'TailwindCss'}],
    image:images.apple,
    live:'https://github.com/OnTheFlyCoding/apple_website',
    github:'https://github.com/OnTheFlyCoding/apple_website'
  },{
    num:'03',
    category:'Fullstack',
    description:'Cosmetic Store website. Showcases new products, email subscription, online ordering, and much more. All tied together in a beautiful display.',
    stack:[{name:'PHP'},{name:'Javascript'}, {name:'Css 3'},{name:'HTML 5'}, {name : 'SQL Lite'}],
    image:images.toBe,
    live:'https://www.2besmooth.com',
    github:'https://github.com/OnTheFlyCoding'
  },{
    num:'04',
    category:'Fullstack',
    description:'Local small business restaurant website. Ability to make online orders sent to their POS and integrate with major online delivery services. Weekly menu updates setup with CRON jobs.',
    stack:[{name:'WordPress'},{name:'SQL Lite'}, {name:'Adobe '},{name:'HTML 5'}],
    image:images.cafe,
    live:'https://www.thetastegardencafe.com',
    github:'https://github.com/OnTheFlyCoding'
  },
  {
    num:'05',
    category:'Frontend',
    description:'Dynamic website for an Electric Bike Kit Company. The website showcases the DIY Electric Bike Kits for sale and useful information on how the organization began. A support page for common troubleshooting.',
    stack:[{name:'React'},{name:'Javascript'}, {name:'Css 3'},{name:'HTML 5'}, {name:'Vite'}],
    image:images.bvolt,
    live:'https://ontheflycoding.github.io/bridgevolt_website',
    github:'https://github.com/OnTheFlyCoding/bridgevolt_website'
  },
]
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper:SwiperClass)=>{

    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section className='min-h-[80vh] flex flex-col justify-center py-12 '
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:2.4, duration:.4, ease:'easeIn'}}}>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:h-[460px] xl:w-[50%] flex 
          flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline number */}
              <div className='text-8xl leading-none font-extrabold text-transparent
              text-outline'>{project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] text-white font-bold leading-none
              group-hover:text-accent transition-all duratation-500 capitalize'>
              {project.category} Project
              </h2>
              {/* Project Description */}
              <p className='text-white/60'>
              {project.description}
              </p>
              {/* Stack for project */}
              <ul className='flex gap-4'>
                {project.stack.map((item, i) => (
                  <li key={i} className='text-xl text-accent'>
                    {item.name}
                    {/* Get rid of last comma */}
                    {i !== project.stack.length-1 && ','}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* Buttons */}
              <div className='flex items-center gap-4'>
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group '>
                        <BsArrowUpRight className='text-3xl text-white 
                        group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Repo */}
                <Link href={project.github }>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group '>
                        <BsGithub className='text-3xl text-white 
                        group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              
        
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1}
            className='xl:-h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            >
              {projects.map((item, i) => (
                <SwiperSlide key={i} className='w-full'>
                  <div className='h-[460px] flex relative group justify-center
                  items-center bg-pink-50/20 '>
                    <div className='absolute top-0 bottom-0 w-full h-full
                    bg-black/10 z-10'></div>
                    <div className='relative h-full w-full '>
                      <Image src={project.image} alt='' fill className='object-fill'/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderBtns
              containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none '
              iconStyles=''
              btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] 
              w-[44px] h-[44px] flex justify-center items-center transition-all'/>
            </Swiper>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Work