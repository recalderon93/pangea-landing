import type { Meta, StoryObj } from "@storybook/react";
import NavigationItem from "./NavigationItem";

const meta: Meta = {
  component: NavigationItem,
  title: "Navigation Item",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Link",
  args: {
    title: "Navigation Item",
    href: "#",
  },
};

export const Button: Story = {
  name: "Button",
  args: {
    title: "Navigation Item",
    onClick: () => {},
  },
};
export const ButtonActive: Story = {
  name: "Button/Active",
  args: {
    title: "Navigation Item",
    onClick: () => {},
    color: "accent",
  },
  decorators: (Story) => (
    <div className="bg-teal-400 px-20">
      <Story />
    </div>
  ),
};

export default meta;
