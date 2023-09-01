import type { Meta, StoryObj } from '@storybook/react';

import { Main } from '../Main';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Button',
  component: Main,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof Main>;

export const DefaultButton = {
  args: {
    children: <Button>Default</Button>,
  },
} satisfies Story;

export const SaveButton = {
  args: {
    children: (
      <Button variant="bg-indigo-500" textColor="text-white">
        Save Changes
      </Button>
    ),
  },
} satisfies Story;

export const DeleteButton = {
  args: {
    children: (
      <Button variant="bg-red-700" textColor="text-white">
        Delete
      </Button>
    ),
  },
} satisfies Story;
