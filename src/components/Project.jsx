import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={
          { max: 45, scale: 1, speed: 450 }
        }
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"

      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => { window.open(source_code_link, "_blank") }}
              className="bg-[#1e3a8a] border-2 border-yellow-500 w-11 h-11 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className='w-8 h-8 object-contain' />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-white'>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tg, index) => (
            <p key={tg.name} className={`text-[14px] ${tg.color}`}>
              #{tg.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Project = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p
          className={styles.sectionSubText}
        >
          My works
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Welcome to my project showcase, where I highlight a selection of my work that demonstrates my skills and creativity as a backend developer. Each project reflects my expertise in the MERN stack, showcasing my ability to design and implement robust, scalable applications. From developing RESTful APIs to integrating databases, these projects illustrate my commitment to delivering high-quality solutions that meet user needs. Explore the details below to see how I approach problem-solving and bring ideas to life through code.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 text-white">
        {
          projects.map((proj, index) => (
            <ProjectCard
              key={`proj-${index}`}
              index={index}
              {...proj}
            />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Project, "");