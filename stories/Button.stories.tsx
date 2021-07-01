import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: {
    sizeAsNumber: 1,
    sizeAsNumberUsedAsString: "1",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  let { args: storeArgs, argTypes } = __STORYBOOK_STORY_STORE__._stories[
    __STORYBOOK_STORY_STORE__._selection.storyId
  ];
  console.log(JSON.stringify({ storeArgs, argTypes }, null, 2));

  return <Button {...args} />;
};

export const Primary = Template.bind({});

export const Dummy = Template.bind({});
