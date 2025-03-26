import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta = {
  component: Header,
  title: "Header",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  decorators: (Story) => (
    <div className="h-screen w-screen bg-teal-400">
      <Story />
    </div>
  ),
};

export default meta;
