import { render, screen } from "@testing-library/react";
import CarEdit from "../pages/CarEdit";
import { BrowserRouter } from "react-router-dom";

describe("<CarEdit />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CarEdit />
      </BrowserRouter>,
    );

    const inputs = [
      {
        type: "textbox",
        names: [
          /model/i,
          /image/i,
          /description/i,
          /street/i,
          /city/i,
          /zip/i,
        ],
      },
      {
        type: "spinbutton",
        names: [/year/i, /mileage/i, /price/i],
      },
      {
        type: "combobox",
        names: [/state/i, /make/i],
      },
    ];

    inputs.forEach(({ type, names }) => {
      names.forEach((name) => {
        const input = screen.getByRole(type, {
          name,
        });
        expect(input).toBeInTheDocument();
      });
    });
  });
});
