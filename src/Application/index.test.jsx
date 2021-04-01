import { render, screen } from "@testing-library/react";
import Application from "./";

test("renders learn react link", () => {
  render(<Application />);
  const linkElement = screen.getByText(/Please input/i);
  expect(linkElement).toBeInTheDocument();
});
