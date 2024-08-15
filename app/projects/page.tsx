"use client";
import React, { ReactNode, useState } from "react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    categoriy: "frontend",
    title: "GitHub Search Users",
    description:
      "This is an app where you can find users from GitHub, and show them repositories, followers, and other info. On the page, you can show the dark mode toggle button and change mode.",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "TypeScript" }],
    image: "/devfinder.svg",
    live: "https://github-search-users-six.vercel.app/",
    github: "https://github.com/MishSoft/github-search-users",
  },

  {
    num: "02",
    categoriy: "frontend",
    title: "Todo List App",
    description:
      "This is a Todo List app where you can add, check, or delete items. the app has an animation header, where images change and get real-time data.. also you can show time when adding items.",
    stack: [{ name: "Vite" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/todo.svg",
    live: "https://todo-list-app-pi-ochre.vercel.app/",
    github: "https://github.com/MishSoft/todo-list-app",
  },

  {
    num: "03",
    categoriy: "frontend",
    title: "Real Time Clock App",
    description:
      "Here you are the Real-time clock app, which shows you the date and the weather. This app's background image always changes and gets beautiful photos. also, you can see quotes in the header.",
    stack: [{ name: "Vite" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/clock.svg",
    live: "https://clock-app-pied-psi.vercel.app/",
    github: "https://github.com/MishSoft/clock-app",
  },

  {
    num: "04",
    categoriy: "frontend",
    title: "Word Converter",
    description:
      "This app helps to get text from images. it creates a docx file and adds that text which is uploaded to you. this app has to change the language section, which helps then when you upload text in another language. for example: EN GEO or RUS ",
    stack: [{ name: "Vite" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/pdf.svg",
    live: "https://pdf-converter-pearl.vercel.app/",
    github: "https://github.com/MishSoft/pdf-converter",
  },

  {
    num: "05",
    categoriy: "frontend",
    title: "Interactive Card",
    description:
      "Fill in the form and see the card details update in real time Receive error messages when the form is submitted if:Any input field is empty, The card number, expiry date, or CVC fields are in the wrong format. View the optimal layout depending on their device's screen sizeSee hover, active, and focus states for interactive elements on the page.",
    stack: [{ name: "Vite" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/card.svg",
    live: "https://polite-raindrop-1abb1e.netlify.app/",
    github: "https://github.com/MishSoft/interactive-card",
  },

  {
    num: "06",
    categoriy: "frontend",
    title: "Monkey Shoulder (Whisky)",
    description:
      "Monkey Shoulder Whisky Website Welcome to the Monkey Shoulder Whisky project! This repository contains the code for a modern, engaging website designed to showcase the Monkey Shoulder Whisky brand. The website features various sections including an introduction, exploration of different drinks, detailed menu, and customer testimonials.",
    stack: [
      { name: "Next Js" },
      { name: "TailwindCSS" },
      { name: "Javascript" },
    ],
    image: "/monkeyshoulder.svg",
    live: "https://monkeyshoulder-ad62-git-main-mishsofts-projects.vercel.app/",
    github: "https://github.com/MishSoft/monkeyshoulder",
  },

  {
    num: "07",
    categoriy: "frontend",
    title: "Voice Generator",
    description:
      "Description: This project is a simple web application built with React and Next.js that allows users to interact with speech recognition features in the browser. Users can start and stop speech recognition, and the app will transcribe their speech in real-time.",
    stack: [
      { name: "Next Js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
    ],
    image: "/voicegenerator.svg",
    live: "https://monkeyshoulder-ad62-git-main-mishsofts-projects.vercel.app/",
    github: "https://github.com/MishSoft/monkeyshoulder",
  },

  {
    num: "08",
    categoriy: "frontend",
    title: "It Support Hub",
    description:
      "Welcome to the Computer Helpers project! This website is designed to provide expert advice, tutorials, and support for all your computer needs, including troubleshooting, learning new software, and hardware advice.",
    stack: [
      { name: "Next Js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
    ],
    image: "/itsupporthub.svg",
    live: "https://itsupporthub.vercel.app/",
    github: "https://github.com/MishSoft/itsupporthub",
  },
];

export default function Projects() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex] as any);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <div className="flex flex-col gap-5">
                <h2 className="text-[25px] font-bold leading-none text-white group-hover:text-blue-600 transition-all duration-200 capitalize">
                  {project.categoriy} project
                </h2>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-600 transition-all duration-200 capitalize">
                  {project.title}
                </h2>
              </div>

              {/* project description */}
              <p className="text-white/60 text-[18px]">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-blue-600" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Repo project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-blue-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className=" relative group flex justify-center items-center bg-pink-50/20">
                      {/* image */}
                      <div className="relative flex items-center justify-center border w-full h-full">
                        <Image
                          src={project.image}
                          alt={`${project.title} image`}
                          width={200}
                          height={100}
                          className="w-[100%] h-auto object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
