"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a software engineer at Meta working on making Horizon OS more
        performant. I have Bachelor of Science in Electrical and Computer
        Engineering from Carnegie Mellon University with a focus on software
        systems. I'm passionate about continuously learning and tackling complex
        challenges. The thrill of programming lies in those "aha" moments—when
        hours of debugging finally lead to a breakthrough. My expertise spans{" "}
        <span className="font-medium">
          backend, frontend, full-stack development, machine learning, and
          DevOps.
        </span>{" "}
      </p>
    </motion.section>
  )
}
