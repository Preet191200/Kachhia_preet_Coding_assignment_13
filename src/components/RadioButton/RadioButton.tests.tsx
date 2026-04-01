import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('RadioButton is visible', () => {
  render(<RadioButton label="Test" value="1" />);
  expect(screen.getByLabelText('Test')).toBeVisible();
});
test('RadioButton disabled', () => {
  render(<RadioButton label="Test" value="1" disabled />);
  expect(screen.getByLabelText('Test')).toBeDisabled();
});

export {};
