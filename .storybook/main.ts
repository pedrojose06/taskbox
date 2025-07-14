import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-a11y", 
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-actions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
