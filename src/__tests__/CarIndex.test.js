import { render, screen } from "@testing-library/react";
import CarIndex from "../pages/CarIndex";

describe("<CarIndex />", () => {
  it("renders without crashing", () => {
    render(<CarIndex />);

    const indexLink = screen.getAllByText(/Car/i);
    expect(indexLink).toBeInTheDocument;
  });
});
