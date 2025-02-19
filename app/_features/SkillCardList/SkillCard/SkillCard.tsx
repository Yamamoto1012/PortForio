import React from "react";
import Image, { StaticImageData } from "next/image";
import { Typography } from "@/app/_components/Typography/Typography";
import Star from "@/public/ProgrammingIcon/star.svg";

type SkillCardProps = {
  text: string;
  image: StaticImageData;
  imageAlt?: string;
  level: number;
};
export const SkillCard: React.FC<SkillCardProps> = ({
  text,
  image,
  imageAlt = "",
  level,
}) => {
  const cardStyle =
    "w-[300px] h-[300px] flex flex-col items-center justify-center gap-2 rounded-[15px] shadow-md hover:shadow-lg transition-shadow duration-300";
  const imageContainerStyle = "w-[100px] h-[100px] relative";
  const TextContainerStyle = "flex text-center items-center justify-center";
  const starContainerStyle = "flex gap-1 mt-2";
  const starStyle = (isActive: boolean) => `
  w-5 h-5
  ${
    isActive
      ? "brightness-0 saturate-100 invert-[.25] sepia-[.99] saturate-[7483%] hue-rotate-[37deg] brightness-[1.02] contrast-[1.06]"
      : "brightness-0 opacity-30"
  }
`;

  return (
    <>
      <div className={cardStyle}>
        <div className={imageContainerStyle}>
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className={TextContainerStyle}>
            <Typography
              text={text}
              bold="bold"
              variant="profile"
              color="black"
            />
          </div>
          <div className={starContainerStyle}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={Star}
                alt="star"
                className={starStyle(index < level)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
