import { motion } from "framer-motion"
import { CONTACT_CONTENT } from "../constants"
import { FaGithub,FaFacebook,FaLinkedin,FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    }),
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay },
    }),
  }
  return (
    <section className='min-h-screen flex flex-col justify-center px-4 md:px-10' id="contact">
    <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-4'>
           Contact Me
    </h1>
    <div className='h-1 w-20 mb-8 bg-white'></div>
    <motion.h3
      className="text-6xl md:text-8xl leading-none"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      custom={0.2}
    >
      {CONTACT_CONTENT.headline}
    </motion.h3>
    <motion.p
      className="text-lg md:text-2xl mt-4 mb-8"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      custom={0.4}
    >
      {CONTACT_CONTENT.description}
    </motion.p>
    <motion.a
      className="text-2xl md:text-3xl font-medium mt-8 cursor-pointer"
      href={`mailto:${CONTACT_CONTENT.email}`}
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      custom={0.8}
    >
     {CONTACT_CONTENT.email}
    </motion.a>
    <div className="flex space-x-6 mt-8">
      {CONTACT_CONTENT.socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          aria-label={link.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl md:text-4xl text-gray-400 hover:text-white transition-colors duration-300"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          custom={1.0 + index * 0.2}
        >
          {link.icon === "FaFacebook" && <FaFacebook />}
          {link.icon === "FaGithub" && <FaGithub />}
          {link.icon === "FaLinkedin" && <FaLinkedin />}
          {link.icon === "FaWhatsapp" && <FaWhatsapp />}
        </motion.a>
      ))}
    </div>
    <motion.p
      className="text-sm md:text-base text-gray-400 mt-8"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      custom={1.2}
    >
      {CONTACT_CONTENT.footerText}
    </motion.p>
    </section>
  )
}

export default Contact