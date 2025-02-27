'use client';
import CountUp from 'react-countup';
const stats = [
    {
        num:3,
        text:'Years of experience',
    },
    {
        num:15,
        text:'Projects and Websites designed',
    },{
        num:5,
        text:'Coding languages',
    },
    {
        num:4,
        text:'Frameworks mastered',
    },{
        num:501,
        text:'Github commits in 2025',
    },
]
const Stats = () => {
  return (
    <section className='pt-4 pb-8 xl:pt-0 xl:pb-0'>
        <div className="container mx-auto">
            <div className='flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto'>
            {stats.map((item,i) => (
                <div key={i} className='gap-4 flex-1 flex items-center justify-center 
                xl:justify-start'>
                    <CountUp
                    end={item.num}
                    duration={6}
                    delay={3}
                    className='text-4xl xl:text-6xl font-extrabold'
                    />
                    <p
                    className={`${item.text.length < 15 ? 'max-w-[100px]':'max-w-[150px]'} leading-snug text-white/80`}
                    >{item.text}</p>
                </div>
             ))}
            </div>

        </div>
    </section>
  )
}

export default Stats