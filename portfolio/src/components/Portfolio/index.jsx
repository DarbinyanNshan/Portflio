import React, { useRef } from 'react';
import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./style.css";

import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";

// import about_img from "../assets/images/about_img.jpg" 

import Resume from "../../Resume/Nshan_CV.pdf";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Portfolio() {

   const form = useRef("");

   window.onscroll = () => {
      let header = document.querySelector('header')
      header.classList.toggle('sticky', window.scrollY > 100);
   }

   const downloadResume = () => {
      const fileUrl = Resume;
      const fileName = 'Nshan_Darbinyan_CV.pdf';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      link.click();
   };

   useEffect(() => {
      const numbers = document.querySelectorAll('.language-number');
      const svgEl = document.querySelectorAll('svg circle');
      const counters = Array(numbers.length);
      const intervals = Array(counters.length);
      counters.fill(0);

      numbers.forEach((number, index) => {
         intervals[index] = setInterval(() => {
            if (counters[index] === parseInt(number.dataset.num)) {
               clearInterval(counters[index])
            } else {
               counters[index] += 1;
               number.innerHTML = counters[index] + "%";
               svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100))
            }
         }, 20)
      })
   }, []);



   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
         'service_agu4f34',
         'template_71a3bfp',
         form.current, 'aop2gAnAr3ERwi75Z')
         .then(() => {
            toast.success('Your messeg has been sent!', {
               position: "bottom-center",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "colored",
            });
         }, () => {
            toast.error('You could not edit the messeg!', {
               position: "bottom-center",
               autoClose: 4000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "colored",
            });
         });
      e.target.reset();
   };

   return <div >
      <div className='home_img'> </div>
      <header className="header" >
         <div>
            <a href="#" className="logo">Portfolio. </a>
         </div>

         <input type="checkbox" id="check" />
         <label for="check" className="check_btn"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500">
            <AiOutlineMenu />
         </label>
         <ul className="navbar">
            <li> <a href="#about" className="link">About</a></li>
            <li> <a href="#education" className="link" >Education</a></li>
            <li> <a href="#skills" className="link">Skills</a></li>
            <li> <a href="#contact" className="link">Contact</a></li>
         </ul>
      </header>
      <section className="home" id="home" >
         <div className="home-content">
            <h1 >Hi, I'm <span> Nshan Darbinyan </span> </h1>
            <div className="text-animate">
               <h3>Full Stack Devoloper </h3>
            </div>
            <p>
               Self-motivated.<br />
               I use a creative approach to problem solving.<br />
               Am always energetic and, eager to learn new skills.<br />
               Ability to work in a team Honesty, high sense of responsibility.
            </p>
            <div className="btn-box">
               <button
                  onClick={downloadResume}
                  className="btn"
               > Download CV</button>
               <a href="#contact"
                  className="btn">Contact Me</a>
            </div>
         </div>
         <div className="home-sci"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="400"
         >
            <a href="https://www.facebook.com/nshan.darbinyan.5/"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/nshan-darbinyan-1b1000276/"><FaLinkedinIn /></a>
            <a href="https://github.com/DarbinyanNshan"><FaGithub /></a>
            <a href="https://www.instagram.com/darbinyannshan/"><FaInstagram /></a>
         </div>
      </section>
      <section className="about" id="about">
         <h2 className="heading"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            
            >
            About <span>Me</span>
         </h2>
         {/* <div className="about-img"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500">
            <img src={about_img} alt="#" />
            <span className="circle-spin"></span>

         </div> */}
         <h3 className="language-title"
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
         >Language Skills</h3>
         <div className="language-skills">
            <div className="skill"
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="800">
               <div className="outer">
                  <div className="inner">
                     <div>
                        <div className="language-text" >Armenian</div>
                        <div className="language-number" data-num="99">
                        </div>
                     </div>
                  </div>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                     <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                     </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="70" stroke-linecap="round" />
               </svg>
            </div>
            <div className="skill"
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="800">
               <div className="outer">
                  <div className="inner">
                     <div>
                        <div className="language-text" >English</div>
                        <div className="language-number" data-num="75">
                        </div>
                     </div>
                  </div>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                     <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                     </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="70" stroke-linecap="round" />
               </svg>
            </div>
            <div className="skill"
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="800">
               <div className="outer">
                  <div className="inner">
                     <div>
                        <div className="language-text" >Russian</div>
                        <div className="language-number" data-num="80">
                        </div>
                     </div>
                  </div>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                     <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                     </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="70" stroke-linecap="round" />
               </svg>
            </div>
         </div>


         <div className="about-content">
            <h3
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="800"
            >
               Secondary  <span>Education</span></h3>
            <p
               data-aos="fade-up"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="1200">
               Republic of Artsakh Village  of
               Martakert region Madaghis name R Martirosyan's
               secondary school<br />
               School No. 1 of Martakert
            </p>

            <div className="btn-box btns"
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="800">
               <a href="#education" className="btn">Read More</a>
            </div>
         </div>
      </section>

      <section className="education" id="education">
         <div className="education-row">
            <div className="education-column">
               <h2 className="heading"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="750"
               >Higher <span>Education</span></h2>

               <div className="education-box"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >
                  <div className="education-content">
                     <div className="content">
                        <div className="year"><BiCalendar /> 2021(Sep)-2023(Jan)</div>
                        <h3>Artsakh State University  Faculty of Natural Sciences 'Information Technology'(bachelor)</h3>
                     </div>
                  </div>
               </div>
               <div className="education-box"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >
                  <div className="education-content">
                     <div className="content">
                        <div className="year"><BiCalendar /> Part time since 2023(sep) - 2023(May)</div>
                        <h3>Artsakh State University  Faculty of Natural Sciences 'Applied Mathematics and Informatics' (bachelor)   </h3>
                     </div>
                  </div>
               </div>
               <div className="education-box"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >
                  <div className="education-content">
                     <div className="content">
                        <div className="year"><BiCalendar />  2023(Sep) available</div>
                        <h3>National Polytechnic University of Armenia 'Information Technologies' (Bachelor)  </h3>
                     </div>
                  </div>
               </div>
               <div className="education-box"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >
                  <div className="education-content">
                     <div className="content">
                        <div className="year"><BiCalendar /> 2022 -2023(8months)</div>
                        <h3> TCO-Academy  Full Stack JS Developer</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="skills" id="skills">
         <h2 className="heading"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
         > My <span>Skills</span></h2>

         <div className="skills-row">
            <div className="skills-column">
               <h3 className="title"
                  data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >FrontEnd Skills</h3>
               <div className="skills-box"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500">
                  <div className="skills-content">
                     <div className="progress">
                        <h3>
                           HTML/CSS <span>90%</span>
                        </h3>
                        <div className="bar"><span></span></div>
                     </div>
                     <div className="progress">
                        <h3>
                           JavaScript, ECMAScript6+ <span>80%</span>
                        </h3>
                        <div className="bar"><span></span></div>
                     </div> 
                     <div className="progress">
                        <h3>
                           JavaScript (Adv) <span>80%</span>
                        </h3>
                        <div className="bar"><span></span></div>
                     </div> 
                     <div className="progress">
                        <h3>
                           ReactJS, Redux <span>85%</span>
                        </h3>
                        <div className="bar"><span></span></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="skills-column">
               <h3 className="title"
                  data-aos="flip-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >BackEnd Skills</h3>
               <div className="skills-box"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >
                  <div className="skills-content">
                     <div className="progress">
                        <h3>
                           NodeJS, ExpressJS <span>95%</span>
                        </h3>
                        <div className="bar"><span></span></div>
                     </div>
                     <div className="progress">
                        <h3>
                           MongoDB <span>90%</span>
                        </h3>
                        <div className="bar"><span></span></div>
                     </div> <div className="progress">
                        <h3>
                           NodeJS, REST API <span>90%</span>
                        </h3>
                        <div className="bar"><span></span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <div className='contact_img'>
      </div>
      <section className="contact" id="contact">
         <h2 className="heading"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
         >Send your   <span>message to me</span></h2>

         <form ref={form} onSubmit={sendEmail} >
            <div className="input-box">
               <div className="input-field"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >
                  <input type="text"
                     name="user_name"
                     placeholder="Full Name"
                     required />
                  <span className="focus"></span>
               </div>
               <div className="input-field"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
               >
                  <input type="email"
                     placeholder="Email Addres"
                     name="user_email"
                     required />
                  <span className="focus"></span>
               </div>
            </div>

            <div className="textarea-field"
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="500"
            >
               <textarea name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  required />
               <span className="focus"></span>
            </div>

            <div className="btn-box btns"
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="800">
               <button
                  type="submit"
                  className="btn">
                  Send
               </button>
            </div>
            <ToastContainer
               position="bottom-center"
               autoClose={4000}
               limit={1}
               hideProgressBar={false}
               newestOnTop
               closeOnClick={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="colored"
            />
         </form>
      </section>

      <footer className="footer">
         <div className="footer-text">
            <p>2023 by Darbinyan </p>
         </div>

         <div className="footer-iconTop">
            <a href="#">
               <AiOutlineArrowUp />
            </a>
         </div>
      </footer>
   </div>

}