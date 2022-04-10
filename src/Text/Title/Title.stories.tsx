import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title, { TitleProps } from '.';

export default {
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = function (args: TitleProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Title {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: 'Title',
};
