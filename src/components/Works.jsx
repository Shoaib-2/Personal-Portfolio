import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../HigherOrderComponent";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-0 sm:w-[360px] w-full transition-transform duration-300 hover:scale-[1.025] hover:border-primary/60 group"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-t-2xl">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300"
          decoding="async"
          width="360"
          height="230"
          onError={e => { e.target.onerror = null; e.target.src = require('../assets/placeholder.png'); }}
        />
        <button 
          onClick={() => window.open(source_code_link, "_blank")}
          className="absolute top-4 right-4 bg-black/70 hover:bg-primary/80 transition-colors w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
          aria-label="View Source Code"
        >
          <img src={github} alt="github" className="w-5 h-5 object-contain"/>
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-t-2xl" />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-white font-bold text-[22px] mb-1 leading-tight">{name}</h3>
        <p className="text-secondary text-[14px] leading-[22px] mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`px-2 py-1 rounded-full text-[13px] font-medium bg-white/10 border border-white/10 text-white ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex-col md:flex-row xl:flex-row xl:items-center xl:justify-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] md:text-[17px] max-w-3xl leading-[28px] md:leading-[30px] px-2 md:px-0 xl:px-0 text-left"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 px-2 md:px-4 xl:px-0">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
