"use client";
import me from "@/assets/IMG_5962.jpg";
import { H1 } from "./components/H1";
import { H2 } from "./components/H2";
import { Bot } from "lucide-react";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import ProjectCard from "./components/ProjectCard";
import ProjectTag from "./components/ProjectTag";
import { motion, useInView } from "framer-motion";

export default function Home() {

  const projectsData = [
   
    {
      id: 2,
      title: "전문 문서 번역 영문화",
      subtitle:"(LLM Engineering)",
      description: "국가건설기준 용어와 원본 문서의 디자인, 포맷팅을 유지하여 영문으로 번역하는 프로젝트 파이프라인 구축 및 R&D 연구 담당 진행 중",
      image: "/images/projects/2.png",
      tag: ["All", "LLM"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "RAG Chat Bot",
      subtitle:"(LLM Engineering)",

      description: "Retrieval Augmented Generation Chatbot를 구현 하여, 자연어 생성과 검색을 통합하여 사용자에게 정확하고 유용한 정보를 제공하는 프로젝트 RAG Research and Engineering 전담 구현",
      image: "/images/projects/3.png",
      tag: ["All", "LLM"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Tivv",
      subtitle:"(FullStack SSR)",

      description: "사용자가 입력한 프롬프트에 따라서 이미지를 자동으로 생성하거나 특정 이미지를 여러 스타일로 자유롭게 편집하는 생성형AI 플랫폼",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "NexLook",
      subtitle:"(FullStack)",

      description: "맥락정보 기반 CCTV로, 실시간 사건을 포착하여 분석하고, 맥락을 파악하여 범죄 예방에 기여하는 차세대 인공지능 CCTV",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    
  
  ];

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
<section className="space-y-20 pt-[10rem] h-full px-[40px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')", backgroundSize: "90%" }}>
    <section className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
    
        <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-8 text-center place-self-center  sm:text-left justify-center"
        >
            <h1 className=" font-extrabold  text-[40px] lg:leading-loose">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            안녕하세요!
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                '권구민입니다👋',
                1000,
                'Want be',
                1000,
                'LLM Enginner',
                1000,
                'All Runder',
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>AI 구민에게 무엇이든 물어보세요!</H2>
        <p>
  AI 구민을 활성화하려면 상단 표시줄에 있는<Bot className="inline pb-1" />
  아이콘을 클릭하세요.
</p>
<p>
  저에 대한 자세한 이력서 | 포트폴리오를 확인하고 싶다면?
  <a
    href="https://o3oninemean.notion.site/baeafb8b2d1f49dea525dab32db51b08"
    className="text-primary underline"
    target='_blank'
  >
    여기를 클릭하여 이동하세요!
  </a>
</p>
</section>

    <div className="flex flex-row justify-center items-center gap-2 pt-6 pb-4">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="LLM" isSelected={tag === "LLM"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        </div>
    <section className=" grid grid-cols-1 items-center gap-6 sm:grid-cols-1 pb-[10rem]">
      
        <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
            <ProjectCard
  key={project.id}
  title={`${project.title} - CN.AI`}
  subtitle={project.subtitle}
  description={project.description}
  imgUrl={project.image}
  previewUrl={project.previewUrl}
/>
            </motion.li>
          ))}
        </ul>
      </section>
          
    </section>
    </>
  );
}

