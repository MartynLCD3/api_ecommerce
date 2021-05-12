import {product} from '../models/product_model.js';
export const create_product = (data) => {
    const newProduct = new product(data)
    newProduct.save(err => {
        if(err) throw new Error(`Error: ${err}`);
    });
}
