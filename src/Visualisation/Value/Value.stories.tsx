import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Value, { ValueProps } from '.';

export default {
  component: Value,
} as ComponentMeta<typeof Value>;

const Template: ComponentStory<typeof Value> = function (args: ValueProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Value {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: 'Value',
};
