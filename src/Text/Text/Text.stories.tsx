import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text, { TextProps } from '.';

export default {
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = function (args: TextProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Text {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: 'Text',
};
