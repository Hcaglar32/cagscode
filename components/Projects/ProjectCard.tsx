import { Code, CodeSquareIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({
  description,
  gitUrl,
  image,
  previewUrl,
  title,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-56 md:h-64 rounded-lg relative group"
        style={{ background: `url(${image})`, backgroundSize: "cover" , backgroundRepeat:"no-repeat", backgroundPosition:"Center"}}
      >
        <div
          className="items-center justify-center absolute top-0 left-0 w-full h-full
      bg-mycolor-400 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75
      transition-all duration-700
      "
        >
          <Link
          target="_blank"
            href={gitUrl}
            className="border-2 relative rounded-full h-14 w-14 border-white/50"
          >
            <Code
              className="h-10 w-10 text-white/50 absolute cursor-pointer
         transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  group-hover:text-white/80 "
            />
          </Link>

          <Link
            href={previewUrl}
            className="border-2 relative rounded-full h-14 w-14 border-white/50"
            target="_blank"
          >
            <EyeIcon
              className="h-10 w-10 text-white/50 absolute cursor-pointer
         transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  group-hover:text-white/80 "
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-2xl h-fit md:h-56 xl:h-40 overflow-scroll mt-3 px-4 py-2 bg-mycolor-300">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="font-light text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
