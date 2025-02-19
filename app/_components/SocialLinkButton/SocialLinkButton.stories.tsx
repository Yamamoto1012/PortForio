import type { Meta, StoryObj } from "@storybook/react";
import GithubIcon from "../../../public/SocialLinkIcon/Github.svg";
import { SocialLinkButton } from "./SocialLinkButton";

const meta: Meta<typeof SocialLinkButton> = {
  title: "components/SocialLinkButton",
  component: SocialLinkButton,
};

export default meta;
type Story = StoryObj<typeof SocialLinkButton>;

export const Default: Story = {
  args: {
    href: "https://education.github.com/discount_requests/application",
    image: GithubIcon,
  },
};

export const Small: Story = {
  args: {
    href: "https://education.github.com/discount_requests/application",
    image: GithubIcon,
    size: "small",
  },
};
