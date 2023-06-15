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
      <div>
        <p id="sample" style={{ userSelect: "none", maxWidth: "400px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames. Ultrices neque ornare aenean euismod elementum nisi quis.
          Euismod elementum nisi quis eleifend quam adipiscing. Est ante in nibh
          mauris cursus. Morbi tristique senectus et netus et malesuada fames ac
          turpis. Vitae purus faucibus ornare suspendisse. In nisl nisi
          scelerisque eu ultrices vitae auctor eu. Purus viverra accumsan in
          nisl nisi scelerisque eu ultrices vitae. Ultrices gravida dictum fusce
          ut. At quis risus sed vulputate odio. Nisl tincidunt eget nullam non.
          Malesuada fames ac turpis egestas sed tempus.
        </p>
      </div>
    </>
  ),
};

export const Vertical: Story = {
  args: {},
  render: () => (
    <>
      <ReadingPanel
        targetId="sample"
        settings={{ direction: "vertical" }}
      ></ReadingPanel>
      <div>
        <p id="sample" style={{ userSelect: "none", maxWidth: "400px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames. Ultrices neque ornare aenean euismod elementum nisi quis.
          Euismod elementum nisi quis eleifend quam adipiscing. Est ante in nibh
          mauris cursus. Morbi tristique senectus et netus et malesuada fames ac
          turpis. Vitae purus faucibus ornare suspendisse. In nisl nisi
          scelerisque eu ultrices vitae auctor eu. Purus viverra accumsan in
          nisl nisi scelerisque eu ultrices vitae. Ultrices gravida dictum fusce
          ut. At quis risus sed vulputate odio. Nisl tincidunt eget nullam non.
          Malesuada fames ac turpis egestas sed tempus.
        </p>
      </div>
    </>
  ),
};
