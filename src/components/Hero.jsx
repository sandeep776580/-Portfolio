import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TypeWritter from "typewriter-effect";
import Abhikant_Resume from "./../assets/Abhikant_Resume.pdf";

const Hero = () => {

  const onButtonClick = () => {                    
    fetch(Abhikant_Resume).then((response) => {                                      // using Java Script method to get PDF file
      response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);                            // Creating new object of PDF file
        let alink = document.createElement("a");                                    // Setting various property values
        alink.href = fileURL;
        alink.download = "Abhikant Kumar";
        alink.click();
      });
    });
  };


  return (

    <section className="relative w-full h-screen mx-auto">

      <div className={`${styles.paddingX} absolute z-10 inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 h-fit`} >
    
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="animate-text text-[#915eff] bg-clip-text font-black"> Abhikant </span>
          </h1>

          <div className={`${styles.heroSubText} text-white-100`}>
            I am a{" "}
            <TypeWritter
              options = {{autoStart: true, loop: true, delay: 50,
                strings: [
                  "Full Mern Stack Developer",
                  "Competitive Programmer"
                ],
              }}
            />
          </div>
         
          <div className = "mt-6">
            <button onClick = {onButtonClick} className=" py-2 px-5  ease-in-out duration-300 transform active:scale-95 bg-amber-700  hover:bg-amber-950   text-white rounded-lg font-bold tracking-widest ">
              <div className ="flex justify-center items-center relative">
                <div className ="svg-container">
                  {/* <!-- Download Icon --> */}
                  <svg className ="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div className ="download-loader text-white hidden"></div>
                  {/* <!-- Checked Icon --> */}
                  <svg className ="check-svg hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z" fill="white"/>
                  </svg>
                </div>
                <div className ="button-copy pl-2 leading-none uppercase"> RESUME </div>
              </div>
            </button>
          </div>

        </div>
    
      </div>

      <div className="w-full h-full translate-y-4 hidden md:flex">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div className="w-3 h-3 rounded-full bg-secondary mb-1" animate={{ y: [0, 24, 0] }} transition={{duration: 1.5, repeat: Infinity, repeatType: "loop",}} />
          </div>
        </a>
      </div>
    
    </section>
  
)};


export default Hero;
