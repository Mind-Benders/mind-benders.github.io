import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { events } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EventCard = ({
  index,
  name,
  description,
  tags,
  image
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] cursor-pointer'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Recent Events.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px]  leading-[30px]'
        >
          The club offers a variety of events and activities for members to participate in, including workshops, seminars, 
          lectures, and hackathons. These events provide an opportunity for members to gain hands-on experience, learn from 
          experts in the field, and share ideas with their peers. The club also has an online community where members can share 
          resources, discuss industry trends, and connect with other like-minded individuals.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {[...events].reverse().slice(0,6).map((event, index) => (
          <EventCard key={`project-${index}`} index={index} {...event} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "events");
