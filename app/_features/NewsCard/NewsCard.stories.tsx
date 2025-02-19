import type { Meta, StoryObj } from "@storybook/react";
import { NewsCard } from "./NewsCard";
import NewsImage from "../../../public/News/NewsImage.jpg";

const meta: Meta<typeof NewsCard> = {
  title: "features/NewsCard",
  component: NewsCard,
};

export default meta;
type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {
  args: {
    tag: "部活動",
    date: '2018-04-04',
    title: 'aaaaaaaaaaaa',
    link: "",
    image: NewsImage
  },
};
