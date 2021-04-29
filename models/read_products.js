import {product} from '../models/product_model.js';
export const read_products = async () => {
    let query = {};
    const list_products = await product.find(query, (err) => {
        if(err) throw new Error(`Error: ${err}`);   
    }).lean();
    return list_products;
};