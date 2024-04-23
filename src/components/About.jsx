import React from 'react'
import  {Tilt}  from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from '../hoc'


const ServiceCard =({index,title,icon})=>{

  return(

    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring" ,0.5*index,0.55)} className='w-full green-pink-gradient shadow-card p-[1px] rounded-[20px] '  >
  
        <div options = {{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
     
      </motion.div>
    </Tilt>
  
)}



const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overiew</h2>
      </motion.div>
      
      <motion.p varients={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] maz-w-3xl leading-[30px]'>
        I am a detail-oriented software developer and Competitive Programmer pursuing Btech with hands-on
        experience in HTML, CSS, JS , React.js , Node.js , MongoDB , Express.js. I am passionate about solving
        complex problems and developing innovative solutions With strong
        communication and collaboration skills, I am eager to contribute to a
        challenging software development role and continue to grow as a
        developer.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")