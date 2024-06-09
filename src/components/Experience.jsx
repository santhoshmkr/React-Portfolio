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
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-xl text-neutral-400">{experience.year}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 2 }}
                className="mb-2 font-semibold text-neutral-400"
              >
                {experience.role}-{" "}
                <span className="text-purple-100 text-base">{experience.company}</span>
              </motion.h6>
              <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 3 }}
                className="mb-4 text-neutral-400 text-justify indent-8"
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: techIndex * 0.5 }}
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
