import { render, screen } from "@testing-library/react";
import CarNew from "../pages/CarNew";
import { BrowserRouter } from "react-router-dom";

describe("<CarNew />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CarNew />
      </BrowserRouter>,
    );

    screen.logTestingPlaygroundURL();

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
