import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function (args: ButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: (<p>Button</p>),
};
