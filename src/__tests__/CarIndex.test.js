import { render, screen } from "@testing-library/react";
import CarIndex from "../pages/CarIndex";
import mockCars from "../mockCars";
import { BrowserRouter } from "react-router-dom";
describe("<CarIndex />", () => {
  it("renders without crashing", () => {
   
    render(<BrowserRouter><CarIndex cars={mockCars}/> </BrowserRouter>);
   
    screen.logTestingPlaygroundURL()
    const indexLink = screen.getAllByText(/Car/i);
    expect(indexLink).toBeInTheDocument;
  });
});
