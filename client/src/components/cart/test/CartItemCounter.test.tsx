import { render, screen } from '@testing-library/react';
import CartItemCounter from '../CartItemCounter';

import useSetCartItemAmount from '../../../modules/cart/useSetCartItemCount'
jest.mock('../../../modules/cart/useSetCartItemCount')
const useSetCartItemsAmountMock = useSetCartItemAmount as jest.Mock<any>


import useDeleteCart from '../../../modules/cart/useDeleteCart'
import userEvent from '@testing-library/user-event';
jest.mock('../../../modules/cart/useDeleteCart')
const useDeleteCartMock = useDeleteCart as jest.Mock<any>


describe('CartSetItemQuantity Component', () => {

	const mockMutateAmount = jest.fn()
	const mockMutateDelete = jest.fn()

	useSetCartItemsAmountMock.mockImplementation(() => ({ 
		mutate: mockMutateAmount,
	}));

	useDeleteCartMock.mockImplementation(() => ({ 
		mutate: mockMutateDelete,
	}));

	
	it('should render', () => {
		render(<CartItemCounter cart_item_id={1} item_count={20} />);
	});


	it('should have two clickable buttons (increment and decrement) Should call increment on "upp" and decrement on "down"', () => {
		render(<CartItemCounter cart_item_id={1} item_count={20} />);

		const button = screen.getAllByRole('button')
		userEvent.click(button[0])
 		userEvent.click(button[1]) 

		expect(mockMutateAmount).toHaveBeenCalledTimes(2)
		expect(mockMutateAmount).toHaveBeenCalledWith({id: '1', increment: true})
		expect(mockMutateAmount).toHaveBeenCalledWith({id: '1', increment: false})

	})

	it('should call delete instead of decrement function when cart item amount is 1 or less)', () => {
		render(<CartItemCounter cart_item_id={1} item_count={1} />);

		const button = screen.getAllByRole('button')
		userEvent.click(button[0])
		expect(mockMutateDelete).toHaveBeenCalledTimes(1)
		expect(mockMutateDelete).toHaveBeenCalledWith({ id: '1' })

	})

	it('should render correct item amount (20) ', () => {
		render(<CartItemCounter cart_item_id={1} item_count={20} />);

		const itemCount = screen.getByText(/20/i)

		expect(itemCount).toBeInTheDocument()
	})
});



