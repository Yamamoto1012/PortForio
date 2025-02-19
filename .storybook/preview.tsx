import React from "react";
import type { Preview } from "@storybook/react";
import { Zen_Maru_Gothic } from "next/font/google";
import "../app/globals.css"

const zen_maru_gothic = Zen_Maru_Gothic({
	weight: ["300", "400", "500", "700", "900"],
	subsets: ["latin"],
	display: "swap",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
		(Story) => (
			<div className={[
				"base",
				zen_maru_gothic.className,
				"font-zen-maru-gothic",
			].join(" ")}>
				<Story />
			</div>
		),
	],
};

export default preview;
