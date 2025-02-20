import type { Meta, StoryObj } from "@storybook/react";
import { CategoryNavBar } from "./TagLinkContianer";


const meta: Meta<typeof CategoryNavBar> = {
  title: "features/CategoryNavBar",
  component: CategoryNavBar,
};

export default meta;
type Story = StoryObj<typeof CategoryNavBar>;

export const Default: Story = {
  args: {},
};
