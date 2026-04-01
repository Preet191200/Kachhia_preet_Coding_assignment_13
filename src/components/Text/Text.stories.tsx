import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './index';
import type { TextProps } from './Text.types';

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: { value: 'Hello World', color: 'black', fontSize: '16px' },
};
