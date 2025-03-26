import { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "./NavigationBar";

const options = [
  {
    title: "Solutions",
  },
  {
    title: "Who We Are",
    href: "#",
  },
  {
    title: "Our Work",
    href: "#",
  },
];

const meta: Meta = {
  component: NavigationBar,
  title: "Navigation Bar",
  tags: ["autodocs"],
  args: {
    options,
    currentOption: null,
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Main",
};

export default meta;
