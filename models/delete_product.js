import {product} from '../models/product_model.js';
export const delete_product = async (id,res) => {
    await product.deleteOne({"code":id});
    res.status(200).json({msg:"ok"});
};
