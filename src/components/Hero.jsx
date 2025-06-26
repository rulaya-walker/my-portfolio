import {motion} from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import ganesh from '../assets/ganesh.jpg';
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: 'easeInOut' }
  }
};
const Hero = () => {
  return (
    <section>
        <div className='relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white'>
        <motion.div className='w-full md:w-1/2 p-8' initial="hidden" animate="visible" variants={containerVariants}>
        <motion.h1 className='text-2xl md:text-3xl lg:text-5xl my-14 font-bold' variants={textVariant}>
            {HERO_CONTENT.greeting}
        </motion.h1>
        <motion.p className='text-lg md:text-xl lg:text-2xl mb-6' variants={textVariant}>
            {HERO_CONTENT.introduction}
        </motion.p>
        <motion.p className='text-base md:text-lg lg:text-xl mb-8' variants={textVariant}>
            {HERO_CONTENT.description}
        </motion.p>
        <motion.a href={HERO_CONTENT.resumeLink} className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer' variants={textVariant} download={true} rel="noopener noreferrer">
            {HERO_CONTENT.resumeLinkText}
        </motion.a>

        </motion.div>
        <motion.div className='w-full md:w-1/2 p-8' initial="hidden" animate="visible" variants={containerVariants}>
            <motion.img src={ganesh} alt="Ganesh Danuwar" className='w-full h-auto rounded-lg shadow-lg' variants={imageVariants} />
        </motion.div>
        </div>
    </section>
  )
}

export default Hero