import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi,I'm <span className="text-[#EE9322]">Shiva</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I <span className="text-[#009EFF]">love</span>  building the <span className="text-[#EE9322]">'backstage'</span> of apps.
            I create tools <span className="text-[#DD5454]">(APIs)</span>  that allow different parts of a program to talk to each other and make sense of data.
            I get <span className="text-[#FF009E]">excited </span> about making these tools work for <span className="text-[#EE9322]"> real problems</span> in the most efficient way possible.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-0 w-full flex justify-center items-center bottom-2">
        <a href="#about">
          <div className="w-[44px] h-[44px] rounded-3xl border-4 border-[#F9E400] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-5 h-3 rounded-b-lg bg-[#F5004F] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero