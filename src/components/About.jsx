import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { github } from "../assets";
import { linkedin } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a motivated college student with a strong foundation in HTML, CSS,
        and JavaScript, and extensive knowledge in frameworks like{" "}
        <strong>React.js, Redux, and Next.js </strong>. Whether it's a small
        business website or a complex web app, my goal is to create efficient,
        scalable, and user-friendly solutions that can help drive success. I am
        excited to bring my unique perspective to your team and look forward to
        the opportunity to contribute my skills and learn from industry
        professionals. Thank you for considering my application. I look forward
        to the possibility of working together. <br />
        <div className="flex items-center">
  <Link
    to="https://github.com/antonaorlov"
    target="_blank"
    rel="noopener noreferrer"
    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  >
    <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
  </Link>

  <Link
    to="https://www.linkedin.com/in/anton-orlov/"
    target="_blank"
    rel="noopener noreferrer"
    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-5"
  >
    <img src={linkedin} alt="LinkedIn" className="w-3/4 h-3/4 object-contain" />
  </Link>
</div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
