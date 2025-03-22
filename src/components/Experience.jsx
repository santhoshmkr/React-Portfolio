import { EXPERIENCES } from "../constants";
import { motion } from 'framer-motion';

const iconMove = (delay) => ({
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 2,
    delay: delay,
  },
});

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="mx-10">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            <div className="w-full max-w-xl lg:w-3/4">
            <div className="flex items-center justify-between">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 2 }}
                className="mb-2 font-semibold text-transparent bg-gradient-to-r from-pink-500 via-slate-500 to-violet-500 bg-clip-text text-lg"
              >
                {experience.role}-{" "}
                <span className="text-transparent bg-gradient-to-r from-violet-500 via-slate-500 to-pink-500 bg-clip-text text-md">{experience.company}</span>
              </motion.h6>
              <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2 }}><p className="mb-2 text-sm text-md text-neutral-400">&#40; {experience.year} &#41;</p></motion.span>
              </div>
              <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 3 }}
                className="mb-4 text-white text-justify indent-8"
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: techIndex  }}
                    className="mr-2 mt-4 rounded bg-neutral-400 px-2 py-1 text-base font-medium text-blue-950"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
