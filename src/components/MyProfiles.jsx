import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {SiLeetcode,  SiLinkedin, SiCodeforces, SiCodechef,SiGeeksforgeeks} from "react-icons/Si";
import { FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";



const MyProfiles = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}> My Profiles</h2>
        <div className="flex xl:flex-row flex-col gap-8 justify-center items-center mt-12 flex-wrap mx-auto w-full">

            <motion.div className="w-full xl:w-auto"  variants={fadeIn("right", "spring", 0.5, 0.55)}>
                <Tilt options={{ max: 45,scale: 1,speed: 450, }}>
                  <a
                    href="https://codeforces.com/profile/abhi_kant"
                    target="_blank"
                    className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
                  >
                    <span className="rounded-full">  <SiCodeforces /> </span>
                    Codeforces
                  </a>
                </Tilt>
              </motion.div>
          
            <motion.div className="w-full xl:w-auto"  variants={fadeIn("right", "spring", 0.5, 0.55)}>
                <Tilt options={{ max: 45,scale: 1,speed: 450, }}>
                  <a
                    href="https://www.codechef.com/users/abhi_kant/"
                    target="_blank"
                    className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
                  >
                    <span className="rounded-full ">  <SiCodechef />  </span>
                    CodeChef
                  </a>
                </Tilt>
            </motion.div>
         
            <motion.div className="w-full xl:w-auto"  variants={fadeIn("right", "spring", 0.5, 0.55)}>
              <Tilt options={{ max: 45,scale: 1,speed: 450, }}>
                <a
                  href="https://leetcode.com/abhi1911/"
                  target="_blank"
                  className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
                >
                  <span className="text-yellow-400 rounded-full">  <SiLeetcode /> </span>
                  LeetCode
                </a>
              </Tilt>
            </motion.div>

            <motion.div className="w-full xl:w-auto"  variants={fadeIn("right", "spring", 0.5, 0.55)}>
              <Tilt options={{ max: 45,scale: 1,speed: 450, }}>
                <a
                  href="https://auth.geeksforgeeks.org/user/abhiparnav12"
                  target="_blank"
                  className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
                >
                  <span className="bg-black">  <SiGeeksforgeeks /> </span>
                  Geeksforgeeks
                </a>
              </Tilt>
            </motion.div>

            <motion.div className="w-full xl:w-auto"  variants={fadeIn("right", "spring", 0.5, 0.55)}>
              <Tilt options={{ max: 45,scale: 1,speed: 450, }}>
                <a
                  href="https://github.com/abhikant12"
                  target="_blank"
                  className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
                >
                  <span className="bg-black">  <FaGithub /> </span>
                  GitHub
                </a>
              </Tilt>
            </motion.div>
         
            <motion.div className="w-full xl:w-auto"  variants={fadeIn("right", "spring", 0.5, 0.55)}>
              <Tilt options={{ max: 45,scale: 1,speed: 450, }}>
                <a
                  href="https://www.linkedin.com/in/abhikant12/"
                  target="_blank"
                  className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
                >
                  <span className="text-blue-700 bg-white rounded-full">  <SiLinkedin /> </span>
                  Linkedin
                </a>
              </Tilt>
            </motion.div>
       
        </div>
      </div>
    </>
  );
};



export default SectionWrapper(MyProfiles, "profiles");
