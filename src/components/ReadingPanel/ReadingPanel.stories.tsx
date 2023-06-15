// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { ReadingPanel } from "./ReadingPanel";

const meta: Meta<typeof ReadingPanel> = {
  component: ReadingPanel,
};

export default meta;

type Story = StoryObj<typeof ReadingPanel>;

const ReadingPanelTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <ReadingPanel {...args} targetClass="sample" />
        <div className="sample">I am sample text</div>
      </>
    );
  },
};

export const Primary: Story = {
  ...ReadingPanelTemplate,
};

export const Vertical: Story = {
  ...ReadingPanelTemplate,
  args: {
    settings: {
      direction: "vertical",
    },
  },
};

export const Partial: Story = {
  ...ReadingPanelTemplate,
  args: {
    settings: {
      startOpen: true,
      showButtons: ["increase_font_size", "change_colors"],
    },
  },
};
