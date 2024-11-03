import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test("Front page loads with expected text", () => {
  render(<App/>);
  const text1 = screen.getByText('Welcome to Riddle CI');
  const text2 = screen.getByText('Why did the circle bring a friend to the party?');

  // Check front page loads with no issues
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

test('New text displays after button click', () => {
  render(<App/>);
  const button = screen.getByText('Why did the circle bring a friend to the party?');
  fireEvent.click(button);

  // Check if the new text appears
  const newText = screen.getByText('To stay well-rounded!');
  expect(newText).toBeInTheDocument();
});
