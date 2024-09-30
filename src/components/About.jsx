import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"

import { styles } from '../styles'
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}

          className="bg-[#001F3F] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
      >
        <p>Introduction</p>
        <h2
          className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        First of all I love creating softwares and l'm eager to become the software Engineer.

        I am also attracted to this field because of the growth opportunities that it provides. The research that I have done on its community shows that there are ample opportunities for self-motivated individuals like me. A high level of organisation and attention to detail are second nature to me and I am eager to apply these skills in new and challenging environments.

        I look forward to sharing more details of my experience and motivations with you.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")