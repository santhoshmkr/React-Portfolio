import { BsFillBootstrapFill } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { SiExpress } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";

const iconMove = (duration) => ({
  intial: { y: -20 },
  animate: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20  text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-4 mx-10"
      >
         <motion.div
          variants={iconMove(3)}
          intial="intial"
          animate="animate"
          className="rounded-2xl  border-2 border-neutral-400 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        
        <motion.div
          variants={iconMove(5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <SiExpress className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconMove(7)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconMove(5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        
       
        <motion.div
          variants={iconMove(3)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <DiJqueryLogo className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconMove(5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <DiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconMove(7)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <FaShopify className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconMove(5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <BsWordpress className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconMove(3)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <FiFigma className="text-7xl text-indigo-600 " />
        </motion.div>

        <motion.div
          variants={iconMove(5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <SiTailwindcss className="text-7xl text-tail-blue" />
        </motion.div>
        <motion.div
          variants={iconMove(7)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-4"
        >
          <BsFillBootstrapFill className="text-7xl text-violet-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
