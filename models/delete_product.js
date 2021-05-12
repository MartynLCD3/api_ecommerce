import {product} from '../models/product_model.js';
export const delete_product = async (id) => {
    await product.deleteOne({"code":id});
}
