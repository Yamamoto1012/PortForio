import type { Meta, StoryObj } from "@storybook/react";
import { SkillCardList } from "./SkillCardList";

const meta: Meta<typeof SkillCardList> = {
  title: "features/SkillCardList",
  component: SkillCardList,
};

export default meta;
type Story = StoryObj<typeof SkillCardList>;

export const Default: Story = {
  args: {},
};
