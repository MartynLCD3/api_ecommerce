import {product} from '../models/product_model.js';
export const read_products = async () => {
    const list_products = await product.find({}, (err) => {
        if(err) throw new Error(`Error: ${err}`);
    }).lean();
    return list_products;
};
