import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Note, { NoteProps } from '.';

export default {
  component: Note,
} as ComponentMeta<typeof Note>;

const Template: ComponentStory<typeof Note> = function (args: NoteProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Note {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  children: 'Note',
};
