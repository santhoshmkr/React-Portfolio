import {PROJECTS} from "../constants/index";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-24">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-4 flex flex-wrap lg:justify-center mx-10">
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4">
            <a href={project.live}><img src={project.image} width={200} height={150} alt={project.title} className="mb-6 rounded"/></a>
          </motion.div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-6 text-neutral-400 text-justify">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech,texhIndex)=>(
                    <span key={texhIndex} className="bg-neutral-400 text-blue-950 px-2 py-1 rounded">{tech}</span>
                ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default Project
