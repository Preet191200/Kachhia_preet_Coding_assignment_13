import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: { control: 'object' },
    data: { control: 'object' },
    footer: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Default table with header + data
export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'City'],
    data: [
      ['Alice', '25', 'New York'],
      ['Bob', '30', 'Los Angeles'],
      ['Charlie', '28', 'Chicago'],
    ],
  },
};

// Table with footer row
export const WithFooter: Story = {
  args: {
    headers: ['Name', 'Age', 'City'],
    data: [
      ['Alice', '25', 'New York'],
      ['Bob', '30', 'Los Angeles'],
      ['Charlie', '28', 'Chicago'],
    ],
    footer: ['Total', '3 Users', '-'],
  },
};
