import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  component: Button,
  title: "Base Button",
  tags: ["autodocs"],
  args: {
    title: "Button",
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Primary",
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    title: "Secondary Button",
    variant: "accent",
  },
};

export default meta;
