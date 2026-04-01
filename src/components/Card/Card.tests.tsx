import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card is visible', () => {
  render(<Card title="Test" description="Desc" />);
  expect(screen.getByText('Test')).toBeVisible();
});
test('Card background changes', () => {
  render(<Card title="Test" description="Desc" backgroundColor="red" />);
  expect(screen.getByText('Test').parentElement).toHaveStyle(
    'background-color: red'
  );
});

export {};
