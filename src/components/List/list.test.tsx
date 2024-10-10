import { render, screen } from '@testing-library/react';
import List from './list.component';

test('renders the List component', () => {
  render(<List/>);
  const listItemElement = screen.getByText(/PUN-TASTIC/i);
  expect(listItemElement).toBeInTheDocument();
});

test('should order list items by nuber of likes', () => {});
