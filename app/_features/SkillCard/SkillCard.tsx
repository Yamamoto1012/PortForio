import React from "react";
import Image, { StaticImageData } from "next/image";
import { Typography } from "@/app/_components/Typography/Typography";

type SkillCardProps = {
  text: string;
  image: StaticImageData;
  imageAlt?: string;
};
export const SkillCard: React.FC<SkillCardProps> = ({
  text,
  image,
  imageAlt = "",
}) => {
  const cardStyle =
    "w-[300px] h-[300px] flex flex-col items-center justify-center gap-2 rounded-[15px] shadow-md hover:shadow-lg transition-shadow duration-300";
  const imageContainerStyle = "w-[100px] h-[100px] relative";
  return (
    <>
      <div className={cardStyle}>
        <div className={imageContainerStyle}>
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
        <div>
          <Typography text={text} bold="bold" variant="section" color="black" />
        </div>
      </div>
    </>
  );
};
