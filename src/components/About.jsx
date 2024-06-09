import AboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants/index';
import { motion } from 'framer-motion';
function About() {
  return (
    <div className="border-b border-neutral-900 lg:pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl ">About me</motion.h2>
      <div className="flex flex-wrap  justify-center gap-10 mx-10">
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        className="">
            <div className="flex items-center justify-center">
                <img className='rounded-2xl' src={AboutImg} alt="" />
            </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:200}}
        transition={{duration:1}}
        className="">
            <div className="flex justify-center lg:items-start">
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify indent-8">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
