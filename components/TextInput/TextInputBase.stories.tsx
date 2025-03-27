import { Meta, StoryObj } from "@storybook/react";
import TextInputBase from "./TextInputBase";

const meta: Meta = {
  component: TextInputBase,
  title: "TextInput",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: {
    placeholder: "Enter your email",
  },
  decorators: (Story) => (
    <div className="flex items-center justify-center">
      <Story />
    </div>
  ),
};

export const Accent: Story = {
  name: "Accent",
  args: {
    placeholder: "Enter your email",
    color: "accent",
  },
  decorators: (Story) => (
    <div className="flex items-center justify-center bg-teal-400 p-10">
      <Story />
    </div>
  ),
};

export default meta;
