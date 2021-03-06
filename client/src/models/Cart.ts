export interface Cart {
    in_stock: number;
    product_id: number;
    user_id: number;
    cart_item_id: number;
    product_name: string;
    price: number;
    item_count: number;
    image: string;
    description: string;
}