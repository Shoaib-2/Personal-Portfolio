import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../HigherOrderComponent';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(29,24,54,0.7)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 4px 32px 0 rgba(0,0,0,0.15)'
    }}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date} 
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name}
        className='w-[60%] h-[60%] object-contain'/>
      </div>
    }
  >
  <div>
    <h3 className='text-white text-[24px] font-bold'>{experience.title}
    <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>
      {experience.company_name}</p>
    </h3>
  </div>
  <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point, index) => (
      <li key={`experience-point-${index}`}
      className='text-white-100 text-[14px] pl-1 tracking-wider'
      >
        {point}
      </li>
    ))}
  </ul>
  </VerticalTimelineElement>
) 


const Experience = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far?</p>
       <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard  key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
   </>
  )
}

export default SectionWrapper(Experience, 'work')