"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    describtion: "(+995) 592 69 71 00",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    describtion: "mishikoaspanidze1999@gmail.com",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    describtion: "Georgia Tbilis 0113",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[60px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-8 p-10 bg-slate-800 rounded-xl">
              <h3 className="text-4xl text-blue-600">Let's work rogether</h3>
              <p className="text-white/60">
                You can reach out to me through the form below, or connect with
                me on social media. I'm looking forward to hearing from you!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              {/* sekect */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Frontend Development</SelectItem>
                    <SelectItem value="cst">Backend Development</SelectItem>
                    <SelectItem value="mst">Fullstack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button size="md" disabled className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex items-center justify-center bg-slate-700 text-white/60 rounded-md flex items-center">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1 ">
                      <p className="text-white/60 text-[18px]">{item.title}</p>
                      <h3 className="text-xl text-white">{item.describtion}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
