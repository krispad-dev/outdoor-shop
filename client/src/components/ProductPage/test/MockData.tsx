import { Product } from '../../../models/Product'
import { Cart } from '../../../models/Cart';

export const mockData: Product = {
	description: 'test description',
	product_name: 'test name',
	category: 'test category',
	in_stock: 20,
	image: 'test image',
	price: 55,
	product_id: 1,
}; 

export const mockCart: Cart = {
    in_stock: 10,
    product_id: 1,
    user_id: 1,
    cart_item_id: 2,
    product_name: "Big tent",
    price: 1595,
    item_count: 1,
    image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "tent for colder temperatures"
} 