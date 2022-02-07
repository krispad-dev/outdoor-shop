import { render, screen } from '@testing-library/react';
import  ProductListHeader  from '../ProductListHeader';

const mockData = ['alla', 'vinter', 'vandra', 'klättra', 'verktyg', 'bära', 'sova']

describe('ProductListHeader component', () => {
	it('should render', () => {
		render(<ProductListHeader buttons={mockData} />);
	});

	it('should render "ALLA / VINTER / VANDRA / KLÄTTRA / VRKTYG / BÄRA / SOVA " categories', () => {
		render(<ProductListHeader buttons={mockData} />);

        const buttons = screen.getAllByRole('button') 

        expect(buttons).toHaveLength(7)

        expect(buttons[0]).toHaveTextContent(/alla/i)
        expect(buttons[1]).toHaveTextContent(/vinter/i)
        expect(buttons[2]).toHaveTextContent(/vandra/i)
        expect(buttons[3]).toHaveTextContent(/klättra/i)
        expect(buttons[4]).toHaveTextContent(/verktyg/i)
        expect(buttons[5]).toHaveTextContent(/bära/i)
        expect(buttons[6]).toHaveTextContent(/sova/i)
   
	});
});
