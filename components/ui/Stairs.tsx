import { motion} from 'motion/react'
//Variants
const stairAnimation = {
    initial:{
        top:'0%',
    },
    animate:{
        top:'100%'
    },
    exit:{
        top:['100%','0%'],
    },
};
// Calculate the reverse index for staggered delay
const reverseIndex = (index:number)=>{
    const totalStairs = 6;
    return totalStairs - index-1;
}

const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step 
        of stairs. Each will have the same animation defined
        by stairAnimation object. The delay for each div is
        calculated dynamically based on its reverse index.
        Creating a staggered effect with decreasing delaye with
        each subsequent step */}
        {[...Array(6)].map((_,index)=>{
        return(
        <motion.div 
        key={index}
        variants={stairAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
            duration:.4,
            ease:'easeInOut',
            delay:reverseIndex(index) *.1,
        }}
        className='h-full w-full bg-white relative '
        />
        )
    
        })}
    </>
  )
}

export default Stairs