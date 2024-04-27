import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Bot} from "lucide-react";
import AIChatBox from "./AIChatBox";


interface ProjectCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  description: string;
  previewUrl: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title,subtitle, description,  previewUrl }) => {
  const displayTitle = title.endsWith(" - CN.AI") ? title.slice(0, -7) : title;

  const [chatBoxOpen, setChatBoxOpen] = useState(false);



  return (
    <div>
      <div
        className="h-52  md:h-72 rounded-t-xl  "
      >
        <div className=" items-center justify-center flex-col w-full h-full bg-[#181818] flex bg-opacity-10 transition-all ">
   
          <div className=" text-center">
            AI 구민에게<br />
            {displayTitle}
            프로젝트를<br />
            물어보세요!
          </div>
        </div>
      </div>
      <div className=" rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
      <h5 className="text-xl font-semibold mb-2">{displayTitle}</h5> {/* Use the modified title here */}
        <h5 className="text-xl font-semibold mb-2">{subtitle}</h5>
        <p className="opacity-15 ">{description}</p>
      </div>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </div>
  );
};

export default ProjectCard;
