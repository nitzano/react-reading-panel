// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { ReadingPanel } from "./ReadingPanel";

const meta: Meta<typeof ReadingPanel> = {
  component: ReadingPanel,
};

export default meta;
type Story = StoryObj<typeof ReadingPanel>;

export const Primary: Story = {
  args: {},
  render: () => (
    <>
      <ReadingPanel targetId="sample"></ReadingPanel>
      <div id="sample">Sample Text</div>
    </>
  ),
};
