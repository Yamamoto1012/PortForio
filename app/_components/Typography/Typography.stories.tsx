import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "components/Typography",
  component: Typography,
  args: {
    text: "イーハトーブ"
  }
}

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};

export const HeroText: Story = {
  args: {
    variant: "hero",
    color: "#039393"
  }
}

export const LinkText: Story = {
  args: {
    text: "github",
    href: "https://github.com/",
    color: "red"
  }
}