import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header, { HeaderProps } from '.';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = function (args: HeaderProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Header {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: 'Header',
};
