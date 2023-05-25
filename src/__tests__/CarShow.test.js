import { render, screen } from "@testing-library/react";
import CarShow from "../pages/CarShow";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockCars from "../mockCars";
import { users } from "../mockUsers";

describe("<CarShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/carshow/1"]}>
        <Routes>
          <Route
            path="/carshow/:id"
            element={<CarShow cars={mockCars} current_user={users[0]} />}
          />
        </Routes>
      </MemoryRouter>,
    );
    screen.logTestingPlaygroundURL();
    const indexLink = screen.getByText(/ford/i, { exact: false });
    expect(indexLink).toBeInTheDocument();
  });
});
