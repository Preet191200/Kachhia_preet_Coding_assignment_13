import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    height: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero',
    height: '400px',
  },
};
