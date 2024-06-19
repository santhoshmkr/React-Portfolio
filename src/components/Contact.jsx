import { CONTACT } from "../constants";
// import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
    

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        className="flex gap-1 items-center my-4 justify-center">
          <div className=" text-2xl text-blue-500"><IoCall className=" m-0 "/></div>
          <span className=""><a href={`tel:${CONTACT.phoneNo}`} className="">{CONTACT.phoneNo}</a></span>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        className="flex gap-1 items-center my-4 justify-center">
          <div className=" text-2xl text-blue-500"><MdMail className=" m-0 text-yellow-400"/></div>
          <span className=""><a href={`mailto:${CONTACT.email}`} className="my-4 hover:border-b">{CONTACT.email}</a></span>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Contact
