import React from "react";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiAngularjsLine } from "react-icons/ri";
import fanveave from "@/public/fanweave/1.png";
import alchemist from "@/public/alchemist/1.png";
import audit from "@/public/audit/1.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Amoxt",
    location: "Lahore,Pakistan",
    description:
      "As a Junior Developer at AMOXT in 2017, I was responsible for developing an API-based educational platform that enabled users to participate in live lectures from anywhere in the world. This project provided a great opportunity to work on both the back-end and front-end of the application, utilizing PHP, CodeIgniter, MySQL, and AWS.",
    icon: React.createElement(FaPhp),
    date: "2017",
  },
  {
    title: "IT-Boost",
    location: "Lahore,Pakistan",
    description:
      "As a MEAN Stack Developer at IT-Boost from 2018 to 2020, I contributed to the development of a cloud-based unified platform designed for IT service providers, offering documentation, password management, customer feedback, and business intelligence features. My role involved full stack development using Angular.js, Node.js, Express.js, and MongoDB, where I collaborated with cross-functional teams to deliver scalable and efficient solutions.",
    icon: React.createElement(RiAngularjsLine),
    date: "2018 - 2020",
  },
  {
    title: "Conovo",
    location: "UK",
    description:
      "As a Senior Software Engineer at Conovo Technologies from 2020 to the present, I have been responsible for leading the development of several key projects, including Alchemist, a real estate platform, and other high-impact applications. In this role, I have managed a team of five developers, overseeing sprint planning, task allocation, and code reviews, ensuring the timely and successful delivery of projects.",
    icon: React.createElement(IoLogoJavascript),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Alchemist",
    description:
      "As the Tech Lead on this project, I led a team of five developers, overseeing sprint management, conducting code reviews, and coordinating all technical aspects of the project.",
    tags: ["React", "Next", "MongoDB", "Node", "Nest", "GraphQl"],
    imageUrl: alchemist,
  },
  {
    title: "Fanweave",
    description:
      "Worked as Tech Lead. Beside development in this project.I designed application flow, data base and architechture of the application",
    tags: ["React", "Node", "Redux", "Agenda", "MongoDB"],
    imageUrl: fanveave,
  },
  {
    title: "Audit-App",
    description:
      "Developed this Project as MERN Stach Developer.Handle client communication, Sprint panning and other managment aspects as well",
    tags: ["React", "Node", "Express", "MonogoDB"],
    imageUrl: audit,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
] as const;
