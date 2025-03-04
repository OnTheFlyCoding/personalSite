'use client';
import {motion} from 'motion/react'
import Link from 'next/link';
import {BsArrowDownRight} from 'react-icons/bs'
const myServices = [
  {
    num:'01',
    title:'Web Development',
    description:'Design fullstack applications for e-commerce and blog related sites. Static sites and landing pages to make your organization\'s ideas and good deeds known! ',
    href:'',
  },  {
    num:'02',
    title:'UI/UX Design',
    description:'Complex grids and stunning 3D components to make your ideas and products come to life!',
    href:'',
  },  {
    num:'03',
    title:'Backend Development',
    description:'Api development for projects and personal webscrappers to access data in your own database.',
    href:'',
  },  {
    num:'04 ',
    title:'DevSecOps',
    description:'Provide development with security in mind. Assess the potential vulnerabilities within the website and the extent of a total takeover. Prevent theft, keep data secure, and your clients happy.',
    href:'',
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className='container mx-auto'>
          <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{delay:2.4, duration:.4, ease:'easeIn'},
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
          >
            {myServices.map((item, index) =>(
              <div key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'
              >
                {/* top */}
                <div className='flex w-full justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{item.num} </div>
                  <Link 
                  href={item.href}
                  className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                  transition-all duration-500  flex justify-center items-center hover:-rotate-45 '
                  >
                  <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                {/* title */}
                <h2 className='text-[42px] font-bold leading-none group-hover:text-accent
                  transition-all duration-500'>{item.title}</h2>
                <p className='text-white/60'>{item.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  )
}

export default Services