// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { ReadingPanel } from "./ReadingPanel";

const meta: Meta<typeof ReadingPanel> = {
  component: ReadingPanel,
};

export default meta;
type Story = StoryObj<typeof ReadingPanel>;

export const Default: Story = {
  args: {},
  render: () => (
    <>
      <ReadingPanel targetId="sample"></ReadingPanel>
      <div>
        <p id="sample" style={{ userSelect: "none", maxWidth: "400px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames. Ultrices neque ornare aenean euismod elementum nisi quis.
          Euismod elementum nisi quis eleifend quam adipiscing. Est ante in nibh
        </p>
      </div>
    </>
  ),
};

export const Vertical: Story = {
  args: {
    settings: {
      direction: "vertical",
    },
  },
};

export const Partial: Story = {
  args: {
    settings: {
      direction: "horizontal",
      startOpen: true,
      showButtons: ["increase_font_size", "change_colors"],
    },
  },
};
