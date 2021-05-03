import {delete_product} from '../models/delete_product.js';
export const del_product = (req,res) => {
    let {id} = req.params;
    delete_product(id,res);
};
