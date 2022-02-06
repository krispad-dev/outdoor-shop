import { render, screen } from "@testing-library/react";
import Logo from "../Logo";


describe('Logo Component', () => {

    it('should render', () => {
        render(<Logo/>)
    })

    it('should hav text content "outdoor"', () => {
        render(<Logo/>)
        
        const heading = screen.getByRole('heading')
        expect(heading).toHaveTextContent(/outdoor/i)
    })

}) 