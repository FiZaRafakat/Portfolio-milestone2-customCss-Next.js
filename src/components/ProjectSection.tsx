"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { HiArrowUpRight } from "react-icons/hi2";
import { CloseIcon } from "./CloseIcon";
import Card from "./Card";
// import Card from "./Card";


const Cards =[
    {
        src : "/images/travels.png",
        title : "Travel Agency",
        description : "",
        ctaText: "Visit",
        ctaLink: "https://travel-agency-nine-neon.vercel.app/",
        content: () => {
            return (
              <p>
              A responsive travel agency website designed in Figma and developed using Next.js and Tailwind CSS. The site features smooth scroll animations powered by AOS to enhance user experience. It showcases various travel services in a modern, visually appealing layout.
              </p>
            );
          },
    },{
        src : "/images/resume.png" ,
        title : "Resume Builder",
        description : "",
        ctaText: "Visit",
        ctaLink: "https://fizarafakat.github.io/Resume-Builder-Hackathon1/",
        content: () => {
            return (
              <p>
               This is an interactive resume builder where you can input your details and generate a personalized resume. Built using HTML, CSS, and JavaScript, it allows you to change the resume's color, download it as a PDF, and share it via a unique link after creation. This project showcases my skills in building dynamic, user-friendly applications.
              </p>
            );
          },
    },{
        ctaText: "Visit",
        ctaLink: "https://www.figma.com/design/2J72MVtkvW12RrlC735Mz4/Flowers-Template?node-id=0-1&t=9s2kDd8l9LiPKbiS-1",
        src : "/images/flower-shop.png",
        title : "Flower Shop Templates",
        description : "",
        content: () => {
            return (
              <p>
               I have recreated the design of a live website in Figma to showcase my design skills, ensuring a pixel-perfect replica. This project highlights my ability to translate real-world web designs into detailed, precise digital prototypes, demonstrating proficiency in design tools and attention to detail.
              </p>
            );
          },
    },{
        ctaText: "Visit",
        ctaLink: "https://fizarafakat.github.io/tic-tac-toe-Game/",
        src : "/images/tic-tac-toe.png",
        title : "Tic Tac Toe Game",
        description : "",
        content: () => {
            return (
              <p>
               A dynamic Tic Tac Toe game that offers both single-player (against the computer) and multiplayer (play with a friend) options. It includes a live score tracker to keep users updated throughout the game. The game also features a reset button, allowing players to start a new game at any time. This project demonstrates my skills in JavaScript for game logic, HTML for structure, and CSS for responsive design.
              </p>
            );
          },
    },{
        ctaText: "Visit",
        ctaLink: "https://fizarafakat.github.io/Password-Strength-JS-Project/",
        src : "/images/password-strength.png",
        title : "Password Strength",
        description : "",
        content: () => {
            return (
              <p>
               This project showcases the functionality of a password strength checker, ensuring that passwords meet specific criteria such as a minimum of 8 characters, the inclusion of special characters, and more. It helps users create secure passwords by providing real-time feedback on their password strength. Be sure to check it out!
              </p>
            );
          },

    },{
        ctaText: "Visit",
        ctaLink: "https://fizarafakat.github.io/Random-Password-Generator_JS-Project/",
        src : "/images/random-password.png",
        title : "Password Generator",
        description : "",
        content: () => {
            return (
              <p>
                This project showcases the functionality of a random password generator, allowing users to select the desired password length and choose which characters to include, such as special characters, numbers, uppercase, or lowercase letters. It provides a secure and customizable way to generate strong passwords based on user preferences.
              </p>
            );
          },
    }
]

const ProjectSection = () => {
    const [active, setActive] = useState<(typeof Cards)[number] | boolean | null>(
        null
      );
      const id = useId();
      const ref = useRef<HTMLDivElement>(null);
     
      useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
          if (event.key === "Escape") {
            setActive(false);
          }
        }
     
        if (active && typeof active === "object") {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
     
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [active]);
     
      useOutsideClick(ref, () => setActive(null));
  return (
    <div>
        <div className="container">
            <div className="mb-4 flex justify-center flex-col items-center">
                <div className="flex-center">
                <h2 className="heading-title gradient-text">Featured Projects</h2>
                </div>
                <p className="text-center heading-paragraph">See how I transformed concepts into engaging digital experiences.</p>
            </div>
          <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="modal-container">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="close-button"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="modal-content"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="modal-image"
                />
              </motion.div>
 
              <div>
                <div className="active-container">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="motion-content"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="main-card-ul">
        {Cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="card-div"
          >
            <div className="grain-layout"></div>
            <div className="card-content">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="card-image"
                />
              </motion.div>
              <div className="card-text-container">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="card-title"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="card-description"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>

   </div>
 </div>

  )
}

export default ProjectSection