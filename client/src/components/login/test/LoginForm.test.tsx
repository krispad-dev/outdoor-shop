import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";


describe('login Component', () => {

    it('should render', () => {
        render(<LoginForm/>)
    })

}) 