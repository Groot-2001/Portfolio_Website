import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from "../styles"
import { certificate_icon, quality_icon } from "../assets"
import { SectionWrapper } from "../hoc"
import { certificates } from "../constants"
import { fadeIn, textVariant } from '../utils/motion';

const CertificateCard = ({ index, name, organization, work, image, CERT_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={
          { max: 45, scale: 1, speed: 450 }
        }
        className="bg-black border-2 border-[#EE9322] p-5 rounded-2xl sm:w-[360px] w-full"

      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => { window.open(CERT_link, "_blank") }}
              className="bg-white border-2 border-black w-11 h-11 rounded-full flex justify-center items-center cursor-pointer">
              <img src={quality_icon} alt="certificate" className='w-8 h-8 object-contain' />
            </div>
          </div>
        </div>
        {/* <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div> */}
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {work.map((pr, index) => (
            <p key={pr.name} className={`text-[14px] ${pr.color}`}>
              #{pr.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  )
}

const Certificate = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p
          className={styles.sectionSubText}
        >
          My Certificates
        </p>
        <h2 className={styles.sectionHeadText}>
          Certifcates.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          I am proud to hold the Certification, which reflects my commitment to professional development and expertise in software development using MongoDB, Express.js, React, and Node.js.

          This certification covers essential topics such as RESTful API development, database management, server-side rendering, and authentication, ensuring I stay updated with the latest knowledge and best practices in the industry. <br />

          Achieving this certification required rigorous training and assessments, strengthening my ability to build robust, scalable web applications and optimize server performance. With this credential, I am dedicated to delivering high-quality results and contributing effectively to any project or team.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 text-white">
        {
          certificates.map((certificate, index) => (
            <CertificateCard
              key={`cert-${index}`}
              index={index}
              {...certificate}
            />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Certificate, "");