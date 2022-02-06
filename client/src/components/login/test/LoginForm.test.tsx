import { getAllByPlaceholderText, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import LoginForm from "../LoginForm";

import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient();

describe('login Component', () => {


    function useCustomHook() {
        return useQuery('customHook', () => 'Hello');
      }

      const ReactQueryResponseMock = () => (
        <QueryClientProvider client={queryClient}>
          <LoginForm />
        </QueryClientProvider>
      );



    it('should render component with logo', () => {
        render(<ReactQueryResponseMock/>)
    })

    it('should have two input fields ("epost, "lösenord")', () => {
        render(<ReactQueryResponseMock/>)

        const email = screen.getByLabelText('Epost')
        const password = screen.getByLabelText('Lösenord')

        expect(email).toBeInTheDocument()
        expect(password).toBeInTheDocument()
    })

    it('should have a button ("LOGGA IN")', () => {
        render(<ReactQueryResponseMock/>)

        const button = screen.getByRole('button', { name: /LOGGA IN/ })

        expect(button).toBeInTheDocument()
    })

/*     it('should give informative error message when incorrect password or email is passed', () => {
        render(<ReactQueryResponseMock/>)
        

        const epostField = screen.getByPlaceholderText('Epost')
        userEvent.type(epostField, '')

        const errMessage = screen.getByText(/error/i)

        expect(errMessage).toBeInTheDocument()

    }) */
    
    it('should give informative error message when no input is passed', () => {
        render(<ReactQueryResponseMock/>)
        
        const button = screen.getByRole('button', { name: /LOGGA IN/ })
        userEvent.click(button)
        const errMessage = screen.getByText('Fel - fält kan inte vara tomt')

        expect(errMessage).toBeInTheDocument()

    })


}) 