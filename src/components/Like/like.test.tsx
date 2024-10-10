import { fireEvent, render, screen } from '@testing-library/react';
import Like from './like.component';

test('renders like component', () => {
  render(<Like />);
  const likeButtonElement = screen.getByText("Like");
  expect(likeButtonElement).toBeInTheDocument();
});

test('changes button text to liked after click', () => {
  render(<Like />);
  const likeButtonElement = screen.getByText("Like");
  fireEvent.click(likeButtonElement);
  const likedButtonElement = screen.getByText("Liked");
  expect(likedButtonElement).toBeInTheDocument();
});
