import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Clickable, { ClickableProps } from '.';

export default {
  component: Clickable,
} as ComponentMeta<typeof Clickable>;

const Template: ComponentStory<typeof Clickable> = function (args: ClickableProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Clickable {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: (<p>Clickable</p>),
};
