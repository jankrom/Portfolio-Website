import React from "react"
import { CgWorkAlt } from "react-icons/cg"

import activeapplyImg from "@/public/activeapply.png"
import aihubImg from "@/public/aihub.png"
import kubernetes from "@/public/kubernetes.png"
import roamtogetherImg from "@/public/roamtogether.png"
import vibesheetsImg from "@/public/vibesheets.png"

import atlassianLogo from "@/public/atlassian.svg"
import helixvmLogo from "@/public/helixvm.svg"
import rubrikLogo from "@/public/rubrik.svg"
import metaLogo from "@/public/meta.svg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Burlingame, CA",
    description: ["Working on making Horizon OS more performant."],
    icon: React.createElement(CgWorkAlt),
    date: "July 2025 - Present",
    company: { name: "Meta", logo: metaLogo },
  },
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description: [
      "Designed and implemented a robust tracking metrics and visualization tools for key company features, providing critical data for informed business decisions and strategic planning.",
      "Created detailed usage charts and dashboards, significantly enhancing performance monitoring and optimization of product features used by 50+ engineers.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - August 2024",
    company: { name: "Atlassian", logo: atlassianLogo },
  },
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description: [
      "Developed a Google Chrome extension facilitating seamless video calls for doctors to engage with patients while accessing their charts in the same interface, eliminating the need for tab switching and enhancing workflow efficiency by 20%.",
      "Revitalized and redesigned an existing dashboard, integrating both aesthetic enhancements and new features to deliver a comprehensive upgrade, significantly improving its visual appeal and user functionality.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - February 2024",
    company: { name: "HelixVM", logo: helixvmLogo },
  },
  {
    title: "Software Engineer Intern",
    location: "Palo Alto, CA",
    description: [
      "Developed and executed a pre-check system for Rubrik software installation across UI, CLI, and API interfaces, resulting in a 15% reduction in failed installation attempts caused by incorrect inputs.",
      "Engineered a state machine capable of pinpointing the failure point in previous software installation attempts, allowing for a resumption of the installation process at that stage, which accelerated the installation process by up to 80%, saving customers approximately 75 minutes.",
      "Implemented a job-level retry feature that automatically resets drive partitions in the event of a failed software installation attempt, subsequently retrying the installation process, which contributed to an 8% increase in installation success rate.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - August 2023",
    company: { name: "Rubrik", logo: rubrikLogo },
  },
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description: [
      "Created a web scraping application utilizing the Selenium framework in C# to precisely identify the availability of highly sought-after products and execute automated purchases when they are in stock.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - August 2022",
    company: { name: "Flawless Technologies", logo: "" },
  },
] as const

export const projectsData = [
  {
    title: "Vibe Sheets",
    description:
      "Developed an AI chatbot, powered by LangChain, that lets you effortlessly interact with your spreadsheet using natural language.",
    tags: ["LangChain", "Google App Script", "React", "TypeScript"],
    imageUrl: vibesheetsImg,
    githubUrl: "https://github.com/jankrom/Vibe-Sheets",
    websiteUrl: "",
  },
  {
    title: "AI-Hub",
    description:
      "Developed an all-in-one platform for AI capabilities including chat, image generation, video creation, code development, and music production.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Supabase", "Stripe"],
    imageUrl: aihubImg,
    githubUrl: "https://github.com/jankrom/AI-Hub",
    websiteUrl: "https://ai-hub-taupe.vercel.app/",
  },
  {
    title: "Active Apply",
    description:
      "Created a Google Chrome extension that provides seemless tracking and storage of job application details, saving users an average of 35 seconds per job application.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "Prisma"],
    imageUrl: activeapplyImg,
    githubUrl: "https://github.com/jankrom/Active-Apply",
    websiteUrl: "https://active-apply.vercel.app/",
  },
  {
    title: "RoamTogether",
    description: `Made a user-centric travel planning website with group itinerary coordination and integrated an
      interactive review system with the Google Maps API for personalized recommendations.`,
    tags: ["Django", "React", "Python", "MySql", "Google Maps API"],
    imageUrl: roamtogetherImg,
    githubUrl: "",
    websiteUrl: "",
  },
  {
    title: "Cloud Computing",
    description: `Architected a Kubernetes cluster to host a website with multiple microservices running in Docker containers with a
    CI/CD pipeline that automatically tests and deploys on Azure and GCP.`,
    tags: ["Kubernetes", "Docker", "Azure", "GCP", "CI/CD"],
    imageUrl: kubernetes,
    githubUrl: "",
    websiteUrl: "",
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Python",
  "Django",
  "C",
  "C#",
  "SQL",
  "Java",
  "Scala",
  "x86-64",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Jira",
  "Kafka",
  "Samza",
  "Supabase",
  "TenserFlow",
  "PyTorch",
  "Scikit-learn",
  "LangChain",
] as const
