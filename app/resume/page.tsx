'use client';
import {FaReact, FaHtml5, FaJs, FaCss3, FaJava,
  FaFigma, FaNodeJs, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiMongodb, 
  SiTypescript,SiSqlite, SiSpringboot} from 'react-icons/si';
const about = 
  {
    title:'About me',
    description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa, voluptatum voluptatem itaque id cupiditate in consequuntur iure libero, culpa optio possimus deleniti. Consequatur, assumenda veniam laboriosam aliquam ipsum rem',
    info:[
      {
      fieldName:'Name',
      fieldValue:'Gio',
    },{
      fieldName:'Phone',
      fieldValue:'(203) - 953 - 1523',
    },{
      fieldName:'Experience',
      fieldValue:'3 Years',
    },{
      fieldName:'Languages',
      fieldValue:'English, Spanish',
    },{
      fieldName:'Email',
      fieldValue:'createdtyler@gmail.com',
    },{
      fieldName:'Freelance',
      fieldValue:'Available',
    },
  ]
  }

const experience = {
  icon:'../assets/resumeIcon.png',
  title:'My Experience',
  description:'asdfasda',
  items:[
    {
      company:'Freelance Developer',
      position:'Fullstack Developer ',
      duration:'2022 - Present',
    },{
      company:'Connecticut Crusaders',
      position:'Network Security Intern/Frontend Developer',
      duration:'2023 - 2024',
    },
    {
      company:'100 Devs',
      position:'Frontend Developer Intern',
      duration:'2021-2023',
    },{
      company:'EvoCorp',
      position:'Cybersecurity Intern',
      duration:'Summer 2022',
    },{
      company:'Kawa Ni',
      position:'Sushi Chef',
      duration:'2017-2022',
    },
  ]
}
const education = {
  icon:'../assets/edu-icon-dark.png',
  title:'My Education',
  description:'asdfasda',
  items:[
    {
      institution:'Revature Bootcamp',
      degree:'Backend Development Training In Java',
      duration:'2024 - 2025'
    },
    {
      institution:'Coursera',
      degree:'IT Automation With Python',
      duration:'Summer 2024'
    },{
      institution:'University Of Alabama',
      degree:'Chemical Engineering',
      duration:'2015-2017'
    }
  ]
}
const mySkills = {
  title:'My Skills',
  description:'asdsasd',
  skillList: [
    {
      icon:<FaCss3/>,
      name:'Css 3',
    },{
      icon:<FaReact/>,
      name:'React',
    },{
      icon:<FaHtml5/>,
      name:'HTML 5',
    },{
      icon:<FaJs/>,
      name:'Javascript',
    },{
      icon:<FaJava/>,
      name:'Java',
    },{
      icon:<FaFigma/>,
      name:'Figma',
    },{
      icon:<FaNodeJs/>,
      name:'Node.js',
    },{
      icon:<FaPython/>,
      name:'Python',
    },{
      icon:<SiTailwindcss/>,
      name:'Tailwind CSS v4',
    },{
      icon:<SiMongodb/>,
      name:'Mongo DB',
    },{
      icon:<SiTypescript/>,
      name:'Typescript',
    },{
      icon:<SiSpringboot/>,
      name:'Springboot',
    },{
      icon:<SiSqlite/>,
      name:'SQL Lite',
    },
  ]
}
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger ,TooltipProvider } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area'; 
import { motion } from 'motion/react';
const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.4, duration:.4, ease:'easeIn'},
    }}
    className='min-h-[80vh] flex justify-center items-center py-12
    xl:py:0 '
    >
      <div className='container mx-auto'>
        <Tabs 
        defaultValue={'experience'}
        className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px]
          mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='about'>About Me</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className='max-h-[70vh] w-full '>
            {/* Experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px] '>
                    {experience.items.map((items,i) => (
                      <li key={i} 
                      className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{items.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-5'>
                          {items.position }
                        </h3>
                        <div className='flex items-center gap-3 '>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{items.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                  {experience.description}
                  </p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px] '>
                      {education.items.map((items,i) => (
                        <li key={i} 
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{items.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-5'>
                            {items.degree }
                          </h3>
                          <div className='flex items-center gap-3 '>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{items.institution }</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value='skills' className='w-full'>
                <div className='flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                      <h3 className='text-4xl font-bold'>{mySkills.title}</h3>
                      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{mySkills.description}</p>
                    </div>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                    xl:gap-[30px] gap-[15px]'>
                      {mySkills.skillList.map((item, i) => (
                        <li key={i}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl
                              flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent
                                transition-all duration-500'>
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize '>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                </div>
            </TabsContent>
            {/* About */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] mx-auto xl:mx-0 text-white/60'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                  mx-auto xl:mx-0 '>
                  {about.info.map((item,i) => (
                    <li key={i}
                    className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>

      </div>

    </motion.div>
  )
}

export default Resume