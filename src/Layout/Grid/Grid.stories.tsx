import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid, { GridProps } from '.';

export default {
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = function (args: GridProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Grid {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: (<p>Grid</p>),
};
