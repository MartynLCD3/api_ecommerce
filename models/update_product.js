import {product} from '../models/product_model.js';
export const update_product = async (id,prod_updated,res) => {
        await product.updateOne({"codigo":id},{$set:prod_updated});
        res.status(200).json({msg:"updated product"});
}