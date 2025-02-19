import { SKILLSETS } from "./constants";
import { SkillCard } from "./SkillCard/SkillCard";

export const SkillCardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {SKILLSETS.map((skill, index) => (
        <SkillCard
          key={index}
          text={skill.text}
          image={skill.image}
          level={skill.level}
        />
      ))}
    </div>
  );
};
