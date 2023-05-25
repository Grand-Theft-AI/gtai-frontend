import { render, screen } from "@testing-library/react";
import CarShow from "../pages/CarShow";
import { MemoryRouter } from "react-router-dom";
import { mockCars } from "../mockCars";
import users from "../mockUsers";

describe("<CarShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/carshow/1"]}>
        <CarShow
          cars={mockCars}
          current_user={users[0]}
        />
      </MemoryRouter>,
    );
    const indexLink = screen.getByText(/Your car/i);
    expect(indexLink).toBeInTheDocument();
  });
});
