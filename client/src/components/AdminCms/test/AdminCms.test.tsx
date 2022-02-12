import { render, screen } from '@testing-library/react';
import AdminCms from '../AdminCms';

describe('AdminCms Component', () => {
	it('should render', () => {
		render(<AdminCms />);
	});
	it('should have seven (7) typeable input fields', () => {
		render(<AdminCms />);

		const image = screen.getByLabelText(/image/i);
		const description = screen.getByLabelText(/description/i);
		const in_stock = screen.getByLabelText(/in_stock/i);
		const price = screen.getByLabelText(/price/i);
		const product_name = screen.getByLabelText(/product_name/i);
		const category = screen.getByLabelText(/category/i);

	});
});
