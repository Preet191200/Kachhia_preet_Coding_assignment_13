import { render, screen } from '@testing-library/react';
import Text from './index';

test('Text is visible', () => {
  render(<Text value="Test" />);
  expect(screen.getByText('Test')).toBeVisible();
});
test('Text color changes', () => {
  render(<Text value="Test" color="red" />);
  expect(screen.getByText('Test')).toHaveStyle('color: red');
});

export {};
