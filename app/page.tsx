"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  const handleDownloadResume = () => {};
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              // transition: { delay: 1, duration: 0.2, ease: "easeIn" },
            }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <span className="text-slate-50 text-xl">Web Developer</span>
            <h1 className="h1 text-slate-50 mb-6">
              Hello Welcome to <br />
              <span className="font-mono text-blue-600">Misho's Dev Lab</span>
            </h1>
            <p className="max-w-[500px] mb-9 font-mono text-white/80">
              "Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand."
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/CV/Mishiko-Aspanidze-FlowCV-Resume-20240616.pdf"
                download={true}
              >
                <Button size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8  xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-600 rounded-full flex justify-center items-center text-blue-600 text-base hover:bg-blue-600 hover:text-white hover:transition-all duration-200"
                />
              </div>
            </div>
          </motion.div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
