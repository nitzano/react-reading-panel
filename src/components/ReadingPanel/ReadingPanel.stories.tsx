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
        <div className="sample">Lorem ipsum dolor sit amet. Id consequuntur labore sed iste omnis aut ratione internos aut ducimus voluptas. Nam quia adipisci et quam laborum sed deserunt aliquid qui consequatur quia et autem inventore ut impedit galisum et cupiditate libero. Qui galisum Quis ea laborum ullam est sequi cumque in molestiae eius. Est omnis voluptates a alias aliquid in similique unde a cumque similique non debitis amet aut ullam autem et repellat quae.</div>
      </>
    );
  },
};

export const Primary: Story = {
  ...ReadingPanelTemplate,
};

export const StartOpen: Story = {
  ...ReadingPanelTemplate,
  args: {
    settings: {
      startOpen: true,
    },
  },
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
