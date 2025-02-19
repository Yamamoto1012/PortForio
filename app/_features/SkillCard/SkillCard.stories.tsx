import type { Meta, StoryObj } from "@storybook/react";
import { SkillCard } from "./SkillCard";
import HTML5 from "../../../public/ProgrammingIcon/HTML5.svg";

const meta: Meta<typeof SkillCard> = {
  title: "features/SkillCard",
  component: SkillCard,
};

export default meta;
type Story = StoryObj<typeof SkillCard>;

export const Default: Story = {
  args: {
    text: "HTML",
    image: HTML5,
  },
};
