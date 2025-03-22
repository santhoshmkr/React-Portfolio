import { HERO_CONTENT } from '../constants/index';
import Profilepic from '../assets/profile.jpg';
import { delay, motion } from "framer-motion";

const container =(delay)=>({
  hidden :{x:-100, opacity: 0},
  visible :{
    x:0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay} 
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 mx-8  ">
      <div className="flex flex-wrap mx-10">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                variants={container(0)}
                initial="hidden"
                whileInView="visible"
                className="pb-10 text-6xl font-[400] tracking-tighter lg:mt-5 lg:text-[4.4rem] w-full">Santhosh Kalidoss</motion.h1>
            </div>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-r from-pink-500 via-slate-500 to-violet-500 bg-clip-text text-3xl tracking-tighter text-transparent">Frontend developer</motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            whileInView="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify indent-8 text-lg leading-9">{HERO_CONTENT}</motion.p>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div 
            variants={container(1)}
            initial={{x:100, opacity: 0}}
            whileInView="visible"
            className="flex justify-center">
                <motion.img
                
                height={150}
                width={500}
                className='rounded-md'
                transition={{duration:1, delay:1.2}}
                src={Profilepic} alt="" />
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
