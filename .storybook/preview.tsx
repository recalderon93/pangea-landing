import React from "react";
import type { Preview } from "@storybook/react";
import "@/app/globals.css";

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
      <div className="m-8 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default preview;
