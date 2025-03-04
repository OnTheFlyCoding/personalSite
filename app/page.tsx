import {FiDownload} from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section className='h-full'>
      <div className="container h-full mx-auto">
        <div className='flex flex-col xl:flex-row items-center justify-between 
            xl:pt-8 xl:pb-24'>
          {/* Begin Text Content */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br /> <span className='text-accent'>Giovanni Gonzalez</span>
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
                  <Socials 
                    containerStyles='flex gap-4 '
                    iconStyles={'w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}
                  />
                </div>
            </div> 
          </div> {/* End Text Content */}

          {/* Begin Photo Content */}
          <div className='order-1 xl:order-none mb-4 xl:mb-0 '>
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home