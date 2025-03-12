import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(ts|tsx)",
    "../components/**/**/*.stories.@(ts|tsx)",
    "../components/**/**/**/*.stories.@(ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {},
  },
  "staticDirs": [
    "../public",
  ],
};
export default config;
