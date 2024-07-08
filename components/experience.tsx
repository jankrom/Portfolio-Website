"use client"

import React from "react"
import SectionHeading from "./section-heading"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"
import Image from "next/image"

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.1)
  const { theme } = useTheme()

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <div key={index} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
                visible={inView}
              >
                <h2 className="font-semibold capitalize text-gray-700 dark:text-white flex gap-2 items-center">
                  {item.company.logo && (
                    <Image
                      src={item.company.logo}
                      alt={`${item.company.name} logo`}
                      width="1"
                      height="1"
                      quality="95"
                      priority={true}
                      className="h-8 w-8 rounded-full object-cover shadow-xl"
                    />
                  )}
                  {item.company.name}
                </h2>
                <h3 className="font-medium capitalize">{item.title}</h3>
                <p className="!text-sm opacity-50 !mt-0">{item.location}</p>
                <ul>
                  {/* <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75"> */}
                  {item.description.map((desc) => (
                    <li
                      key={desc}
                      className="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                    >
                      {"- "}
                      {desc}
                    </li>
                  ))}
                  {/* </p> */}
                </ul>
              </VerticalTimelineElement>
            </div>
          )
        })}
      </VerticalTimeline>
    </section>
  )
}
