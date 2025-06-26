import {delay, motion} from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible:(i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8,  delay: i * 0.5 }
        })
    };
  return (
  <section className='px-6 py-10' id="testimonials">
    <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-4'>
           What People Are Saying
        </h1>
        <div className='h-1 w-20 mb-8 bg-white'></div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
                key={index}
                className='bg-stone-600/10 backdrop-blur-3xl p-6 rounded-lg'
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
            >
                <div className='flex items-center mb-4'>
                    <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full mr-4' />
                    <div>
                        <h3 className='text-lg font-semibold'>{testimonial.name}</h3>
                        <p className='text-sm text-gray-400'>{testimonial.title}</p>
                    </div>
                </div>
                <p className='text-sm'>{testimonial.feedback}</p>
            </motion.div>
        ))}
       </div>
  </section>
  )
}

export default Testimonials