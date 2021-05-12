import {product} from '../models/product_model.js';
export const update_product = async (id,prod_updated) => {
        await product.updateOne({"code":id},{$set:prod_updated});
}
