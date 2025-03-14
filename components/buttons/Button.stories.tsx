import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  component: Button,
  title: "Base Button",
  args: {
    title: "Button",
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export default meta;
