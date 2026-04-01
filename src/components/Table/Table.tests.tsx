import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('Table visible', () => {
  render(<Table headers={['A']} data={[['B']]} />);
  expect(screen.getByText('A')).toBeVisible();
});
test('Table cell visible', () => {
  render(<Table headers={['A']} data={[['B']]} />);
  expect(screen.getByText('B')).toBeVisible();
});

export {};
