import {FiDownload} from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Socials from '@/components/Socials'

const Home = () => {
  return (
    <section className='h-full'>
      <div className="container h-full mx-auto">
        <div className='flex flex-col xl:flex-row items-center justify-between 
            xl:pt-8 xl:pb-24'>
          {/* Begin Text Content */}
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br /> <span className='text-accent'>Giovanni Gonzalez</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80  '> I excel at collaboration and crafting elegant digital experiences. 
              I am proficient in various programming languages and technologies.
            </p>
            <div className='flex flex-col xl:flex-row items-center 
              gap-8'>
                {/* Button and Socials */}
              <Button variant={'outline'} size={'lg'} 
              className='flex uppercase items-center gap-2'>
                <span>Download CV</span>
                <FiDownload className='text-xl'/>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials/>
              </div>
            </div> 
          </div>

          {/* Begin Photo Content */}
          <div>
            Photo 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home