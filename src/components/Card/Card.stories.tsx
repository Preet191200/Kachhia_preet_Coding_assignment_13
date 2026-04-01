import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'Card description',
    backgroundColor: '#f0f0f0',
  },
};
