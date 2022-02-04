
    UPDATE products
    SET product_name = $1, description = $2, price = $3, in_stock = $4  
    WHERE product_id = $5;
