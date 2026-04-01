import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: 'Option A', value: 'A', checked: false, disabled: false },
};
export const Disabled: Story = {
  args: { label: 'Option B', value: 'B', checked: false, disabled: true },
};
