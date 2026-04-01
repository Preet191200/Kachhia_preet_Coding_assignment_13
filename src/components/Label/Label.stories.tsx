import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Default Label',
    color: 'black',
  },
};

export const RedLabel: Story = {
  args: {
    text: 'Red Label',
    color: 'red',
  },
};

export const BlueLabel: Story = {
  args: {
    text: 'Blue Label',
    color: 'blue',
  },
};
