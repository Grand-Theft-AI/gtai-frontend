import {render, screen} from "@testing-library/react"
import CarShow from "../pages/CarShow"
import { BrowserRouter } from "react-router-dom"



describe("<CarShow />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <CarShow />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/Your car/i)
        expect(indexLink).toBeInTheDocument()
    })
})