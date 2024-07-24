"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Developer",
    description: "",
    href: "",
  },
  {
    num: "02",
    title: "Logo Design",
    description: "",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container text-white mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-blue-600 transition-all duration-200">
                    {services.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full border border-white group-hover:bg-blue-600 transition-all duration-200 flex justify-center items-center hover:-rotate-45"
                    href={services.href}
                  >
                    <BsArrowDownRight className="text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-600 transition-all duration-200">
                  {services.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
